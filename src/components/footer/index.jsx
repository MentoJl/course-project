import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <div className={styles.logoContainer}>
          <Link to="/" onClick={scrollToTop}>
            <img className={styles.logo} src="/header/header.png" alt="Logo" />
          </Link>
        </div>
        <h3>DJ PROBLEMATIC</h3>
      </div>
      <div className={styles.footerColumn}>
        <Link to="/" className={styles.hoverUnderline}>
          Home
        </Link>
        <p className={styles.hoverUnderline}>All Beats</p>
        <Link to="/soundkits" className={styles.hoverUnderline}>
          Sound Kits
        </Link>
        <Link to="/albums" className={styles.hoverUnderline}>
          Albums
        </Link>
      </div>
      <div className={styles.footerColumn}>
        <Link to="/custombeat" className={styles.hoverUnderline}>
          Services
        </Link>
        <Link to="/faq" className={styles.hoverUnderline}>
          Faq
        </Link>
        <Link to="/aboutme" className={styles.hoverUnderline}>
          About Me
        </Link>
        <Link to="/contactme" className={styles.hoverUnderline}>
          Contact Me
        </Link>
      </div>
      <div className={styles.footerColumn}>
        <Link to="/licensinginfo" className={styles.hoverUnderline}>
          Licensing Info
        </Link>
        <p className={styles.hoverUnderline}>Terms of use</p>
        <p className={styles.hoverUnderline}>Privacy policy</p>
        <p className={styles.hoverUnderline}>YouTube Terms of Service</p>
      </div>
      <div className={styles.footerColumn}>
        <div className={styles.socialIcons}>
          <a href="https://www.youtube.com/channel/UCAqev5VsGcsRzFXw3v5VzEw" target="_blank" rel="noopener noreferrer">
            <img src="/footer/youtube.png" alt="" className={styles.youtube} />
          </a>
          <a href="https://www.instagram.com/djproblematic/" target="_blank" rel="noopener noreferrer">
            <img src="/footer/instagram.png" alt="" className={styles.instagram} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100075971440756" target="_blank" rel="noopener noreferrer">
            <img src="/footer/facebook.png" alt="" className={styles.facebook} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
