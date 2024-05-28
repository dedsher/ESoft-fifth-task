import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/useReducerHooks";
import { toggleFavoriteFilm } from "@state/favFilms/favFilmsSlice";
import { Film } from "interfaces";

export const useFavorite = (film: Film) => {
  const dispatch = useAppDispatch();
  const favFilms = useAppSelector((state) => state.favFilms.favFilms);

  const isFavorited = favFilms.some((favFilm) => favFilm.id === film.id);

  const handleFavoriteClick = useCallback(() => {
    dispatch(toggleFavoriteFilm(film));
  }, [dispatch, film]);

  return { isFavorited, handleFavoriteClick };
};
