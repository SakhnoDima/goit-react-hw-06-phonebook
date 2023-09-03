import { createSlice } from '@reduxjs/toolkit';
//import { setTheme } from 'components/helpers/themtoggle';

const initialState = { them: false };

const toggleThemeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    themeToggle(state) {
      state.them = !state.them;
    },
  },
});
export const { themeToggle } = toggleThemeSlice.actions;

export default toggleThemeSlice.reducer;
