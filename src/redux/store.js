import { configureStore } from '@reduxjs/toolkit';
import { heroesSlice } from './heroes/heroes-slice';

export const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
