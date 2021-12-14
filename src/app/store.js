import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlices';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
