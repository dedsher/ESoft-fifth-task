import { Field, Form, Formik, FormikState } from "formik";
import styles from "./SearchForm.module.css";
import { useAppDispatch } from "@hooks/useReducerHooks";
import { fetchSearchFilms } from "@state/searchFilms/searchFilmsSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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

enum SearchParams {
  name = "name",
  genre = "genre",
}

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  type SearchParamValue<T extends SearchParams> = T extends SearchParams.name
    ? string
    : T extends SearchParams.genre
    ? string[]
    : never;

  const getSearchParams = <T extends SearchParams>(
    key: T
  ): SearchParamValue<T> => {
    const searchParams = new URLSearchParams(window.location.search);

    if (key === SearchParams.name) {
      return (
        searchParams.get(key)
          ? searchParams.get("name")!.split("+").join(" ")
          : ""
      ) as SearchParamValue<T>;
    }

    if (key === SearchParams.genre) {
      return (
        searchParams.get(key) ? searchParams.get("genre")!.split(",") : []
      ) as SearchParamValue<T>;
    }

    throw new Error(`Unsupported search param key: ${key}`);
  };

  const initialValues = {
    name: getSearchParams(SearchParams.name),
    genres: getSearchParams(SearchParams.genre),
  };

  useEffect(() => {
    if (initialValues.name || initialValues.genres.length > 0) {
      dispatch(
        fetchSearchFilms({
          name: initialValues.name,
          genres: initialValues.genres,
        })
      );
    }
  }, [searchParams, dispatch]);

  const onSubmit = (values: { name: string; genres: string[] }) => {
    const params = new URLSearchParams();
    if (values.name) {
      params.set("name", values.name);
    }
    if (values.genres.length > 0) {
      params.set("genre", values.genres.join(","));
    }
    setSearchParams(params);
  };

  const onReset = (
    resetForm: (
      values: Partial<
        FormikState<{
          name: string;
          genres: string[];
        }>
      >
    ) => void
  ) => {
    resetForm({ values: { name: "", genres: [] } });
    setSearchParams(new URLSearchParams());
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {({ resetForm }) => (
          <Form className={styles.form}>
            <div>
              <label className={styles.label}>
                Название:
                <Field
                  id="name"
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
            <button
              className={styles.search_button}
              type="reset"
              onClick={() => onReset(resetForm)}
            >
              Сбросить фильтры
            </button>
            <button className={styles.search_button} type="submit">
              Найти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
