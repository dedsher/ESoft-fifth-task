import { FilmGenre } from "interfaces";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Genre.module.css";

const Genre = ({ genre }: { genre: FilmGenre["name"] }) => {
  const navigate = useNavigate();

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(`/films/search?genre=${genre}`);
  };

  return (
    <Link to={`/films/search`} onClick={onClick}>
      <span className={styles.genre}>{genre}</span>
    </Link>
  );
};

export default Genre;
