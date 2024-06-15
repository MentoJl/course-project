import React, { useState, useEffect } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import BeatsTable from '../beatsTable/index';
import styles from './style.module.css';
import { Image, Button } from 'antd';
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const BeatPage = () => {
  const query = useQuery();
  const imgSrc = query.get('imgSrc');
  const title = query.get('title');
  const bpm = query.get('bpm');
  const beatTags = query.get('beatTags')?.split(',') || [];
  const price = query.get('price');
  const key = query.get('key');

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
              <Image preview={false} src='./icons/bpm.png' className={styles.bpmIcon} />
              <span className={styles.beatInfoHeader}>{bpm}</span>
              <Image preview={false} src='./icons/sound.png' className={styles.soundIcon} />
              <span className={styles.beatInfoHeader}>{key}</span>
            </span>
            <span className={styles.desHeader}>BUY 2 GET 1 FREE, BUY 3 GET 2 FREE, BUY 4 GET 3 FREE, BUY 5 GET 4 FREE</span>
            <div className={styles.beatControllHeader}>
              <div className={styles.naviButtons}>
                <Button className={styles.priceButton}>
                  <Image className={styles.priceImg} src="/mainPage/cart.png" preview={false} />
                  <span className={styles.priceText}>${price}</span>
                </Button>
                <Button className={styles.share} type="primary">
                  <Image preview={false} src="./mainPage/share.png" className={styles.shareImg} />
                </Button>
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
          </div>
        </div>
      </div>
      <BeatsTable />
      <Footer />
    </div>
  );
}

export default BeatPage;