import React, { useState } from 'react';

const useModal = (initailState = false) => {
  const [isOpen, setModalState] = useState(initailState);

  const handleCloseModal = () => setModalState(false);
  const handleOpenModal = () => setModalState(true);

  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
