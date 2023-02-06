import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/AppSlice';
import genreReducer from '../features/GenreSlice';
import listGenreReducer from '../features/ListGenreSlice';
import listMovieReducer from '../features/ListMovieSlice';
import detailMovieReducer from '../features/DetailMovieSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    genre: genreReducer,
    listGenre: listGenreReducer,
    listMovie: listMovieReducer,
    detailMovie: detailMovieReducer,
  },
});
