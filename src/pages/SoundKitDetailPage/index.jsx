import { Button, Image, Typography } from 'antd'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'

const SoundKitDetailPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src="/soundkitspage/soundkits.png" alt="West Coast Loop Kit Vol.1" className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.mainTitle}>West Coast Loop Kit Vol.1</h1>
          <h2 className={styles.subTitle}>Sound Kit by DJ Problematic</h2>
          <p className={styles.text}>Loop Kit with 10 High Quality WAV.</p>
          <p className={styles.text}>
            Melody loops produced by djproblematic in West Coast / Detroit style. Loops are in the style of Shoreline
            Mafia, OhGeesy, Fenix Flexin, Mozzy, Larry June, Blxst and more all included in this kit. This kit have hard
            loops, soft loops, piano loops, rhodes loops, west coast loops, detroit loops, ambient loops and everything
            in between.
          </p>
          <p className={styles.text}>
            These loops are NOT royalty-free. If a record is placed using any of these samples, the publishing and
            royalties must be split (50/50) equally with djproblematic.
          </p>
          <p className={styles.text}>
            Tag must be included in any track with any used samples (must be audible). You must ALWAYS credit (prod. _ x
            djproblematic) in title when using a sample. If selling a beat through BeatStars which uses the sample(s),
            you must collaborate and split percentage 50/50 with djproblematic.
          </p>
          <p className={styles.text}>
            Contact info:
            <br />
            Email: djproblematicbeats@gmail.com
            <br />
            Instagram: @djproblematic
          </p>
          <div className={styles.previewBeatButtons}>
            <Button className={styles.purchase}>
              <Image preview={false} className={styles.cartPriceImg} src="/mainPage/cart.png" />
              <Typography.Text className={styles.purchaseText}>$49.95</Typography.Text>
            </Button>
            <Button className={styles.share} type="primary">
              <Image preview={false} src="/mainPage/share.png" className={styles.shareImg}></Image>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SoundKitDetailPage
