import React from "react";
import "../styling/toolbar.css"

const toolbar = () => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">NTNU School of Entrepreneurship</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Startups</a></li>
                    <li><a href="/">Samarbeidspartnere</a></li>
                    <li><a href="/">Bedrifter</a></li>
                    <a href="#" className="button">Arrangementer</a>
                    <a href="#" className="button">Logg inn</a>
                </ul>
            </div>
        </nav>
    </header>
)


export default toolbar;