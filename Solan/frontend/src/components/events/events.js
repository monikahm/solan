import React, { useState } from 'react'
import './events.css'
import picture from '../../assets/images/bannerbilde.PNG'

function Events() {
  return (
    <div className="events-home-grid">
      <div className="events_boxspacer">
        <div className="events_A">
          <img src={picture} alt="bannerpicture" className="events_A" />
        </div>

        <div className="events_B">
          <h1>ARRANGEMENTER</h1>
        </div>

        <div className="events_C1"></div>

        <div className="events_C2"></div>

        <div className="events_D1"></div>

        <div className="events_D2"></div>

        <div className="events_E1"></div>

        <div className="events_E2"></div>
      </div>
    </div>
  )
}

export default Events
