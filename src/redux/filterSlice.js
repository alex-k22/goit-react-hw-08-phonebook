import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { addFilter } = filterSlice.actions;