import React, { useEffect, useRef } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import styles from './style.module.css';

const ContactMePage = () => {
  const messageRef = useRef(null);



  useEffect(() => {
    const messageTextarea = messageRef.current;
    if (messageTextarea) {
      messageTextarea.style.height = 'auto';
      messageTextarea.style.height = `${messageTextarea.scrollHeight}px`;
    }
  }, []);

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.contactForm}>
        <div className={styles.contactInfo}>Contact</div>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <input className={styles.inputField} type="text" placeholder="YOUR NAME" />
          </div>
          <div className={styles.formRow}>
            <input className={styles.inputField} type="email" placeholder="E-MAIL ADDRESS" />
          </div>
          <div className={styles.formRow}>
            <input className={styles.inputField} type="text" placeholder="SUBJECT" />
          </div>
          <div className={styles.formRow}>
            <textarea
              className={styles.textArea}
              placeholder="MESSAGE"
              onInput={handleInput}
              ref={messageRef}
            ></textarea>
          </div>
          <button className={styles.submitButton} type="submit">
            SEND MESSAGE
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMePage;
