import React, { useState } from 'react'
import useFetch from '../api'

function AboutSolan() {
  const [about, setAbout] = useState([])

  useFetch('http://127.0.0.1:8000/api/info/', setAbout)

  return (
    <div>
      {about.map((s) => (
        <div>{s.info}</div>
      ))}
    </div>
  )
}

export default AboutSolan
