import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import FormData from 'form-data';

// axios.defaults.baseURL = 'https://bitmedia-lab.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:8080/api';

// use for Server side pagination
export const getHeroes = createAsyncThunk(
  'heroes/get-heroes',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/heroes/get-all-heroes`, {
        params: { ...credentials },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addNewHero = createAsyncThunk(
  'heroes/update-hero',
  async (credentials, thunkAPI) => {
    console.log('credentials', credentials);

    try {
      const { data } = await axios.post(`/heroes/create`, credentials, {
        header: { 'content-type': 'multipart/form-data' },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateHero = createAsyncThunk(
  'heroes/update-hero',
  async (credentials, thunkAPI) => {
    console.log('credentials', credentials);
    try {
      const { data } = await axios.put(
        `/heroes/update-stats/${credentials.id}`,
        credentials.formData,
        {
          header: { 'content-type': 'multipart/form-data' },
        },
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getHeroById = createAsyncThunk(
  'heroes/get-hero/:id',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.put(`/heroes/update-stats`, {
        params: { ...credentials },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const getTransactionByFilter = createAsyncThunk(
//   'transactions/get-transaction-search',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/transactions/search`, {
//         params: { ...credentials },
//       });

//       return data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const getTransactionsByBlockNumber = createAsyncThunk(
//   'transactions/get-by-block-number',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/transactions/searchByBlockNumber`, {
//         params: { ...credentials },
//       });

//       return data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
