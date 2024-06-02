import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const CustomBeatPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1>Services</h1>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImage} src="/mainPage/mixmaster.png" alt="Mix and Mastering" />
            <p className={styles.serviceTitle}>MIX AND MASTERING</p>
            <p className={styles.serviceSubtitle}>Quote Request Required</p>
            <button className={styles.detailsButton}>
              <b>DETAILS</b>
            </button>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImage} src="/mainPage/custombeat.png" alt="Custom Beat" />
            <p className={styles.serviceTitle}>Custom Beat</p>
            <p className={styles.serviceSubtitle}>Quote Request Required</p>
            <button className={styles.detailsButton}>
              <b>DETAILS</b>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CustomBeatPage
