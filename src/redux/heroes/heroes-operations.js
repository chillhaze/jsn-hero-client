import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://bitmedia-lab.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:8080/api';

export const getHeroes = createAsyncThunk(
  'heroes/get-heroes',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/heroes/get-all-heroes`, {
        params: { ...credentials },
      });

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
      const { data } = await axios.post(`/heroes/create`, credentials, {
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
        `/heroes/update-stats/${credentials.id}`,
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
        `/heroes/remove-image/${credentials.heroId}`,
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
        `/heroes/delete-hero/${credentials.heroId}`,
      );

      toast.error('Hero deleted!');
      return data.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
