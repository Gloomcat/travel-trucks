// store.js
import { configureStore } from '@reduxjs/toolkit';

import { thunk } from 'redux-thunk';

// Import redux-persist action constants
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { campersReducer } from './campersSlice';
import { paginationReducer } from './paginationSlice';
import { locationReducer } from './locationSlice';
import { filtersReducer } from './filtersSlice';
import { favoritesReducer } from './favoritesSlice';

// Persist configuration for favorites slice
const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    pagination: paginationReducer,
    location: locationReducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions from serializable checks
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);
