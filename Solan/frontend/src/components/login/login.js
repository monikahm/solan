import React, {useState} from 'react';


export default function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSublit(e){
        v.preventDefault();
    }

    return (
        <div>
            <form>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <input type="submit" disabled={!validateForm()}>Login</input>
            </form>
        </div>
    )
}