import { userConstants } from '../constants'
import { loginservices } from '../services'
import { alertActions } from './alertActions'

export const userActions = {
  login,
  logout
}

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }))

    loginservices.login(username, password).then(
      (user) => {
        dispatch(success(user))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  loginservices.logout()
  return { type: userConstants.LOGOUT }
}
