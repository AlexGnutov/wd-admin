import {
    loadingSeancesErr,
    loadingSeancesOk,
    loadingSeancesReq, savingSeanceErr, savingSeanceOk, savingSeanceReq,
} from "../slices/data-slices/seances-slice";

const server = process.env.REACT_APP_BASE_URL;
const API = process.env.REACT_APP_SEANCES;
const basePath = server + API;

export const loadSeancesThunk = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        dispatch(loadingSeancesReq());
        try {
            const reply = await fetch(basePath, {
                headers: {
                    'Authorization' : `Bearer ${token}`,
                },
            }).then(x => x.json());
            if (reply.status === 'ok') {
                dispatch(loadingSeancesOk(reply.data));
            }
        } catch (e) {
            dispatch(loadingSeancesErr());
        }
    }
}

export const saveSeanceThunk = (seanceData) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        dispatch(savingSeanceReq());
        try {
            console.log(seanceData);
            const reply = await fetch(basePath, {
                method: 'POST',
                body: JSON.stringify(seanceData),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization' : `Bearer ${token}`,
                },
            }).then(r => r.json());
            if (reply.status === 'ok') {
                dispatch(savingSeanceOk());
                dispatch(loadSeancesThunk());
            }
        } catch (e) {
            dispatch(savingSeanceErr());
        }
    }
}