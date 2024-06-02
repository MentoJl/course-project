import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const AboutMePage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1>About Me</h1>
        <img src="/aboutmepage/aboutme.png" alt="Logo" className={styles.logo} />
        <h2>Biography</h2>
        <p>
          Buy 1, Get 1 Free - Automatically once you have two beats in your cart. Purchased beats only have 1 tag at the
          start. Shoreline Mafia Type Beats
        </p>
        <p>Young Nudy Type Beats Key Glock Type Beats</p>
      </div>
      <Footer />
    </div>
  )
}

export default AboutMePage
