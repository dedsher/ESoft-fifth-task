import FilmsList from "@components/FilmsList/FilmsList";
import Loader from "@components/Loader/Loader";
import { useAppSelector } from "@hooks/useReducerHooks";
import { FilmsState } from "interfaces";

const SearchFilms = () => {
  const { films, status } = useAppSelector(
    (state) => state.searchFilms as FilmsState
  );

  return (
    <Loader status={status}>
      <FilmsList films={films} />
    </Loader>
  );
};

export default SearchFilms;
