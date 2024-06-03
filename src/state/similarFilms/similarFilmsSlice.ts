import { requestSimilarFilms } from "@api/filmsApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Film, SimilarFilmsState } from "interfaces";

const initialSimilarState: SimilarFilmsState = {
  similarFilms: [] as Film[],
  similarStatus: "idle",
  similarError: null,
};

interface FetchSimilarFilmsArgs {
  genres: Film["genres"];
  id: Film["id"];
}

const fetchSimilarFilms = createAsyncThunk(
  "film/fetchSimilarFilms",
  async ({ genres, id }: FetchSimilarFilmsArgs) => {
    try {
      const data = await requestSimilarFilms(genres, id);
      return data as Film[];
    } catch (error) {
      throw Error("Failed to fetch film");
    }
  }
);

const similarFilmsSlice = createSlice({
  name: "film",
  initialState: initialSimilarState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSimilarFilms.pending, (state) => {
      state.similarStatus = "loading";
    });
    builder.addCase(fetchSimilarFilms.fulfilled, (state, action) => {
      state.similarStatus = "succeeded";
      state.similarFilms = { ...action.payload } || {};
    });
    builder.addCase(fetchSimilarFilms.rejected, (state, action) => {
      state.similarStatus = "failed";
      state.similarError = action.payload as string;
    });
  },
});

export { fetchSimilarFilms };

export default similarFilmsSlice.reducer;
