import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const CAMPERS_LIMIT = 4;

export const fetchCampers = createAsyncThunk(
  '/campers/fetchCampers',
  async ({ page, limit, location, features, vehicle }, thunkAPI) => {
    try {
      const config = {
        params: {},
      };

      if (page) {
        config.params.page = page;
      }

      if (limit) {
        config.params.limit = limit;
      }

      if (location !== '') {
        config.params.location = location;
      }

      if (features) {
        if (features.includes('Automatic')) {
          config.params.transmission = 'automatic';
        }

        if (features.includes('AC')) {
          config.params.AC = true;
        }
        if (features.includes('TV')) {
          config.params.TV = true;
        }
        if (features.includes('Kitchen')) {
          config.params.kitchen = true;
        }
        if (features.includes('Bathroom')) {
          config.params.bathroom = true;
        }

        if (vehicle === 'Alcove') {
          config.params.form = 'alcove';
        } else if (vehicle === 'Fully Integrated') {
          config.params.form = 'fullyIntegrated';
        } else if (vehicle === 'Van') {
          config.params.form = 'panelTruck';
        }
      }

      const response = await axios.get('/campers', config);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  '/campers/fetchCamperById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
