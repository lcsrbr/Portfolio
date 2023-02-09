import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import IProducts from '../../interfaces/IProducts';

interface ITheme {
  font1: string;
  font2: string;
  font3: string;
  background1: string;
  background2: string;
}

const slice = createSlice({
  name: 'theme',
  initialState: {
    theme: {} as ITheme,
  },

  reducers: {
    theme(_state, theme: PayloadAction<ITheme>) {
      localStorage.setItem('theme', JSON.stringify(theme));
      return {
        theme: theme.payload,
      };
    },
  },
});

export const { theme } = slice.actions;

export default slice.reducer;
