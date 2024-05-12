import { useAppSelector } from "@hooks/useReducerHooks";
import { FilmsState } from "interfaces";
import styles from "./Search.module.css";
import SearchForm from "@components/Search/SearchForm/SearchForm";
import FilmsList from "@components/FilmsList/FilmsList";

const Search = () => {
  const { films, status } = useAppSelector(
    (state) => state.searchFilms as FilmsState
  );

  return (
    <div className={styles.container}>
      <h2>Поиск фильмов</h2>
      <div className={styles.wrapper}>
        <SearchForm />
        <div>
          {status === "loading" && <div>Загрузка...</div>}
          {status === "failed" && <div>Ошибка загрузки</div>}
          {status === "succeeded" && (
            <FilmsList films={films} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
