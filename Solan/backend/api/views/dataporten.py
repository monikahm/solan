import os
import json
import logging
from datetime import datetime
from django.contrib import messages
from django.shortcuts import redirect
from oic import rndstr
from oic.oauth2 import AuthorizationResponse, ResponseError
from oic.oic import Client, RegistrationResponse
from oic.utils.authn.client import CLIENT_AUTHN_METHOD
import requests
from urllib.parse import urlencode

from ..study import *

DATAPORTEN_PROVIDER_CONFIG = 'https://auth.dataporten.no/'
DATAPORTEN_CLIENT_ID = "e6b79299-66c2-4bf2-a1b8-dc19d332c120"
DATAPORTEN_CLIENT_SECRET = "4bbb16d6-c8f8-407f-878b-29138868fa79"
DATAPORTEN_REDIRECT_URI = "http://127.0.0.1:8000/callback"
DATAPORTEN_SCOPES = ['userid', 'profile', 'groups', 'email']

logger = logging.getLogger(__name__)


def client_setup(client_id, client_secret):
    """Sets up an OpenID Connect Relying Party ("client") for connecting to Dataporten"""

    logger = logging.getLogger(__name__)

    assert client_id, 'Missing client id when setting up Dataporten OpenID Connect Relying Party'
    assert client_secret, 'Missing client secret when setting up Dataporten OpenID Connect Relying Party'

    client = Client(client_authn_method=CLIENT_AUTHN_METHOD)

    logger.debug('Automatically registering Dataporten OpenID Provider.', extra={'config': DATAPORTEN_PROVIDER_CONFIG})
    client.provider_config(DATAPORTEN_PROVIDER_CONFIG)
    client_args = {
        'client_id': client_id,
        'client_secret': client_secret,
    }
    client.store_registration_info(RegistrationResponse(**client_args))
    logger.debug('Successfully registered the provider.')

    return client

def fetch_groups_information(access_token, show_all=False):
    logger.debug('Fetching groups info...')
    query_params = urlencode({
        'show_all': show_all
    })
    groups_api = 'https://groups-api.dataporten.no/groups/me/groups?%s' % query_params
    groups_resp = requests.request('GET', groups_api, headers={'Authorization': 'Bearer ' + access_token})

    return json.loads(groups_resp.content.decode(encoding='UTF-8'))


def study(request):
    client = client_setup(DATAPORTEN_CLIENT_ID, DATAPORTEN_CLIENT_SECRET)

    # Generate random values used to verify that it's the same user when in the callback.
    state = rndstr()
    nonce = rndstr()

    request.session['dataporten_study_state'] = state
    request.session['dataporten_study_nonce'] = nonce

    args = {
        'client_id': DATAPORTEN_CLIENT_ID,
        'response_type': 'code',
        'scope': DATAPORTEN_SCOPES,
        'redirect_uri': DATAPORTEN_REDIRECT_URI,
        'nonce': nonce,
        'state': state,
    }

    logger.debug(
        'Constructing authorization request and redirecting user to authorize through Dataporten.',
        extra={'user': request.user}
    )

    auth_req = client.construct_AuthorizationRequest(request_args=args)
    login_url = auth_req.request(client.authorization_endpoint)

    return redirect(login_url)


def study_callback(request):
    logger.debug('Fetching study programme for user {}'.format(request.user), extra={'user': request.user})

    client = client_setup(DATAPORTEN_CLIENT_ID, DATAPORTEN_CLIENT_SECRET)

    queryparams = request.GET.urlencode()

    try:
        auth_resp = client.parse_response(AuthorizationResponse, info=queryparams, sformat='urlencoded')
    except ResponseError:
        messages.error(
            request, "Forespørselen mangler påkrevde felter, vennligst prøv igjen."
        )
        return redirect("")
    if (
            not request.session.get("dataporten_study_state", "")
            or request.session["dataporten_study_state"] != auth_resp["state"]
    ):
        logger.info('Dataporten state did not equal the one in session!')
        messages.error(
            request, "Verifisering av forespørselen feilet. Vennligst prøv igjen."
        )
        return redirect('')

    args = {
        'code': auth_resp['code'],
        'redirect_uri': DATAPORTEN_REDIRECT_URI,
    }

    token_request = client.do_access_token_request(
        state=auth_resp['state'], request_args=args, authn_method='client_secret_basic',
    )

    access_token = token_request.get('access_token')

    # Do user info request
    userinfo = client.do_user_info_request(
        state=auth_resp["state"], behavior="use_authorization_header"
    )
    ntnu_username_dataporten = (
        userinfo.get("connect-userid_sec")[0].split(":")[1].split("@")[0]
    )

    # Getting information about study of the user
    groups = fetch_groups_information(access_token)

    os.makedirs('dumps', exist_ok=True)

    now = arrow.now()
    fname = f'dumps/{ntnu_username_dataporten}_{now.isoformat()}.json'
    with open(fname, 'w') as f:
        f.write(json.dumps(groups))

    request.session['last_dump'] = fname

    return redirect('/ty')


def thanks(request):
    if request.session.get('last_dump'):
        fname = request.session.get('last_dump')
        with open(fname, 'r') as f:
            groups = json.load(f)
        study_group = get_study(groups)
        study_id = get_group_id(study_group)
        study_year = get_year(study_id, groups)
        study_name = study_group.get('displayName')
        field_of_study = get_field_of_study(groups)

        # Remove the years from bachelor if the user is a master student.
        if study_year >= 4:
            start_date_for_study = study_year - 3
        else:
            start_date_for_study = study_year

        started_date = datetime(arrow.now().year - start_date_for_study, 7, 1)

        return f'Thanks for your data! Is it correct that you study {study_name} on year {study_year}? If not, please contact hakon@solbj.org or sklirg.'
    return'Thanks!'




