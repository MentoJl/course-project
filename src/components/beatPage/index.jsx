import { LikeFilled, LikeOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Image, Input } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BeatsTable from '../beatsTable/index'
import Footer from '../footer/index'
import Header from '../header/index'
import styles from './style.module.css'
// import React, { useState } from 'react';
import Cookies from 'js-cookie'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const { TextArea } = Input

const BeatPage = () => {
  const query = useQuery()
  const imgSrc = query.get('imgSrc')
  const title = query.get('name')
  const bpm = query.get('bpm')
  const beatTags = query.get('beatTags')?.split(',') || []
  const price = query.get('price')
  const key = query.get('key')
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState('')
  const [data, setData] = useState(null)

  const toggleLike = () => {
    if (!Cookies.get('current_login')) {
      window.location.href = 'http://database/Autorisation.php?window=Login'
      return
    }
    setLiked(!liked)
    const Data = {
      beatName: title,
      login: Cookies.get('current_login'),
      action: 'like',
      text: '',
    }
    console.log(Data)

    if (!liked)
      axios
        .post('http://database/action', Data)
        .then((response) => {
          console.log('Успешный ответ от сервера:', response.data)
        })
        .catch((error) => {
          console.error('Ошибка при выполнении POST запроса:', error)
        })
    else {
      axios
        .post('http://database/deleteAction', Data)
        .then((response) => {
          console.log('Успешный удаление ответ от сервера:', response.data)
        })
        .catch((error) => {
          console.error('Ошибка при выполнении POST запроса:', error)
        })
    }

    axios
      .get(`http://database/takeAction?beat_name=${title}&action=like`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Ошибка при выполнении POST запроса:', error)
      })
  }
  useEffect(() => {
    axios
      .get(`http://database/takeAction?beat_name=${title}&action=like`)
      .then((response) => {
        const check =
          Array.isArray(response.data) &&
          response.data.some((element) => element.login.toLowerCase() === Cookies.get('current_login'))
        if (check) {
          setLiked(true)
        } else {
          setLiked(false)
        }
        setData(response.data)
      })
      .catch((error) => {
        console.error('Ошибка при выполнении POST запроса:', error)
      })
  }, [title, liked])

  const handleInputChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = () => {
    if(!Cookies.get('current_login')){
      window.location.href = 'http://database/Autorisation.php?window=Login'
      return
    }
    const Data = {
      beatName : title,
      login : Cookies.get('current_login'),
      action : "comment",
      text : comment.trim()
    }
    axios.post('http://database/action', Data)
    .then(response => {
        console.log('Успешный ответ от сервера:', response.data);
    })
    .catch(error => {
      console.error('Ошибка при выполнении POST запроса:', error);
    });
  }

  return (
    <div>
      <Header />
      <div className={styles.beatInfoContainer}>
        <div className={styles.beatHeader}>
          <Image preview={false} src={imgSrc} className={styles.beatImgHeader} />
          <div className={styles.beatHeaderInfo}>
            <span className={styles.titleHeader}>{title}</span>
            <span className={styles.authorHeader}>DJ Problematic</span>
            <span className={styles.infoHeader}>
              <Image preview={false} src="./icons/bpm.png" className={styles.bpmIcon} />
              <span className={styles.beatInfoHeader}>{bpm}</span>
              <Image preview={false} src="./icons/sound.png" className={styles.soundIcon} />
              <span className={styles.beatInfoHeader}>{key}</span>
            </span>
            <span className={styles.desHeader}>
              BUY 2 GET 1 FREE, BUY 3 GET 2 FREE, BUY 4 GET 3 FREE, BUY 5 GET 4 FREE
            </span>
            <div className={styles.beatControllHeader}>
              <div className={styles.naviButtons}>
                <Button className={styles.priceButton}>
                  <Image className={styles.priceImg} src="/mainPage/cart.png" preview={false} />
                  <span className={styles.priceText}>${price}</span>
                </Button>
                <Button className={styles.share} type="primary">
                  <Image preview={false} src="./mainPage/share.png" className={styles.shareImg} />
                </Button>
                <Button
                  className={styles.likeButton}
                  type=""
                  icon={liked ? <LikeFilled /> : <LikeOutlined />}
                  onClick={toggleLike}
                >
                  {liked ? 'Liked' : 'Like'}
                </Button>
                <div className={styles.likeValue}>{data?.length}</div>
              </div>
              <div className={styles.tagsButtons}>
                {Array.isArray(beatTags)
                  ? beatTags.map((tag) => (
                      <Button className={styles.tag} key={tag}>
                        <span className={styles.tagText}>{tag}</span>
                      </Button>
                    ))
                  : null}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', width: '100%' }}>
              <TextArea
                rows={4}
                value={comment}
                onChange={handleInputChange}
                placeholder="Write your comment here..."
              />
              <Button type="primary" icon={<SendOutlined />} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BeatsTable />
      <Footer />
    </div>
  )
}

export default BeatPage
