import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Router, Link } from '@reach/router'
import { RegisterAPI } from '../../services/loginservices'
import Login from './login'
import userManager from '../../services/userRegister'

export default function Register() {
    const { user, loggedIn } = useSelector((state) => state)
    const [profile, setProfile] = useState({
        email: '',
        ntnu_username: '',
        password: '',
        first_name: '',
        last_name: '',
    })

    const updateField = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            userManager.signinRedirect();
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <div className="login">
            {loggedIn ? (
                <></>
            ) : (
                    <>
                        <form>
                            <input name="email" value={profile.email} onChange={updateField} type="email" placeholder="Email"></input>
                            <input name="ntnu_username" value={profile.ntnu_username} onChange={updateField} type="text" placeholder="NTNU brukernavn"></input>
                            <input name="password" value={profile.password} onChange={updateField} type="password" placeholder="passord"></input>
                            <input name="first_name" value={profile.first_name} onChange={updateField} type="text" placeholder="Fornavn"></input>
                            <input name="last_name" value={profile.last_name} onChange={updateField} type="text" placeholder="Etternavn"></input>
                            <input type="submit" onClick={handleSubmit}></input>
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
