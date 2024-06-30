import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './style.module.css'
// import { Link, useLocation } from 'react-router-dom'
// import axios from 'axios'
import axios from 'axios'
import Cookies from 'js-cookie'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Header = () => {
  const query = useQuery()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [searchVisible, setSearchVisible] = useState(false)
  const searchRef = useRef(null)

  const login = query.get('login') || ''
  const [logTitle, setLogTitle] = useState(Cookies.get('current_login') ? 'Log out' : 'Login')

  useEffect(() => {
    if (login !== '') {
      Cookies.set('current_login', login, 1)
      setLogTitle('Log out')
    }
  }, [login])

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

  const handleGoToUserProfile = () => {
    axios
      .get(`http://database/takeAction?login=${Cookies.get('current_login')}&action=like`)
      .then((response) => {
        const newList = []
        response.data.map((data) => {
          newList.push(data.beat_name)
        })
        const likedBeats = newList.length > 0 ? newList.join(',') : undefined

        if (logTitle === 'Login') window.location.href = 'http://database/Autorisation.php?window=Login'
        else window.location.href = `http://localhost:3000/userprofile?title=${likedBeats}`
      })
      .catch((error) => {
        console.error('Ошибка при выполнении POST запроса:', error)
      })
  }

  const handleLog = () => {
    if (logTitle === 'Login') window.location.href = 'http://database/Autorisation.php?window=Login'
    else {
      Cookies.remove('current_login')
      Cookies.set('totalPrice', '0.00')
      window.location.href = 'http://localhost:3000/'
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
            <span className={styles.menuCase}>${Cookies.get('totalPrice')}</span>
          </div>
        </Link>
        <div className={styles.headerCase} onClick={handleGoToUserProfile}>
          <img src="/header/userprofile.png" alt="" className={styles.userprofile} />
        </div>
        <div className={styles.headerCase} onClick={handleLog}>
          <span className={styles.menuCase}>{logTitle}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
