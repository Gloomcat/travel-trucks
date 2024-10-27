import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from './campersOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.items = [];
  state.total = 0;
};

const slice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    resetCampers(state) {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // Init total count
        if (state.items.length == 0) {
          state.total = action.payload.total;
          console.log('Set total:', state.total);
        }

        state.items.push(...action.payload.items);
        // Include only objects with unique id
        state.items = Array.from(
          new Map(state.items.map(item => [item.id, item])).values()
        );
        console.log('Items:', state.items);
      });
  },
});

export const { resetCampers } = slice.actions;

export const selectCampers = state => {
  return state.campers.items;
};

export const selectIsLoading = state => {
  return state.campers.isLoading;
};

export const selectError = state => {
  return state.campers.error;
};

export const selectTotal = state => {
  return state.campers.total;
};

export const campersReducer = slice.reducer;
