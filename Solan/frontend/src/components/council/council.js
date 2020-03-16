import React, { useState } from 'react'
import useFetch from '../api'

function CouncilList() {
  const [council, setCouncil] = useState([])
  useFetch('http://127.0.0.1:8000/api/councilposition/', setCouncil)

  return (
    <div>
      {council.map((s) => (
        <div key={s.id}>
          <img src={s.photo} alt={s.photo}></img>
          <div>{s.name}</div>
          <div>{s.info}</div>
          <div>{s.position}</div>
        </div>
      ))}
    </div>
  )
}

export default CouncilList
