import React from "react";

import styles from './index.module.scss';

import prevActive from '../../images/prevActive.png'
import prevInActive from '../../images/prevInActive.png'
import nextActive from '../../images/nextActive.png'
import nextInActive from '../../images/nextInActive.png'


interface IProps {
    type?:  string,
    disabled: boolean;
    onClick: () => void;
}


export const ModalArrow:React.FC<IProps> = ({type, disabled, onClick }) => {
    const content = () => {
        if (type === 'prev') {
            return <img  onClick={onClick} src={disabled  ? prevInActive : prevActive  } alt="topActive" />
        } else {
            return <img onClick={onClick}  src={disabled  ? nextActive : nextInActive } alt="topActive" />
        }
    }

   return  <button className={styles.root}>
        {content()}
</button>

}