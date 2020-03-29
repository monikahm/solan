import React from 'react'
import './App.css'
import { Router, Link } from '@reach/router'
import FetchStartups from './components/startups/startups'
import Partners from './components/partners/partners'
import CouncilList from './components/council/council'
import Homepage from './components/homepage/homepage'
import Events from './components/events/events'
import Contact from "./components/contact/contact";

let Home = () => <div></div>

const App = () => {
  return (
    <div className="App">
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

        <div className="footer">
        <Link to="contact">Kontakt oss</Link>
        </div>

      <Router>
        <Homepage path="homepage">Homepage</Homepage>
        <FetchStartups path="startups">Startups</FetchStartups>
        <Partners path="partners">Partners</Partners>
        <CouncilList path="council">Council</CouncilList>
        <Events path="events">Council</Events>
        <Contact path="contact">Kontakt Oss</Contact>
      </Router>


    </div>
  )
}

export default App
