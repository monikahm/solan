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
                    <p>VLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h1>FAQ</h1>
                    <p>Spørsmål eller noe annet?</p>
                        <button className="FAQButton">Kontakt oss</button>

                </div>
            </div>
        </div>

    )



}

export default Homepage;
