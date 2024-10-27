import { createSlice } from '@reduxjs/toolkit';
import { getAllCities } from './locationFilterOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const locationFilterSlice = createSlice({
  name: 'locationFilter',
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

export const { setFilter, setLocation } = locationFilterSlice.actions;

export const selectFilteredCities = state => {
  const { cities, filter } = state.locationFilter;
  if (!filter) {
    return cities;
  }

  return cities.filter(city =>
    city.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectFilter = state => state.locationFilter.filter;
export const selectLocation = state => state.locationFilter.location;

export const locationFilterReducer = locationFilterSlice.reducer;
