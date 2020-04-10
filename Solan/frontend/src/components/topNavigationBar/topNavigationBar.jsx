import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import './styles.css'
const MenuIcon = require('./menuIcon.svg');

function TopNavigationBar() {
    const [currentWidth, handleWidthChange] = useState(window.innerWidth);
    const [menuToggle, handleMenuToggle] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", getCurrentWidth);
    });

    const getCurrentWidth = () => {
        handleWidthChange(window.innerWidth)
    }

    const handleMenuOptionClick = () => {
        window.scrollTo(0, 0);
        handleMenuToggle(false)
    }
    return (
        <React.Fragment>
            {
                currentWidth > 700 &&
                <nav className="Navbar">
                    <a href="homepage" className="logo"> Solan </a>
                    <div className="Nav_Links">
                        <Link to="startups">Startups</Link>
                        <Link to="council">Styremedlemmer</Link>
                        <Link to="partners">For Bedrifter</Link>
                        <Link to="events">Arrangementer</Link>
                    </div>
                </nav>
            }
            {
                currentWidth <= 700 &&
                <nav className="Navbar" style={{ height: menuToggle && 260 }}>
                    <div className="smaller-menu">
                        <a href="homepage" className="logo" style={{ marginLeft: menuToggle && 65 }}> Solan </a>
                        <div className={menuToggle ? "menu-icon" : ''}>
                            <img
                                src={MenuIcon}
                                height="25"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleMenuToggle(!menuToggle)}
                            />
                        </div>
                    </div>
                    {
                        menuToggle &&
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                            </div>
                            <div className="Nav_Links">
                                <a onClick={handleMenuOptionClick} href="/startups">Startups</a>
                                <a onClick={handleMenuOptionClick} href="/council">Styremedlemmer</a>
                                <a onClick={handleMenuOptionClick} href="/partners">For Bedrifter</a>
                                <a onClick={handleMenuOptionClick} href="/events">Arrangementer</a>
                            </div>
                        </div>
                    }
                </nav>
            }
        </React.Fragment>
    )
}

export default TopNavigationBar;
