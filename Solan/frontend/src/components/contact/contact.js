import React from 'react'
import './contact.css'
import ContactForm from '../contactForm/contactForm'

function Contact() {
  return (
    <React.Fragment>
      <div className="contact-home-grid">
        <div className="contact_boxspacer"></div>
        <div className="contact_A">
          <p className="contact_banner_image_text">
            Kontakt Oss
            </p>
        </div>
      </div>
      <ContactForm />
    </React.Fragment>
  )
}
export default Contact