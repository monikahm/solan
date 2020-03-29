import React, { useState } from 'react'
import useFetch from '../api'
import './council.css'
import picture from '../../assets/images/bannerbilde.PNG'

function CouncilList() {
  const [council, setCouncil] = useState([])
  useFetch('http://127.0.0.1:8000/api/councilposition/', setCouncil)

  return (
    <div className="council-home-grid">
      <div className="council_boxspacer"></div>

      <div className="council_A">
        <div className="council_banner_image_text">
          <h1>Styremedlemmer</h1>
        </div>
      </div>

      <div className="council_B">
        {council.map((s) => (
          <>
            <img className="council_image" src={s.photo} alt={s.photo}></img>
            <div className="council_name">{s.name}</div>
            <div className="council_info">{s.info}</div>
            <div className="council_position">{s.position}</div>
          </>
        ))}
      </div>

      <div className="council_C1"></div>

      <div className="council_C2"></div>

      <div className="council_D1"></div>

      <div className="council_D2"></div>

      <div className="council_E1"></div>

      <div className="council_E2"></div>
    </div>
  )
}

export default CouncilList
