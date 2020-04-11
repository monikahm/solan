import React from 'react'
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

let Home = () => <div></div>

const App = () => {
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
