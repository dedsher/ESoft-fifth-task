import { Film } from "interfaces";
import { Link } from "react-router-dom";
import styles from "./SidebarItem.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch } from "@hooks/useReducerHooks";
import { toggleFavoriteFilm } from "@state/favFilms/favFilmsSlice";
import { toggleLaterFilm } from "@state/laterFilms/laterFilmsSlice";

const SidebarItem = ({
  film,
  isFav = true,
}: {
  film: Film;
  isFav?: boolean;
}) => {
  const dispatch = useAppDispatch();

  const onDeleteClick = () => {
    isFav
      ? dispatch(toggleFavoriteFilm(film))
      : dispatch(toggleLaterFilm(film));
  };

  return (
    <li className={styles.card}>
      <Link to={`/films/${film.id}`} className={styles.link}>
        {film.name}
      </Link>
      <button className={styles.button} onClick={onDeleteClick}>
        <ClearIcon color="primary" />
      </button>
    </li>
  );
};

export default SidebarItem;
