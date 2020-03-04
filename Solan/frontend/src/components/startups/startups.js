import React, { useState } from 'react'
import './startups.css'
import useFetch from '../api'
import picture from '../../assets/images/bruce-bannerbilde.png'

function FetchStartups() {
  const [startups, setStartups] = useState([])
  useFetch('http://127.0.0.1:8000/api/startups/', setStartups)

  return (



    <div class="grid-container">

      <div class="header">
        <img src={picture} alt="bannerpicture" className="banner-pic" />
      </div>


        <div class="cards">


            {startups.map((s, index) => (
          <div class="card" key={index + s}>
              <div className="card_top_half">
            <img className="startupImage" src={s.photo} alt={s.photo}/>

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
