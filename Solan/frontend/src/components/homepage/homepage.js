import React, { useState } from 'react';
import './homepage.css'
import picture from "../../assets/images/bruce-bannerbilde.png"
import picture2 from "../../assets/images/partnere.PNG"

function Homepage() {

    return (


        <div className="home-grid">


        <div className="boxtop">

            <div className="boxtop_left">
                <h1>
                    Solan<br />
                    linjeforening ved<br />
                    NTNUs<br />
                    Entreprenørskole<br />
                </h1>

            </div>

            <div className="boxtop_right">

            </div>
            <div className="boxtop_bottom">
                <img src={picture2} alt="partnere" className="partnere" />
            </div>

        </div>

        <div className="boxmiddle">
            <img src={picture} alt="frontpage_banner" className="frontpage_banner" />

            <p>Har du en god ide?</p>
            <p>Ta kontakt og få all hjelp du trenger</p>
        </div>


        <div className="boxbottom">

            <div className="boxbottomright">
                <h1>Hvorfor gjør vi det?</h1>
                <p>Vi jobber for å være et mangfoldig miljø og aktivitetsforbud, med muligheter for alle våre studenter, og et sted morgendagnens grundere vil være.</p>

                <h1>Hvorfor gjør vi det?</h1>
                <p>Vi jobber for å være et mangfoldig miljø og aktivitetsforbud, med muligheter for alle våre studenter, og et sted morgendagnens grundere vil være.</p>

                <h1>Hvorfor gjør vi det?</h1>
                <p>Vi jobber for å være et mangfoldig miljø og aktivitetsforbud, med muligheter for alle våre studenter, og et sted morgendagnens grundere vil være.</p>
            </div>


            <div className= "boxbottomleft">
                <h2>FAQ</h2>
                <p>Spørsmål eller noe annet?</p>

                <button className="FAQButton">Kontakt oss</button>
            </div>



        </div>




        </div>

    )



}

export default Homepage;
