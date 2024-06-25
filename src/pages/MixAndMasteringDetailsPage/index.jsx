import { Button, Image, message } from 'antd'
import React, { useRef, useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const MixAndMasteringDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const messageRef = useRef(null)
  const sendMail = useRef(null)
  const sendName = useRef(null)
  const sendProject = useRef(null)
  const sendPhone = useRef(null)
  const sendBudget = useRef(null)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const handleSendEmail = () => {
    const emailData = {
      email: sendMail.current.value,
      title: `MIX AND MASTERING`,
      name: sendName.current.value,
      message: messageRef.current.value,
      projectName: sendProject.current.value,
      phone: sendPhone.current.value,
      budget: sendBudget.current.value,
    }

  alert('Your inquiry has been sent successfully.')

    if (
      sendMail.current.value !== '' &&
      sendProject.current.value !== '' &&
      sendName.current.value !== '' &&
      messageRef.current.value !== '' &&
      sendProject.current.value !== '' &&
      sendPhone.current.value !== '' &&
      sendBudget.current.value !== ''
    ) {
      fetch('http://database/sendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src="/mainPage/mixmaster.png" alt="Mix and Mastering" className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
          <h1>MIX AND MASTERING</h1>
          <h2>Mixing and Mastering by DJ Problematic</h2>
          <p>ALL MIXED & MASTERED SONGS...</p>
          <ul>
            <li>Are sent with a high quality .wav file (24 bit, 44.1k sample rate)</li>
            <li>Have a 7 day turnaround</li>
            <li>Have 3 free revisions ($10 for every revision afterwards)</li>
          </ul>
          <p>WHEN PURCHASING...</p>
          <p>
            Please provide as much information about the results you'd like as you can, the more the better, examples
            are as follows...
          </p>
          <ul>
            <li>Prominent effects</li>
            <li>Reference track(s)</li>
            <li>Reference artist(s)</li>
          </ul>
          <div className={styles.previewBeatButtons}>
            <button className={styles.getQuoteButton} onClick={openModal}>
              <b>GET A QUOTE</b>
            </button>
            <Button className={styles.share} type="primary">
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
            <h1>MIX AND MASTERING</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <input className={styles.inputField} ref={sendName} type="text" placeholder="ARTIST NAME" />
              <input className={styles.inputField} ref={sendMail} type="email" placeholder="E-MAIL" />
            </div>
            <div className={styles.formRow}>
              <input className={styles.inputField} ref={sendProject} type="text" placeholder="PROJECT NAME" />
            </div>
            <div className={styles.formRow}>
              <input className={styles.inputField} ref={sendPhone} type="text" placeholder="PHONE NUMBER" />
              <input className={styles.inputField} ref={sendBudget} type="text" placeholder="BUDGET AMOUNT (USD)" />
            </div>
            <div className={styles.formRow}>
              <textarea className={styles.textArea} ref={messageRef} placeholder="PROJECT DESCRIPTION"></textarea>
            </div>
            <button className={styles.submitButton} onClick={handleSendEmail} type="submit">
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MixAndMasteringDetailsPage
