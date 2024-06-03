import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./films/filmsSlice";
import filmReducer from "./film/filmSlice";
import favFilmsReducer from "./favFilms/favFilmsSlice";
import laterFilmsReducer from "./laterFilms/laterFilmsSlice";
import similarFilmsReducer from "./similarFilms/similarFilmsSlice";
import commentsReducer from "./comments/commentsSlice";
import searchFilmsReducer from "./searchFilms/searchFilmsSlice";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    favFilms: favFilmsReducer,
    laterFilms: laterFilmsReducer,
    similarFilms: similarFilmsReducer,
    comments: commentsReducer,
    searchFilms: searchFilmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
