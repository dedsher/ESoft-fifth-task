import FilmsList from "@components/FilmsList/FilmsList";
import { useAppSelector } from "@hooks/useReducerHooks";
import { FilmsState } from "interfaces";

const SearchFilms = () => {
  const { films, status } = useAppSelector(
    (state) => state.searchFilms as FilmsState
  );

  return (
    <div>
      {status === "loading" && <div>Загрузка...</div>}
      {status === "failed" && <div>Ошибка загрузки</div>}
      {status === "succeeded" && <FilmsList films={films} />}
    </div>
  );
};

export default SearchFilms;
