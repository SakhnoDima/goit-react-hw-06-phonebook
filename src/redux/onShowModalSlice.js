import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const modalShowSlice = createSlice({
  name: 'modalShow',
  initialState: initialState,
  reducers: {
    modalShowToggle(state) {},
  },
});

export const { modalShowToggle } = modalShowSlice.actions;

export default modalShowSlice.reducer;
