import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getListMovies = createAsyncThunk("listMovie/getListMovies", async (listPage) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${listPage}`
  );
  return response.data.results;
});

const listMovieEntity = createEntityAdapter({
  selectId: (movie) => movie.id,
});

const ListMovieSlice = createSlice({
  name: "listMovie",
  initialState: listMovieEntity.getInitialState(),
  extraReducers: {
    [getListMovies.fulfilled]: (state, action) => {
      listMovieEntity.setAll(state, action.payload);
    },
  },
});

export const listMovieSelectors = listMovieEntity.getSelectors((state) => state.listMovie);
export default ListMovieSlice.reducer;