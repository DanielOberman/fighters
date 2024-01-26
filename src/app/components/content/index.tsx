import React from "react";

import styles from './index.module.scss';

import { ContentArrows } from '../content-arrows';

import heading from '../images/heading.png';
import { TFighter } from "../models";
import { FIGHTERS, FIGHTERS_LAST_ROW, TRUE_FIGHTERS } from "../consts";
import { useContentApi } from "./hooks";



interface IProps {
    isScrollTop: boolean;
    setIsScrollTop: React.Dispatch<React.SetStateAction<boolean>>
    onCurrentFighterChange: (fighter: TFighter | null) => void
    onRingtoneChange: (src: string) => void
}

export const Content:React.FC<IProps> = ({isScrollTop, setIsScrollTop, onCurrentFighterChange, onRingtoneChange}) => {
    const { scrollToTop, scrollDown, scrollContainerRef} = useContentApi(isScrollTop, setIsScrollTop)

    return (
        <div className={styles.root}>
        <img src={heading} alt="heading" />
        <div className={styles.content}>
            <ContentArrows isScrollTop={isScrollTop} scrollToTop={scrollToTop}  scrollDown={scrollDown} />
            <div className={styles.list} ref={scrollContainerRef}>
                {
                    FIGHTERS.map(fighter =>  <div className={styles.listItem}><img className={styles.listItemImg} onClick={() => onCurrentFighterChange(fighter)} key={fighter.name} src={fighter.fighter} alt={fighter.name} /></div>)
                }
                
                <div className={styles.listLastRow}>
                    {
                        FIGHTERS_LAST_ROW.map(fighter => <div className={styles.listItem}><img className={styles.listItemImg} onClick={() => onCurrentFighterChange(fighter)}  key={fighter.name} src={fighter.fighter} alt={fighter.name} /></div>)
                    }
                </div>
            </div>
            <ContentArrows isScrollTop={isScrollTop} scrollToTop={scrollToTop}  scrollDown={scrollDown} />
        </div>
        <div className={styles.trueFighters} >
            {
                 TRUE_FIGHTERS.map(fighter => <img className={styles.trueFightersItem} onClick={() => onRingtoneChange(fighter.ringtone)} key={fighter.fighter} src={fighter.fighter} alt="true_fighter" />)
            }

        </div>
    </div>
    )
}