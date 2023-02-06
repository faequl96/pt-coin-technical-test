import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getListGenres = createAsyncThunk("listGenre/getListGenres", async (genreId, genrePage) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=2fccde01a371b106b09a241d6d1d5b49&with_genres=${genreId}&page=${genrePage}&year=2023`
  );
  return response.data.results;
});

const listGenreEntity = createEntityAdapter({
  selectId: (movie) => movie.id,
});

const ListGenreSlice = createSlice({
  name: "listGenre",
  initialState: listGenreEntity.getInitialState(),
  extraReducers: {
    [getListGenres.fulfilled]: (state, action) => {
      listGenreEntity.setAll(state, action.payload);
    },
  },
});

export const listGenreSelectors = listGenreEntity.getSelectors((state) => state.listGenre);
export default ListGenreSlice.reducer;