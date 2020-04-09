import React from 'react'
import './App.css'
import { Router } from '@reach/router'
import Startups from './components/startups/startups'
import Partners from './components/partners/partners'
import Council from './components/council/council'
import Homepage from './components/homepage/homepage'
import Events from './components/events/events'
import Contact from './components/contact/contact'
import Login from './components/login/login'
import TopNavigationBar from './components/topNavigationBar/topNavigationBar'
import BottomPanel from './components/bottomContactAndFooter/bottomPanel'

// let Home = () => <div></div>

const App = () => {
  return (
    <div className="App-grid">
      <TopNavigationBar />
      <Router>
        <React.Fragment>
          <Homepage path="homepage">Homepage</Homepage>
          <Startups path="startups">Startups</Startups>
          <Partners path="partners">Partners</Partners>
          <Council path="council">Council</Council>
          <Events path="events">Council</Events>
          <Contact path="contact">Kontakt Oss</Contact>
          <Login path="login">Login</Login>
        </React.Fragment>
      </Router>
      <footer>
        <BottomPanel />
      </footer>
    </div>
  )
}
export default App
