import { FilmGenre } from "interfaces";
import { Link } from "react-router-dom";
import styles from "./Genre.module.css";
import { useAppDispatch } from "@hooks/useReducerHooks";
import { setSelectedGenre } from "@state/searchFilms/searchFilmsSlice";

const Genre = ({ genre }: { genre: FilmGenre["name"] }) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    console.log(genre);
    dispatch(setSelectedGenre(genre));
  };

  return (
    <Link to="/films/search" onClick={onClick}>
      <span className={styles.genre}>{genre}</span>
    </Link>
  );
};

export default Genre;
