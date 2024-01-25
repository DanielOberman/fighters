import React from "react";

import { TFighter } from '../models';
import { ALL_FIGHTERS } from '../ consts';

export const useAppApi = () => {
    const [isScrollTop, setIsScrollTop] = React.useState(true);
    const [currentFighter, setCurrentFighter] = React.useState<TFighter | null>(null);
    const [ringtone, setRingtone] = React.useState<string | null>(null)

    const handleRingtoneChange = (src: string) => {
        setRingtone(src);
    }

    const handleCurrentFighterChange = (fighter: TFighter| null) => {
        if (fighter) {
            setRingtone('https://vgmsite.com/soundtracks/mortal-kombat-ii-arcade-1993/dwadaumm/45.%20Coin.mp3');
        } else {
            console.log(1);
            setRingtone('https://www.myinstants.com/media/sounds/flawless-victory-mk-x.mp3');
        }

        setCurrentFighter(fighter);
    }

    const nextVideo = () => {
        if(currentFighter?.id === ALL_FIGHTERS[ALL_FIGHTERS.length - 1].id) {
            handleCurrentFighterChange(null);
        }

        if(currentFighter) {
            const nextFighter = ALL_FIGHTERS.find((fighter)=> fighter.id === currentFighter?.id + 1);
            
            if(nextFighter) setCurrentFighter(nextFighter)
        }
    }

    const prevVideo = () => {
        if(currentFighter) {
            const nextFighter = ALL_FIGHTERS.find((fighter)=> fighter.id === currentFighter?.id - 1);
            if(nextFighter)  setCurrentFighter(nextFighter)
        }
    }

    return {
        isScrollTop,
        setIsScrollTop,
        ringtone,
        onRingtoneChange: handleRingtoneChange,
        onCurrentFighterChange: handleCurrentFighterChange,
        nextVideo,
        prevVideo,
        currentFighter,
    }
}