console.log(localStorage.getItem('token'))

let user = null
let username = null
try {
  const token = localStorage.getItem('token')
  username = localStorage.getItem('username')
  if (username === 'null') username = null
  if (typeof token !== 'undefined' && token !== 'undefined') {
    user = token === 'null' ? null : token
  }
} catch (ex) {
  console.log(ex)
}

const inistialState = {
  loggedIn: !!user,
  user,
  username,
}

export function authentication(state = inistialState, action) {
  switch (action.type) {
    case 'setUser':
      if (typeof action.user !== 'undefined') {
        localStorage.setItem('token', action.user)
      } else {
        localStorage.removeItem('token')
      }
      return {
        ...state,
        loggedIn: !!action.user,
        user: action.user,
      }
    case 'setUsername':
      if(typeof action.username !== 'undefined') {
      localStorage.setItem('username', action.username)
      } else {
        localStorage.removeItem('username')
      }
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}
