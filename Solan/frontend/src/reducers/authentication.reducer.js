import { userConstants } from '../constants/user.constants'

console.log(localStorage.getItem('token'))

let user = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token'))
  : undefined
const inistialState = user ? { loggedIn: true, user } : {}

export function authentication(state = inistialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        user: action.user
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      return {}
    default:
      return state
  }
}
