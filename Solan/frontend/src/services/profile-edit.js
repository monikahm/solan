import { BACKEND_URL } from '../constants'
const id = parseInt(localStorage.getItem('id'))
async function EditProfileAPI(
  email,
  ntnuUsername,
  firstName,
  lastname,
  bio
) {
  const options = {
    method: 'PUT',
    headers: {
      Authorization: 'Token ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      ntnu_username: ntnuUsername,
      first_name: firstName,
      last_name: lastname,
      bio: bio
    })
  }
  const result = await fetch(
    BACKEND_URL + '/api/profiles/' + id + '/',
    options
  ).then((res) => res.json())
  console.log(result)
}

export default EditProfileAPI
