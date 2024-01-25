import React from "react";

import styles from './index.module.scss';

import topActive from '../images/topActive.png'
import topInActive from '../images/topInActive.png'
import bottomActive from '../images/bottomActive.png'
import bottomInActive from '../images/bottomInActive.png'

interface IProps {
    isScrollTop: boolean;
    scrollToTop: () => void;
    scrollDown:() => void;
}

export const ContentArrows:React.FC<IProps> = ({isScrollTop = true, scrollToTop, scrollDown}) => <div className={styles.root}>
    <button className={styles.button} onClick={scrollToTop}>
        { <img  src={ isScrollTop ?  topInActive: topActive} alt="topActive" />}
    </button>
    <button className={styles.button} onClick={scrollDown}>
        {<img  src={isScrollTop ?  bottomActive : bottomInActive} alt="bottomInActive" />}
    </button>
</div>