import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfield = (state, action) => {
  state.cars = action.payload;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder.addCase(fetchCars.pending, handlePending);
    builder.addCase(fetchCars.fulfilled, handleFullfield);
    builder.addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
