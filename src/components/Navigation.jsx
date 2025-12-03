import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Ancient Economy
        </Link>
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/weather" 
              className={location.pathname === '/weather' ? 'nav-link active' : 'nav-link'}
            >
              Map
            </Link>
          </li>
          <li>
            <Link 
              to="/grain" 
              className={location.pathname === '/grain' ? 'nav-link active' : 'nav-link'}
            >
              Grain Trade
            </Link>
          </li>
          <li>
            <Link 
              to="/justprice" 
              className={location.pathname === '/justprice' ? 'nav-link active' : 'nav-link'}
            >
              Just Price
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
