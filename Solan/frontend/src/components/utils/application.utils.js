export function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

function getMonthByNumber(month) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    return months[month]
}

function getDayInitials(day) {
    if (day === '01' || day === '21') {
        return `${day}st`
    } else if (day === '02' || day === '22') {
        return `${day}nd`
    } else if (day === '03' || day === '23') {
        return `${day}rd`
    } else {
        return `${day}th`
    }
}

export function getDateByString(date) {
    const tempDate = date.split('-');
    const year = parseInt(tempDate[0]);
    const month = parseInt(tempDate[1]);
    let day = parseInt(tempDate[2]);
    if (day < 9) {
        day = `0${day}`
    }
    day = getDayInitials(day.toString());
    const formattedDate = `${day} ${getMonthByNumber(month)}, ${year}`;
    return formattedDate;
}