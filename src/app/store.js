import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlices';
// import userReducer from '../features/user/movieSlices';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice
  },
});
