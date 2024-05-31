import React, { useState } from 'react';
import styles from './style.module.css';
import Header from '../header/index';
import { Button, Image, Typography } from 'antd'

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.searcherContainer}>
        <input
          type="text"
          placeholder="What type of track are you looking for?"
          className={styles.searcher}
        />
        <span className={styles.searchButton}>Search</span>
      </div>
      <div className={styles.featuredBeat}>
        <div className={styles.beatHeat}>
          <Image 
            className={styles.beatHeatLogo}
            src='/mainPage/previewBeatLogo.jpg'
            preview={false}
          >
          </Image>
          <div className={styles.beatInfo}>
            <div className={styles.featuredText}>Featured Track  •  102BPM</div>
            <div className={styles.beatName}>
              Risky
            </div>
            <div className={styles.previewBeatButtons}>
              <Button className={styles.purchase}>
                <Image
                  preview={false} 
                  className={styles.cartPriceImg}
                  src='/mainPage/cart.png'
                ></Image>
                <Typography.Text className={styles.purchaseText}>$34.95</Typography.Text>
              </Button>
              <Button className={styles.share}>
                <Image 
                preview={false} 
                src='/mainPage/share.png' 
                className={styles.shareImg}
                ></Image>
              </Button>
              <Button className={styles.tag}>
                <Typography.Text className={styles.tagText}>ohgeesy</Typography.Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eq}>
        <Image 
        className={styles.test}
        preview={false} 
        src='/mainPage/eq.png' >
        </Image>
      </div>
      <div className={styles.licenses}>
        <div className={styles.licenseinfo}>Licensing Info</div>
        <div className={styles.licensesmain}>
          <div className={styles.licenseCard}>
            <div className={styles.title}>MP3 Lease</div>
            <div className={styles.price}>$34.95</div>
            <div className={styles.details}>
              <div>MP3 File</div>
              <div>2,000 Unit Cap</div>
              <div>1 Commercial Use Only</div>
              <div>10,000 Stream Cap</div>
            </div>
            <button onClick={openModal} className={styles.button}>READ LICENSE</button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>WAV Lease</div>
            <div className={styles.price}>$49.95</div>
            <div className={styles.details}>
              <div>WAV + MP3 File</div>
              <div>5,000 Unit Cap</div>
              <div>2 Commercial Use Only</div>
              <div>50,000 Stream Cap</div>
            </div>
            <button onClick={openModal} className={styles.button}>READ LICENSE</button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>Unlimited WAV</div>
            <div className={styles.price}>$79.95</div>
            <div className={styles.details}>
              <div>WAV + MP3 File</div>
              <div>Unlimited Unit Cap</div>
              <div>Unlimited Commercial Use</div>
              <div>Unlimited Stream Cap</div>
            </div>
            <button onClick={openModal} className={styles.button}>READ LICENSE</button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>Trackout Lease</div>
            <div className={styles.price}>$99.95</div>
            <div className={styles.details}>
              <div>Stems + WAV + MP3 File</div>
              <div>2 Commercial Use Only</div>
              <div>200,000 Stream Cap</div>
            </div>
            <button onClick={openModal} className={styles.button}>READ LICENSE</button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
          <div className={styles.licenseCard}>
            <div className={styles.title}>Exclusive Rights</div>
            <div className={styles.price}>MAKE AN OFFER</div>
            <div className={styles.details}>
              <div>Stems + WAV + MP3 File</div>
              <div>Unlimited Unit Cap</div>
              <div>Unlimited Stream Cap</div>
              <div>Exclusive Ownership</div>
            </div>
            <button onClick={openModal} className={styles.button}>READ LICENSE</button>
            <div className={styles.bulkdeals}>
              <div>Bulk deals:</div>
              <div>BUY 2 TRACKS, GET 1 FREE!</div>
              <div>BUY 3 TRACKS, GET 2 FREE!</div>
              <div>BUY 4 TRACKS, GET 3 FREE!</div>
              <div>BUY 5 TRACKS, GET 4 FREE!</div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <h3>DJ PROBLEMATIC</h3>
          <p>Home</p>
          <p>All Beats</p>
          <p>Albums</p>
          <p>Sound Kits</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Custom Beat</h3>
          <p>Faq</p>
          <p>About Me</p>
          <p>Contact Me</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Licensing Info</h3>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>YouTube Terms of Service</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Follow Me</h3>
          <div className={styles.socialIcons}>
            <span>Youtube</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>License Preview</h2>
            <p>License details here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
