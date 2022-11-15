import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeHall: null,
  rows: 0,
  seatsPerRow: 0,
  seats: [],
  standardPrice: 0,
  vipPrice: 0,
};

const hallConfigSlice = createSlice({
  name: 'hallConfig',
  initialState,
  reducers: {
    setHallConfigValues: (state, action) => {
      const newValues = action.payload;
      return {
        ...state,
        ...newValues,
      };
    },
  },
});

export const {
  setHallConfigValues,
} = hallConfigSlice.actions;

export default hallConfigSlice.reducer;
