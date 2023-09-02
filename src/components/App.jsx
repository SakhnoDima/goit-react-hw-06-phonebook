import { useState } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai';
//import { useDispatch } from 'react-redux';

import Forms, { IconButton, Modal } from './Form';
import { Contacts } from './Contacts';
import Filter from './Filter';
import { MainPage, Button } from './styles/App.styles';
//import { modalShowToggle } from 'redux/onShowModalSlice';

export const App = () => {
  const [showModal, setModalShow] = useState(false);

  //const dispatch = useDispatch();

  // === тогл модалки ===
  const modalToggle = () => {
    setModalShow(prev => !prev);
  };

  return (
    <MainPage>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Forms />
      <Button type="button" onClick={modalToggle}>
        All Cntacts
      </Button>
      {showModal && (
        <Modal onCloses={modalToggle}>
          <>
            <IconButton onClick={modalToggle}>
              <AiOutlineCloseCircle />
            </IconButton>
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter />
            <Contacts />
          </>
        </Modal>
      )}
    </MainPage>
  );
};
