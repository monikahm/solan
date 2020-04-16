import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import './login.css'
import { LoginAPI, logout } from '../../services/loginservices'
import Register from './register'
import { Router, Link } from '@reach/router'

export default function Login() {
  const { user, loggedIn, username } = useSelector((state) => state.authentication)
  console.log('username:', username)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const user = await LoginAPI(email, password)
      dispatch({ type: 'setUser', user: user })
      dispatch({ type: 'setUsername', username: email })
    } catch (ex) {
      console.log(ex)
    }
    await sleep(500)
    window.open('/study', '_self')
  }

  return (
    <div className="login">
      {loggedIn} {user} {username}
      {localStorage.getItem('token') ? (
        <div className="logout-button">
          <button
            onClick={() => {
              dispatch({ type: 'setUser', user: null })
              dispatch({ type: 'setUsername', username: null })
              logout()
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
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
