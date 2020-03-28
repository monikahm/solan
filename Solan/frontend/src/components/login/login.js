import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import './login.css'
import { LoginAPI, logout } from '../../services/loginservices'
import Register from './register'
import { Router, Link } from '@reach/router'
import { setConstantValue } from 'typescript'

export default function Login() {
  const { user, loggedIn } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const user = await LoginAPI(
        'http://localhost:8000/api/login',
        email,
        password
      )
      dispatch({ type: 'setUser', user })
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className="login">
      {loggedIn} {user}
      {loggedIn ? (
        <button
          onClick={() => {
            dispatch({ type: 'setUser', user: null })
            logout()
          }}
        >
          Logout
        </button>
      ) : (
          <>
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
            <div>
              <Link to="/register">Registrer her!</Link>
            </div>
            <Router>
              <Register path="/register">Register</Register>
            </Router>
          </>
        )}
    </div>
  )
}
