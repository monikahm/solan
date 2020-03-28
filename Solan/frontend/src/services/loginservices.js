async function LoginAPI(url, username, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password
    })
  }
  const result = await fetch(url, options).then((res) => res.json())
  localStorage.setItem('token', result.token)
  return result.token
}

async function RegisterAPI(url, profile) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "email": profile.email,
      "ntnu_username": profile.ntnu_username,
      "password": profile.password,
      "first_name": profile.first_name,
      "last_name": profile.last_name
    })
  }
  const result = await fetch(url, options).then((res) => res.json())
  localStorage.setItem('token', result.token)
  return result.token
}


function logout() {
  localStorage.clear()
}

function getToken() {
  const token = localStorage.getItem('token')
  if (token !== 'undefined') {
    return token
  } else {
    return ''
  }
}

export { LoginAPI, RegisterAPI, logout, getToken }
