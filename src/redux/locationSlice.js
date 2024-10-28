import { createSlice } from '@reduxjs/toolkit';
import { getAllCities } from './locationOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    cities: [],
    filter: '',
    location: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
      state.filter = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCities.pending, handlePending)
      .addCase(getAllCities.rejected, handleRejected)
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cities = action.payload;
      });
  },
});

export const { setFilter, setLocation } = locationSlice.actions;

export const selectFilteredCities = state => {
  const { cities, filter } = state.location;
  if (!filter) {
    return cities;
  }

  return cities.filter(city =>
    city.name.toLowerCase().startsWith(filter.toLowerCase())
  );
};

export const selectFilter = state => state.location.filter;
export const selectLocation = state => state.location.location;

export const locationReducer = locationSlice.reducer;
