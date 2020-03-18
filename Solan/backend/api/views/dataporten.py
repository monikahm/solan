import os
import json
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import redirect
from oic import rndstr
from django.db import IntegrityError
from oic.oauth2 import AuthorizationResponse, ResponseError
from oic.oic import Client, RegistrationResponse
from oic.utils.authn.client import CLIENT_AUTHN_METHOD
import requests
from urllib.parse import urlencode


DATAPORTEN_PROVIDER_CONFIG = 'https://auth.dataporten.no/'
DATAPORTEN_CLIENT_ID = "e6b79299-66c2-4bf2-a1b8-dc19d332c120"
DATAPORTEN_CLIENT_SECRET = "4bbb16d6-c8f8-407f-878b-29138868fa79"
DATAPORTEN_REDIRECT_URI = "http://127.0.0.1:8000/callback"
DATAPORTEN_SCOPES = ['userid-feide', 'userid', 'profile', 'groups', 'email', 'openid']



def client_setup(client_id, client_secret):
    """Sets up an OpenID Connect Relying Party ("client") for connecting to Dataporten"""


    assert client_id, 'Missing client id when setting up Dataporten OpenID Connect Relying Party'
    assert client_secret, 'Missing client secret when setting up Dataporten OpenID Connect Relying Party'

    client = Client(client_authn_method=CLIENT_AUTHN_METHOD)

    client.provider_config(DATAPORTEN_PROVIDER_CONFIG)
    client_args = {
        'client_id': client_id,
        'client_secret': client_secret,
    }
    client.store_registration_info(RegistrationResponse(**client_args))
    return client

def fetch_groups_information(access_token, show_all=False):
    query_params = urlencode({
        'show_all': show_all
    })
    groups_api = 'https://groups-api.dataporten.no/groups/me/groups?%s' % query_params
    groups_resp = requests.request('GET', groups_api, headers={'Authorization': 'Bearer ' + access_token})

    return json.loads(groups_resp.content.decode(encoding='UTF-8'))

def approve_member(user, groups):
    study_group = {}
    for group in groups:
        if group.get("id") == 'fc:adhoc:bddd4200-fa1c-40a4-86e2-a08cd1089cb6':
            study_group = group
    if study_group:
        user.member = True
        user.save()
        return True
    else:
        return False


@login_required()
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

    auth_req = client.construct_AuthorizationRequest(request_args=args)
    login_url = auth_req.request(client.authorization_endpoint)

    return redirect(login_url)

@login_required()
def study_callback(request):

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

    if (
        request.user.ntnu_username
        and request.user.ntnu_username != ntnu_username_dataporten
    ):
        messages.error(
            request,
            "Brukernavnet for brukerkontoen brukt til verifisering i Dataporten stemmer ikke overens med "
            "kontoen du er logget inn med hos Solan. Pass på at du er logget inn med din egen konto "
            "begge steder og prøv igjen."
        )
        return redirect('http://127.0.0.1:3000/')
    elif not request.user.ntnu_username:
        pass

    # Getting information about study of the user
    groups = fetch_groups_information(access_token)

    try:
        if not request.user.ntnu_username:
            request.user.ntnu_username = ntnu_username_dataporten
            request.user.save()
        is_approved = approve_member(request.user, groups)

        if not is_approved:
            messages.error(
                request,
                "Du er ikke medlem av testgruppe for Solan linjeforening "
            )

            return redirect('http://127.0.0.1:3000/')

    except IntegrityError:
        messages.error(
            request,
            "En bruker er allerede knyttet til denne NTNU-kontoen"
        )
        return redirect('http://127.0.0.1:8000/')

    if is_approved:
        messages.success(
            request,
            "Du er nå et medlem av Solan linjeforening!"
        )

    return redirect('http://127.0.0.1:3000/')