import React from 'react'
import './App.css'
import FetchStartups from './components/startups/startups'
import BlogPosts from './components/blogposts/blogposts'
import { Router, Link } from '@reach/router'
import Partners from './components/partners/partners'
import CouncilList from './components/council/council'
import Homepage from "./components/homepage/homepage";
import picture from "../src/assets/images/solan-transparent-hvit-logo (2).svg"

let Home = () => <div></div>

const App = () => {
  return (
    <div className="App">

      <nav className="Navbar">
        <a href="#default" className="logo">
            <img src={picture} alt="logo" className="logo" />
        </a>

        <div className="Nav_Links">
          <Link to="homepage">Hjem</Link>
          <Link to="startups">Startups</Link>
          <Link to="blogs">Blogg</Link>
          <Link to="council">Styret</Link>
        </div>
      </nav>

      <Router>
        <Homepage path="homepage">Homepage</Homepage>
        <FetchStartups path="startups">Startups</FetchStartups>
        <BlogPosts path="blogs">Blog</BlogPosts>
        <Partners path="partners">Partners</Partners>
        <CouncilList path="council">Council</CouncilList>
      </Router>

        <div className="footer">
            <Link to="partners">Partners</Link>
        </div>


    </div>




  )
}

export default App
