import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import IProducts from '../../interfaces/IProducts';
import { ITheme } from '../../interfaces';

const slice = createSlice({
  name: 'theme',
  initialState: {
    theme: {
      theme: 'dark',
      font1: '#9f4fa3',
      font2: '#d4ccd6',
      font3: '#020122',
      background1: '#0a0613',
      background2: '#130c25',
    } as ITheme,
  },

  reducers: {
    theme(_state, theme: PayloadAction<ITheme>) {
      return {
        theme: theme.payload,
      };
    },
  },
});

export const { theme } = slice.actions;

export default slice.reducer;
