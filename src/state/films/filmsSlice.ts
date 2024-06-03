import { requestFilms } from "@api/filmsApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Film, FilmsState } from "interfaces";

const initialState: FilmsState = {
  films: [] as Film[],
  status: "idle",
  error: null,
};

const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  try {
    const data = await requestFilms();
    return data as Film[];
  } catch (error) {
    throw Error("Failed to fetch films");
  }
});

const filmsSlice = createSlice({
  name: "films",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.films = action.payload || [];
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export { fetchFilms };

export default filmsSlice.reducer;
