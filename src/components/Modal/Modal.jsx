import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalContent, BtnClose, Svg } from './Modal.styled';
import sprite from '../../images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <BtnClose type="button" onClick={() => onClose()}>
          <Svg>
            <use href={sprite + '#icon-close'} />
          </Svg>
        </BtnClose>

        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
