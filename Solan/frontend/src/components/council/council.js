import React, { useState } from "react";
import useFetch from "../api";

function CouncilList() {
    const [council, setCouncil] = useState([])
    useFetch("http://127.0.0.1:8000/api/councilposition/", setCouncil)

    return (
        <div>
            {council.map(s => (
                <>
                    <img src={s.photo}></img>
                    <div>{s.name}</div>
                    <div>{s.info}</div>
                    <div>{s.position}</div>
                </>
            ))
            }
        </div>
    )
}

export default CouncilList;
