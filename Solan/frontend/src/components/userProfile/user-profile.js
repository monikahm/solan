import React, { useState } from 'react'
import useFetch from '../api'
import './user-profile.css'
import profilePlaceholder from '../../assets/images/profile-placeholder.png'
import {Link} from "@reach/router";

function UserProfile() {
  const [userdata, setUserdata] = useState({})
  const [quoteOfTheDay, setQuoteOfTheDay] = useState({})
  const id = parseInt(localStorage.getItem('id'))
  useFetch('http://127.0.0.1:8000/api/profiles/' + id + '/', setUserdata)
  useFetch('http://127.0.0.1:8000/api/quote/2/', setQuoteOfTheDay)
  const image = userdata.photo
  const profileImage = image !== null ? image : profilePlaceholder
  return (
    <div className="profile-grid-container">
      <div className="profile_boxspacer">
        <div className="profile-image">
          <img alt="Profile Pic" src={profileImage} style={{ width: '10%' }} />
        </div>
        <div className="profile-name">
          {'Navn: '}
          {userdata.first_name} {userdata.last_name}
        </div>
        <div className="profile-email">
          {'Epost: '}
          {userdata.email}
        </div>
        <div className="profile-bio">
          {'Bio: '}
          {userdata.bio}
        </div>
        <div>
          <Link to="/profile/edit">Rediger profil</Link>
        </div>
        <div className="quote">
          {'Quote of the day: '}
          {quoteOfTheDay.quote} {'-'} {quoteOfTheDay.author}
        </div>
      </div>
    </div>
  )
}

export default UserProfile;

