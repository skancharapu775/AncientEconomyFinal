import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false)
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false)

  // Helper to keep the "Articles" tab active
  const isArticlesActive = ['/articles', '/grain', '/justprice', '/lending'].includes(location.pathname)

  // Helper to keep the "Games" tab active
  const isGamesActive = ['/games', '/connections', '/wordle'].includes(location.pathname)

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
          
          {/* Articles Dropdown Menu */}
          <li 
            onMouseEnter={() => setIsArticlesDropdownOpen(true)}
            onMouseLeave={() => setIsArticlesDropdownOpen(false)}
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
          >
            <Link 
              to="/articles" 
              className={isArticlesActive ? 'nav-link active' : 'nav-link'}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              Articles <span style={{ fontSize: '10px' }}>▼</span>
            </Link>

            {/* Dropdown Content */}
            {isArticlesDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%', 
                left: '-10px',
                backgroundColor: '#fdfbf7', 
                border: '1px solid #8B7355',
                borderRadius: '0 0 4px 4px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                minWidth: '180px',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                padding: '5px 0',
                marginTop: '-1px' 
              }}>
                <Link 
                  to="/grain" 
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#5A4A35',
                    textDecoration: 'none',
                    fontSize: '14px',
                    borderBottom: '1px solid #e6dec8',
                    transition: 'background-color 0.2s',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4e8d0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Grain Trade Column
                </Link>
                <Link 
                  to="/justprice" 
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#5A4A35',
                    textDecoration: 'none',
                    fontSize: '14px',
                    borderBottom: '1px solid #e6dec8',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4e8d0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Just Price Explained
                </Link>
                <Link 
                  to="/measurements" 
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#5A4A35',
                    textDecoration: 'none',
                    fontSize: '14px',
                    borderBottom: '1px solid #e6dec8',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4e8d0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Measurements Reference
                </Link>
                <Link 
                  to="/lending" 
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#5A4A35',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4e8d0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Lending Guide
                </Link>
              </div>
            )}
          </li>

          {/* Games Dropdown Menu */}
          <li 
            onMouseEnter={() => setIsGamesDropdownOpen(true)}
            onMouseLeave={() => setIsGamesDropdownOpen(false)}
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
          >
            <Link 
              to="/games" 
              className={isGamesActive ? 'nav-link active' : 'nav-link'}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              Games <span style={{ fontSize: '10px' }}>▼</span>
            </Link>

            {/* Dropdown Content */}
            {isGamesDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%', 
                left: '-10px',
                backgroundColor: '#fdfbf7', 
                border: '1px solid #8B7355',
                borderRadius: '0 0 4px 4px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                minWidth: '180px',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                padding: '5px 0',
                marginTop: '-1px' 
              }}>
                <Link 
                  to="/connections" 
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#5A4A35',
                    textDecoration: 'none',
                    fontSize: '14px',
                    borderBottom: '1px solid #e6dec8',
                    transition: 'background-color 0.2s',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4e8d0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Athenian Connections
                </Link>
                <Link 
                  to="/wordle" 
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#5A4A35',
                    textDecoration: 'none',
                    fontSize: '14px',
                    borderBottom: '1px solid #e6dec8',
                    transition: 'background-color 0.2s',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4e8d0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Athenian Wordle
                </Link>
                <Link 
                  to="/crossword" 
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#5A4A35',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f4e8d0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Athenian Crossword
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation