import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './style.module.css' // Ensure this path is correct.

const BeatInfoPage = () => {
  const { id } = useParams()
  const [beat, setBeat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true) // Ensure loading state is reset on ID change.
    axios
      .get(`http://database/database?title='Beef'`)
      .then((response) => {
        console.log('Data fetched:', response.data)
        setBeat(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching beat data:', error)
        setError('Failed to load beat data')
        setLoading(false)
      })
  }, [id]) // Dependency array ensures useEffect runs when `id` changes.

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!beat) return <div>No beat data available</div>

  return (
    <div className={styles.beatInfoContainer}>
      <h1>{beat.title}</h1>
      <img src={beat.img} alt={beat.title} />
      <p>BPM: {beat.bpm}</p>
      <p>Key: {beat.key}</p>
      <p>Mood: {beat.mood}</p>
      <p>Price: ${beat.price}</p>
      {/* Add more fields as needed */}
    </div>
  )
}

export default BeatInfoPage
