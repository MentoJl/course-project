import React from 'react'
import styles from './style.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/header/header.png" alt="Logo" />
        </div>
        <h3>DJ PROBLEMATIC</h3>
      </div>
      <div className={styles.footerColumn}>
        <p className={styles.hoverUnderline}>Home</p>
        <p className={styles.hoverUnderline}>All Beats</p>
        <p className={styles.hoverUnderline}>Albums</p>
        <p className={styles.hoverUnderline}>Sound Kits</p>
      </div>
      <div className={styles.footerColumn}>
        <p className={styles.hoverUnderline}>Custom Beat</p>
        <p className={styles.hoverUnderline}>Faq</p>
        <p className={styles.hoverUnderline}>About Me</p>
        <p className={styles.hoverUnderline}>Contact Me</p>
      </div>
      <div className={styles.footerColumn}>
        <p className={styles.hoverUnderline}>Licensing Info</p>
        <p className={styles.hoverUnderline}>Terms of use</p>
        <p className={styles.hoverUnderline}>Privacy policy</p>
        <p className={styles.hoverUnderline}>YouTube Terms of Service</p>
      </div>
      <div className={styles.footerColumn}>
        <div className={styles.socialIcons}>
          <img src="/footer/youtube.png" alt="" className={styles.youtube} />
          <img src="/footer/instagram.png" alt="" className={styles.instagram} />
          <img src="/footer/facebook.png" alt="" className={styles.facebook} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
