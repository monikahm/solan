import React from 'react'
import { Link } from '@reach/router'
import picture4 from '../../assets/images/solanfooterlogo.PNG'
import './styles.css'

function BottomPanel() {
    return (
        <React.Fragment>
            <div className="F">
                <div className="footer_logo">
                    <img
                        src={picture4}
                        alt="solanfooterlogo"
                        className="solanfooterlogo"
                        height="230px"
                    />
                </div>
                <div className="footer_links">
                    <Link to="contact">Kontakt oss</Link>
                </div>
            </div>

            <div className="G">
                <p>Copyright and All rights reserved | Solan linjeforening, 2020</p>
            </div>
        </React.Fragment>
    )
}

export default BottomPanel;
