import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import IProducts from '../../interfaces/IProducts';

const slice = createSlice({
  name: 'api',
  initialState: {
    api: [] as any[],
  },

  reducers: {
    api(_state, api: PayloadAction<any[]>) {
      return {
        api: api.payload,
      };
    },
  },
});

export const { api } = slice.actions;

export default slice.reducer;
