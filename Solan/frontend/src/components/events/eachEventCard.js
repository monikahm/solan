import React from 'react'
import { getDateByString } from '../utils/application.utils';
const eventIcon = require('./eventIcon.png');

function EventCard(props) {
    const { item } = props;
    const { title, content, date, signup_link } = item;
    return (
        <div className="each-event-card">
            <div className="event-upper-body">
                <img src={eventIcon} onClick={() => {
                    window.open(signup_link, "_blank")
                }} />
                <p className="event-heading" onClick={() => {
                    window.open(signup_link, "_blank")
                }}> {title} </p>
                <p className="event-body"> {content} </p>
            </div>
            <div className="info-panel">
                <hr className="line-break" />
                <div className="info-details">
                    <p> <span></span> {getDateByString(date)} </p>
                    <button onClick={() => {
                        window.open(signup_link, "_blank")
                    }}>
                        Delta
                    </button>
                </div>
            </div>
        </div>
    )
}
export default EventCard;