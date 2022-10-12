import {loadFilmsErr, loadFilmsOk, loadFilmsReq, saveFilmErr, saveFilmReq} from "../slices/data-slices/films-slice";

const server = process.env.REACT_APP_BASE_URL;
const API = process.env.REACT_APP_FILMS;
const basePath = server + API ;

export const loadFilmsThunk = (token) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        dispatch(loadFilmsReq());
        try {
            const reply = await fetch(basePath, {
                headers: {
                    'Authorization' : `Bearer ${token}`,
                }
            }).then(x => x.json());
            if (reply.status === 'ok') {
                dispatch(loadFilmsOk(reply.data));
            }
        } catch (e) {
            console.log(e.message);
            dispatch(loadFilmsErr());
        }
    }
}

export const saveFilmThunk = (filmData) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        dispatch(saveFilmReq());
        try {
            const reply = await fetch(basePath, {
                method: 'POST',
                body: filmData,
                headers: {
                    'Authorization' : `Bearer ${token}`,
                },
            }).then(x => x.json());
            if (reply.status === 'ok') {
                dispatch(loadFilmsThunk());
            }
        } catch (e) {
            console.log(e.message);
            dispatch(saveFilmErr());
        }
    }
}