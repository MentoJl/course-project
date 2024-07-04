import { Select } from 'antd'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Searcher from '../../components/Searcher/index'
import BeatsTable from '../../components/beatsTable/index'
import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import styles from './style.module.css'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const AllBeats = () => {
  const query = useQuery()
  const title = query.get('title')
  const [genre, setGenre] = useState('All')
  const [mood, setMood] = useState('All')
  const [bpm, setBpm] = useState('All')
  const [key, setKey] = useState('All')
  const [like, setLike] = useState('All')

  return (
    <div className={styles.allbeatsContainer}>
      <Header />
      <div className={styles.beatsNavigator}>
        <span className={styles.allBeatsBoard}>All Beats</span>
        <Searcher />
        <div className={styles.beatsSortContainer}>
          <Select
            defaultValue="All BPM"
            className={styles.selectBpm}
            onChange={(value) => setBpm(value)}
            options={[
              {
                value: '',
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
            defaultValue="All Keys"
            className={styles.selectBpm}
            onChange={(value) => setKey(value)}
            options={[
              {
                value: '',
                label: 'All Keys',
              },
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
          <Select
            defaultValue="All Moods"
            className={styles.selectMood}
            onChange={(value) => setMood(value)}
            options={[
              {
                value: '',
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
            className={styles.selectGenre}
            onChange={(value) => setGenre(value)}
            options={[
              {
                value: '',
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
          <Select
            defaultValue="Sort By"
            className={styles.selectGenre}
            onChange={(value) => setLike(value)}
            options={[
              {
                value: 'All',
                label: 'Sort By',
              },
              {
                value: 'ASC',
                label: 'Sort Ascending',
              },
              {
                value: 'DESC',
                label: 'Sort Descending',
              },
            ]}
          />
        </div>
        <div className={styles.beatsSearcher}></div>
      </div>
      <BeatsTable
        bpmCategory={bpm === 'All' ? '' : bpm}
        moodCategory={mood === 'All' ? '' : mood}
        genreCategory={genre === 'All' ? '' : genre}
        keyCategory={key === 'All' ? '' : key}
        sortByLikes={like === 'All' ? '' : like} 
      />
      <Footer />
    </div>
  )
}

export default AllBeats