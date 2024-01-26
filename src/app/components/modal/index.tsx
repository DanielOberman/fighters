import React from "react";

import Modal from 'react-modal';
import { ModalArrow } from "./modal-arrow";
import { TFighter } from "../models";
import { FIRST_FIGHTER_ID, LAST_FIGHTER_ID } from "../consts";


interface IProps extends React.PropsWithChildren {
    currentFighter: TFighter | null;
    onClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
    nextVideo: () => void;
    prevVideo: () => void;
}

const customStyles = {
    content: {
      width: '485px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#000',
      display: 'flex',
      padding: 0,
    },
};

export const AppModal: React.FC<IProps> = ({children, onClose, currentFighter, nextVideo, prevVideo }) => {
  return <Modal
        isOpen={!!currentFighter}
        onRequestClose={onClose}
        style={customStyles}
  >
      <ModalArrow onClick={prevVideo}  disabled={currentFighter?.id === FIRST_FIGHTER_ID} type="prev"  />
        {children}
      <ModalArrow onClick={nextVideo} disabled={currentFighter?.id === LAST_FIGHTER_ID} />
  </Modal>
}