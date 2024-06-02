import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const SoundKitsPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1>Sound Kits</h1>
        <div className={styles.kitContainer}>
          <div className={styles.kitCard}>
            <img className={styles.kitImage} src="/soundkitspage/soundkits.png" alt="Sound Kit" />
            <h2>West Coast Loop Kit Vol.1</h2>
            <p>$49.95</p>
            <button className={styles.detailsButton}>DETAILS</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SoundKitsPage
