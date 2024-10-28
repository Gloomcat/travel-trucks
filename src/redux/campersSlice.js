import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchCampers, fetchCamperById } from './campersOperations';
import { selectFavorites, selectFavoritesEnabled } from './favoritesSlice';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const slice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    active: {},
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
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.items = [];
        state.total = 0;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // Init total count
        if (state.items.length == 0) {
          state.total = action.payload.total;
        }

        state.items.push(...action.payload.items);
        // Include only objects with unique id
        state.items = Array.from(
          new Map(state.items.map(item => [item.id, item])).values()
        );
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.active = action.payload;
      });
  },
});

export const { resetCampers } = slice.actions;

export const selectCampers = state => {
  return state.campers.items;
};

export const selectActiveCamper = state => {
  return state.campers.active;
};

export const selectFavoriteCampers = createSelector(
  [selectCampers, selectFavorites, selectFavoritesEnabled],
  (campers, favorites, enabled) => {
    if (enabled) {
      return campers.filter(camper => favorites.includes(camper.id));
    }

    return campers;
  }
);

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
