import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './slices/popup-slice/popup-slice';
import hallsReducer from './slices/data-slices/halls-slice';
import filmsReducer from './slices/data-slices/films-slice';
import showtimesReducer from './slices/data-slices/seances-slice';

import hallConfigReducer from './slices/config-slices/hall-config-slice';
import seanceConfigReducer from './slices/config-slices/seance-config-slice';
import deleteItemsReducer from './slices/delete-items-slice';

import authReducer from './slices/auth-slice/auth-slice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    popup: popupReducer,

    // data reducers:
    halls: hallsReducer,
    films: filmsReducer,
    seances: showtimesReducer,

    // config reducers:
    hallConfig: hallConfigReducer,
    seanceConfig: seanceConfigReducer,
    delete: deleteItemsReducer,

    // auth reducer:
    auth: authReducer,
  },
});
