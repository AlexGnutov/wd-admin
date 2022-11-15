import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hallToDelete: null,
  filmToDelete: null,
  seanceToDelete: null,
};

const deleteItemsSlice = createSlice({
  name: 'deleteIds',
  initialState,
  reducers: {
    setHallToDelete: (state, action) => {
      const hallToDelete = action.payload;
      return { ...state, hallToDelete };
    },
    setFilmToDelete: (state, action) => {
      const filmToDelete = action.payload;
      return { ...state, filmToDelete };
    },
    setSeanceToDelete: (state, action) => {
      const seanceToDelete = action.payload;
      return { ...state, seanceToDelete };
    },
  },
});

export const {
  setHallToDelete,
  setFilmToDelete,
  setSeanceToDelete,
} = deleteItemsSlice.actions;

export default deleteItemsSlice.reducer;
