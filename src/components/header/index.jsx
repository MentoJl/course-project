import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/header/header.png" alt="" className={styles.logo} />
      <div className={styles.headerMenu}>
        <div className={styles.headerCase}>
          <span>All Beats</span>
        </div>
        <div className={styles.headerCase}>
          <span>Albums</span>
        </div>
        <div className={styles.headerCase}>
          <span>
            <Link to="/custombeat">Custom Beat</Link>
          </span>
        </div>
        <div className={styles.headerCase}>
          <span>Faq</span>
        </div>
        <div className={styles.headerCase}>
          <span>Contact Me</span>
        </div>
        <div className={styles.headerCase}>
          <span>About Me</span>
        </div>
        <div className={styles.headerCase}>
          <img src="/header/lypa.png" alt="" className={styles.lypa} />
        </div>
        <div className={styles.headerCase}>
          <img src="/header/cart.png" alt="" className={styles.lypa} />
          <span>$0.00</span>
        </div>
        <div className={styles.headerCase}>
          <span>Log In</span>
        </div>
      </div>
    </div>
  )
}

export default Header
