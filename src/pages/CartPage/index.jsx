import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const CartPage = () => {
  return (
    <div className={styles.cartPageContainer}>
      <Header />

      <main className={styles.mainContent}>
        <h1>Cart</h1>
        <div className={styles.cartTable}>
          <div className={styles.cartItem}>
            <div className={styles.productInfo}>
              <div className={styles.image}>
                <img src="/test/beef.png" alt="" />
              </div>
              <div className={styles.productDetails}>
                <h2>Beef by DJ Problematic</h2>
                <p>WAV Lease (WAV, MP3)</p>
              </div>
            </div>
            <div className={styles.productPrice}>
              <p>
                <b>$49.95</b>
              </p>
              <button className={styles.removeButton}>X</button>
            </div>
          </div>
        </div>

        <div className={styles.checkoutSection}>
          <div className={styles.priceSummary}>
            <p>
              Gross: <b>$49.95</b>
            </p>
            <p>
              Total: <b>$49.95</b>
            </p>
          </div>
          <button className={styles.checkoutButton}>PROCEED TO CHECKOUT</button>
          <p className={styles.termsText}>
            By clicking the button you accept the product(s) License Agreement(s) <br />
            <br />
          </p>
        </div>
      </main>

      <Footer className={styles.footer} />
    </div>
  )
}

export default CartPage
