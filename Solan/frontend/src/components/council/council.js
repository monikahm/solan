import React, { useState } from 'react'
import useFetch from '../api'
import './council.css'

function Council() {
  const [council, setCouncil] = useState([])
  useFetch('http://127.0.0.1:8000/api/councilposition/', setCouncil)

  return (
    <div className="council-grid-container">
      <div className="council_boxspacer"></div>

      <div className="council_A">
        <div className="council_banner_image_text">
          <h1>Styremedlemmer</h1>
        </div>
      </div>

      <div className="council_B">
        {council.map((s, index) => (
          <div className="councilcard" key={index + s}>
            <img className="councilImage" src={s.photo} alt={s.photo} />
            <div className="councilname">{s.name} </div>
            <div className="councilposition">{s.position} </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Council
