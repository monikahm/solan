import React, { useState } from 'react'
import './homepage.css'
import './instafeed/instafeed.css'
import Instafeed from './instafeed/instafeed'
import picture from '../../assets/images/bigsolanlogo.PNG'
import picture2 from '../../assets/images/solanpåpinne2.PNG'
import { getAllPartners } from './assets'
import ContactForm from '../contactForm/contactForm'
// import ContactForm from '../contactForm/contactForm';

function Homepage() {
  const allPartners = getAllPartners()
  return (
    <div className="home-grid">
      <div className="main-container">
        <p>
          Solan <br />
          Linjeforening ved <br />
          NTNUs ENTREPRENØRSKOLE
        </p>
        <img src={picture} alt="bigsolansolo" className="bigsolanlogo" />
      </div>
      <div className="partners-container">
        {allPartners.map((item) => {
          return <img src={item} />
        })}
      </div>

      <div className="about-us">
        <img src={picture2} alt="solanpåpinne2" className="solanpåpinne2" />
        <div className="about-us-info">
          <p>
            <b>Om oss: </b>
            Solan ble stiftet i 2003 og er linjeforeningen ved
            NTNUsEntreprenørskole. <br />
            Entreprenørskolen (ES) ved NTNU er et masterprogram innen digital
            <br />
            forretningsutvikling ved Institutt for industriell økonomi-
            ogteknologiledelse.
            <br />
            Masterprogrammet er tidligere omtalt som Norges mestinnovative og
            engasjerende
            <br />
            aster. I tidligere kull har hele 75% av studentenegått ut i
            egenoppstartede
            <br />
            selskap, mens de resterende studentene har fåttinnovative stillinger
            i diverse kjente
            <br />
            bedrifter.
          </p>

          <p>
            Solan Linjeforening representerer studentene vedmasterprogrammet,
            som har en
            <br />
            stor rolle innen innovasjonsmiljøet i Trondheim. Solanhar som
            oppdrag å sikre
            <br />
            sosial trivsel for studentene ved Entreprenørskolen.Studentene
            tilbringer svært
            <br />
            mye tid sammen på ES og deres trivsel skal ivaretasgjennom en rekke
            sosiale
            <br />
            arrangement gjennom året.
          </p>
          <p>
            <b>«Ikke fordi det er enkelt»</b>
          </p>
          <p>
            <b>- Solan Gundersen</b>
          </p>
        </div>
      </div>

      {/* INSTAGRAM FEED
      <div className="D">
        <div class="insta-wrapper">
          <div class="insta">
            <img
              class="insta-icon"
              src="http://www.pngonly.com/wp-content/uploads/2017/06/Instagram-White-PNG.png"
              alt="instagram feed"
            />
            <p class="insta-title">Instagram</p>
          </div>
        </div>
        <br />
        <Instafeed />
        <br />
      </div>
*/}
      <ContactForm />
    </div>
  )
}

export default Homepage
