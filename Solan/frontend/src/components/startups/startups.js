import React, { useState } from 'react'
import './startups.css'
import useFetch from '../api'
import picture from '../../assets/images/bannerbilde.PNG'

function FetchStartups() {
  const [startups, setStartups] = useState([])
  useFetch('http://127.0.0.1:8000/api/startups/', setStartups)

  return (
    <div className="startups-grid-container">
      <div className="startups_boxspacer"></div>

      <div className="startups_A">
        <div className="startups_banner_image_text">
          <h1>Startups</h1>
        </div>
      </div>

      <div className="startups_B">
        {startups.map((s, index) => (
          <div className="card" key={index + s}>
            <div className="card_top_half">
              <img className="startupImage" src={s.photo} alt={s.photo} />

              <div className="startupname">{s.name} </div>

              <div className="startupinfo">{s.info} </div>
            </div>
            <div className="card_bottom_half">
              <button className="readmorebtn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FetchStartups
