import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: {
    enabled: false,
    items: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const index = state.items.indexOf(id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(id);
      }
    },
    toggleFavoritesEnabled(state) {
      state.enabled = !state.enabled;
    },
  },
});

export const { toggleFavorite, toggleFavoritesEnabled } = slice.actions;

export const selectFavorites = state => {
  return state.favorites.items;
};

export const selectFavoritesEnabled = state => {
  return state.favorites.enabled;
};

export const favoritesReducer = slice.reducer;
