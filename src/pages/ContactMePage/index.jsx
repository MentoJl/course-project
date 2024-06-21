import React, { useEffect, useRef } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import styles from './style.module.css';

const ContactMePage = () => {
  const messageRef = useRef(null)
  const sendMail = useRef(null)
  const sendName = useRef(null)
  const sendTitle = useRef(null)



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

  const handleSendEmail = () => {
    const emailData = {
      email: sendMail.current.value,
      title: sendTitle.current.value,
      name: sendName.current.value,
      message: messageRef.current.value,
    };

    if (sendMail.current.value !== ''
      && sendTitle.current.value !== ''
      && sendName.current.value !== ''
      && messageRef.current.value !== ''
    ) {
    fetch('http://database/sendEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    }
 }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.contactForm}>
        <div className={styles.contactInfo}>Contact</div>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <input ref={sendName} className={styles.inputField} type="text" placeholder="NAME" />
          </div>
          <div className={styles.formRow}>
            <input ref={sendMail} className={styles.inputField} type="email" placeholder="E-MAIL" />
          </div>
          <div className={styles.formRow}>
            <input ref={sendTitle} className={styles.inputField} type="text" placeholder="TITLE" />
          </div>
          <div className={styles.formRow}>
            <textarea
              className={styles.textArea}
              placeholder="MESSAGE"
              onInput={handleInput}
              ref={messageRef}
            ></textarea>
          </div>
          <button className={styles.submitButton} onClick={handleSendEmail}>
            SEND MESSAGE
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMePage;
