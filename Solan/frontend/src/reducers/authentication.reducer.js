import { userConstants } from '../constants/user.constants'

console.log(localStorage.getItem('token'))

let user = null
try {
  const token = localStorage.getItem('token')
  if (token !== 'undefined') {
    user = token
  }
} catch(ex) {}

const inistialState = { loggedIn: !!user, user }

export function authentication(state = inistialState, action) {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        loggedIn: !!action.user,
        user: action.user
      }
    default:
      return state
  }
}
