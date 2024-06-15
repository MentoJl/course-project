import { Select } from 'antd'
import React, { useState } from 'react'
import BeatsTable from '../../components/beatsTable/index'
import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import styles from './style.module.css'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const AllBeats = () => {
  const query = useQuery();
  const title = query.get('title');
  const [genre, setGenre] = useState('All')
  const [mood, setMood] = useState('All')
  const [bpm, setBpm] = useState('All')

  return (
    <div className={styles.allbeatsContainer}>
      <Header />
      <div className={styles.beatsNavigator}>
        <span className={styles.allBeatsBoard}>All Beats</span>
        <div className={styles.beatsSortContainer}>
          <Select
            defaultValue="All"
            className={styles.selectBpm}
            onChange={(value) => setBpm(value)}
            options={[
              {
                value: 'All',
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
            defaultValue="All"
            className={styles.selectMood}
            onChange={(value) => setMood(value)}
            options={[
              {
                value: 'All',
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
            defaultValue="All"
            className={styles.selectGener}
            onChange={(value) => setGenre(value)}
            options={[
              {
                value: 'All',
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
      <BeatsTable 
      titleCategory={title}
      bpmCategory={bpm}
      moodCategory={mood}
      genreCategory={genre} />
      <Footer />
    </div>
  )
}

export default AllBeats
