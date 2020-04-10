import React, { useState } from 'react'
import useFetch from '../api'
import ContactForm from '../contactForm/contactForm'
import './council.css'

function Council() {
  const [council, setCouncil] = useState([])
  useFetch('http://127.0.0.1:8000/api/councilposition/', setCouncil)

  return (
    <div className="council-grid-container">
      <div className="council_boxspacer"></div>
      <div className="council_A">
        <p className="council_banner_image_text">
          Styremedlemmer
        </p>
      </div>
      {/* <ContactForm /> */}
      {
        council.length !== 0 &&
        <div className="council_B">
          {council.map((s, index) => (
            <div className="councilcard" key={index + s}>
              <img className="councilImage" src={s.photo} alt={s.photo} />
              <div className="councilname">{s.name} </div>
              <div className="councilposition">{s.position} </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Council
