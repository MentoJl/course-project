import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const CartPage = () => {
  const query = useQuery();
  const imgSrc = query.get('imgSrc');
  const title = query.get('title');
  const lease = query.get('lease');
  const price = query.get('price');

  return (
    <div className={styles.cartPageContainer}>
      <Header />

      <main className={styles.mainContent}>
        <h1>Cart</h1>
        <div className={styles.cartTable}>
          <div className={styles.cartItem}>
            <div className={styles.productInfo}>
              <div className={styles.image}>
                <img src={imgSrc} alt="" />
              </div>
              <div className={styles.productDetails}>
                <h2>{title} by DJ Problematic</h2>
                <p>{lease}</p>
              </div>
            </div>
            <div className={styles.productPrice}>
              <p>
                <b>${price}</b>
              </p>
              <button className={styles.removeButton}>X</button>
            </div>
          </div>
        </div>

        <div className={styles.checkoutSection}>
          <div className={styles.priceSummary}>
            <p>
              Gross: <b>${price}</b>
            </p>
            <p>
              Total: <b>${price}</b>
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
