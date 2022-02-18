import { createSlice } from '@reduxjs/toolkit';
import * as heroesOperations from './heroes-operations.js';

const initialState = {
  heroesData: [],
  count: 0,
  isLoadingHeroesData: false,
  currentPage: 1,
  pageItemsLimit: 5,
  chosenHero: null,
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setPageOption: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimitOption: (state, action) => {
      state.pageItemsLimit = action.payload;
    },
    setChosenHero: (state, action) => {
      state.chosenHero = action.payload;
    },
  },
  extraReducers: {
    //------------------ Get Heroes Data
    [heroesOperations.getHeroes.pending](state, _) {
      state.isLoadingHeroesData = true;
    },
    [heroesOperations.getHeroes.fulfilled](state, action) {
      state.heroesData = action.payload.result;
      state.count = action.payload.count;
      state.isLoadingHeroesData = false;
    },
    [heroesOperations.getHeroes.rejected](state, action) {
      state.heroesData = [];
      state.isLoadingHeroesData = false;
    },
    //------------------ Update Transactions Data
    [heroesOperations.updateHero.pending](state, _) {
      state.isLoadingHeroesData = true;
    },
    [heroesOperations.updateHero.fulfilled](state, action) {
      state.chosenHero = action.payload.result;
      state.isLoadingHeroesData = false;
    },
    [heroesOperations.updateHero.rejected](state, action) {
      state.isLoadingHeroesData = false;
    },
  },
});

export const {
  // setFilterOption,
  // setSearchQuery,
  setPageOption,
  setLimitOption,
  setChosenHero,
} = heroesSlice.actions;
