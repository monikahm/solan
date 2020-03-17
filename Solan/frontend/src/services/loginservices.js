async function LoginAPI(url, username, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password
    })
  }
  return fetch(url, options).then((res) => {
    localStorage.setItem('token', JSON.stringify(res.token))
    return res
  })
}

function logout() {
  localStorage.clear()
}

function getToken() {
  return JSON.parse(localStorage.getItem('token'))
}

export { LoginAPI, logout, getToken }
