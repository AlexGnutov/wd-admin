import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seancesList: [],
  loading: false,
  loadingError: false,
  saving: false,
  savingError: false,
};

const seancesSlice = createSlice({
  name: 'showtimes',
  initialState,
  reducers: {
    loadingSeancesReq: (state) => ({ ...state, loading: true, loadingError: false }),
    loadingSeancesErr: (state) => ({ ...state, loading: false, loadingError: true }),
    loadingSeancesOk: (state, action) => {
      const seancesList = action.payload;
      return {
        ...state,
        loading: false,
        seancesList,
      };
    },
    savingSeanceReq: (state) => ({ ...state, saving: true, savingError: false }),
    savingSeanceErr: (state) => ({ ...state, savingError: true, saving: false }),
    savingSeanceOk: (state) => ({ ...state, savingError: false, saving: false }),
  },
});

export const {
  loadingSeancesErr,
  loadingSeancesOk,
  loadingSeancesReq,
  savingSeanceErr,
  savingSeanceReq,
  savingSeanceOk,
} = seancesSlice.actions;

export default seancesSlice.reducer;
