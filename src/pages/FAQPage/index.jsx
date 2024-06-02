import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const FAQPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.post}>
          <img src="/faqpage/faqlogo.png" alt="FAQ" className={styles.postImage} />
          <div className={styles.postContent}>
            <h2 className={styles.postTitle}>Frequently Asked Questions</h2>
            <p className={styles.postExcerpt}>Do you got any questions? Here are some frequently asked questions.</p>
            <button className={styles.readMoreButton}>READ MORE</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQPage
