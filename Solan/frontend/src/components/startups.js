import React, { useState, useEffect } from "react";

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
        <div>
            {startups.map((s, index) => (
                <ul key={index}><li key={index}><a href={index}>{s.name}
                </a></li></ul>
            ))}
        </div>
    )
}

export default FetchStartups;