import React from "react";

import ReactAudioPlayer from 'react-audio-player';

interface IProps {
    src: string;
}

export const AudioPlayer:React.FC<IProps> = ({src}) => {

    return  <ReactAudioPlayer
        preload="auto"
        src={src}
        autoPlay
    />
}