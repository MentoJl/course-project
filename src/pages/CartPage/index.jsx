import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const CartPage = () => {
  const query = useQuery()
  const imgSrc = decodeURIComponent(query.get('imgSrc') || '')
  const title = decodeURIComponent(query.get('title') || '')
  const lease = decodeURIComponent(query.get('lease') || '')
  const price = decodeURIComponent(query.get('price') || '')

  const [cartItems, setCartItems] = useState(() => {
    const cartItemsCookie = Cookies.get(Cookies.get('current_login'))
    return cartItemsCookie ? JSON.parse(cartItemsCookie) : []
  })

  useEffect(() => {
    Cookies.set(Cookies.get('current_login'), JSON.stringify(cartItems), { expires: 7 })
    console.log('COOKIE', Cookies.get('cartItems'))
  }, [cartItems])

  useEffect(() => {
    if (title && lease && price) {
      const newItem = { imgSrc, title, lease, price }

      const itemExists = cartItems.some((item) => item.title === title && item.lease === lease && item.price === price)

      if (!itemExists) {
        setCartItems((prevItems) => [...prevItems, newItem])
      }

      // setCartItems((prevItems) => [...prevItems, newItem])
    }
  }, [imgSrc, title, lease, price])

  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index))
  }

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)

  useEffect(() => {
    Cookies.set('totalPrice', totalPrice, { expires: 7 })
  }, [totalPrice])

  return (
    <div className={styles.cartPageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1>Cart</h1>
        <div className={styles.cartTable}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className={styles.cartItem} key={index}>
                <div className={styles.productInfo}>
                  <div className={styles.image}>
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className={styles.productDetails}>
                    <h2>{item.title} by DJ Problematic</h2>
                    <p>{item.lease}</p>
                  </div>
                </div>
                <div className={styles.productPrice}>
                  <p>
                    <b>${item.price}</b>
                  </p>
                  <button className={styles.removeButton} onClick={() => handleRemoveItem(index)}>
                    X
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className={styles.checkoutSection}>
          <div className={styles.priceSummary}>
            <p>
              Gross: <b>${totalPrice}</b>
            </p>
            <p>
              Total: <b>${totalPrice}</b>
            </p>
          </div>
          <button className={styles.checkoutButton} disabled={cartItems.length === 0}>
            PROCEED TO CHECKOUT
          </button>
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
