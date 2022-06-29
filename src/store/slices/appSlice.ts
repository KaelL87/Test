/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  loading?: number;
}

const initialState: AppState = {
  loading: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      const currentLoading = state.loading;
      state.loading =
        action.payload === true ? (currentLoading as number) + 1 : (currentLoading as number) - 1;
    },
  },
});

export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
