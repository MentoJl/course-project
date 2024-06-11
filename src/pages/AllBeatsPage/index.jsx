import { Select } from 'antd'
import React, { useState } from 'react'
import BeatsTable from '../../components/beatsTable/index'
import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import styles from './style.module.css'

const AllBeats = () => {
  const [category, setCategory] = useState('all')

  const handleChange = (value) => {
    setCategory(value)
  }

  return (
    <div className={styles.allbeatsContainer}>
      <Header />
      <div className={styles.beatsNavigator}>
        <span className={styles.allBeatsBoard}>All Beats</span>
        <div className={styles.beatsSortContainer}>
          <Select
            defaultValue="All Bpm"
            className={styles.selectBpm}
            onChange={handleChange}
            options={[
              {
                value: 'All Bpm',
                label: 'All Bpm',
              },
              {
                value: '90',
                label: '90',
              },
              {
                value: '94',
                label: '94',
              },
              {
                value: '95',
                label: '95',
              },
              {
                value: '97',
                label: '97',
              },
              {
                value: '99',
                label: '99',
              },
              {
                value: '100',
                label: '100',
              },
              {
                value: '102',
                label: '102',
              },
              {
                value: '105',
                label: '105',
              },
            ]}
          />
          <Select
            defaultValue="All Moods"
            className={styles.selectMood}
            onChange={handleChange}
            options={[
              {
                value: 'All Moods',
                label: 'All Moods',
              },
              {
                value: 'Bouncy',
                label: 'Bouncy',
              },
              {
                value: 'Dark',
                label: 'Dark',
              },
              {
                value: 'Calm',
                label: 'Calm',
              },
              {
                value: 'Angry',
                label: 'Angry',
              },
              {
                value: 'Sad',
                label: 'Sad',
              },
              {
                value: 'Depressed',
                label: 'Depressed',
              },
              {
                value: 'Lonely',
                label: 'Lonely',
              },
              {
                value: 'Relaxed',
                label: 'Relaxed',
              },
              {
                value: 'Energetic',
                label: 'Energetic',
              },
            ]}
          />
          <Select
            defaultValue="All Genres"
            className={styles.selectGener}
            onChange={handleChange}
            options={[
              {
                value: 'All Genres',
                label: 'All Genres',
              },
              {
                value: 'Hip Hop',
                label: 'Hip Hop',
              },
              {
                value: 'West Coast',
                label: 'West Coast',
              },
              {
                value: 'Trap',
                label: 'Trap',
              },
            ]}
          />
        </div>
        <div className={styles.beatsSearcher}></div>
      </div>
      <BeatsTable category={category} />
      <Footer />
    </div>
  )
}

export default AllBeats
