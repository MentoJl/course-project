import { Button, Image, Modal, Typography, message } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PriceModal from '../PriceModal'
import Searcher from '../Searcher'
import BeatsTable from '../beatsTable/index'
import Footer from '../footer/index'
import Header from '../header/index'
import ShareModal from '../shareModal'
import ExclusiveRights from './license_cards_content/exclusiverigths'
import Mp3License from './license_cards_content/mp3lease'
import TrackoutLicense from './license_cards_content/trackoutlease'
import UnlimitedTrackoutLicense from './license_cards_content/unlimitedtrackout'
import UnlimitedWavLicense from './license_cards_content/unlimitedwav'
import WavLicense from './license_cards_content/wavlease'
import styles from './style.module.css'

const Main = (id, imgSrc, title, time, bpm, beatTags, price, soundSrc, key) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [shareLink, setShareLink] = useState([
    'Risky',
    'http://localhost:3000/beatPage?imgSrc=.%2Fdb%2Fimg%2Frisky.png&name=Risky&bpm=102&beatTags=ohgeesy%2Cshoreline%20mafia&price=34.95&key=A-Flat%20Minor',
  ])
  const messageRef = useRef(null)
  const sendMail = useRef(null)
  const sendName = useRef(null)
  const sendTitle = useRef(null)
  const [cartBeat, setCartBeat] = useState(null)
  const [isCartModalVisible, setIsCartModalVisible] = useState(false)
  const handleCartModalClose = () => {
    setIsCartModalVisible(false)
  }

  const openModal = (content) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const showCartModal = (beat) => {
    setCartBeat(beat)
    setIsCartModalVisible(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openShareModal = () => {
    setIsShareModalOpen(true)
  }

  const closeShareModal = () => {
    setIsShareModalOpen(false)
  }

  useEffect(() => {
    const messageTextarea = messageRef.current
    if (messageTextarea) {
      messageTextarea.style.height = 'auto'
      messageTextarea.style.height = `${messageTextarea.scrollHeight}px`
    }
  }, [])

  const handleInput = (e) => {
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  const handleSendEmail = () => {
    const emailData = {
      email: sendMail.current.value,
      title: sendTitle.current.value,
      name: sendName.current.value,
      message: messageRef.current.value,
    }

    if (
      sendMail.current.value !== '' &&
      sendTitle.current.value !== '' &&
      sendName.current.value !== '' &&
      messageRef.current.value !== ''
    ) {
      fetch('http://database/sendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error:', error)
        })
    }
    message.success('You sent an email')
    sendMail.current.value = ''
    sendTitle.current.value = ''
    sendName.current.value = ''
    messageRef.current.value = ''
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.empty}></div>
      <Searcher />
      <div className={styles.featuredBeat}>
        <div className={styles.beatHeat}>
          <Image className={styles.beatHeatLogo} src="/mainPage/previewBeatLogo.jpg" preview={false} />
          <div className={styles.beatInfo}>
            <div className={styles.featuredText}>Featured Track • 102BPM</div>
            <Link
              to={`/beatPage?imgSrc=.%2Fdb%2Fimg%2Frisky.png&name=Risky&bpm=102&beatTags=ohgeesy%2Cshoreline%20mafia&price=34.95&key=A-Flat%20Minor`}
            >
              <div className={styles.beatName}>Risky</div>
            </Link>
            <div className={styles.previewBeatButtons}>
              <Button
                className={styles.purchase}
                onClick={(e) => {
                  e.stopPropagation()
                  showCartModal({ imgSrc, title, price, soundSrc })
                }}
              >
                <Image preview={false} className={styles.cartPriceImg} src="/mainPage/cart.png" />
                <Typography.Text className={styles.purchaseText}>$34.95</Typography.Text>
              </Button>
              <Button type="primary" className={styles.share} onClick={openShareModal}>
                <Image preview={false} src="/mainPage/share.png" className={styles.shareImg}></Image>
              </Button>
              <Button className={styles.tag}>
                <Typography.Text className={styles.tagText}>ohgeesy</Typography.Text>
              </Button>
              <Button className={styles.tag}>
                <Typography.Text className={styles.tagText2}>shoreline mafia</Typography.Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eq}>
        <Image className={styles.test} preview={false} src="/mainPage/eq.png"></Image>
      </div>
      <BeatsTable />
      <div className={styles.buttonWrapper}>
        <Link to="/allbeats">
          <button className={styles.browseAllBeatsButton}>BROWSE ALL BEATS</button>
        </Link>
      </div>
      <div className={styles.licenses}>
        <div className={styles.licenseinfo}>Licensing Info</div>
        <div className={styles.licensesmain}>
          <div className={styles.licenseCard}>
            <div className={styles.title}>MP3 Lease</div>
            <div className={styles.price}>$34.95</div>
            <div className={styles.details}>
              <div>MP3 File</div>
              <div>2,000 Unit Cap</div>
              <div>1 Commercial Use Only</div>
              <div>10,000 Stream Cap</div>
            </div>
            <button onClick={() => openModal(Mp3License)} className={styles.button}>
              READ LICENSE
            </button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>WAV Lease</div>
            <div className={styles.price}>$49.95</div>
            <div className={styles.details}>
              <div>WAV + MP3 File</div>
              <div>5,000 Unit Cap</div>
              <div>2 Commercial Use Only</div>
              <div>50,000 Stream Cap</div>
            </div>
            <button onClick={() => openModal(WavLicense)} className={styles.button}>
              READ LICENSE
            </button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>Unlimited WAV</div>
            <div className={styles.price}>$79.95</div>
            <div className={styles.details}>
              <div>WAV + MP3 File</div>
              <div>Unlimited Unit Cap</div>
              <div>Unlimited Commercial Use</div>
              <div>Unlimited Stream Cap</div>
            </div>
            <button onClick={() => openModal(UnlimitedWavLicense)} className={styles.button}>
              READ LICENSE
            </button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>Trackout Lease</div>
            <div className={styles.price}>$99.95</div>
            <div className={styles.details}>
              <div>Stems + WAV + MP3 File</div>
              <div>2 Commercial Use Only</div>
              <div>200,000 Stream Cap</div>
            </div>
            <button onClick={() => openModal(TrackoutLicense)} className={styles.button}>
              READ LICENSE
            </button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>Unlimited Trackout</div>
            <div className={styles.price}>$149.95</div>
            <div className={styles.details}>
              <div>Stems + WAV + MP3 File</div>
              <div>Unlimited Unit Cap</div>
              <div>Unlimited Commercial Use</div>
              <div>Unlimited Stream Cap</div>
            </div>
            <button onClick={() => openModal(UnlimitedTrackoutLicense)} className={styles.button}>
              READ LICENSE
            </button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>Exclusive Rights</div>
            <div className={styles.price}>MAKE AN OFFER</div>
            <div className={styles.details}>
              <div>Stems + WAV + MP3 File</div>
              <div>Unlimited Unit Cap</div>
              <div>Unlimited Stream Cap</div>
              <div>Exclusive Ownership</div>
            </div>
            <button onClick={() => openModal(ExclusiveRights)} className={styles.button}>
              READ LICENSE
            </button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.servicesinfo}>Services</div>
        <div className={styles.servicesmain}>
          <Link to="/services/mixandmastering" className={styles.serviceCard}>
            <img className={styles.serviceImage} src="/mainPage/mixmaster.png" alt="" />
            <p className={styles.serviceTitle}>MIX AND MASTERING</p>
          </Link>
          <Link to="/services/custombeat" className={styles.serviceCard}>
            <img className={styles.serviceImage} src="/mainPage/custombeat.png" alt="Custom Beat" />
            <p className={styles.serviceTitle}>CUSTOM BEAT</p>
          </Link>
        </div>
        <Link to="/servicespage">
          <button className={styles.browseButton}>BROWSE ALL SERVICES</button>
        </Link>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.contactInfo}>Contact</div>
        <div className={styles.form}>
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
        </div>
      </div>
      <Footer />
      <Modal title="" width="1000px" visible={isModalOpen} footer={null} onCancel={closeModal}>
        {modalContent}
      </Modal>
      <ShareModal visible={isShareModalOpen} onClose={closeShareModal} shareLink={shareLink} />
      <PriceModal
        visible={isCartModalVisible}
        onCancel={handleCartModalClose}
        title={'RIsky'}
        imgSrc={'./db/img/risky.png'}
      />
    </div>
  )
}

export default Main
