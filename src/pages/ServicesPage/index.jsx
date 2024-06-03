import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const ServicesPage = () => {
  const navigate = useNavigate()
  const handleCustomBeatDetailsClick1 = () => {
    navigate('/services/custombeat')
  }

  const handleCustomBeatDetailsClick2 = () => {
    navigate('/services/mixandmastering')
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1>Services</h1>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <img
              className={styles.serviceImage}
              src="/mainPage/mixmaster.png"
              alt="Mix and Mastering"
              onClick={handleCustomBeatDetailsClick2}
            />
            <p className={styles.serviceTitle} onClick={handleCustomBeatDetailsClick2}>
              MIX AND MASTERING
            </p>
            <p className={styles.serviceSubtitle}>Quote Request Required</p>
            <button className={styles.detailsButton} onClick={handleCustomBeatDetailsClick2}>
              <b>DETAILS</b>
            </button>
          </div>
          <div className={styles.serviceCard}>
            <img
              className={styles.serviceImage}
              src="/mainPage/custombeat.png"
              alt="Custom Beat"
              onClick={handleCustomBeatDetailsClick1}
            />
            <p className={styles.serviceTitle} onClick={handleCustomBeatDetailsClick1}>
              Custom Beat
            </p>
            <p className={styles.serviceSubtitle}>Quote Request Required</p>
            <button className={styles.detailsButton} onClick={handleCustomBeatDetailsClick1}>
              <b>DETAILS</b>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServicesPage
