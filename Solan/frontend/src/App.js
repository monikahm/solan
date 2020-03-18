import React, { useEffect } from 'react'
import './App.css'
import { alertActions } from './actions/alertActions'
import FetchStartups from './components/startups/startups'
import BlogPosts from './components/blogposts/blogposts'
import { Router, Link } from '@reach/router'
import Partners from './components/partners/partners'
import CouncilList from './components/council/council'
import AboutSolan from './components/about/about'
import KontaktOss from './components/kontaktoss/kontakt-oss'
import Login from './components/login/login'

let Home = () => <div></div>

const App = () => {
  return (
    <div className="App">
      <nav className="Navbar">
        <a href="#default" className="logo">
          Solan Linjeforening
        </a>

        <div className="Nav_Links">
          <Link to="/">Hjem</Link>
          <Link to="about">Om oss</Link>
          <Link to="startups">Startups</Link>
          <Link to="blogs">Blogg</Link>
          <Link to="council">Styret</Link>
          <Link to="login">Login</Link>
        </div>
      </nav>

      <nav className="Navbar_footer">
        <Link to="partners">Partners</Link>
        <Link to="kontakt">Kontakt oss</Link>
      </nav>
        <Router>
          <Home path="/" />
          <AboutSolan path="about">About</AboutSolan>
          <FetchStartups path="startups">Startups</FetchStartups>
          <BlogPosts path="blogs">Blog</BlogPosts>
          <Partners path="partners">Partners</Partners>
          <CouncilList path="council">Council</CouncilList>
          <KontaktOss path="kontakt">Kontakt oss</KontaktOss>
          <Login path="login">Login</Login>
        </Router>
    </div>
  )
}
export default App
