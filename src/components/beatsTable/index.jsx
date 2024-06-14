import { UploadOutlined } from '@ant-design/icons'
import { Button, Image, Modal, Upload, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditableTagGroup from '../EditableTags/index'
import Player from '../Player'
import styles from './style.module.css'

const BeatsTable = () => {
  const [isShareModalVisible, setIsShareModalVisible] = useState(false)
  const [isCartModalVisible, setIsCartModalVisible] = useState(false)
  const [shareLink, setShareLink] = useState(['', ''])
  const [currentBeat, setCurrentBeat] = useState(null)
  const [cartBeat, setCartBeat] = useState(null)
  const [newTags, setNewTags] = useState([])
  const [beatList, setBeatList] = useState([])
  const [handlePlaySound, setHandlePlaySound] = useState(false)

  const props = {
    name: 'file',
    action: './test',
    headers: {
      authorization: 'Upload',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  const showShareModal = (beat, link) => {
    setShareLink([beat, link])
    setIsShareModalVisible(true)
  }

  const showCartModal = (beat) => {
    setCartBeat(beat)
    setIsCartModalVisible(true)
  }

  const handleShareModalClose = () => {
    setIsShareModalVisible(false)
  }

  const handleCartModalClose = () => {
    setIsCartModalVisible(false)
  }

  const handleGoToBeat = (imgSrc, title) => {}

  const handleBeatClick = (beat) => {
    setCurrentBeat(beat)
    setHandlePlaySound(true)
  }

  const addBeat = (imgSrc, title, time, bpm, beatTags, link, price, soundSrc) => {
    const newRow = {
      id: beatList.length + 1,
      beatPlaySrc: soundSrc,
      img: (
        <img
          className={styles.beatImg}
          src={imgSrc}
          onClick={() => handleBeatClick({ imgSrc, title, link, price, soundSrc })}
        />
      ),
      title: (
        <span className={styles.titleText} onClick={() => handleGoToBeat(imgSrc, title)}>
          {title}
        </span>
      ),
      time: <span className={styles.time}>{time.split(':').slice(-2).join(':')}</span>,
      bpm: <span className={styles.bpm}>{bpm}</span>,
      tags: Array.isArray(beatTags)
        ? beatTags.map((tag) => (
            <Button className={styles.tag} key={tag}>
              <span className={styles.tagText}>{tag}</span>
            </Button>
          ))
        : null,
      link: (
        <Button className={styles.share} onClick={() => showShareModal(title, link)} type="primary">
          <Image preview={false} src="/mainPage/share.png" className={styles.shareImg} />
        </Button>
      ),
      price: (
        <Button
          className={styles.priceButton}
          onClick={(e) => {
            e.stopPropagation()
            showCartModal({ imgSrc, title, price, soundSrc })
          }}
        >
          <Image className={styles.priceImg} src="/mainPage/cart.png" preview={false} />
          <span className={styles.priceText}>${price}</span>
        </Button>
      ),
    }
    setBeatList((prevBeatList) => [...prevBeatList, newRow])
  }

  const handleTagSubmit = (tag) => {
    console.log('New tag submitted:', tag)
  }

  useEffect(() => {
    let searchReq = 'http://database/database'
    console.log('Query', localStorage.getItem('searchTitleValue'))

    setBeatList([])
    axios
      .get('http://database/database')
      .then((response) => {
        response.data.map((data) => {
          const tagsArray = JSON.parse(data.tags)
          addBeat(data.img, data.title, data.time, data.bpm, tagsArray, data.link, data.price, data.soundSrc)
        })
      })
      .catch((error) => {
        console.error('There was a problem with your request:', error)
      })
  }, [])

  return (
    <div className={styles.tableBeatsContainer}>
      <table className={styles.tableBeats}>
        <thead>
          <tr>
            <th className={styles.beatTableCol}></th>
            <th className={styles.titleTableCol}>TITLE</th>
            <th className={styles.timeTableCol}>TIME</th>
            <th className={styles.bpmTableCol}>BPM</th>
            <th className={styles.tagsTableCol}>TAGS</th>
            <th className={styles.linkTableCol}></th>
            <th className={styles.priceTableCol}></th>
          </tr>
        </thead>
        <tbody>
          {beatList.map((row) => (
            <tr key={row.id}>
              <td className={styles.beatTableCol}>{row.img}</td>
              <td className={styles.titleTableCol}>{row.title}</td>
              <td className={styles.timeTableCol}>{row.time}</td>
              <td className={styles.bpmTableCol}>{row.bpm}</td>
              <td className={styles.tagsTableCol}>{row.tags}</td>
              <td className={styles.linkTableCol}>{row.link}</td>
              <td className={styles.priceTableCol}>{row.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={styles.addBeatHeader}>
            <td className={styles.beatTableCol}>IMG</td>
            <td className={styles.titleTableCol}>TITLE</td>
            <td className={styles.timeTableCol}>TIME</td>
            <td className={styles.bpmTableCol}>BPM</td>
            <td className={styles.tagsTableCol}>TAGS</td>
            <td className={styles.linkTableCol}>LINK</td>
            <td className={styles.priceTableCol}>PRICE</td>
          </tr>
          <tr>
            <td className={styles.beatTableCol}>
              <Upload {...props}>
                <Button className={styles.beatImg}>
                  <UploadOutlined />
                </Button>
              </Upload>
            </td>
            <td className={styles.titleTableCol}>
              <input className={styles.titleInput} type="text" />
            </td>
            <td className={styles.timeTableCol}>
              <input className={styles.timeInput} type="text" />
            </td>
            <td className={styles.bpmTableCol}>
              <input className={styles.timeInput} type="text" />
            </td>
            <td className={styles.tagsTableCol}>
              <EditableTagGroup tags={newTags} setTags={setNewTags} />
            </td>
            <td className={styles.inputLinkTableCol}></td>
            <td className={styles.priceTableCol}>
              <input className={styles.priceInput} type="text" />
            </td>
          </tr>
        </tfoot>
      </table>
      <Modal title={shareLink[0]} visible={isShareModalVisible} footer={null} onCancel={handleShareModalClose}>
        <p>{shareLink[1]}</p>
      </Modal>
      <div className={`${styles.modalOverlay} ${isCartModalVisible ? styles.active : ''}`}>
        <div className={`${styles.modal} ${isCartModalVisible ? styles.active : ''}`}>
          <span className={styles.close} onClick={handleCartModalClose}>
            &times;
          </span>
          <div className={styles.modalContent}>
            <h2>Choose contract type</h2>
            {cartBeat && (
              <div className={styles.cartModalContent}>
                <div className={styles.cartModalLeft}>
                  <Image preview={false} src={cartBeat.imgSrc} className={styles.cartModalImage} />
                  <p className={styles.cartModalTitle}>{cartBeat.title}</p>
                </div>
                <div className={styles.cartModalRight}>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>MP3 Lease: </p>
                      <Button className={styles.modalPriceButton} onClick={() => alert('Purchased MP3 Lease')}>
                        <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                        <span className={styles.modalPriceText}>$34.95</span>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>WAV Lease: </p>
                      <Button className={styles.modalPriceButton} onClick={() => alert('Purchased WAV Lease')}>
                        <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                        <span className={styles.modalPriceText}>$49.95</span>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Unlimited WAV:</p>
                      <Button className={styles.modalPriceButton} onClick={() => alert('Purchased Unlimited WAV')}>
                        <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                        <span className={styles.modalPriceText}>$79.95</span>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Trackout Lease:</p>
                      <Button className={styles.modalPriceButton} onClick={() => alert('Purchased Trackout Lease')}>
                        <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                        <span className={styles.modalPriceText}>$99.95</span>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Unlimited Trackout:</p>
                      <Button className={styles.modalPriceButton} onClick={() => alert('Purchased Unlimited Trackout')}>
                        <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                        <span className={styles.modalPriceText}>$149.95</span>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Exclusive Rights:</p>
                      <Button className={styles.modalPriceButton} onClick={() => alert('Purchased Exclusive Rights')}>
                        <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                        <span className={styles.modalPriceText}>$1000.00</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {handlePlaySound && currentBeat && (
        <Player
          imgSrc={currentBeat.imgSrc}
          title={currentBeat.title}
          time={currentBeat.time}
          link={currentBeat.link}
          price={currentBeat.price}
          beatSrc={currentBeat.soundSrc}
        />
      )}
    </div>
  )
}

export default BeatsTable
