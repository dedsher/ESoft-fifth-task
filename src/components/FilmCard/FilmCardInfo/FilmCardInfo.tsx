import { Film } from "interfaces";
import styles from "./FilmCardInfo.module.css";
import Genres from "@components/Genres/Genres";

const FilmShortInfo = ({ name, rating: { imdb }, genres, persons, shortDescription }: Pick<Film, 'name' | 'rating' | 'genres' | 'persons' | 'shortDescription'>) => {
  const getRatingColor = (imdb: number) => {
    if (imdb >= 7) {
      return "green";
    } else if (imdb >= 5) {
      return "orange";
    } else {
      return "gray";
    }
  };

  const parsedGenres = (genres.length > 0 ? genres.map((genre) => genre.name) : ["Жанр не указан"]);
  let parsedPersons = (persons.length > 0 ? persons.map((person) => person.name).filter((person) => person) : ["Актеры не указаны"]);
  if (parsedPersons.length > 3) {
    parsedPersons = parsedPersons.slice(0, 3);
  }

  return (
    <div className={styles.info_list}>
      <h3 className={styles.title}>
        {name ? name : "-- Безымянный --"}
        <span
          className={styles.rating}
          style={{ backgroundColor: getRatingColor(imdb) }}
        >
          {imdb ? imdb : "~"}
        </span>
      </h3>
      <Genres genres={parsedGenres} />
      <p className={styles.actors}>Актеры: {parsedPersons.join(", ")}</p>
      <p className={styles.description}>{shortDescription}</p>
    </div>
  );
};

export default FilmShortInfo;
