import React from 'react'
import { getDateByString, truncateTitle } from '../utils/application.utils';
const eventIcon = require('./eventIcon.png');

function EventCard(props) {
    const { item } = props;
    const { title, content, date, time, signup_link, photo } = item;

    return (
        <div className="each-event-card">
            <div className="event-upper-body">
                <img src={eventIcon} onClick={() => {
                    window.open(signup_link, "_blank")
                }} />
                <p className="event-heading"
                style={{ fontSize: title.length > 20 && 20}}
                onClick={() => {
                    window.open(signup_link, "_blank")
                }}> {truncateTitle(title, 35)} </p>
                <p className="event-body"> {truncateTitle(content, 105)} </p>
            </div>
            <div className="info-panel">
                <hr className="line-break" />
                <div className="info-details">
                    <div className="date-time-div">
                        <p> <span></span> {getDateByString(date)} </p>
                        <p className="time-value"> {time} </p>
                    </div>
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