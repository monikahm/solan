import React from 'react';
import './App.css';
import FetchStartups from './components/startups/startups';
import BlogPosts from './components/blogposts/blogposts';
import { Router, Link } from '@reach/router';
import Partners from './components/partners/partners';
import CouncilList from './components/council/council';

let Home = () => (
  <div>
    Hello
  </div>
)

const App = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="startups">Startups</Link> | {" "}
        <Link to="blogs">Blog</Link> | {" "}
        <Link to="partners">Partners</Link> | {" "}
        <Link to="council">Council</Link> | {" "}
      </nav>

      <Router>
        <Home path="/" />
        <FetchStartups path="startups">Startups</FetchStartups>
        <BlogPosts path="blogs">Blog</BlogPosts>
        <Partners path="partners">Partners</Partners>
        <CouncilList path="council">Council</CouncilList>
      </Router>
    </div>
  );
}
export default App;
