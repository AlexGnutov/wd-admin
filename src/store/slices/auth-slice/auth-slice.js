import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    token: null,
    loading: false,
    error: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authReq: (state) => ({...state, error: false, loading: true}),
        authErr: (state) => ({...state, error: true, loading: false}),
        authOk: (state, action) => {
            const token = action.payload;
            return {
                ...state,
                loading: false,
                token,
                auth: true,
            }
        },
        clearAuth: (state) => (initialState),
    }
});

export const {
    authReq,
    authErr,
    authOk,
    clearAuth,
} = authSlice.actions;

export default authSlice.reducer;