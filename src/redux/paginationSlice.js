import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    resetPagination(state) {
      state.currentPage = 1;
    },
    incrementCurrentPage(state) {
      state.currentPage += 1;
    },
  },
});

export const { resetPagination, incrementCurrentPage } = slice.actions;

export const selectCurrentPage = state => {
  return state.pagination.currentPage;
};

export const paginationReducer = slice.reducer;
