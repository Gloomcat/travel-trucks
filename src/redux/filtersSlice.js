import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    selectedFeatures: [],
    selectedVehicleType: '',
    features: [
      {
        name: 'AC',
        icon: 'icon-wind',
      },
      {
        name: 'Automatic',
        icon: 'icon-diagram',
      },
      {
        name: 'Kitchen',
        icon: 'icon-cup-hot',
      },
      {
        name: 'TV',
        icon: 'icon-tv',
      },
      {
        name: 'Bathroom',
        icon: 'icon-shower',
      },
    ],
    vehicleTypes: [
      {
        name: 'Van',
        icon: 'icon-bi-grid-1x2',
      },
      {
        name: 'Fully Integrated',
        icon: 'icon-bi-grid',
      },
      {
        name: 'Alcove',
        icon: 'icon-bi-grid-3x3-gap',
      },
    ],
  },
  reducers: {
    toggleFeature(state, action) {
      if (state.selectedFeatures.includes(action.payload)) {
        const index = state.selectedFeatures.findIndex(
          feature => feature === action.payload
        );
        state.selectedFeatures.splice(index, 1);
      } else {
        state.selectedFeatures.push(action.payload);
      }
    },
    toggleVehicleType(state, action) {
      if (state.selectedVehicleType === action.payload) {
        state.selectedVehicleType = '';
      } else {
        state.selectedVehicleType = action.payload;
      }
    },
  },
});

export const { toggleFeature, toggleVehicleType } = filtersSlice.actions;

export const selectFeatures = state => state.filters.features;
export const selectVehicleTypes = state => state.filters.vehicleTypes;

export const selectChosenFeatures = state => state.filters.selectedFeatures;
export const selectChosenVehicleType = state =>
  state.filters.selectedVehicleType;

export const filtersReducer = filtersSlice.reducer;
