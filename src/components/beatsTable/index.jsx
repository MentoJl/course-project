import React, { useState } from 'react';
import styles from './style.module.css'
import { Button, Image, Modal } from 'antd'

const BeatsTable = () => {

  let beatTags = ['ohgeesy', 'fenix flexin'];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shareLink, setShareLink] = useState(['', '']);

  const showModal = (beat, link) => {
    setShareLink([beat, link]);
    setIsModalVisible(true);
  };

  const [beatList, setBeatList] = useState([
    { id: 0,
    img: <img className={styles.beatImg} src='./test/testImg.png'></img>, 
    title: <span className={styles.titleText}>Hella Crazy</span>, 
    time: <span className={styles.time}>01:55</span>, 
    bpm: <span className={styles.bpm}>100</span>, 
    tags: beatTags.map(tag => (
      <Button className={styles.tag}>
        <span className={styles.tagText}>{tag}</span>
      </Button>
    )),
    link: <Button 
    className={styles.share}
    onClick={() => showModal('Hella Crazy','Hella Crazy.link')}
    type="primary"
    >
      <Image 
      preview={false} 
      src='/mainPage/share.png' 
      className={styles.shareImg}
      ></Image>
    </Button>,
    price: <Button 
    className={styles.priceButton}>
      <Image 
      className={styles.priceImg} 
      src='/mainPage/cart.png'
      preview={false}
      ></Image>
      <span className={styles.priceText}>$34.95</span>
    </Button> },
    { id: 0,
      img: <img className={styles.beatImg} src='./test/testImg.png'></img>, 
      title: <span className={styles.titleText}>Hella Crazy</span>, 
      time: <span className={styles.time}>01:55</span>, 
      bpm: <span className={styles.bpm}>100</span>, 
      tags: beatTags.map(tag => (
        <Button className={styles.tag}>
          <span className={styles.tagText}>{tag}</span>
        </Button>
      )),
      link: <Button 
      className={styles.share}
      onClick={() => showModal('Hella Crazy','Hella Crazy.link')}
      type="primary"
      >
        <Image 
        preview={false} 
        src='/mainPage/share.png' 
        className={styles.shareImg}
        ></Image>
      </Button>,
      price: <Button 
      className={styles.priceButton}>
        <Image 
        className={styles.priceImg} 
        src='/mainPage/cart.png'
        preview={false}
        ></Image>
        <span className={styles.priceText}>$34.95</span>
      </Button> }
  ]);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const addRow = () => {
    const newId = beatList.length + 1;
    const newRow = { id: newId};
    setBeatList([...beatList, newRow]);
  };

  return (
    <div className={styles.tableBeatsContainer}>
        <table className={styles.tableBeats}>
          <thead>
            <tr>
              <th className={styles.beatTableCol}></th>
              <th className={styles.titleTableCol}>TITLE</th>
              <th className={styles.timeTableCol}>TIME</th>
              <th className={styles.bpmTableCol}>BPM</th>
              <th className={styles.tagsTableCol}>TAGS</th>
              <th className={styles.linkTableCol}></th>
              <th className={styles.priceTableCol}></th>
            </tr>
          </thead>
          <tbody>
            {beatList.map(row => (
              <tr key={row.id}>
                <td className={styles.beatTableCol}>{row.img}</td>
                <td className={styles.titleTableCol}>{row.title}</td>
                <td className={styles.timeTableCol}>{row.time}</td>
                <td className={styles.bpmTableCol}>{row.bpm}</td>
                <td className={styles.tagsTableCol}>{row.tags}</td>
                <td className={styles.linkTableCol}>{row.link}</td>
                <td className={styles.priceTableCol}>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
        title={shareLink[0]}
        visible={isModalVisible}
        footer={null}
        onCancel={handleClose}
        >
          <p>{shareLink[1]}</p>
        </Modal>
      </div>
  );
};

export default BeatsTable;