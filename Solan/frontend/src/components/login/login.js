import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import './login.css'
import { LoginAPI, logout } from '../../services/loginservices'

export default function Login() {
  const alert = useSelector((state) => state.alert)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  function handleSubmit(e) {
    LoginAPI('http://localhost:8000/api/login', email, password)
    setIsLogged(true)
    e.preventDefault()
  }

  return (
    <div className="login">
      {isLogged ? (
        <button
          onClick={() => {
            setIsLogged(false)
            logout()
          }}
        >
          Logout
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type="submit" onClick={handleSubmit}></input>
        </form>
      )}
    </div>
  )
}
