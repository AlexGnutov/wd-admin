import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    hallsList: [],
    loading: false,
    error: false,
};

const hallsSlice = createSlice({
    name: 'halls',
    initialState,
    reducers: {
        loadingHallsReq: (state) => {
            return { ...state, loading: true, error: false }
        },
        loadingHallsErr: (state) => {
            return { ...state, loading: false, error: true }
        },
        loadingHallsOk: (state, action) => {
            const hallsList = action.payload;
            return {
                ...state,
                loading: false,
                hallsList,
            }
        },
    }
});

export const {
    loadingHallsErr,
    loadingHallsOk,
    loadingHallsReq,
} = hallsSlice.actions;

export default hallsSlice.reducer;