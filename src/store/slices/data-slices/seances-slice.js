import {createSlice} from "@reduxjs/toolkit";

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
        loadingSeancesReq: (state) => {
            return {...state, loading: true, loadingError: false};
        },
        loadingSeancesErr: (state) => {
            return {...state, loading: false, loadingError: true};
        },
        loadingSeancesOk: (state, action) => {
            const seancesList = action.payload;
            return {
                ...state,
                loading: false,
                seancesList,
            }
        },
        savingSeanceReq: (state) => {
            return {...state, saving: true, savingError: false};
        },
        savingSeanceErr: (state) => {
            return {...state, savingError: true, saving: false};
        },
        savingSeanceOk: (state) => {
            return {...state, savingError: false, saving: false};
        }
    }
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