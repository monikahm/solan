import React, { useState, useEffect } from "react";
import startups from './startups.css'

function FetchStartups() {
    const [startups, setStartup] = useState([]);

    async function fetchStartups() {
        const res = await fetch("http://127.0.0.1:8000/api/startups/");
        const data = await res.json()
        setStartup(data)
    }

    useEffect(() => {
        fetchStartups();
    }, []);


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