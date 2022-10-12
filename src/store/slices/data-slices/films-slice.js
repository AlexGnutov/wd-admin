import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filmsList: [],
    loading: false,
    error: false,
};

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        loadFilmsReq: (state) => {
            return { ...state, loading: true, error: false }
        },
        loadFilmsErr: (state) => {
            return { ...state, loading: false, error: true }
        },
        loadFilmsOk: (state, action) => {
            const filmsList = action.payload;
            return {
                ...state,
                loading: false,
                filmsList,
            }
        },
        saveFilmReq: (state) => {
            return { ...state, loading: true, error: false }
        },
        saveFilmErr: (state) => {
            return { ...state, loading: false, error: true }
        },
    }
});

export const {
    loadFilmsReq,
    loadFilmsErr,
    loadFilmsOk,
    saveFilmReq,
    saveFilmErr,
} = filmsSlice.actions;

export default filmsSlice.reducer;