import React, { useState } from 'react'
import useFetch from '../api'
import './council.css'
import picture from "../../assets/images/bruce-bannerbilde.png";

function CouncilList() {
  const [council, setCouncil] = useState([])
  useFetch('http://127.0.0.1:8000/api/councilposition/', setCouncil)

  return (

      <div class="council_grid-container">


      <div class="council_header">
        <img src={picture} alt="bannerpicture" className="council_banner-pic"/>
      </div>


      {council.map((s) => (
        <>

          <img class="council_image" src={s.photo} alt={s.photo}></img>
          <div class="council_name">{s.name}</div>
          <div class="council_info">{s.info}</div>
          <div class="council_position">{s.position}</div>


        </>

      ))}




      </div>
  )



}

export default CouncilList
