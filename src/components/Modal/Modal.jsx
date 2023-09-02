import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { modalShowToggle } from 'redux/onShowModalSlice';
import { useDispatch } from 'react-redux';

import { Backdrop, ModalBody } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
      // закрив по Escspe
      if (event.code === 'Escape') {
        dispatch(modalShowToggle());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleBackDropClick = event => {
    // закрив по бекдроп
    if (event.target === event.currentTarget) {
      dispatch(modalShowToggle());
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <ModalBody>{children}</ModalBody>
    </Backdrop>,
    modalRoot
  );
};
