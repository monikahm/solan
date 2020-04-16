import React from 'react'
import { Link } from '@reach/router'
import picture4 from '../../assets/images/solanfooterlogo.PNG'
import './styles.css'
const FBIcon = require('./assets/facebook-icon.png');
const TwitterIcon = require('./assets/twitter-icon.png');
const InstagramIcon = require('./assets/instagram-icon.png');

function BottomPanel() {
    return (
        <React.Fragment>
            <div className="F">
                <div>
                    <img
                        src={picture4}
                        alt="solanfooterlogo"
                        className="solanfooterlogo"
                        height="230px"
                    />
                </div>
                <div className="footer_links">
                    <Link to="/">Hjem</Link>
                    <Link to="contact">Kontakt oss</Link>
                    <Link to="council">Styremedlemmer</Link>
                </div>
                <div className="footer_links">
                    <a href="https://www.instagram.com/solanlinjeforening/" target="_blank">
                        <img src={FBIcon} />
                    </a>
                    <a href="https://www.instagram.com/solanlinjeforening/" target="_blank">
                        <img src={TwitterIcon} />
                    </a>
                    <a href="https://www.instagram.com/solanlinjeforening/" target="_blank">
                        <img src={InstagramIcon} />
                    </a>
                </div>
            </div>

            <div className="G">
                <p>Copyright and All rights reserved | Solan linjeforening, 2020</p>
            </div>
        </React.Fragment>
    )
}

export default BottomPanel;
