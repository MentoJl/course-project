import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.css'

const Header = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [searchVisible, setSearchVisible] = useState(false)

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
          <Link to="/albums" className={styles.menuCase}>
            Albums
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
          {searchVisible && (
            <div className={styles.searchContainer}>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleSearchChange}
                  placeholder="Search beats"
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.searchSubmit}>
                  Search
                </button>
                <button type="button" onClick={toggleSearch} className={styles.searchClose}>
                  X
                </button>
              </form>
            </div>
          )}
        </div>
        <Link to="/cart">
          <div className={styles.headerCase}>
            <img src="/header/cart.png" alt="" className={styles.lypa} />
            <span className={styles.menuCase}>$0.00</span>
          </div>
        </Link>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>Log In</span>
        </div>
      </div>
    </div>
  )
}

export default Header
