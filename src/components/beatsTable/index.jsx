import { CloseOutlined, CopyOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Image, Input, Modal, message } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Player from '../Player'
import PriceModal from '../PriceModal'
import styles from './style.module.css'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const BeatsTable = ({
  bpmCategory = '',
  moodCategory = '',
  genreCategory = '',
  keyCategory = '',
  sortByLikes = '',
}) => {
  const query = useQuery()
  const [isShareModalVisible, setIsShareModalVisible] = useState(false)
  const [isCartModalVisible, setIsCartModalVisible] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [shareLink, setShareLink] = useState(['', ''])
  const [currentBeat, setCurrentBeat] = useState(null)
  const [cartBeat, setCartBeat] = useState(null)
  const [beatList, setBeatList] = useState([])
  const [handlePlaySound, setHandlePlaySound] = useState(false)
  const title = query.get('title') || ''

  const showShareModal = (beat, link) => {
    setShareLink([beat, link])
    setIsShareModalVisible(true)
  }

  const getUserRights = () => {
    Cookies.get('current_login') === 'admin' ? setIsAdmin(true) : setIsAdmin(false)
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
    console.log('Selected beat:', beat)
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

  const handleDeleteBeat = (title) => {
    axios
      .post('http://database/Database/delete_beat', { title: title })
      .then((response) => {
        console.log('Успешный ответ от сервера:', response.data)
        window.location.reload()
      })
      .catch((error) => {
        console.error('Ошибка при выполнении POST запроса:', error)
      })
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
          <span
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            className={styles.titleText}
          >
            {title}
          </span>
        </Link>
      ),
      time: <span className={styles.time}>{time.split(':').slice(-2).join(':')}</span>,
      bpm: <span className={styles.bpm}>{bpm}</span>,
      tags: Array.isArray(beatTags)
        ? beatTags.map((tag) => (
            <Button className={styles.tag} key={tag}>
              <span className={styles.tagText} style={{ display: 'flex' }}>
                {tag}
              </span>
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
          <span className={styles.priceText}>$34.95</span>
        </Button>
      ),
      delete: (
        <Button
          type="dashed"
          ghost
          danger
          className={styles.deleteBeatButton}
          onClick={() => {
            handleDeleteBeat(title)
          }}
        >
          <CloseOutlined />
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
        `http://database/database?title=${title}&bpm=${bpmCategory}&mood=${moodCategory}&genre=${genreCategory}&key=${keyCategory}&sort=${sortByLikes}`
      )
      .then((response) => {
        response.data.map((data) => {
          const tagsArray = JSON.parse(data.tags)
          console.log("ADWDQAWD", sortByLikes)
          addBeat(data.id, data.img, data.title, data.time, data.bpm, tagsArray, data.price, data.soundSrc, data.key)
        })
      })
      .catch((error) => {
        console.error('There was a problem with your request:', error)
      })
    getUserRights()
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
              {isAdmin ? <td className={styles.deleteBeatButtonContainer}>{row.delete}</td> : <></>}
            </tr>
          ))}
        </tbody>
      </table>
      {isAdmin ? (
        <Link to={`/addbeat`}>
          <Button
            className={styles.beatSrc}
            style={{
              marginTop: '20px',
              width: '100px',
              height: '35px',
            }}
            shape="round"
            icon={<PlusOutlined />}
            size="middle"
          />
        </Link>
      ) : (
        <></>
      )}
      <Modal title={shareLink[0]} visible={isShareModalVisible} footer={null} onCancel={handleShareModalClose}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Input value={shareLink[1]} readOnly />
          <Button icon={<CopyOutlined />} onClick={() => handleCopy(shareLink[1])} />
        </div>
      </Modal>
      {cartBeat && (
        <PriceModal
          visible={isCartModalVisible}
          onCancel={handleCartModalClose}
          title={cartBeat.title}
          imgSrc={cartBeat.imgSrc}
          price={cartBeat.price}
          soundSrc={cartBeat.soundSrc}
        />
      )}
      {currentBeat && handlePlaySound && (
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
