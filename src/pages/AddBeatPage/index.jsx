import { PlusOutlined } from '@ant-design/icons'
import { Select, Upload } from 'antd'
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
  const keyBeat = useRef(null)
  const bpmBeat = useRef(null)
  const tagsBeat = useRef(null)
  const [newTags, setNewTags] = useState([])

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
                <input type="text" ref={nameBeat} placeholder="Title" className={styles.inputField} />
                <input type="text" ref={bpmBeat} maxLength="3" placeholder="BPM" className={styles.inputField} />
                <Select defaultValue="Genre" className={styles.inputGenre} placeholder="Genre">
                  <Option value="Hip Hop">Hip Hop</Option>
                  <Option value="West Coast">West Coast</Option>
                  <Option value="Trap">Trap</Option>
                </Select>
                <Select defaultValue="Primary Mood" className={styles.inputGenre} placeholder="Primary Mood">
                  <Option value="Bouncy">Bouncy</Option>
                  <Option value="Dark">Dark</Option>
                  <Option value="Calm">Calm</Option>
                  <Option value="Angry">Angry</Option>
                  <Option value="Sad">Sad</Option>
                  <Option value="Depressed">Depressed</Option>
                  <Option value="Lonely">Lonely</Option>
                  <Option value="Relaxed">Relaxed</Option>
                  <Option value="Energetic">Energetic</Option>
                  <Option value="Lonely">Lonely</Option>
                </Select>
                <Select defaultValue="Secondary Mood" className={styles.inputGenre} placeholder="Secondary Mood">
                  <Option value="Bouncy">Bouncy</Option>
                  <Option value="Dark">Dark</Option>
                  <Option value="Calm">Calm</Option>
                  <Option value="Angry">Angry</Option>
                  <Option value="Sad">Sad</Option>
                  <Option value="Depressed">Depressed</Option>
                  <Option value="Lonely">Lonely</Option>
                  <Option value="Relaxed">Relaxed</Option>
                  <Option value="Energetic">Energetic</Option>
                  <Option value="Lonely">Lonely</Option>
                </Select>
                <Select
                  defaultValue="All Keys"
                  className={styles.inputGenre}
                  // onChange={(value) => setKey(value)}
                  options={[
                    {
                      value: '',
                      label: 'All Keys',
                    },
                    {
                      value: 'D Minor',
                      label: 'D Minor',
                    },
                    {
                      value: 'B Minor',
                      label: 'B Minor',
                    },
                    {
                      value: 'C Sharp Minor',
                      label: 'C Sharp Minor',
                    },
                    {
                      value: 'G Minor',
                      label: 'G Minor',
                    },
                    {
                      value: 'B Major',
                      label: 'B Major',
                    },
                    {
                      value: 'A Sharp Minor',
                      label: 'A Sharp Minor',
                    },
                    {
                      value: 'E-Flat Minor',
                      label: 'E-Flat Minor',
                    },
                    {
                      value: 'F Minor',
                      label: 'F Minor',
                    },
                    {
                      value: 'A-Flat Minor',
                      label: 'A-Flat Minor',
                    },
                    {
                      value: 'F Sharp Minor',
                      label: 'F Sharp Minor',
                    },
                  ]}
                />
                <EditableTagGroup tags={newTags} setTags={setNewTags} className={styles.inputField} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddBeatPage
