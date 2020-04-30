import React, { useState } from 'react'
import useFetch from '../api'
import { Link } from '@reach/router'

function CheckProfile() {
  const [userdata, setUserdata] = useState({})
  const id = parseInt(localStorage.getItem('id'))
  useFetch('http://127.0.0.1:8000/api/profiles/' + id + '/', setUserdata)
  const isMember = userdata.member
  if (localStorage.getItem('token') && isMember){
    return <Link to="/profile">Profil</Link>
  } else {
    return null
  }
}

export default CheckProfile;