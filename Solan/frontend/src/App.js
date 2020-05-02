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
import Register from './components/login/register'
import UserProfile from './components/userProfile/user-profile'
import TopNavigationBar from './components/topNavigationBar/topNavigationBar'
import BottomPanel from './components/bottomContactAndFooter/bottomPanel'
import ProfileEdit from './components/userProfile/user-profile-edit'

const App = () => {
  return (
    <div className="App-grid">
      <TopNavigationBar />
      <Router>
        <React.Fragment>
          <Homepage path="/">Homepage</Homepage>
          <Homepage path="homepage">Homepage</Homepage>
          <Startups path="startups">Startups</Startups>
          <Partners path="partners">Partners</Partners>
          <Council path="council">Council</Council>
          <Events path="events">Events</Events>
          <Contact path="contact">Kontakt Oss</Contact>
          <Login path="login">Login</Login>
          <Register path="register">Register</Register>
          <UserProfile path="profile">Profile</UserProfile>
            <ProfileEdit path="profile/edit">Profile Edit</ProfileEdit>
        </React.Fragment>
      </Router>
      <footer>
        <BottomPanel />
      </footer>
    </div>
  )
}
export default App
