import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const SoundKitsPage = () => {
  const navigate = useNavigate()
  const handleDetailsClick = () => {
    navigate('/soundkits/westcoastloopkitvol1')
  }
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>Sound Kits</h1>
        <div className={styles.kitContainer}>
          <div className={styles.kitCard}>
            <img className={styles.kitImage} src="/soundkitspage/soundkits.png" alt="Sound Kit" onClick={handleDetailsClick}/>
            <div className={styles.textArea} onClick={handleDetailsClick}>
              <h2>West Coast Loop Kit Vol.1</h2>
            </div>
            <button className={styles.detailsButton} onClick={handleDetailsClick}>
              DETAILS
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SoundKitsPage
