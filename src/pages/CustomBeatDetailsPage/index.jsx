import { Button, Image, Typography } from 'antd'
import React, { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const CustomBeatDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src="/mainPage/custombeat.png" alt="Custom Beat" className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.mainTitle}>Custom Beat</h1>
          <h2 className={styles.subTitle}>Custom Beat by DJ Problematic</h2>
          <p className={styles.text}>Are you interested in a Custom Beat?</p>
          <p className={styles.text}>Custom Beats Start At Your Price!</p>
          <p className={styles.text}>
            Send Payment and Email me a description of the Type Beat you would like me to create for you!
          </p>
          <p className={styles.text}>
            <b>YOU GET:</b>
          </p>
          <ul className={styles.text}>
            <li>EXCLUSIVE RIGHTS.</li>
            <li>HIGH QUALITY WAV FILE.</li>
            <li>TRACKOUTS/STEMS FOR MIX AND MASTERING.</li>
            <li>DISCOUNT ON FUTURE BEAT LEASES.</li>
          </ul>
          <p className={styles.text}>
            After the purchase send me a message with all details (Genre, Arranging, Youtube video/Song for reference,
            Key, Tempo, Mood..)
          </p>
          <p className={styles.text}>
            Licensee, owns 50% of publishing rights.
            <br />
            DJ Problematic, owns 50% of publishing rights.
          </p>
          <div className={styles.previewBeatButtons}>
            <button className={styles.getQuoteButton} onClick={openModal}>
              <b>GET A QUOTE</b>
            </button>
            <Button className={styles.share}>
              <Image preview={false} src="/mainPage/share.png" className={styles.shareImg}></Image>
            </Button>
          </div>
        </div>
      </div>
      <Footer />

      <div className={`${styles.modalOverlay} ${isModalOpen ? styles.active : ''}`}>
        <div className={`${styles.modal} ${isModalOpen ? styles.active : ''}`}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <div className={styles.title}>
            <h1>CUSTOM BEAT</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <input className={styles.inputField} type="text" placeholder="ARTIST NAME" />
              <input className={styles.inputField} type="email" placeholder="E-MAIL" />
            </div>
            <div className={styles.formRow}>
              <input className={styles.inputField} type="text" placeholder="PROJECT NAME" />
            </div>
            <div className={styles.formRow}>
              <input className={styles.inputField} type="text" placeholder="PHONE NUMBER" />
              <input className={styles.inputField} type="text" placeholder="BUDGET AMOUNT (USD)" />
            </div>
            <div className={styles.formRow}>
              <textarea className={styles.textArea} placeholder="PROJECT DESCRIPTION"></textarea>
            </div>
            <button className={styles.submitButton} type="submit">
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomBeatDetailsPage
