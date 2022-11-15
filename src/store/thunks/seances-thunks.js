import {
  loadingSeancesErr,
  loadingSeancesOk,
  loadingSeancesReq, savingSeanceErr, savingSeanceOk, savingSeanceReq,
} from '../slices/data-slices/seances-slice';
import { setSeanceToDelete } from '../slices/delete-items-slice';
import { clearPopupVisible } from '../slices/popup-slice/popup-slice';

const server = process.env.REACT_APP_BASE_URL;
const API = process.env.REACT_APP_SEANCES;
const basePath = server + API;

export const loadSeancesThunk = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch(loadingSeancesReq());
  try {
    const reply = await fetch(basePath, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((x) => x.json());
    if (reply.status === 'ok') {
      dispatch(loadingSeancesOk(reply.data));
    }
  } catch (e) {
    dispatch(loadingSeancesErr());
  }
};

export const saveSeanceThunk = (seanceData) => async (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch(savingSeanceReq());
  try {
    const reply = await fetch(basePath, {
      method: 'POST',
      body: JSON.stringify(seanceData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());
    if (reply.status === 'ok') {
      dispatch(savingSeanceOk());
      dispatch(loadSeancesThunk());
    }
  } catch (e) {
    dispatch(savingSeanceErr());
  }
};

export const deleteSeanceThunk = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch(loadingSeancesReq());
  try {
    const reply = await fetch(`${basePath}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((x) => x.json());
    if (reply.status === 'ok') {
      dispatch(setSeanceToDelete(null));
      dispatch(clearPopupVisible({ popupName: 'seanceDeletePopup' }));
      dispatch(loadSeancesThunk());
    }
  } catch (e) {
    dispatch(loadingSeancesErr());
  }
};
