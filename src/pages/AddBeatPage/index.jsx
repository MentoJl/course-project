import React, { useState, useRef } from "react";
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import styles from './style.module.css'
import { Upload } from 'antd';
import { UploadOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";


const AddBeatPage = () => {
    const [UpldIMG, setUpldIMG] = useState(null) 
    const [UpldSND, setUpldSND] = useState(null)
    const nameBeat = useRef(null)
    const keyBeat = useRef(null)
    const bpmBeat = useRef(null)

    return (
        <div>
            <Header/>
            <div className={styles.addBeatContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.uploadIMGContainer}>
                        <Upload 
                        listType="picture-card" 
                        className={styles.uploadIMG}
                        onChange={(img) => { UpldIMG === null ? setUpldIMG(img) : setUpldIMG(null)}}>
                            {UpldIMG === null ? <div className={styles.uploadText}>
                                <PlusOutlined />
                                Upload
                            </div> : ''}
                        </Upload>
                        Image
                    </div>
                    <div className={styles.uploadSNDContainer}>
                        <Upload 
                        listType="picture-circle" 
                        className={styles.uploadSND}
                        onChange={(img) => { UpldSND === null ? setUpldSND(img) : setUpldIMG(null)}}>
                            {UpldSND === null ? <div className={styles.uploadText}>
                                <PlusOutlined />
                                Upload
                            </div> : ''}
                        </Upload>
                        Audio
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AddBeatPage;