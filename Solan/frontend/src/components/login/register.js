import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Router, Link } from '@reach/router'
import Login from './login'

export default function Register() {
    const { user, loggedIn } = useSelector((state) => state)
    const [profile, setProfile] = useState({
        email: '',
        ntnu_username: '',
        password: '',
        first_name: '',
        last_name: '',
    })

    return (
        <div className="login">
            {loggedIn ? (
                <></>
            ) : (
                    <>
                        <form>
                            <input type="email" placeholder="Email"></input>
                            <input type="text" placeholder="NTNU brukernavn"></input>
                            <input type="password" placeholder="passord"></input>
                            <input type="text" placeholder="Fornavn"></input>
                            <input type="text" placeholder="Etternavn"></input>
                        </form>
                        <div>
                            <Link to="/login">Login!</Link>
                        </div>
                        <Router>
                            <Login path="/login">Login</Login>
                        </Router>
                    </>
                )}
        </div>
    )
}
