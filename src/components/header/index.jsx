import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.css'

const Header = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [searchVisible, setSearchVisible] = useState(false)
  const searchRef = useRef(null)

  const handleLogoClick = () => {
    navigate('/')
  }

  const toggleSearch = () => {
    setSearchVisible(!searchVisible)
  }

  const handleSearchChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      navigate(`/allbeats?title=${encodeURIComponent(inputValue)}`)
      setSearchVisible(false)
    }
  }

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisible(false)
    }
  }

  useEffect(() => {
    if (searchVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchVisible])

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <img className={styles.logo} src="/header/header.png" alt="Logo" />
      </div>
      <div className={styles.headerMenu}>
        <div className={styles.headerCase}>
          <Link to="/allbeats" className={styles.menuCase}>
            All Beats
          </Link>
        </div>
        <div className={styles.headerCase}>
          <Link to="/soundkits" className={styles.menuCase}>
            Sound Kits
          </Link>
        </div>
        <div className={styles.headerCase}>
          <Link to="/servicespage" className={styles.menuCase}>
            Services
          </Link>
        </div>
        <div className={styles.headerCase}>
          <Link to="/faq" className={styles.menuCase}>
            Faq
          </Link>
        </div>
        <div className={styles.headerCase}>
          <Link to="/contactme" className={styles.menuCase}>
            Contact Me
          </Link>
        </div>
        <div className={styles.headerCase}>
          <Link to="/aboutme" className={styles.menuCase}>
            About Me
          </Link>
        </div>
        <div className={styles.headerCase}>
          <img src="/header/lypa.png" alt="Search" className={styles.lypa} onClick={toggleSearch} />
          <div ref={searchRef} className={`${styles.searchContainer} ${searchVisible ? styles.visible : ''}`}>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={handleSearchChange}
                placeholder="Search Beats"
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
        <Link to="/cart">
          <div className={styles.headerCase}>
            <img src="/header/cart.png" alt="" className={styles.lypa} />
            <span className={styles.menuCase}>$0.00</span>
          </div>
        </Link>
        <div
          className={styles.headerCase}
          onClick={() => {
            window.location.href = 'http://database/Autorisation.php'
          }}
        >
          <span className={styles.menuCase}>Login</span>
        </div>
      </div>
    </div>
  )
}

export default Header
