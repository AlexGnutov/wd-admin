import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    hallAddPopup: false,
    hallDeletePopup: false,

    filmAddPopup: false,
    filmDeletePopup: false,

    seanceAddPopup: false,
    seanceDeletePopup: false,
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopupVisible: (state, action) => {
            const {popupName} = action.payload;
            return {
                ...state,
                [popupName]: true,
            }
        },
        clearPopupVisible: (state, action) => {
            const {popupName} = action.payload;
            return {
                ...state,
                [popupName]: false,
            }
        },
    }
});

export const {
    setPopupVisible,
    clearPopupVisible,
} = popupSlice.actions;

export default popupSlice.reducer;