import {
  loadFilmsErr, loadFilmsOk, loadFilmsReq, saveFilmErr, saveFilmReq,
} from '../slices/data-slices/films-slice';
import { setFilmToDelete } from '../slices/delete-items-slice';
import { clearPopupVisible } from '../slices/popup-slice/popup-slice';
import { loadSeancesThunk } from './seances-thunks';

const server = process.env.REACT_APP_BASE_URL;
const API = process.env.REACT_APP_FILMS;
const basePath = server + API;

export const loadFilmsThunk = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch(loadFilmsReq());
  try {
    const reply = await fetch(basePath, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((x) => x.json());
    if (reply.status === 'ok') {
      dispatch(loadFilmsOk(reply.data));
    }
  } catch (e) {
    dispatch(loadFilmsErr());
  }
};

export const saveFilmThunk = (filmData) => async (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch(saveFilmReq());
  try {
    const reply = await fetch(basePath, {
      method: 'POST',
      body: filmData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((x) => x.json());
    if (reply.status === 'ok') {
      dispatch(loadFilmsThunk());
    }
  } catch (e) {
    dispatch(saveFilmErr());
  }
};

export const deleteFilmThunk = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch(loadFilmsReq());
  try {
    const reply = await fetch(`${basePath}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((x) => x.json());
    if (reply.status === 'ok') {
      dispatch(setFilmToDelete(null));
      dispatch(clearPopupVisible({ popupName: 'filmDeletePopup' }));
      dispatch(loadFilmsThunk());
      dispatch(loadSeancesThunk());
    }
  } catch (e) {
    dispatch(loadFilmsErr());
  }
};
