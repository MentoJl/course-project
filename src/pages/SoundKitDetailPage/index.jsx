import { Button, Image, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import ShareModal from '../../components/shareModal'
import styles from './style.module.css'

const SoundKitDetailPage = () => {
  const imgSrc = '/soundkitspage/soundkits.png'
  const title = 'West Coast Loop Kit Vol.1'
  const price = '49.95'

  const openShareModal = () => {
    setIsShareModalOpen(true)
  }

  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  const closeShareModal = () => {
    setIsShareModalOpen(false)
  }

  const [shareLink, setShareLink] = useState([
    'West Coast Loop Kit Vol.1',
    'http://localhost:3000/soundkits/westcoastloopkitvol1',
  ])

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={imgSrc} alt={title} className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.mainTitle}>{title}</h1>
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
            <Link
              to={`/cart?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(title)}&price=${price}&lease=Sound Kit`}
            >
              <Button className={styles.purchase}>
                <Image preview={false} className={styles.cartPriceImg} src="/mainPage/cart.png" />
                <Typography.Text className={styles.purchaseText}>${price}</Typography.Text>
              </Button>
            </Link>
            <Button className={styles.share} type="primary" onClick={openShareModal}>
              <Image preview={false} src="/mainPage/share.png" className={styles.shareImg}></Image>
            </Button>
          </div>
        </div>
      </div>
      <ShareModal visible={isShareModalOpen} onClose={closeShareModal} shareLink={shareLink} />
      <Footer />
    </div>
  )
}

export default SoundKitDetailPage
