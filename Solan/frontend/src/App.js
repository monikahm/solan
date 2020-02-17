import React from 'react';
import './App.css';
import FetchStartups from './components/startups';


function App() {
  return (
    <div className="App">
      <FetchStartups></FetchStartups>
      <userProfile/>

    </div>
  );
}

export default App;
