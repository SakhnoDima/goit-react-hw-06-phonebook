import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import modalShowReducer from './onShowModalSlice';
import toggleThemeReducer from './theme';

const persistConfig = {
  key: 'cont',
  storage,
  blacklist: ['filter'],
};

const persistedContacts = persistReducer(
  persistConfig,
  combineReducers({
    filter: filterReducer,
    modalShow: modalShowReducer,
    contacts: contactsReducer,
    theme: toggleThemeReducer,
  })
);

export const store = configureStore({
  reducer: persistedContacts,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
