import React, { useState } from "react";
import styles from './style.module.css'
import { Link } from 'react-router-dom'

const Searcher = () => {
    const [inputValue, setInputValue] = useState('')

    const handleChangeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    return (<div className={styles.searcherContainer}>
        <input
          onChange={handleChangeInputValue}
          placeholder="What type of track are you looking for?"
          className={styles.searcher}
        />
        <Link to={`/allbeats?title=${encodeURIComponent(inputValue)}`}>
          <span className={styles.searchButton}>Search</span>
        </Link>
      </div>)
}

export default Searcher;