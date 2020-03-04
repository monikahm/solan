import React from 'react'
import './App.css'
import FetchStartups from './components/startups/startups'
import BlogPosts from './components/blogposts/blogposts'
import { Router, Link } from '@reach/router'
import Partners from './components/partners/partners'
import CouncilList from './components/council/council'

let Home = () => <div></div>

const App = () => {
  return (
    <div className="App">
      <nav className="Navbar">
        <a href="#default" className="logo">
          NTNU School of Entrepreneurship
        </a>

        <div className="Nav_Links">
          <Link to="/">Hjem</Link>
          <Link to="startups">Startups</Link>
          <Link to="blogs">Blogg</Link>
          <Link to="council">Styret</Link>
        </div>
      </nav>

      <nav className="Navbar_footer">
        <Link to="partners">Partners</Link>
      </nav>

      <Router>
        <Home path="/" />
        <FetchStartups path="startups">Startups</FetchStartups>
        <BlogPosts path="blogs">Blog</BlogPosts>
        <Partners path="partners">Partners</Partners>
        <CouncilList path="council">Council</CouncilList>
      </Router>
    </div>
  )
}

export default App
