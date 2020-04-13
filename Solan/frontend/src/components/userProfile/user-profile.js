import React, { useState } from 'react'
import useFetch from '../api'

function UserProfile() {
  const [userdata, setUserdata] = useState({})
  const id = parseInt(localStorage.getItem('id'))
  useFetch('http://127.0.0.1:8000/api/profiles/', setUserdata)
  let user = {}
  for (let i = 0; i < userdata.length; i++) {
    if (userdata[i].id === id) {
      user = userdata[i]
    }
  }
  console.log(user)
  return (
    <div className="profile-grid-container">
      <div className="profile">
        <img className="profile-image" src={user.photo} alt="Profile Pic" />
        <div className="profile-name">{user.first_name} {user.last_name} </div>
      </div>
    </div>
  )
}

export default UserProfile;

