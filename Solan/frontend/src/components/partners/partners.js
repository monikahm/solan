import React, { useState } from 'react'
import useFetch from '../api'

function Partners() {
  const [partners, setPartners] = useState([])
  useFetch('http://127.0.0.1:8000/api/partners/', setPartners)

  return (
    <div>
      {partners.map((s, index) => (
        <div key={index + s}>{s.url}</div>
      ))}
    </div>
  )
}

export default Partners
