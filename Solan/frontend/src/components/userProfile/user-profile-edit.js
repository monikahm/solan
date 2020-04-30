import React, {useState} from 'react'
import EditProfileAPI from '../../services/profile-edit'
import useFetch from '../api'

export default function ProfileEdit() {
  const [userdata, setUserdata] = useState({})
  const id = parseInt(localStorage.getItem('id'))
  useFetch('http://127.0.0.1:8000/api/profiles/' + id + '/', setUserdata)
  //console.log(userdata.first_name)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')


  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await EditProfileAPI(
        email,
        userdata.ntnu_username,
        firstName,
        lastName,
        bio
      )
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className="edit-profile">
     
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="E-post"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={firstName}
              name="firstName"
              placeholder="Fornavn"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
              <input
              type="text"
          value={lastName}
              name="lastname"
              placeholder="Etternavn"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <input
              type="text"
          value={bio}
              name="bio"
              placeholder="Bio"
              size="63"
              onChange={(e) => setBio(e.target.value)}
            ></input>
            <input type="submit" onClick={handleSubmit}></input>
          </form>
    </div>
  )
}