import React, { useState, useEffect } from 'react'
import './startups.css'
import useFetch from '../api'
import { truncateTitle } from '../utils/application.utils'

function Startups() {
  const [currentWidth, handleWidthChange] = useState(window.innerWidth)
  const [startups, setStartups] = useState([])
  useFetch('http://127.0.0.1:8000/api/startups/', setStartups)

  useEffect(() => {
    window.addEventListener('resize', getCurrentWidth)
  })

  const getCurrentWidth = () => {
    handleWidthChange(window.innerWidth)
  }

  return (
    <div className="startups-grid-container">
      <div className="startups_boxspacer"></div>
      <div className="startups_A">
        <p className="startups_banner_image_text">Startups</p>
      </div>
      {startups.length !== 0 && (
        <div className="startups_B">
          {startups.map((s, index) => (
            <div className="card" key={index + s}>
              <div className="card_top">
                  <img className="startupImage" src={s.photo} alt={s.photo} onClick={()=>{
                    window.open(s.url, '_blank')
                  }}/>
              </div>

              <div className="card_middle">
                <div className="startupname">{s.name} </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Startups
