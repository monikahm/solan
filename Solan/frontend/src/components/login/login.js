import React, { useState } from 'react';
import './login.css'
import LoginAPI from '../../services/loginservices';


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        LoginAPI('http://localhost:8000/api/login', email, password)
        e.preventDefault();
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)}></input>
                <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input>
                <input type="submit" onClick={handleSubmit}></input>
            </form>
        </div>
    )
}