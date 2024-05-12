import { requestSearchFilms } from "@api/filmsApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Film, SearchFilmsState } from "interfaces";

const initialState: SearchFilmsState = {
  films: [] as Film[],
  status: "idle",
  error: null,
  selectedGenre: '',
};

interface SearchFilmsParams {
  name: string;
  genres: string[];
}

const fetchSearchFilms = createAsyncThunk("films/fetchSearchFilms", async ({name, genres}: SearchFilmsParams) => {
  try {
    const data = await requestSearchFilms(name, genres);
    return data as Film[];
  } catch (error) {
    throw Error("Failed to fetch films");
  }
});

const searchFilmsSlice = createSlice({
  name: "searchFilms",
  initialState: initialState,
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchFilms.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSearchFilms.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.films = action.payload || [];
    });
    builder.addCase(fetchSearchFilms.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export { fetchSearchFilms };

export const { setSelectedGenre } = searchFilmsSlice.actions;

export default searchFilmsSlice.reducer;
