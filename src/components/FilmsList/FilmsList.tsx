import { Film } from "interfaces";
import styles from "./FilmsList.module.css";
import FilmCard from "@components/FilmCard/FilmCard/FilmCard";

const FilmsList = ({ films }: { films: Film[] }) => {
  return (
    <>
      {films.length === 0 && <div>Фильмы не найдены</div>}
      <ul className={styles.list}>
        {films.map((film: Film) => (
          <li key={film.id} className={styles.card}>
            <FilmCard film={film} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilmsList;
