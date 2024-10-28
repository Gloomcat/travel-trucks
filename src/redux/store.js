import { configureStore } from '@reduxjs/toolkit';

import { campersReducer } from './campersSlice';
import { paginationReducer } from './paginationSlice';
import { locationReducer } from './locationSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    pagination: paginationReducer,
    location: locationReducer,
    filters: filtersReducer,
  },
});
