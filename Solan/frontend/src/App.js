import React, { useEffect, useRef } from 'react'
import './App.css'
import { Router, Link } from '@reach/router'
import Startups from './components/startups/startups'
import Partners from './components/partners/partners'
import Council from './components/council/council'
import Homepage from './components/homepage/homepage'
import Events from './components/events/events'
import Contact from './components/contact/contact'
import picture4 from './assets/images/solanfooterlogo.PNG'
import Login from './components/login/login'
import Register from './components/login/register'
import UserProfile from './components/userProfile/user-profile'
import { useSelector, useDispatch } from 'react-redux'

import { BACKEND_URL } from './constants'

const App = () => {
  const { user } = useSelector((state) => state.authentication)
  const dispatch = useDispatch()

  const prevUser = useRef(null)
  useEffect(() => {
    // Sjekke om bruker sin token er valid
    if (user && user !== prevUser.current) {
      prevUser.current = user
      fetch(BACKEND_URL + '/api/valid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: user, id: 2 })
      })
        .then((r) => r.json())
        .then((result) => {
          console.log(result)
          if (!result.valid) {
            dispatch({ type: 'setUser', user: null })
            dispatch({ type: 'setUsername', username: null })
          }
        })
    }
  }, [user])

  return (
    <div className="App-grid">
      <nav className="Navbar">
        <a href="homepage" className="logo">
          Solan
        </a>

        <div className="Nav_Links">
          <Link to="startups">Startups</Link>
          <Link to="council">Styremedlemmer</Link>
          <Link to="partners">For Bedrifter</Link>
          <Link to="events">Arrangementer</Link>
          <Link to="profile">Profil</Link>
        </div>
      </nav>

      <Router>
        <Homepage path="homepage">Homepage</Homepage>
        <Startups path="startups">Startups</Startups>
        <Partners path="partners">Partners</Partners>
        <Council path="council">Council</Council>
        <Events path="events">Council</Events>
        <Contact path="contact">Kontakt Oss</Contact>
        <Login path="login">Login</Login>
        <Register path="register">Register</Register>
        <UserProfile path="profile">Profile</UserProfile>
      </Router>

      <div className="F">
        <div className="footer_logo">
          <img
            src={picture4}
            alt="solanfooterlogo"
            className="solanfooterlogo"
          />
        </div>
        <div className="footer_links">
          <Link to="contact">Kontakt oss</Link>
        </div>
      </div>

      <div className="G">
        <div className="G_text">
          <p>Copyright and All rights reserved | Solan linjeforening, 2020</p>
        </div>
      </div>
    </div>
  )
}
export default App
