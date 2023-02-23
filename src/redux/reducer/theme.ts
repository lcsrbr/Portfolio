import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import IProducts from '../../interfaces/IProducts';
import { ITheme } from '../../interfaces';
import { dark } from '../../styles/theme';
const slice = createSlice({
  name: 'theme',
  initialState: {
    theme: dark as ITheme,
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
