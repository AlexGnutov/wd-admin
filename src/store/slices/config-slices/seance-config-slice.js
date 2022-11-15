import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seanceFilm: null,
  seanceHall: null,
  seanceStartTime: null,
};

const seanceConfigSlice = createSlice({
  name: 'seanceConfig',
  initialState,
  reducers: {
    setSeanceFilm: (state, action) => {
      const seanceFilm = action.payload;
      return { ...state, seanceFilm };
    },
    setSeanceHall: (state, action) => {
      const seanceHall = action.payload;
      return { ...state, seanceHall };
    },
    setSeanceStartTime: (state, action) => {
      const seanceStartTime = action.payload;
      return { ...state, seanceStartTime };
    },
  },
});

export const {
  setSeanceFilm,
  setSeanceHall,
  setSeanceStartTime,
} = seanceConfigSlice.actions;

export default seanceConfigSlice.reducer;
