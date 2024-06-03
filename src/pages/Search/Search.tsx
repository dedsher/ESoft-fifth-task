import styles from "./Search.module.css";
import SearchForm from "@components/Search/SearchForm/SearchForm";
import SearchFilms from "@components/Search/SearchFilms/SearchFilms";
import { useEffect } from "react";
import { clearFilms } from "@state/searchFilms/searchFilmsSlice";
import { useAppDispatch } from "@hooks/useReducerHooks";

const Search = () => {

  const dispatch = useAppDispatch();

 useEffect(() => {
    return () => {
      dispatch(clearFilms());
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Поиск фильмов</h2>
      <div className={styles.wrapper}>
        <SearchForm />
        <SearchFilms />
      </div>
    </div>
  );
};

export default Search;
