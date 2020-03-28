import React, { useState } from 'react'
import './partners.css'
import picture from '../../assets/images/bannerbilde.PNG'

function Partners() {
  return (
    <div className="partners-home-grid">
      <div className="partners_boxspacer">
        <div className="partners_A">
          <img src={picture} alt="bannerpicture" className="partners_A" />
        </div>

        <div className="partners_B">
          <h1>PARTNERS</h1>
        </div>

        <div className="partners_C1"></div>

        <div className="partners_C2"></div>

        <div className="partners_D1"></div>

        <div className="partners_D2"></div>

        <div className="partners_E1"></div>

        <div className="partners_E2"></div>
      </div>
    </div>
  )
}
export default Partners
