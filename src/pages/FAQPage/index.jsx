import React, { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const FAQPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReadMoreClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.post}>
          <img src="/faqpage/faqlogo.png" alt="FAQ" className={styles.postImage} />
          <div className={styles.postContent}>
            <h2 className={styles.postTitle}>Frequently Asked Questions</h2>
            <p className={styles.postExcerpt}>Do you got any questions? Here are some frequently asked questions.</p>
            <button className={styles.readMoreButton} onClick={handleReadMoreClick}>
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <div className={`${styles.modal} ${isModalOpen ? styles.open : ''}`}>
        <div className={styles.modalContent}>
          <span className={styles.closeButton} onClick={closeModal}>
            &times;
          </span>
          <h2>Frequently Asked Questions</h2>
          <p>
            <strong>What methods of payment do you accept?</strong>
          </p>
          <p>- We accept Paypal and Credit cards.</p>
          <p>
            <strong>What are trackouts?</strong>
          </p>
          <p>
            - Trackouts or stems are the separate audio files. For instance, the kick, snare, piano, hi hats and so on
            are all separate audio files that are in the instrumental. I highly suggest the Premium License for a
            top-notch mix.
          </p>
          <p>
            <strong>How to buy 1 beat and get 1 for free?</strong>
          </p>
          <p>
            - Add 2 beats of the same license type to the cart, the discount applies automatically. Collab beats aren't
            going through discount bulk!
          </p>
          <p>
            <strong>Do you use samples in your beats?</strong>
          </p>
          <p>
            - We use samples in some of my beats. Most of them are royalty-free samples. That means that you don't have
            to clear them before you use them on your album/mixtape.
          </p>
          <p>
            <strong>What is your refund policy?</strong>
          </p>
          <p>
            - All purchases are final and no refunds will be issued under any circumstances. By purchasing, you are
            agreeing to these terms. The reason we cannot provide a refund is because once a digital good has been
            downloaded, it cannot be revoked.
          </p>
          <p>
            <strong>What are the differences between the audio formats?</strong>
          </p>
          <p>
            - MP3s are smaller than WAV files because they are compressed using lossy compression. Lossy compression
            means that some information is lost when the files are made smaller. What is lost usually depends on the
            bitrate of the MP3. High-quality MP3s are less compressed; therefore, they discard less data, but they are
            usually larger in size than lower-quality MP3s. WAV files are uncompressed and are made using the same audio
            specifications that CDs use. This is why a WAV ripped from a CD can sound just as good as the original CD
            version; it is an exact copy. It’s the lack of compression that makes the WAV file large. A three-minute MP3
            encoded at a variable bit rate (VBR) averaging 211 kbps (kilobytes-per-second) can be around 5MB in size. A
            high- quality WAV file of the same song is nearly 10 times that at 45MB in size. We at Trkkbeats recommend
            using WAV files at all times. We offer WAV files with the Premium, Premium+, Unlimited and Exclusive rights
            options.
          </p>
          <p>
            <strong>I can not find a beat. What happened to it?</strong>
          </p>
          <p>- If a beat is removed, its exclusive rights were earned, and it cannot be resold.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
