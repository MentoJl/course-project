import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.css'

const Header = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <img className={styles.logo} src="/header/header.png" alt="Logo" />
      </div>
      <div className={styles.headerMenu}>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>
            <Link to="/allbeats">All Beats</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>
            <Link to="/albums">Albums</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>
            <Link to="/soundkits">Sound Kits</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>
            <Link to="/servicespage">Services</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>
            <Link to="/faq">Faq</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>
            <Link to="/contactme">Contact Me</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>
            <Link to="/aboutme">About Me</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <img src="/header/lypa.png" alt="" className={styles.lypa} />
        </div>
        <div className={styles.headerCase}>
          <img src="/header/cart.png" alt="" className={styles.lypa} />
          <span className={styles.menuCase}>$0.00</span>
        </div>
        <div className={styles.headerCase}>
          <span className={styles.menuCase}>Log In</span>
        </div>
      </div>
    </div>
  )
}

export default Header
