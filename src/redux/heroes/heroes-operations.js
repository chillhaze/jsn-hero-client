import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { BASE_DB_URL } from '../../constants/baseDbURL';

axios.defaults.baseURL = BASE_DB_URL;
// axios.defaults.baseURL = 'http://localhost:8080/api';

export const getHeroes = createAsyncThunk(
  'heroes/get-heroes',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/heroes/get-all-heroes`, {
        params: { ...credentials },
      });
      console.log(data.data);
      return data.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addNewHero = createAsyncThunk(
  'heroes/add-hero',
  async (credentials, thunkAPI) => {
    console.log('credentials', credentials);

    try {
      const { data } = await axios.post(`api/heroes/create`, credentials, {
        header: { 'content-type': 'multipart/form-data' },
      });

      toast.success('Hero created!');

      return data.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateHero = createAsyncThunk(
  'heroes/update-hero',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `api/heroes/update-stats/${credentials.id}`,
        credentials.formData,
        {
          header: { 'content-type': 'multipart/form-data' },
        },
      );

      toast.success('Hero stats updated!');
      return data.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeImage = createAsyncThunk(
  'heroes/remove-image',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { data } = await axios.put(
        `api/heroes/remove-image/${credentials.heroId}`,
        credentials,
      );

      toast.error('Image removed!');
      return data.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteHero = createAsyncThunk(
  'heroes/delete-hero',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { data } = await axios.delete(
        `api/heroes/delete-hero/${credentials.heroId}`,
      );

      toast.error('Hero deleted!');
      return data.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
