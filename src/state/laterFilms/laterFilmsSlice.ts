import { createSlice } from "@reduxjs/toolkit";
import { Film } from "interfaces";

const initialState: {laterFilms: Film[]} = {
  laterFilms: [],
};

const laterFilmsSlice = createSlice({
  name: "laterFilms",
  initialState,
  reducers: {
    toggleLaterFilm(state, action) {
      const film = state.laterFilms.find(
        (film) => film.id === action.payload.id
      );
      if (film) {
        state.laterFilms = state.laterFilms.filter(
          (film) => film.id !== action.payload.id
        );
      } else {
        state.laterFilms.push(action.payload);
      }
    },
  },
});

export const { toggleLaterFilm } = laterFilmsSlice.actions;

export default laterFilmsSlice.reducer;
