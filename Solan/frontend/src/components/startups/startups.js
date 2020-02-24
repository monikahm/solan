import React, { useState, useEffect } from "react";
import startups from './startups.css';
import useFetch from "../api";

function FetchStartups() {

    const [startups, setStartups] = useState([])
    useFetch("http://127.0.0.1:8000/api/startups/", setStartups)

    return (
        <div className="startups">
            {startups.map((s, index) => (
                <div>
                    <img src={s.photo}></img>
                    <ul key={index}>
                        <li key={index}>
                            <a href={index}>
                                {s.name}
                            </a>
                        </li>
                        <li key={index}>
                            <a href={index}>
                                {s.info}
                            </a>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FetchStartups;