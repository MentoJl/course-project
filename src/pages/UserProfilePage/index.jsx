import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './style.module.css'
import { Image } from 'antd'
import Cookies from 'js-cookie'
import BeatsTable from '../../components/beatsTable'

const UserProfilePage = () => {
  const [userName, setUserName] = useState('unnamed');
  useEffect(()=> {
    setUserName(Cookies.get('current_login') === undefined ? 'unnamed' : Cookies.get('current_login'))
  }, [])

  return (
    <div className={styles.userProfileContainer}>
      <Header />
      <div className={styles.userProfileHeader}>
        <Image src='./user/avatar.png' className={styles.userProfileLogo}></Image>
        <span className={styles.userProfileName}>{userName}</span>
        <span className={styles.likedBeatsText}>Featured Beats</span>
      </div>
      <BeatsTable/>
      <Footer />
    </div>
  )
}

export default UserProfilePage;
