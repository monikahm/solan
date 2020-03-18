export function authHeader() {
  let user = localStorage.getItem('token')

  if (user && user.token) {
    return { Authorization: 'Bearer' + user.token }
  } else {
    return {}
  }
}
