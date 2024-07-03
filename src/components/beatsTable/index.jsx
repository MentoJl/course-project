import { CloseOutlined, CopyOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Image, Input, Modal, Upload, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import EditableTagGroup from '../EditableTags/index'
import Player from '../Player'
import styles from './style.module.css'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const BeatsTable = ({ bpmCategory = '', moodCategory = '', genreCategory = '', keyCategory = '', sortByLikes = '' }) => {
  const query = useQuery()
  const [isShareModalVisible, setIsShareModalVisible] = useState(false)
  const [isCartModalVisible, setIsCartModalVisible] = useState(false)
  const [shareLink, setShareLink] = useState(['', ''])
  const [currentBeat, setCurrentBeat] = useState(null)
  const [cartBeat, setCartBeat] = useState(null)
  const [newTags, setNewTags] = useState([])
  const [beatList, setBeatList] = useState([])
  const [handlePlaySound, setHandlePlaySound] = useState(false)
  const title = query.get('title') || ''
  const [UpldIMG, setUpldIMG] = useState(null)
  const [UpldSND, setUpldSND] = useState(null)
  const nameBeat = useRef(null)
  const keyBeat = useRef(null)
  const bpmBeat = useRef(null)

  // useEffect(() => {
  //   const likeCounts = {};
  //   axios.get('http://database/sortedLikes')
  //     .then(response => {
  //       console.log('awdawd:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Ошибка при выполнении POST запроса:', error);
  //     });
  // })

  const handleAddBeat = () => {
    if (!UpldIMG || !UpldSND || !nameBeat.current.value || !nameBeat.current.value || newTags == []) {
      message.error('Fill all params for new beat')
      return
    }
    const fileDataSND = new FormData()
    fileDataSND.append('file', UpldSND.fileList[0].originFileObj, UpldSND.fileList[0].name)
    fileDataSND.append('path', './public/db/sound/')
    const fileDataIMG = new FormData()
    fileDataIMG.append('file', UpldIMG.fileList[0].originFileObj, UpldIMG.fileList[0].name)
    fileDataIMG.append('path', './public/db/img/')
    axios
      .post('http://database/uploadFile', fileDataIMG)
      .then((response) => {
        console.log('Успешный ответ от сервера:', response.data)
      })
      .catch((error) => {
        console.error('Ошибка при выполнении POST запроса:', error)
      })
    axios
      .post('http://database/uploadFile', fileDataSND)
      .then((response) => {
        console.log('Успешный ответ от сервера:', response.data)
      })
      .catch((error) => {
        console.error('Ошибка при выполнении POST запроса:', error)
      })
    console.log('Image File:', UpldIMG.fileList[0])
    console.log('Sound File:', UpldSND.fileList[0])
    console.log('Name:', nameBeat.current.value)
    console.log('Key:', keyBeat.current.value)
    console.log('BPM:', bpmBeat.current.value)
    console.log('Tags:', newTags)
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

  const handleBeatClick = (beat) => {
    setCurrentBeat(beat)
    setHandlePlaySound(true)
  }

  const prevBeat = () => {
    if (beatList[currentBeat.id - 2] === undefined) {
      setCurrentBeat(beatList[beatList.length - 1].beatPlayerInfo)
    } else {
      setCurrentBeat(beatList[currentBeat.id - 2].beatPlayerInfo)
    }
  }

  const nextBeat = () => {
    if (beatList[currentBeat.id] === undefined) {
      setCurrentBeat(beatList[0].beatPlayerInfo)
    } else {
      setCurrentBeat(beatList[currentBeat.id].beatPlayerInfo)
    }
  }

  const addBeat = (id, imgSrc, title, time, bpm, beatTags, price, soundSrc, key) => {
    const beatPlayerInfo = {
      id,
      imgSrc,
      title,
      link: `localhost:3000/beatPage?name=${encodeURIComponent(title)}`,
      price,
      soundSrc,
    }
    const newRow = {
      id: id,
      beatPlayerInfo: beatPlayerInfo,
      beatPlaySrc: soundSrc,
      img: <img className={styles.beatImg} src={imgSrc} onClick={() => handleBeatClick(beatPlayerInfo)} />,
      title: (
        <Link
          to={`/beatPage?imgSrc=${encodeURIComponent(imgSrc)}&name=${encodeURIComponent(title)}&bpm=${bpm}&beatTags=${encodeURIComponent(
            beatTags.join(',')
          )}&price=${price}&key=${encodeURIComponent(key)}`}
        >
          <span onClick={() => {
            window.scrollTo(0, 0);
          }}className={styles.titleText}>{title}</span>
        </Link>
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
        <Button
          className={styles.share}
          onClick={() =>
            showShareModal(
              title,
              `localhost:3000/beatPage?imgSrc=${encodeURIComponent(imgSrc)}
              &name=${encodeURIComponent(title)}
              &bpm=${bpm}
              &beatTags=${encodeURIComponent(beatTags.join(','))}
              &price=${price}
              &key=${encodeURIComponent(key)}`
              )
            }
            type="primary"
          >
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

  const handleCopy = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        message.success('Link copied to clipboard!')
      })
      .catch((err) => {
        message.error('Failed to copy link')
      })
  }

  useEffect(() => {
    setBeatList([])
    axios
      .get(
        `http://database/database?title=${title}&bpm=${bpmCategory}&mood=${moodCategory}&genre=${genreCategory}&key=${keyCategory}`
      )
      .then((response) => {
        response.data.map((data) => {
          const tagsArray = JSON.parse(data.tags)
          addBeat(data.id, data.img, data.title, data.time, data.bpm, tagsArray, data.price, data.soundSrc, data.key)
        })
      })
      .catch((error) => {
        console.error('There was a problem with your request:', error)
      })
  }, [title, bpmCategory, moodCategory, genreCategory, keyCategory, sortByLikes])

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
            <tr className={styles.beatRow} key={row.id}>
              <td className={styles.beatTableCol}>{row.img}</td>
              <td className={styles.titleTableCol}>{row.title}</td>
              <td className={styles.timeTableCol}>{row.time}</td>
              <td className={styles.bpmTableCol}>{row.bpm}</td>
              <td className={styles.tagsTableCol}>{row.tags}</td>
              <td className={styles.linkTableCol}>{row.link}</td>
              <td className={styles.priceTableCol}>{row.price}</td>
              <td className={styles.deleteBeatButtonContainer}>
                <Button type="dashed" ghost danger className={styles.deleteBeatButton}>
                  <CloseOutlined />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={styles.addBeatHeader}>
            <td className={styles.beatTableCol}>IMG</td>
            <td className={styles.titleTableCol}>TITLE</td>
            <td className={styles.timeTableCol}>KEY</td>
            <td className={styles.bpmTableCol}>BPM</td>
            <td className={styles.tagsTableCol}>TAGS</td>
            <td className={styles.priceTableCol}>SOUND</td>
          </tr>
          <tr>
            <td className={styles.beatTableCol}>
              <Upload
                onChange={(file) => {
                  setUpldIMG(file)
                }}
                ref={UpldIMG}
              >
                <Button className={styles.beatImg}>
                  <UploadOutlined />
                </Button>
              </Upload>
            </td>
            <td className={styles.titleTableCol}>
              <input className={styles.titleInput} ref={nameBeat} type="text" />
            </td>
            <td className={styles.timeTableCol}>
              <input className={styles.timeInput} ref={keyBeat} type="text" />
            </td>
            <td className={styles.bpmTableCol}>
              <input className={styles.timeInput} ref={bpmBeat} type="text" />
            </td>
            <td className={styles.tagsTableCol}>
              <EditableTagGroup tags={newTags} setTags={setNewTags} />
            </td>
            <td className={styles.soundTableCol}>
              <Upload
                onChange={(file) => {
                  setUpldSND(file)
                }}
                preview={false}
                ref={UpldSND}
              >
                <Button className={styles.beatImg}>
                  <UploadOutlined />
                </Button>
              </Upload>
            </td>
            <td className={styles.addBeatContainer}>
              <Link
                  to={`/addbeat`}
                >
                <Button
                  className={styles.beatSrc}
                  shape="round"
                  icon={<PlusOutlined />}
                  size="middle"
                  onClick={handleAddBeat}
                />
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
      <Modal title={shareLink[0]} visible={isShareModalVisible} footer={null} onCancel={handleShareModalClose}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Input value={shareLink[1]} readOnly />
          <Button icon={<CopyOutlined />} onClick={() => handleCopy(shareLink[1])}>
            Copy Link
          </Button>
        </div>
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
                      <Link
                        to={`/cart?imgSrc=${encodeURIComponent(cartBeat.imgSrc)}&title=${encodeURIComponent(
                          cartBeat.title
                        )}&price=34.95&lease=MP3 Lease`}
                      >
                        <Button className={styles.modalPriceButton}>
                          <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                          <span className={styles.modalPriceText}>$34.95</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>WAV Lease: </p>
                      <Link
                        to={`/cart?imgSrc=${encodeURIComponent(cartBeat.imgSrc)}&title=${encodeURIComponent(
                          cartBeat.title
                        )}&price=49.95&lease=WAV Lease`}
                      >
                        <Button className={styles.modalPriceButton}>
                          <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                          <span className={styles.modalPriceText}>$49.95</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Unlimited WAV:</p>
                      <Link
                        to={`/cart?imgSrc=${encodeURIComponent(cartBeat.imgSrc)}&title=${encodeURIComponent(
                          cartBeat.title
                        )}&price=74.95&lease=Unlimited WAV`}
                      >
                        <Button className={styles.modalPriceButton}>
                          <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                          <span className={styles.modalPriceText}>$79.95</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Trackout Lease:</p>
                      <Link
                        to={`/cart?imgSrc=${encodeURIComponent(cartBeat.imgSrc)}&title=${encodeURIComponent(
                          cartBeat.title
                        )}&price=99.95&lease=Trackout Lease`}
                      >
                        <Button className={styles.modalPriceButton}>
                          <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                          <span className={styles.modalPriceText}>$99.95</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Unlimited Trackout:</p>
                      <Link
                        to={`/cart?imgSrc=${encodeURIComponent(cartBeat.imgSrc)}&title=${encodeURIComponent(
                          cartBeat.title
                        )}&price=149.95&lease=Unlimited Trackout`}
                      >
                        <Button className={styles.modalPriceButton}>
                          <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                          <span className={styles.modalPriceText}>$149.95</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.licenseRow}>
                    <div className={styles.licenseCard}>
                      <p className={styles.cartModalText}>Exclusive Rights:</p>
                      <Link
                        to={`/cart?imgSrc=${encodeURIComponent(cartBeat.imgSrc)}&title=${encodeURIComponent(
                          cartBeat.title
                        )}&price=1000.00&lease=Exclusive Rights`}
                      >
                        <Button className={styles.modalPriceButton}>
                          <Image className={styles.modalPriceImg} src="/mainPage/cart.png" preview={false} />
                          <span className={styles.modalPriceText}>$1000.00</span>
                        </Button>
                      </Link>
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
          prevButton={prevBeat}
          nextButton={nextBeat}
        />
      )}
    </div>
  )
}

export default BeatsTable
