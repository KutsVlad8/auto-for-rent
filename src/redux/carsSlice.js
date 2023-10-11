import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
  favoriteCars: [],
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
  reducers: {
    addToFavorites: (state, action) => {
      const carToAddOrRemove = action.payload;
      const isAlreadyInFavorites = state.favoriteCars.some(
        car => car.id === carToAddOrRemove.id
      );

      if (isAlreadyInFavorites) {
        state.favoriteCars = state.favoriteCars.filter(
          car => car.id !== carToAddOrRemove.id
        );
      } else {
        state.favoriteCars.push(carToAddOrRemove);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCars.pending, handlePending);
    builder.addCase(fetchCars.fulfilled, handleFullfield);
    builder.addCase(fetchCars.rejected, handleRejected);
  },
});

export const { addToFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
