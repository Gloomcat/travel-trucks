import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const CAMPERS_LIMIT = 4;

export const fetchCampers = createAsyncThunk(
  '/campers/fetchCampers',
  async (page, thunkAPI) => {
    try {
      const config = {
        params: {
          limit: CAMPERS_LIMIT,
          page: page,
        },
      };

      const response = await axios.get('/camper', config);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
