import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const CustomBeatPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1>Custom Beat Page</h1>
        {/* Другой контент страницы */}
      </div>
      <Footer />
    </div>
  )
}

export default CustomBeatPage
