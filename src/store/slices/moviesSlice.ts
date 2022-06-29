/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData } from 'src/types';
export interface IMovies {
  movies: IData;
  searchMovies: IData;
}

const initialState: IMovies = {
  movies: { data: [], hasMore: true, page: 0 },
  searchMovies: { data: [], hasMore: true, page: 0 },
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getResults: (state, action: PayloadAction<IData>) => {
      if (action.payload.page === 1) {
        state.movies.data = action.payload.data;
      } else {
        state.movies.data = [...state.movies.data, ...action.payload.data];
      }
      state.movies.hasMore = action.payload.hasMore;
      state.movies.page = action.payload.page;
    },
    getSearchMovies: (state, action: PayloadAction<IData>) => {
      if (action.payload.page === 1) {
        state.searchMovies.data = action.payload.data;
      } else {
        state.searchMovies.data = [...state.searchMovies.data, ...action.payload.data];
      }
      state.searchMovies.hasMore = action.payload.hasMore;
      state.searchMovies.page = action.payload.page;
    },
    clearSearch: state => {
      state.searchMovies.data = [];
      state.searchMovies.hasMore = true;
      state.searchMovies.page = 1;
    },
  },
});

export const { getResults, getSearchMovies, clearSearch } = moviesSlice.actions;

export default moviesSlice.reducer;
