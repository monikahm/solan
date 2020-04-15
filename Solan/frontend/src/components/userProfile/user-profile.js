import React, { useState } from 'react'
import useFetch from '../api'
import './user-profile.css'

function UserProfile() {
  const [userdata, setUserdata] = useState({})
  const id = parseInt(localStorage.getItem('id'))
  useFetch('http://127.0.0.1:8000/api/profiles/' + id + '/', setUserdata)
  console.log(userdata)
  return (
    <div className="profile-grid-container">
      <div className="profile">
        <img className="profile-image" src={userdata.photo} alt="Profile Pic" />
        <div className="profile-name">
          {' '}
          {userdata.first_name} {userdata.last_name}{' '}
        </div>
      </div>
    </div>
  )
}

export default UserProfile;

