import { configureStore } from '@reduxjs/toolkit';

import { campersReducer } from './campersSlice';
import { paginationReducer } from './paginationSlice';
import { locationFilterReducer } from './locationFilterSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    pagination: paginationReducer,
    locationFilter: locationFilterReducer,
  },
});
