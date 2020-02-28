<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import './startups.css';
import useFetch from "../api";
import picture from "../../assets/images/bruce-bannerbilde.png"

=======
import React, { useState } from 'react'
import './startups.css'
import useFetch from '../api'
>>>>>>> e2be99cad6c773532efd12aeff46316fc4daa5f9

function FetchStartups() {
  const [startups, setStartups] = useState([])
  useFetch('http://127.0.0.1:8000/api/startups/', setStartups)

  return (
    <div className="body">
      <div className="Header">
        <p>Header</p>
      </div>
      <div className="contents">
        {startups.map((s, index) => (
          <div className="Card" key={index + s}>
            <img className="startupImage" src={s.photo}></img>

            <div className="startupname">{s.name} </div>

            <div className="startupinfo">{s.info} </div>

<<<<<<< HEAD
        <div className="body">

            <div className="Header">
                <img src={picture}  alt= "bannerpicture" className="banner-pic"/>

            </div>

            <div className="contents">{



                startups.map((s, index) => (
                    <div className="Card">


                        <img className="startupImage"
                             src={s.photo}></img>

                        <div className="startupname">
                            {s.name}    </div>

                        <div className="startupinfo">
                            {s.info} </div>

                            <button className="readmorebtn">Read More</button>


                    </div>
                ))}
            </div>


        </div>

    )


=======
            <div className="Cardbutton">
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
>>>>>>> e2be99cad6c773532efd12aeff46316fc4daa5f9
}

export default FetchStartups
