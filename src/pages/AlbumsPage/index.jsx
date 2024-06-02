import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const AlbumsPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1>Albums</h1>
        <div className={styles.albumContainer}>
          <div className={styles.albumCard}>
            <div className={styles.albumImageContainer}>
              <img className={styles.albumImage} src="/albumspage/albums.png" alt="Album" />
            </div>
            <h2>200$ EXCLUSIVE RIGHTS</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AlbumsPage
