import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import Forms, { IconButton, Modal } from './Form';
import { Contacts } from './Contacts';
import Filter from './Filter';
import { MainPage, Button, Title, Title2, Header } from './styles/App.styles';
import { modalShowToggle } from 'redux/onShowModalSlice';
import { getModalShow } from 'redux/selectors';
import { ThemeButton } from './ThemButtton/ThemeButton';
import TotalContacts from './TotalContacts/TotalContacts';

export const App = () => {
  const showModal = useSelector(getModalShow);
  const dispatch = useDispatch();

  return (
    <MainPage>
      <Header>
        <TotalContacts />
        <ThemeButton />
      </Header>
      <Title style={{ textAlign: 'center' }}>Phonebook</Title>
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
            <Title2 style={{ textAlign: 'center' }}>Contacts</Title2>
            <Filter />
            <Contacts />
          </>
        </Modal>
      )}
    </MainPage>
  );
};
