import { Button, Image, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Player from '../Player'
import styles from './style.module.css'

const BeatsTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [shareLink, setShareLink] = useState(['', ''])
  const [handlePlaySound, setHandlePlaySound] = useState(false)
  const [currentBeat, setCurrentBeat] = useState(null)
  const [beatList, setBeatList] = useState([])

  const showModal = (beat, link) => {
    setShareLink([beat, link])
    setIsModalVisible(true)
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }

  const addBeat = (imgSrc, title, time, bpm, beatTags, link, price, soundSrc) => {
    const newRow = {
      id: beatList.length + 1,
      beatPlaySrc: soundSrc,
      img: (
        <img
          className={styles.beatImg}
          src={imgSrc}
          onClick={() => {
            setCurrentBeat({ imgSrc, title, link, price, soundSrc })
            setHandlePlaySound(true)
          }}
        />
      ),
      title: <span className={styles.titleText}>{title}</span>,
      time: <span className={styles.time}>{time.split(':').slice(-2).join(':')}</span>,
      bpm: <span className={styles.bpm}>{bpm}</span>,
      tags: Array.isArray(beatTags) ? beatTags.map((tag) => (
        <Button className={styles.tag}>
          <span className={styles.tagText}>{tag}</span>
        </Button>
      )) : null,
      link: (
        <Button className={styles.share} onClick={() => showModal(title, link)} type="primary">
          <Image preview={false} src="/mainPage/share.png" className={styles.shareImg} />
        </Button>
      ),
      price: (
        <Button className={styles.priceButton}>
          <Image className={styles.priceImg} src="/mainPage/cart.png" preview={false} />
          <span className={styles.priceText}>${price}</span>
        </Button>
      ),
    }
    setBeatList((prevBeatList) => [...prevBeatList, newRow])
  }

  useEffect(() => {
    setBeatList([])
    axios.get('http://database/database')
        .then(response => {
          response.data.map(data => {
            console.log(data.time)
            const tagsArray = JSON.parse(data.tags);
            addBeat(
              data.img,
              data.title,
              data.time,
              data.bpm,
              tagsArray,
              data.link,
              data.price,
              data.soundSrc
            )
          })
        })
        .catch(error => {
          console.error('There was a problem with your request:', error);
    });
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
      </table>
      <Modal title={shareLink[0]} visible={isModalVisible} footer={null} onCancel={handleClose}>
        <p>{shareLink[1]}</p>
      </Modal>
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