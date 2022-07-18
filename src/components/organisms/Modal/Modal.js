import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Save</Button>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: propTypes.func,
  isOpen: propTypes.bool,
  children: propTypes.element,
};

export default Modal;
