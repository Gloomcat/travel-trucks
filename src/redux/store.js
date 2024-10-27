import { configureStore } from '@reduxjs/toolkit';

import { campersReducer } from './campersSlice';
import { paginationReducer } from './paginationSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    pagination: paginationReducer,
  },
});
