import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  secteurs: [
    { id: 1, nom: 'Secteur A' },
    { id: 2, nom: 'Secteur B' },
    { id: 3, nom: 'Secteur C' },
  ]
};

const secteursSlice = createSlice({
  name: 'secteurs',
  initialState,
  reducers: {}
});

export const { } = secteursSlice.actions;

export default secteursSlice.reducer;
