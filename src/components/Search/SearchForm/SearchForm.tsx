import { Field, Form, Formik } from "formik";
import styles from "./SearchForm.module.css";
import { useAppDispatch, useAppSelector } from "@hooks/useReducerHooks";
import {
  fetchSearchFilms,
} from "@state/searchFilms/searchFilmsSlice";
import { useEffect } from "react";

const GENRES = [
  "аниме",
  "биография",
  "боевик",
  "вестерн",
  "военный",
  "детектив",
  "детский",
  "для взрослых",
  "документальный",
  "драма",
  "игра",
  "история",
  "комедия",
  "концерт",
  "короткометражка",
  "криминал",
  "мелодрама",
  "музыка",
  "мультфильм",
  "мюзикл",
  "новости",
  "приключения",
  "реальное ТВ",
  "семейный",
  "спорт",
  "ток-шоу",
  "триллер",
  "ужасы",
  "фантастика",
  "фильм-нуар",
  "фэнтези",
  "церемония",
];

const SearchForm = () => {
  const dispatch = useAppDispatch();

  const selectedGenre = useAppSelector(
    (state) => state.searchFilms.selectedGenre
  );

  console.log(selectedGenre);

  useEffect(() => {
    if (selectedGenre) {
      dispatch(fetchSearchFilms({ name: "", genres: [selectedGenre] }));
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={{ name: "", genres: [selectedGenre] }}
        onSubmit={(values) => {
          dispatch(fetchSearchFilms(values));
        }}
      >
        <Form className={styles.form}>
          <div>
            <label className={styles.label}>
              Название:
              <Field
                id="email"
                name="name"
                type="text"
                autoComplete="off"
                className={styles.search_input}
              />
            </label>
          </div>
          <div className={styles.label}>
            <span>Жанр:</span>
            <fieldset className={styles.checkboxes}>
              {GENRES.map((genre) => (
                <label key={genre}>
                  <Field type="checkbox" name="genres" value={genre} />
                  <span className={styles.checkbox_name}>{genre}</span>
                </label>
              ))}
            </fieldset>
          </div>
          <button className={styles.search_button} type="reset" >
            Сбросить фильтры
          </button>
          <button className={styles.search_button} type="submit">
            Найти
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
