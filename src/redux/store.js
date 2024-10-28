import { configureStore } from '@reduxjs/toolkit';

import { campersReducer } from './campersSlice';
import { paginationReducer } from './paginationSlice';
import { locationReducer } from './locationSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    pagination: paginationReducer,
    location: locationReducer,
  },
});
