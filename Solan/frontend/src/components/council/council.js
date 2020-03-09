import React, { useState } from 'react'
import useFetch from '../api'
import './council.css'


function CouncilList() {
  const [council, setCouncil] = useState([])
  useFetch('http://127.0.0.1:8000/api/councilposition/', setCouncil)

  return (

      <div class="council_grid-container">




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
