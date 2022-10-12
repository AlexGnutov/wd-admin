import {
    loadingHallsErr,
    loadingHallsOk,
    loadingHallsReq,
} from "../slices/data-slices/halls-slice";
import {setHallConfigValues} from "../slices/config-slices/hall-config-slice";
import {clearPopupVisible} from "../slices/popup-slice/popup-slice";
import {setHallToDelete} from "../slices/delete-items-slice";

const server = process.env.REACT_APP_BASE_URL;
const API = process.env.REACT_APP_HALLS;
const basePath = server + API ;

export const loadHallsThunk = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        dispatch(loadingHallsReq());
        try {
            const reply = await fetch(basePath, {
                headers: {
                    'Authorization' : `Bearer ${token}`,
                }
            }).then(r => r.json());

            if (reply.status === 'ok') {
                const halls = reply.data;
                dispatch(loadingHallsOk(halls));

                const activeHall = halls[0] ? halls[0] : null;
                dispatch(setHallConfigValues({
                    activeHall,
                    standardPrice: activeHall.standardPrice,
                    vipPrice: activeHall.vipPrice,
                }));
            }
        } catch (e) {
            dispatch(loadingHallsErr());
        }
    }
}

export const deleteHallThunk = (id) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        dispatch(loadingHallsReq());
        try {
            const reply = await fetch(basePath + `/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization' : `Bearer ${token}`,
                },
            }).then(x => x.json());
            if (reply.status === 'ok') {
                dispatch(setHallToDelete(null));
                dispatch(clearPopupVisible({popupName: 'hallDeletePopup'}));
                dispatch(loadHallsThunk());
            }
        } catch (e) {
            dispatch(loadingHallsErr());
        }
    }
}

export const createHallThunk = (hallData) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        dispatch(loadingHallsReq());
        try {
            const reply = await fetch(basePath, {
                method: 'POST',
                body: JSON.stringify(hallData),
                headers: {
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${token}`,
                },
            }).then(x => x.json());
            if (reply.status === 'ok') {
                dispatch(loadHallsThunk());
            }
        } catch (e) {
            dispatch(loadingHallsReq());
        }
    }
}

export const updateHallThunk = (updateData) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const {id} = updateData;
        dispatch(loadingHallsReq());
        try {
            const reply = await fetch(basePath + `/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updateData.data),
                headers: {
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${token}`,
                },
            }).then(r => r.json());
            if (reply.status === 'ok') {
                dispatch(loadHallsThunk());
            }
        } catch (e) {
            dispatch(loadingHallsErr());
        }

    }
}