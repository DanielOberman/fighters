import React from 'react';
import styles from './index.module.scss';
import ReactPlayer from 'react-player/lazy'

import { AppModal } from '../modal';
import { Content } from '../content';

import { AudioPlayer } from '../audio-player';
import { useAppApi } from './hooks';
import cursor from '../images/cursor.png';

export const App:React.FC = () => {
    const {
        isScrollTop,
        setIsScrollTop,
        ringtone,
        onRingtoneChange,
        onCurrentFighterChange,
        nextVideo,
        prevVideo,
        currentFighter,
    } = useAppApi();

    return (
        <div className={styles.root} style={{ cursor: `url(${cursor}) 15 15, auto` }}>
            {ringtone &&  <AudioPlayer src={ringtone} />}
            <AppModal nextVideo={nextVideo} prevVideo={prevVideo} currentFighter={currentFighter} onClose={() => onCurrentFighterChange(null)}>
                <ReactPlayer onEnded={() => nextVideo() } playing={true} url={currentFighter?.videoLink} controls={true} volume={1} height={752} width={564} />
            </AppModal>
            <Content onRingtoneChange={onRingtoneChange} onCurrentFighterChange={onCurrentFighterChange}  isScrollTop={isScrollTop} setIsScrollTop={setIsScrollTop} />
        </div>
    );
}


