import React from 'react'
import './partners.css'
import picture10 from '../../assets/images/arrow.PNG'
import picture11 from '../../assets/images/computer.PNG'
import ContactForm from '../contactForm/contactForm'

function Partners() {
  return (
    <div className="partners-home-grid">
      <div className="partners_boxspacer"></div>
      <div className="partners_A">
        <p className="partners_banner_image_text">
          Bedrifter
        </p>
      </div>

      <div className="partners_B">
        <h1>Solan linjeforening</h1>
        <h2>For bedrifter</h2>
        <p>
          Vi i linjeforeningen ønsker å danne meningsfylte og nyttige samarbeid
          med næringslivet! Vi er opptatt av at våre samarbeid skal <br />
          inspirere og skape verdi for begge parter. Vi er åpne for å være
          kreative rundt hva som kan oppnås sammen, men her er noen <br />
          forslag.
        </p>
      </div>
      <div className="partners-container-panel">

        <div className="each-partner">
          <img src={picture10} alt="arrow" className="arrow" />

          <div className="details">
            <h1>
              Workshop med studentene <br />
              på NTNUs Entreprenørskole
        </h1>
            <p>
              {' '}
              Vi kan sette av en dag der dere får komme og presenterederes bedrift
          <br />
              og vi kan undersøke spennende caser eller problemstillingersammen.
          <br />
              Her finnes det mange spennende utforminger og det har tidligere blitt
          <br />
              gjennomført alt fra pitche-konkurranser til markedsundersøkelser.
        </p>
          </div>
        </div>

        <div className="each-partner">
          <img src={picture11} alt="computer" className="computer" />
          <div className="details">
            <h1>
              Synliggjøring og profilering <br />
              på vår nettside og
          <br /> sosialemedier
        </h1>
            <p>
              Våre samarbeidspartnere vil bli frontet på denne nettsiden og
          <br /> kan i tillegg promoteres gjennom våre kanaler i sosiale medier.
        </p>
          </div>
        </div>

        <div className="each-partner">
          <img src={picture10} alt="arrow" className="arrow" />
          <div className="details">
            <h1>
              Workshop med studentene <br />
              på NTNUs Entreprenørskole
        </h1>
            <p>
              {' '}
              Vi kan sette av en dag der dere får komme og presenterederes bedrift
          <br />
              og vi kan undersøke spennende caser eller problemstillingersammen.
          <br />
              Her finnes det mange spennende utforminger og det har tidligere blitt
          <br />
              gjennomført alt fra pitche-konkurranser til markedsundersøkelser.
        </p>{' '}
          </div>
        </div>
      </div>

      <div className="contact_form_A1">
        <ContactForm />
      </div>
    </div>
  )
}
export default Partners
