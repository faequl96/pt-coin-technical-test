import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailMovie = createAsyncThunk("DetailMovie/getDetailMovie", async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`
  );
  return response.data;
});

const detailMovieEntity = createEntityAdapter({
  selectId: (movie) => movie.id,
});

const DetailMovieSlice = createSlice({
  name: "detailMovie",
  initialState: detailMovieEntity.getInitialState(),
  extraReducers: {
    [getDetailMovie.fulfilled]: (state, action) => {
      detailMovieEntity.setOne(state, action.payload);
    },
  },
});

export const detailMovieSelectors = detailMovieEntity.getSelectors((state) => state.detailMovie);
export default DetailMovieSlice.reducer;