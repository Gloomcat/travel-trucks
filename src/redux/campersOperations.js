import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const CAMPERS_LIMIT = 4;

export const fetchCampers = createAsyncThunk(
  '/campers/fetchCampers',
  async ({ page, location, features, vehicle }, thunkAPI) => {
    try {
      const config = {
        params: {
          limit: CAMPERS_LIMIT,
          page: page,
        },
      };

      if (location !== '') {
        config.params.location = location;
      }

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

      const response = await axios.get('/campers', config);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
