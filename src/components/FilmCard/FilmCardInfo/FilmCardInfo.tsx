import { Film } from "interfaces";
import styles from "./FilmCardInfo.module.css";
import Genres from "@components/Genres/Genres";
import { useMemo } from "react";

type FilmShortInfoProps = Pick<Film, 'name' | 'rating' | 'genres' | 'persons' | 'shortDescription'>;

const FilmShortInfo = ({ name, rating: { imdb }, genres, persons, shortDescription }: FilmShortInfoProps) => {
  const getRatingColor = (imdb: number) => {
    if (imdb >= 7) {
      return "green";
    } else if (imdb >= 5) {
      return "orange";
    } else {
      return "gray";
    }
  };

  const parsedGenres = useMemo(() => {
    return genres.length > 0 ? genres.map((genre) => genre.name) : ["Жанр не указан"];
  }, [genres]);

  const parsedPersons = useMemo(() => {
    const names = persons.length > 0 ? persons.map((person) => person.name).filter((name) => name) : ["Актеры не указаны"];
    return names.length > 3 ? names.slice(0, 3) : names;
  }, [persons]);

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
