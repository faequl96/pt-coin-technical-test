import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    listPage: 1,
    movieId: 0,
    genrePage: 1,
    genreId: 0,
  },
  reducers: {
    update: (state, action) => {
      state.listPage = action.payload.selectedPage;
      state.movieId =action.payload.id;
      state.genrePage = action.payload.selectedPage;
      state.genreId = action.payload.idGenre
    },
  },
});

export const { update } = AppSlice.actions;
export default AppSlice.reducer;
