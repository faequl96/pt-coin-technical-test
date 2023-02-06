import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getGenres = createAsyncThunk("genres/getGenres", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
  );
  return response.data.genres;
});

const genreEntity = createEntityAdapter({
  selectId: (genre) => genre.id,
});

const GenreSlice = createSlice({
  name: "genre",
  initialState: genreEntity.getInitialState(),
  extraReducers: {
    [getGenres.fulfilled]: (state, action) => {
      genreEntity.setAll(state, action.payload);
    },
  },
});

export const genreSelectors = genreEntity.getSelectors((state) => state.genre);
export default GenreSlice.reducer;
