import { Button, Image, Modal } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const PriceModal = ({ visible, onCancel, title, imgSrc, price }) => {
  return (
    <Modal
      title=""
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={1200}
      styles={{
        content: { backgroundColor: 'black' },
      }}
      closeIcon={<span style={{ color: 'white' }}>X</span>}
    >
      <div className={styles.modalContent}>
        <div className={styles.cartModalLeft}>
          <Image className={styles.modalImage} src={imgSrc} preview={false} />
          <p className={styles.modalTitle}>{title}</p>
        </div>
        <div className={styles.cartModalRight}>
          <div className={styles.licenseRow}>
            <p className={styles.cartModalText}>MP3 Lease:</p>
            <Link
              to={`/cart?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(
                title
              )}&price=34.95&lease=MP3 Lease`}
            >
              <Button className={styles.modalPriceButton}>
                <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                <span className={styles.modalPriceText}>$34.95</span>
              </Button>
            </Link>
          </div>
          <div className={styles.licenseRow}>
            <p className={styles.cartModalText}>WAV Lease:</p>
            <Link
              to={`/cart?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(title)}&price=49.95&lease=WAV Lease`}
            >
              <Button className={styles.modalPriceButton}>
                <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                <span className={styles.modalPriceText}>$49.95</span>
              </Button>
            </Link>
          </div>
          <div className={styles.licenseRow}>
            <p className={styles.cartModalText}>Unlimited WAV:</p>
            <Link
              to={`/cart?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(title)}&price=79.95&lease=Unlimited WAV`}
            >
              <Button className={styles.modalPriceButton}>
                <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                <span className={styles.modalPriceText}>$79.95</span>
              </Button>
            </Link>
          </div>
          <div className={styles.licenseRow}>
            <p className={styles.cartModalText}>Trackout Lease:</p>
            <Link
              to={`/cart?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(title)}&price=99.95&lease=Trackout Lease`}
            >
              <Button className={styles.modalPriceButton}>
                <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                <span className={styles.modalPriceText}>$99.95</span>
              </Button>
            </Link>
          </div>
          <div className={styles.licenseRow}>
            <p className={styles.cartModalText}>Unlimited Trackout:</p>
            <Link
              to={`/cart?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(title)}&price=149.95&lease=Unlimited Trackout`}
            >
              <Button className={styles.modalPriceButton}>
                <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                <span className={styles.modalPriceText}>$149.95</span>
              </Button>
            </Link>
          </div>
          <div className={styles.licenseRow}>
            <p className={styles.cartModalText}>Exclusive Rights:</p>
            <Link
              to={`/cart?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(title)}&price=1000.00&lease=Exclusive Rights`}
            >
              <Button className={styles.modalPriceButton}>
                <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                <span className={styles.modalPriceText}>$1000.00</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PriceModal
