import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './slices/moviesSlice';
import appSlice from './slices/appSlice';

const middlewares = [thunk];

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    app: appSlice,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
