import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/useReducerHooks";
import { toggleLaterFilm } from "@state/laterFilms/laterFilmsSlice";
import { Film } from "interfaces";

export const useBookmarked = (film: Film) => {
  const dispatch = useAppDispatch();
  const laterFilms = useAppSelector((state) => state.laterFilms.laterFilms);

  const isBookmarked = laterFilms.some((laterFilm) => laterFilm.id === film.id);
  const handleBookmarkedClick = useCallback(() => {
    dispatch(toggleLaterFilm(film));
  }, [dispatch, film]);

  return { isBookmarked, handleBookmarkedClick };
};
