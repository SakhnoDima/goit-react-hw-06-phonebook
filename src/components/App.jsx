import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import Forms, { IconButton, Modal } from './Form';
import { Contacts } from './Contacts';
import Filter from './Filter';
import { MainPage, Button } from './styles/App.styles';
import { modalShowToggle } from 'redux/onShowModalSlice';
import { getModalShow } from 'redux/selectors';

export const App = () => {
  const showModal = useSelector(getModalShow);
  const dispatch = useDispatch();

  return (
    <MainPage>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Forms />
      <Button
        type="button"
        onClick={() => {
          dispatch(modalShowToggle());
        }}
      >
        All Cntacts
      </Button>
      {showModal && (
        <Modal>
          <>
            <IconButton
              onClick={() => {
                dispatch(modalShowToggle());
              }}
            >
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
