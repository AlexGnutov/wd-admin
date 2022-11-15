import {
  authErr, authOk, authReq, clearAuth,
} from '../slices/auth-slice/auth-slice';

const server = process.env.REACT_APP_BASE_URL;
const AUTH = process.env.REACT_APP_AUTH;
const authPath = server + AUTH;
const CLEAR_AUTH = process.env.REACT_APP_CLEAR_AUTH;
const clearAuthPath = server + CLEAR_AUTH;

export const requestAuthTokenThunk = (userData) => async (dispatch) => {
  dispatch(authReq());
  try {
    const reply = await fetch(authPath, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    }).then((r) => r.json());

    if (reply.status === 'ok') {
      dispatch(authOk(reply.token));
    }
  } catch (e) {
    dispatch(authErr());
  }
};

export const clearAuthTokenThunk = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const reply = await fetch(clearAuthPath, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());
    if (reply.status === 'ok') {
      dispatch(clearAuth());
    }
  } catch (e) {
    dispatch(authErr());
  }
};
