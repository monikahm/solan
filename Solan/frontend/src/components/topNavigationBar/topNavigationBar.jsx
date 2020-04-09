import React, { Component } from 'react'
import { Link } from '@reach/router'
import './styles.css'
const MenuIcon = require('./menuIcon.svg');

class TopNavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            currentWidth: window.innerWidth,
            menuToggle: false,
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.getCurrentWidth);
    }

    getCurrentWidth = () => {
        this.setState({
            currentWidth: window.innerWidth
        })
    }

    handleMenuClick = () => {
        this.setState({
            menuToggle: !this.state.menuToggle
        })
    }

    handleMenuOptionClick = () => {
        window.scrollTo(0, 0);
        this.setState({
            menuToggle: false
        })
    }

    render() {
        const { currentWidth, menuToggle } = this.state;
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
                            <div className={menuToggle ? "menu-icon" : ''}>
                                <img
                                    src={MenuIcon}
                                    height="25"
                                    style={{ cursor: 'pointer' }}
                                    onClick={this.handleMenuClick}
                                />
                            </div>
                            <a href="homepage" className="logo" style={{ marginLeft: menuToggle && 65 }}> Solan </a>
                        </div>
                        {
                            menuToggle &&
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div>
                                </div>
                                <div className="Nav_Links">
                                    <a onClick={this.handleMenuOptionClick}>Startups</a>
                                    <a onClick={this.handleMenuOptionClick}>Styremedlemmer</a>
                                    <a onClick={this.handleMenuOptionClick}>For Bedrifter</a>
                                    <a onClick={this.handleMenuOptionClick}>Arrangementer</a>
                                </div>
                            </div>
                        }
                    </nav>
                }
            </React.Fragment>
        )
    }
}

export default TopNavigationBar;
