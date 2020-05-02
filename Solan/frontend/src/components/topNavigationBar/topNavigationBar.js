import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import './styles.css'
import { topNavigationTabs } from '../utils/utils'
import logo from '../../assets/images/bigsolanlogo.PNG'
import CheckProfile from '../utils/checkAuthProfile'
import CheckEvents from "../utils/checkAuthEvents";
import { logout } from '../../services/loginservices'
import { useDispatch } from 'react-redux'

const MenuIcon = require('./menuIcon.svg')

function TopNavigationBar() {
  const [currentWidth, handleWidthChange] = useState(window.innerWidth)
  const [menuToggle, handleMenuToggle] = useState(false)
  const [currentTab, handleCurrentTab] = useState(-1)
  const [loggedIn, handleLogin] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('resize', getCurrentWidth)
    updateTab(window.location && window.location.pathname)
  })

  const getCurrentWidth = () => {
    if (window.innerWidth > 700) {
      handleMenuToggle(false)
    }
    handleWidthChange(window.innerWidth)
  }

  const handleMenuOptionClick = (e) => {
    window.scrollTo(0, 0)
    handleMenuToggle(false)
    const clickedTab = e.target.href
    updateTab(clickedTab)
  }

  const updateTab = (clickedTab) => {
    let tabValue =
      clickedTab && clickedTab.includes('startups')
        ? 0
        : clickedTab.includes('council')
        ? 1
        : clickedTab.includes('partners')
        ? 2
        : clickedTab.includes('events')
        ? 3
        : -1
    handleCurrentTab(tabValue)
  }

  const onLinkClick = (e) => {
    const clickedTab = e.target.href
    updateTab(clickedTab)
  }

  return (
    <React.Fragment>
      {currentWidth > 980 && (
        // <div style={{ height: 50, width: '100%', backgroundColor: 'red' }}>
        // </div>
        <nav className="Navbar">
          <a href="homepage" className="logo">
            {' '}
            <img
              src={logo}
              alt="solanfooterlogo"
              className="solanfooterlogo"
              height="60px"
            />{' '}
          </a>
          <div className="Nav_Links">
            {topNavigationTabs.map((item, index) => {
              const eachLink =
                index === currentTab ? (
                  <Link style={{ color: '#f85f73' }} to={item.to} key={index}>
                    {item.label}
                  </Link>
                ) : (
                  <Link to={item.to} onClick={onLinkClick} key={index}>
                    {item.label}
                  </Link>
                )
              return eachLink
            })}
            {/* <Link to="startups">Startups</Link>
                        <Link to="council">Styremedlemmer</Link>
                        <Link to="partners">For Bedrifter</Link>
                        <Link to="events">Arrangementer</Link> */}
                        <CheckProfile/>
                        <CheckEvents />
            <a href="http://esaf.no/" target="_blank">
              {' '}
              ESAF{' '}
            </a>
            {}
            {!localStorage.getItem('token') ? (
              <a href="/login" className="login-button">
                {' '}
                Logg inn{' '}
              </a>
            ) : (
              <button
                className="logout-button"
                onClick={() => {
                  dispatch({ type: 'setUser', user: null })
                  dispatch({ type: 'setUsername', username: null })
                  logout()
                  window.open('/', '_self')
                }}
              >
                {' '}Logg ut{' '}
              </button>
            )}
          </div>
        </nav>
      )}
      {currentWidth <= 980 && (
        <nav className="Navbar" style={{ height: menuToggle && 330 }}>
          <div className="smaller-menu">
            <a href="homepage" className="logo">
              {' '}
              Solan{' '}
            </a>
            <div className={menuToggle ? 'menu-icon-active' : 'menu-icon'}>
              <img
                src={MenuIcon}
                height="25"
                style={{ cursor: 'pointer', marginRight: '12px' }}
                onClick={() => handleMenuToggle(!menuToggle)}
              />
            </div>
          </div>
          {menuToggle && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}
            >
              <div className="Nav_Links">
                {topNavigationTabs.map((item, index) => {
                  const eachLink =
                    index === currentTab ? (
                      <Link
                        key={index}
                        style={{ color: '#f85f73' }}
                        to={item.to}
                        onClick={handleMenuOptionClick}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link to={item.to} onClick={handleMenuOptionClick} key={index}>
                        {item.label}
                      </Link>
                    )
                  return eachLink
                })}
                <a href="http://esaf.no/" target="_blank">
                  {' '}
                  ESAF{' '}
                </a>
                {!loggedIn && (
                  <a href="/login" className="login-button">
                    {' '}
                    Logg inn{' '}
                  </a>
                )}
              </div>
            </div>
          )}
        </nav>
      )}
    </React.Fragment>
  )
}

export default TopNavigationBar
