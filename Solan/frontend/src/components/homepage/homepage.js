import React from 'react';
import './homepage.css'
import picture from '../../assets/images/bigsolanlogo.PNG'
import picture2 from '../../assets/images/solanpåpinne2.PNG'
// import picture3 from '../../assets/images/partnerspicture.PNG'
import { getAllPartners } from './assets';
import ContactForm from '../contactForm/contactForm';


function Homepage() {
    const allPartners = getAllPartners();
    return (
        <div className="home-grid">
            {/* <div className="boxspacer">
            </div> */}
            <div className="main-container">
                <p>Solan <br />
                    Linjeforening ved <br />
                    NTNUs ENTREPRENØRSKOLE</p>
                <img src={picture} alt="bigsolansolo" className="bigsolanlogo" />
            </div>
            <div className="partners-container">
                {
                    allPartners.map(item => {
                        return <img src={item} />
                    })
                }
            </div>
            <div className="about-us">
                <img src={picture2} alt="solanpåpinne2" className="solanpåpinne2" />
                <div className="about-us-info">
                    <p><b>Om oss: </b>
                    Solan ble stiftet i 2003 og er linjeforeningen ved NTNUsEntreprenørskole. <br />
                        Entreprenørskolen (ES) ved NTNU er et masterprogram innen digital<br />
                        forretningsutvikling ved Institutt for industriell økonomi- ogteknologiledelse.<br />
                        Masterprogrammet er tidligere omtalt som Norges mestinnovative og engasjerende<br />
                        aster. I tidligere kull har hele 75% av studentenegått ut i egenoppstartede<br />
                        selskap, mens de resterende studentene har fåttinnovative stillinger i diverse kjente<br />
                        bedrifter.</p>

                    <p>
                        Solan Linjeforening representerer studentene vedmasterprogrammet, som har en<br />
                        stor rolle innen innovasjonsmiljøet i Trondheim. Solanhar som oppdrag å sikre<br />
                        sosial trivsel for studentene ved Entreprenørskolen.Studentene tilbringer svært<br />
                        mye tid sammen på ES og deres trivsel skal ivaretasgjennom en rekke sosiale<br />
                        arrangement gjennom året.</p>
                    <p><b>«Ikke fordi det er enkelt»</b></p>
                    <p><b>- Solan Gundersen</b></p>
                </div>
            </div>
            <ContactForm />

            {/* <div className="D1">
                <p>INSTAGRAM FEED</p>
            </div>

            <div className="D2">
                <p>INSTAGRAM FEED</p>
            </div>

            <div className="E1">
                <h1>Kontakt oss</h1>
                <p>Send ditt spørsmål, så <br />
                    skal vi prøve å svare <br />
                    innen 2-3 dager</p>
            </div>

            <div className="E2">
                <p>Form</p>
            </div> */}
        </div>
    )
}

export default Homepage;
