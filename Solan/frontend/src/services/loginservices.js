import { BACKEND_URL } from '../constants'

async function LoginAPI(username, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password
    })
  }
  const result = await fetch(BACKEND_URL + '/api/login', options).then((res) => res.json())
  document.cookie =
    'csrftoken=' +
    result.token +
    '; expires=' +
    new Date(Date.now() + 60 * 60 * 24 * 365 * 1000).toUTCString()
  console.log("asdasdasd")
  localStorage.setItem('token', result.token)
  localStorage.setItem('id', result.id)
  return result.token
}

async function RegisterAPI(profile) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: profile.email,
      ntnu_username: profile.ntnu_username,
      password: profile.password,
      first_name: profile.first_name,
      last_name: profile.last_name
    })
  }
  const result = await fetch(BACKEND_URL + '/api/register', options).then((res) => res.json())
  console.log(profile)
  return result
}
function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
async function logoutAPI(){
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }
  const res = await fetch(BACKEND_URL + '/api/logout', options)
  return res
}
async function logout() {
  try {
    localStorage.clear()
    await logoutAPI()
    delete_cookie("csrftoken")
    delete_cookie("sessionid")  
  }
  catch(ex){
    console.log(ex)
  }
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
