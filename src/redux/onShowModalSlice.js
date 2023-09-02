import { createSlice } from '@reduxjs/toolkit';

const initialState = { onShow: false };

const modalShowSlice = createSlice({
  name: 'modalShow',
  initialState: initialState,
  reducers: {
    modalShowToggle(state) {
      state.onShow = !state.onShow;
    },
  },
});

export const { modalShowToggle } = modalShowSlice.actions;

export default modalShowSlice.reducer;
