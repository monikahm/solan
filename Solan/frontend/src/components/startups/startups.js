import React, { useState } from 'react'
import './startups.css'
import useFetch from '../api'

function FetchStartups() {
  const [startups, setStartups] = useState([])
  useFetch('http://127.0.0.1:8000/api/startups/', setStartups)

  return (
    <div className="body">
      <div className="Header">
        <p>Header</p>
      </div>
      <div className="contents">
        {startups.map((s, index) => (
          <div className="Card" key={index + s}>
            <img className="startupImage" src={s.photo}></img>

            <div className="startupname">{s.name} </div>

            <div className="startupinfo">{s.info} </div>

            <div className="Cardbutton">
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FetchStartups
