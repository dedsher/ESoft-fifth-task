import { createSlice } from "@reduxjs/toolkit";
import { Film } from "interfaces";

const initialState: {favFilms: Film[]} = {
  favFilms: [],
};

const favFilmsSlice = createSlice({
  name: "favFilms",
  initialState,
  reducers: {
    toggleFavoriteFilm(state, action) {
      const film = state.favFilms.find((film) => film.id === action.payload.id);
      if (film) {
        state.favFilms = state.favFilms.filter(
          (film) => film.id !== action.payload.id
        );
      } else {
        state.favFilms.push(action.payload);
      }
    },
  },
});

export const { toggleFavoriteFilm } = favFilmsSlice.actions;

export default favFilmsSlice.reducer;
