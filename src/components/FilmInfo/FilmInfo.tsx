import { FilmDetails } from "interfaces";
import { useFilm } from "@hooks/useFilm";
import Genres from "@components/Genres/Genres";
import styles from "./FilmInfo.module.css";

const FilmInfo = () => {
  const {
    name,
    description,
    shortDescription,
    year,
    rating: { imdb },
    movieLength,
    poster: { previewUrl } = { previewUrl: null },
    ageRating,
    genres,
    countries,
    persons,
    createdAt,
  } = useFilm() as FilmDetails;

  const parsedDescription = description || shortDescription;
  const parsedYear = new Date(createdAt).getFullYear();
  const parsedPersons =
    persons.length > 0
      ? persons
          .map((person) => person.name)
          .filter(Boolean)
          .slice(0, 3)
      : ["Актеры не указаны"];

  const parsedGenres =
    genres.length > 0 ? genres.map((genre) => genre.name) : ["Жанр не указан"];

  const parsedCountries =
    countries.length > 0
      ? countries.map((country) => country.name)
      : ["Страна не указана"];

  const parsedUrl =
    previewUrl ||
    "https://img.freepik.com/premium-psd/png-pop-culture-frame-art-with-movie-ticket-stub-popcorn-dec-illustration-frame-art-decorative_1020495-240770.jpg";

  return (
    <div className={styles.film}>
      <div className={styles.img_wrapper}>
        <img src={parsedUrl} alt="film backdrop" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <p>Описание: {parsedDescription}</p>
        <p>Год: {parsedYear}</p>
        <p>Рейтинг: {imdb ? imdb : "~"} / 10</p>
        <p>Год: {year}</p>
        <p>Длительность: {movieLength ? movieLength + "минут" : "~"}</p>
        <p>Возрастное ограничение: {ageRating ? ageRating + "+" : "~"}</p>
        <p>Актеры: {parsedPersons.join(", ")}</p>
        <p>Страна: {parsedCountries.join(", ")}</p>
        <Genres genres={parsedGenres} />
      </div>
    </div>
  );
};

export default FilmInfo;
