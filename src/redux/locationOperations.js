import { createAsyncThunk } from '@reduxjs/toolkit';
import { City } from 'country-state-city';

const UKRAINE_COUNTRY_CODE = 'UA';

export const getAllCities = createAsyncThunk(
  'location/getAllCities',
  async (_, thunkAPI) => {
    try {
      const data = City.getCitiesOfCountry(UKRAINE_COUNTRY_CODE);
      return data || [];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
