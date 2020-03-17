import arrow
import logging

from dateutil.parser import parse


FIELD_OF_STUDY_CHOICES = [
    (0, 'Gjest'),
    (1, 'Bachelor i Informatikk'),
    # master degrees take up the interval [10,30]
    (10, 'Programvaresystemer'),
    (11, 'Databaser og søk'),
    (12, 'Algoritmer og datamaskiner'),
    (13, 'Spillteknologi'),
    (14, 'Kunstig intelligens'),
    (15, 'Helseinformatikk'),
    (16, 'Interaksjonsdesign, spill- og læringsteknologi'),
    (30, 'Annen mastergrad'),
    (40, 'Sosialt medlem'),
    (80, 'PhD'),
    (90, 'International'),
    (100, 'Annet Onlinemedlem'),
]

GROUP_IDENTIFIERS = {
    # Studies
    # The study programs are identified by the descriptor: `fc:fs:prg`
    'BACHELOR': 'fc:fs:fs:prg:ntnu.no:BIT',
    'MASTER': 'fc:fs:fs:prg:ntnu.no:MIT',
    'IDI': 'fc:org:ntnu.no:unit:631000',

    # fc:fs:fs:str:ntnu.no:MIT-PVS- programvaresys
    # fc:fs:fs:str:ntnu.no:MIT-KI - kunstig int

    # Courses used for verification

    # 1st grade
    'ITGK': 'fc:fs:fs:emne:ntnu.no:TDT4110:1',
    'WEBTEK': 'fc:fs:fs:emne:ntnu.no:IT2805:1',

    # 2nd grade
    'PROSJEKT1': 'fc:fs:fs:emne:ntnu.no:IT1901:1',
    'ALGDAT': 'fc:fs:fs:emne:ntnu.no:TDT4120:1',

    # 3rd grade
    'PROSJEKT2': 'fc:fs:fs:emne:ntnu.no:IT2901:1',

    # Master project courses
    'MASTER_COURSE': 'fc:fs:fs:emne:ntnu.no:IT3901',
    'MASTER_COURSE_PVS': 'fc:fs:fs:emne:ntnu.no:IT3901:1',
    'MASTER_COURSE_DB': 'fc:fs:fs:emne:ntnu.no:IT3902:1',
    'MASTER_COURSE_AI': 'fc:fs:fs:emne:ntnu.no:IT3903:1',
    'MASTER_COURSE_UX': 'fc:fs:fs:emne:ntnu.no:IT3906:1',
    'MASTER_COURSE_OTHER': 'fc:fs:fs:emne:ntnu.no:IT3950:1',
}


def get_courses_for_key(d, key):
    return [course for k, course in d.items() if key in k]


MASTER_IDS = get_courses_for_key(GROUP_IDENTIFIERS, 'MASTER_COURSE_')

logger = logging.getLogger(__name__)


def get_study(groups):
    study_group = {}
    for group in groups:
        if group.get('id') == GROUP_IDENTIFIERS['BACHELOR']:
            logger.debug('User found to be bachelor student')
            study_group = group
            break

        elif group.get('id') == GROUP_IDENTIFIERS['MASTER']:
            logger.debug('User found to be master student')
            study_group = group
            break

    return study_group


def get_group_id(group):
    return group.get('id', '')


def get_group_name(group):
    return group.get('displayName', '')


def get_course_finish_date(course):
    if 'membership' in course:
        if 'notAfter' in course['membership']:
            # User has finished this course
            raw_datetime = course.get('membership', {}).get('notAfter', '')
            try:
                # Date format: 2014-08-14T22:00:00Z
                return parse(raw_datetime)
            except ValueError:
                logger.error('Failed to parse datetime "%s".' % raw_datetime)
    return None


def get_year_from_course(course, date):
    """Add years back for more recent courses.
    If course is 2nd grade, the user started one more year before."""
    # Add 1 year if verification happens during spring, 0 if during fall.
    add_years = 0  # if timezone.now().month >= 7 else 1

    if course['id'] == GROUP_IDENTIFIERS['PROSJEKT1']:
        add_years += 1
    elif course['id'] == GROUP_IDENTIFIERS['ALGDAT']:
        add_years += 1
    elif course['id'] == GROUP_IDENTIFIERS['PROSJEKT2']:
        add_years += 2
    return (arrow.now().year - date.year) + add_years


def get_bachelor_year(groups):
    years = []
    for group in groups:
        if group.get('id') in GROUP_IDENTIFIERS.values():
            logger.debug('Finding study year from {}'.format(group.get('id')))
            parsed_datetime = get_course_finish_date(group)
            if parsed_datetime:
                years.append(get_year_from_course(group, parsed_datetime))

    # Find the max number of years to add, and add a year to that.
    # Grades aren't indexed by zero for some reason, so we need to +1.
    return max(years) + 1


def get_master_year(groups):
    for group in groups:
        if group.get('id') in MASTER_IDS:
            logger.debug('Identified master study course: %s' % group.get('id'))
            return 5
    return 4


def get_year(study_id, groups):
    if study_id == GROUP_IDENTIFIERS['BACHELOR']:
        return get_bachelor_year(groups)
    elif study_id == GROUP_IDENTIFIERS['MASTER']:
        return get_master_year(groups)
    else:
        return 0


def get_field_of_study(groups):
    if get_group_id(get_study(groups)) == GROUP_IDENTIFIERS['BACHELOR']:
        return FIELD_OF_STUDY_CHOICES[1][0]
    else:
        for group in groups:
            group_id = get_group_id(group)
            logger.debug('User is (probably) master student, trying to find a match for "%s".' % group_id)
            if group_id == GROUP_IDENTIFIERS['MASTER_COURSE_PVS']:
                return FIELD_OF_STUDY_CHOICES[2][0]
            elif group_id == GROUP_IDENTIFIERS['MASTER_COURSE_DB']:
                return FIELD_OF_STUDY_CHOICES[3][0]
            elif group_id == GROUP_IDENTIFIERS['MASTER_COURSE_AI']:
                return FIELD_OF_STUDY_CHOICES[6][0]
            elif group_id == GROUP_IDENTIFIERS['MASTER_COURSE_UX']:
                return FIELD_OF_STUDY_CHOICES[8][0]
            elif group_id == GROUP_IDENTIFIERS['MASTER_COURSE_OTHER']:
                return FIELD_OF_STUDY_CHOICES[9][0]
