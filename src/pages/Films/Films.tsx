import { fetchFilms } from "@state/films/filmsSlice";
import { useAppDispatch } from "@hooks/useReducerHooks";
import { useEffect, useState } from "react";
import { useAppSelector } from "@hooks/useReducerHooks";
import { Film, FilmsState, Filter, SelectOption } from "interfaces";
import styles from "./Films.module.css";
import FilmsSorting from "@components/FilmsSorting/FilmsSorting";
import FilmsList from "@components/FilmsList/FilmsList";
import Loader from "@components/Loader/Loader";

const Films = () => {
  const dispatch = useAppDispatch();
  const { films, status } = useAppSelector(
    (state) => state.films as FilmsState
  );
  const [sorting, setSorting] = useState<SelectOption["value"]>("default");
  const [currentFilter, setCurrentFilter] = useState<Filter["value"]>("all");

  const handleSortClick = (value: SelectOption["value"]) => {
    setSorting(value);
  };

  const handleFilterClick = (value: Filter["value"]) => {
    setCurrentFilter(value);
  };

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  const sortedFilms = (
    filter: SelectOption["value"],
    films: Film[]
  ): Film[] => {
    switch (filter) {
      case "descending":
        return films
          .slice()
          .sort((a: Film, b: Film) => b.rating.imdb - a.rating.imdb);
      case "ascending":
        return films
          .slice()
          .sort((a: Film, b: Film) => a.rating.imdb - b.rating.imdb);
      default:
        return films;
    }
  };

  const filteredFilms = (filter: Filter["value"], films: Film[]): Film[] => {
    switch (filter) {
      case "films":
        return films.filter((film: Film) => film.type === "movie");
      case "series":
        return films.filter((film: Film) => film.type.includes("series"));
      case "cartoons":
        return films.filter((film: Film) => film.type === "cartoon");
      default:
        return films;
    }
  };

  let filmsToRender = sortedFilms(sorting, films);
  filmsToRender = filteredFilms(currentFilter, filmsToRender);

  return (
    <Loader status={status}>
      <>
        <div className={styles.header}>
          <h2>Фильмы</h2>
          <FilmsSorting
            onSortClick={handleSortClick}
            currentFilter={currentFilter}
            onFilterClick={handleFilterClick}
          />
        </div>
        <FilmsList films={filmsToRender} />
      </>
    </Loader>
  );
};

export default Films;
