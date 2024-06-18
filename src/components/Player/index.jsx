import React, { useRef, useState, useEffect } from 'react';
import styles from './style.module.css';
import { Image, Slider } from 'antd';

const Player = ({ imgSrc, title, time, link, price, beatSrc, prevButton, nextButton }) => {
    const audioRef = useRef(null);
    const [imgPlaySrc, setImgPlaySrc] = useState('./test/play_button.png');
    const [imgSkipnSrc, setImgSkipnSrc] = useState('./test/skipn.png');
    const [imgSkippSrc, setImgSkippSrc] = useState('./test/skipp.png');
    const [imgVolumeSrc, setImgVolumeSrc] = useState('./test/volume1.png');
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const formatter = (value) => `${Math.round(value*100)}%`;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = beatSrc;
            audioRef.current.load();
        }
    }, [beatSrc]);

    const playPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setImgPlaySrc('./test/pause_button.png');
        } else {
            audioRef.current.pause();
            setImgPlaySrc('./test/play_button.png');
        }
    };

    const changeVolume = (value) => {
        audioRef.current.volume = value;
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
        audioRef.current.play();
        setImgPlaySrc('./test/pause_button.png');
    };

    const handleTimeChange = (value) => {
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    return (
        <div className={styles.playerContainer}>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <Slider
                step={0.01}
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleTimeChange}
                className={styles.timeSlider}
                styles={{
                        track: {
                            background: 'white',
                        },
                        rail: {
                            background: '#67030d'
                        }
                    }
                }
                tooltip={{ formatter: null }}
            />
            <div className={styles.controlsContainer}>
                <div className={styles.head}>
                    <Image
                        src={imgSrc}
                        preview={false}
                        className={styles.beatImg}
                    />
                    <span className={styles.title}>{title}</span>
                </div>
                <div className={styles.controls}>
                    <Image
                        onClick={prevButton}
                        src={imgSkippSrc}
                        preview={false}
                        className={styles.skipp}
                    />
                    <Image
                        onClick={playPause}
                        src={imgPlaySrc}
                        preview={false}
                        className={styles.controlButton}
                    />
                    <Image
                        onClick={nextButton}
                        src={imgSkipnSrc}
                        preview={false}
                        className={styles.skipn}
                    />
                </div>
                <div className={styles.volumeContainer}>
                    <Image
                        src={imgVolumeSrc}
                        preview={false}
                        className={styles.volumeImg}
                    />
                    <Slider
                        min={0}
                        max={1}
                        step={0.01}
                        defaultValue={1}
                        onChange={changeVolume}
                        className={styles.volumeSlider}
                        styles={{
                                track: {
                                    background: 'white',
                                },
                                rail: {
                                    background: '#67030d'
                                }
                            }
                        }
                        tooltip={{formatter}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;