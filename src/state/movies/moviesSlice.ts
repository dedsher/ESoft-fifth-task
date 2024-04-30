import { Movie } from "@pages/Movies/Movies";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.kinopoisk.dev/v1.4/movie";
// Три ключа с лимитом 200 запросов на каждом
const API_KEYS = [
  "KQ6V2Z7-CV143VR-HHD181J-Z30HG4N",
  "H82XZ9W-DDP4PGA-Q56ZZDB-QQ3JA2D",
  "TQ64SJT-8Y1M6WB-PHJFNCQ-C155V19",
  "YVCNQ7J-ZDP4S2F-M597RD6-WGEW1DA",
];
let API_KEY = API_KEYS[1];
const OPTIONS = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": API_KEY },
};

const changeKey = () => {
  console.log(`Предыдущий ключ: ${API_KEY}`);
  API_KEY =
    API_KEYS[
      (API_KEYS.findIndex((key) => key === API_KEY) + 1) % API_KEYS.length
    ];
  console.log(`Новый ключ: ${API_KEY}`);
};

export interface MoviesState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await fetch(`${API_URL}?page=1&limit=10`, OPTIONS);
    const data = await response.json();
    return data.docs as Movie[];
  } catch (error) {
    changeKey();
    throw Error("Failed to fetch movies");
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  } as MoviesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export { fetchMovies };

export default moviesSlice.reducer;
