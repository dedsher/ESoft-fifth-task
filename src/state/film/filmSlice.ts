import { requestFilm } from "@api/filmsApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilmDetails, FilmDetailsState } from "interfaces";

const initialState: FilmDetailsState = {
  film: {} as FilmDetails,
  status: "idle",
  error: null as string | null,
};

const fetchFilm = createAsyncThunk(
  "film/fetchFilm",
  async (filmId: number) => {
    try {
      const film = await requestFilm(filmId);
      return film;
    } catch (error) {
      console.log(error)
      throw Error("Failed to fetch film");
    }
  }
);

const filmSlice = createSlice({
  name: "film",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilm.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.film = action.payload as FilmDetails || {};
    });
    builder.addCase(fetchFilm.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export { fetchFilm };

export default filmSlice.reducer;
