import { createUserManager } from 'redux-oidc';
import Oidc from 'oidc-client';
import {DATAPORTEN_CLIENT_ID} from './config';

const userRegisterConfig = {
  authority: 'https://auth.dataporten.no',
  client_id: DATAPORTEN_CLIENT_ID,
  filterProtocolClaims: true,
  loadUserInfo: false,
  redirect_uri:"http://localhost:8000/callback",
  response_type: 'id_token token',
  userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
};

const userManager = createUserManager(userRegisterConfig);

export default userManager;
