import { PlusOutlined } from '@ant-design/icons'
import { Button, Select, Upload, message } from 'antd'
import axios from 'axios'
import React, { useRef, useState } from 'react'
import EditableTagGroup from '../../components/EditableTags/index'
import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import styles from './style.module.css'

const { Option } = Select

const AddBeatPage = () => {
  const [UpldIMG, setUpldIMG] = useState(null)
  const [UpldSND, setUpldSND] = useState(null)
  const nameBeat = useRef(null)
  const bpmBeat = useRef(null)
  const [key, setKey] = useState([])
  const [moods, setMoods] = useState([])
  const [genre, setGenre] = useState([])
  const [newTags, setNewTags] = useState([])

  const handleAddBeat = () => {
    if (
      !UpldIMG ||
      !UpldSND ||
      !nameBeat.current.value ||
      !key ||
      !bpmBeat.current.value ||
      !moods ||
      !genre ||
      newTags == []
    ) {
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
    console.log('Image File:', `./db/img/${UpldIMG.fileList[0].name}`)
    console.log('Sound File:', `./db/sound/${UpldSND.fileList[0].name}`)
    console.log('Name:', nameBeat.current.value)
    console.log('Key:', key)
    console.log('BPM:', bpmBeat.current.value)
    console.log('Moods:', moods)
    console.log('Geners:', genre)
    console.log('Tags:', newTags)
    const Data = {
      newBeat: {
        img: `./db/img/${UpldIMG.fileList[0].name}`,
        title: nameBeat.current.value,
        bpm: bpmBeat.current.value,
        tags: newTags,
        key: key,
        mood: moods,
        genre: genre,
        soundSrc: `./db/sound/${UpldSND.fileList[0].name}`,
      },
    }
    axios
      .post('http://database/Database/add_beat', Data)
      .then((response) => {
        
        console.log('Успешный ответ от сервера:', response.data)
        window.location.reload()
      })
      .catch((error) => {
        console.error('Ошибка при выполнении POST запроса:', error)
      })
  }

  return (
    <div>
      <Header />
      <div className={styles.addBeatContainer}>
        <div className={styles.formContainer}>
          <div className={styles.uploadContainer}>
            <div className={styles.uploadIMGContainer}>
              <Upload
                listType="picture-card"
                className={styles.uploadIMG}
                onChange={(img) => {
                  UpldIMG === null ? setUpldIMG(img) : setUpldIMG(null)
                }}
              >
                {UpldIMG === null ? (
                  <div className={styles.uploadText}>
                    <PlusOutlined />
                    Upload
                  </div>
                ) : (
                  ''
                )}
              </Upload>
              Image
            </div>
            <div className={styles.uploadSNDContainer}>
              <Upload
                listType="picture-circle"
                className={styles.uploadSND}
                onChange={(img) => {
                  UpldSND === null ? setUpldSND(img) : setUpldSND(null)
                }}
              >
                {UpldSND === null ? (
                  <div className={styles.uploadText}>
                    <PlusOutlined />
                    Upload
                  </div>
                ) : (
                  ''
                )}
              </Upload>
              Audio
            </div>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.form}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  ref={nameBeat}
                  placeholder="Title"
                  className={styles.inputField}
                  style={{ fontSize: '15px', paddingLeft: '10px' }}
                />
                <input
                  type="text"
                  ref={bpmBeat}
                  maxLength="3"
                  placeholder="Bpm"
                  className={styles.inputField}
                  style={{ fontSize: '15px', paddingLeft: '12px' }}
                />
                <Select
                  style={{ width: '100%' }}
                  className={styles.inputGenre}
                  placeholder="Genre"
                  onChange={(value) => {
                    setGenre(value)
                  }}
                >
                  <Option value="Hip Hop">Hip Hop</Option>
                  <Option value="West Coast">West Coast</Option>
                  <Option value="Trap">Trap</Option>
                </Select>
                <Select
                  className={styles.inputGenre}
                  placeholder="Moods"
                  mode="multiple"
                  maxCount={2}
                  style={{ width: '100%' }}
                  onChange={(values) => {
                    setMoods(values)
                  }}
                  options={[
                    { value: 'Bouncy', label: 'Bouncy' },
                    { value: 'Dark', label: 'Dark' },
                    { value: 'Calm', label: 'Calm' },
                    { value: 'Angry', label: 'Angry' },
                    { value: 'Sad', label: 'Sad' },
                    { value: 'Depressed', label: 'Depressed' },
                    { value: 'Lonely', label: 'Lonely' },
                    { value: 'Relaxed', label: 'Relaxed' },
                    { value: 'Energetic', label: 'Energetic' },
                  ]}
                />
                <Select
                  placeholder="Key"
                  className={styles.inputGenre}
                  style={{ width: '100%' }}
                  onChange={(value) => {
                    setKey(value)
                  }}
                  options={[
                    {
                      value: 'A-Flat Minor',
                      label: 'A-Flat Minor',
                    },
                    {
                      value: 'A-Flat Major',
                      label: 'A-Flat Major',
                    },
                    {
                      value: 'A Minor',
                      label: 'A Minor',
                    },
                    {
                      value: 'A Major',
                      label: 'A Major',
                    },
                    {
                      value: 'A-Sharp Minor',
                      label: 'A-Sharp Minor',
                    },
                    {
                      value: 'A-Sharp Major',
                      label: 'A-Sharp Major',
                    },
                    {
                      value: 'B-Flat Minor',
                      label: 'B-Flat Minor',
                    },
                    {
                      value: 'B-Flat Major',
                      label: 'B-Flat Major',
                    },
                    {
                      value: 'B Minor',
                      label: 'B Minor',
                    },
                    {
                      value: 'B Major',
                      label: 'B Major',
                    },
                    {
                      value: 'C-Flat Major',
                      label: 'C-Flat Major',
                    },
                    {
                      value: 'C Minor',
                      label: 'C Minor',
                    },
                    {
                      value: 'C Major',
                      label: 'C Major',
                    },
                    {
                      value: 'C-Sharp Minor',
                      label: 'C-Sharp Minor',
                    },
                    {
                      value: 'C-Sharp Major',
                      label: 'C-Sharp Major',
                    },
                    {
                      value: 'D-Flat Major',
                      label: 'D-Flat Major',
                    },
                    {
                      value: 'D Minor',
                      label: 'D Minor',
                    },
                    {
                      value: 'D Major',
                      label: 'D Major',
                    },
                    {
                      value: 'D-Sharp Minor',
                      label: 'D-Sharp Minor',
                    },
                    {
                      value: 'E-Flat Minor',
                      label: 'E-Flat Minor',
                    },
                    {
                      value: 'E-Flat Major',
                      label: 'E-Flat Major',
                    },
                    {
                      value: 'E Minor',
                      label: 'E Minor',
                    },
                    {
                      value: 'E Major',
                      label: 'E Major',
                    },
                    {
                      value: 'F Minor',
                      label: 'F Minor',
                    },
                    {
                      value: 'F Major',
                      label: 'F Major',
                    },
                    {
                      value: 'F-Sharp Minor',
                      label: 'F-Sharp Minor',
                    },
                    {
                      value: 'F-Sharp Major',
                      label: 'F-Sharp Major',
                    },
                    {
                      value: 'G-Flat Major',
                      label: 'G-Flat Minor',
                    },
                    {
                      value: 'G Minor',
                      label: 'G Minor',
                    },
                    {
                      value: 'G Major',
                      label: 'G Major',
                    },
                    {
                      value: 'G-Sharp Minor',
                      label: 'G-Sharp Minor',
                    },
                  ]}
                />
                <EditableTagGroup tags={newTags} setTags={setNewTags} className={styles.inputField} />
              </div>
            </div>
            <Button type="" style={{ top: '15px', width: '100px', height: '35px' }} onClick={handleAddBeat}>
              Done
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddBeatPage
