import React, { useState } from 'react';
import styles from './style.module.css';
import Header from '../header/index';
import Footer from '../footer/index';
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
        
        {/* <Button type="default">gfdgfh</Button> */}
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
                  src='/mainPage/cart1.png'
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
      <table>
        <tr>
          <th>BEAT</th>
          <th>TITLE</th>
          <th>TIME</th>
          <th>TAGS</th>
          <th>LINKS</th>
          </tr>
      </table>
      <div className={styles.test}>fgf</div>
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
              <div>BUY 3 TRACKС, GET 2 FREE!</div>
              <div>BUY 4 TRACKС, GET 3 FREE!</div>
              <div>BUY 5 TRACKС, GET 4 FREE!</div>
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
              <div>BUY 2 TRACKС, GET 1 FREE!</div>
              <div>BUY 3 TRACKС, GET 2 FREE!</div>
              <div>BUY 4 TRACKС, GET 3 FREE!</div>
              <div>BUY 5 TRACKС, GET 4 FREE!</div>
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
              <div>BUY 2 TRACKС, GET 1 FREE!</div>
              <div>BUY 3 TRACKС, GET 2 FREE!</div>
              <div>BUY 4 TRACKС, GET 3 FREE!</div>
              <div>BUY 5 TRACKС, GET 4 FREE!</div>
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
              <div>BUY 2 TRACKС, GET 1 FREE!</div>
              <div>BUY 3 TRACKС, GET 2 FREE!</div>
              <div>BUY 4 TRACKС, GET 3 FREE!</div>
              <div>BUY 5 TRACKС, GET 4 FREE!</div>
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
              <div>BUY 2 TRACKС, GET 1 FREE!</div>
              <div>BUY 3 TRACKС, GET 2 FREE!</div>
              <div>BUY 4 TRACKС, GET 3 FREE!</div>
              <div>BUY 5 TRACKС, GET 4 FREE!</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>License Preview</h2>
            <p>This Non-Exclusive MP3 Lease (Contract Preview Only) License Agreement (the "Agreement"), having been made on and effective as of 5/29/24, 10:59 PM (the "Effective Date") by and between Preview Only p/k/a Preview Only (the "Producer" or "Licensor"); and Licensee residing at [N/A] ("You" or "Licensee"), sets forth the terms and conditions of the Licensee's use, and the rights granted in, the Producer's instrumental music file entitled Preview Track Only (the "Beat") in consideration for Licensee's payment of $ 34.95 (the "License Fee"), on a so-called "MP3 Lease (Contract Preview Only)" basis.
            This Agreement is issued solely in connection with and for Licensee's use of the Beat pursuant and subject to all terms and conditions set forth herein.
            <p>1. License Fee: The Licensee to shall make payment of the License Fee to Licensor on the date of this Agreement. All rights granted to Licensee by Producer in the Beat are conditional upon Licensee's timely payment of the License Fee. The License Fee is a one-time payment for the rights granted to Licensee and this Agreement is not valid until the License Fee has been paid.</p>
            </p>
            <p>2. Delivery of the Beat:
              <p>2.1 Licensor agrees to deliver the Beat as a high-quality MP3, as such terms are understood in the music industry.
              <p>2.2 Licensor shall use commercially reasonable efforts to deliver the Beat to Licensee immediately after payment of the License Fee is made. Licensee will receive the Beat via email, to the email address Licensee provided to Licensor.</p> 
</p>    
            </p>
            <p>3. Term: The Term of this Agreement shall be ten (10) years and this license shall expire on the ten (10) year anniversary of the Effective Date</p>
            <p>4. Use of the Beat:</p>
            <p>4.1 In consideration for Licensee's payment of the License Fee, the Producer hereby grants Licensee a limited non-exclusive, nontransferablelicense and the right to incorporate, include and/or use the Beat in the preparation of one (1) new song or to incorporate the Beat into a new piece of instrumental music created by the Licensee. Licensee may create the new song or new instrumental music by recording his/her written lyrics over the Beat and/or by incorporating portions/samples of the Beat into pre-existing instrumental music written, produced and/or owned by Licensee. The new song or piece of instrumental music created by the Licensee which incorporates some or all of the Beat shall be referred to as the "New Song". Permission is granted to Licensee to modify the arrangement, length, tempo, or pitch of the Beat in preparation of the New Song for public release</p>
            <p>4.2 This Licensegrants Licensee a worldwide, non-exclusive license to use the Beat as incorporated in the New Song in the manners and for the purposes expressly provided for herein, subject to the sale restrictions, limitations and prohibited uses stated in this Agreement. Licensee acknowledges and agrees that any and all rights granted to Licensee in the Beat pursuant to this Agreement are on a NON-EXCLUSIVE basis and Producer shall continue to license the Beat upon the same or similar terms and conditions as this Agreement to other potential third-party licensees</p> 
            <p>4.3 The New Song may be used for any promotional purposes, including but not limited to, a release in a single format, for inclusion in a mixtape or free compilation of music bundled together (EP or album), and/or promotional, non-monetized digital streaming</p> 
            <p>4.4 Licensee true perform the song publicly for-profit performances and for an Unlimited non-profit performances, including but not limited to, at a live performance (i.e. concert, festival, nightclub etc.), on terrestrial or satellite radio, and/or on the internet via third-party streaming services (Spotify, YouTube, iTunes Radio etc.). The New Song may be played on 1 terrestrial or satellite radio stations</p> 
            <p>4.5 The Licensee may use the New Song in synchronization with Zero (0) audiovisual work no longer than five (5) minutes in length (a "Video"). In the event that the New Song itself is longer than five (5) minutes in length, the Video may not play for longer than the length of the New Song. The Video may be broadcast on any television network and/or uploaded to the internet for digital streaming and/or free download by the public including but not limited to on YouTube and/or Vevo. Producer grants no other synchronization rights to Licensee</p> 
            <p>4.6 The Licensee may make the New Song available for sale in physical and/or digital form and sell 2000 downloads/physical music products and are allowed 10000 monetized audio streams, 1 monetized video streams, * non-monetized video streams and are allowed *Unlimited free downloads. The New Song may be available for sale as a single and/or included in a compilation of other songs bundled together by Licensee as an EP or a full-length Album. The New Song may be sold via digital retailers for permanent digital download in mp3 format and/or physical format, including compact disc and vinyl records. For clarity and avoidance of doubt, the Licensee does NOT have the right to sell the Beat in the form that it was delivered to Licensee. The Licensee must create a New Song (or instrumental as detailed above) for its rights under this provision to a vest. Any sale of the Beat in its original form by Licensee shall be a material breach of this Agreement and the Licensee shall be liable to the Licensor for damages as provided hereunder.</p> 
     </div>
        </div>
      )}
    </div>
  );
};

export default Main;