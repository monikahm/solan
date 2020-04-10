import React, { useState } from 'react'
import './events.css'
import useFetch from '../api';
import EventCard from './eachEventCard';

function Events() {
  const [eventsData, setEventsData] = useState([]);
  // const [eventsData, setEventsData] = useState([
  //   {
  //     title: 'Startup-kveld',
  //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  //     date: '2020-04-16',
  //     signup_link: 'google.com'
  //   },
  //   {
  //     title: 'Startup-kveld',
  //     content: 'Startup-kveld',
  //     date: '2020-03-21',
  //     signup_link: 'http://google.com'
  //   }
  // ])
  useFetch('http://127.0.0.1:8000/api/event/', setEventsData)

  return (
    <div className="events-home-grid">
      <div className="events_boxspacer"></div>
      <div className="events_A">
        <p className="events_banner_image_text">
          Arrangementer
        </p>
      </div>
    {
      eventsData.length > 0 &&
      <div className="event-cards-container">
        {
          eventsData.map(item => {
            if(item.signup_link && !(item.signup_link.includes('http'))) {
              item.signup_link = `http://${item.signup_link}`
            }
            return <EventCard item={item} />
          })
        }
      </div>
    }
    </div>
  )
}

export default Events
