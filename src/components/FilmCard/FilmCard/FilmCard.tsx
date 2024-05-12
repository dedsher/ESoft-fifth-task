import { Film } from "interfaces";
import { Link } from "react-router-dom";
import styles from "./FilmCard.module.css";
import { useState } from "react";
import FilmPreview from "@components/FilmCard/FilmCardPreview/FilmCardPreview";
import FilmShortInfo from "@components/FilmCard/FilmCardInfo/FilmCardInfo";
import FilmShortButtons from "@components/FilmCard/FilmCardButtons/FilmCardButtons";

const FilmCard = ({ film }: { film: Film }) => {
  const [buttonHover, setButtonHover] = useState(false);

  const {
    id,
    name,
    shortDescription,
    rating,
    poster: { previewUrl } = { previewUrl: null },
    genres = [],
    persons = [],
  } = film;

  return (
    <div className={styles.card}>
      <Link to={`/films/${id}`}>
        <FilmPreview previewUrl={previewUrl} buttonHover={buttonHover} />
      </Link>
      <div className={styles.content}>
        <FilmShortInfo
          name={name}
          rating={rating}
          genres={genres}
          persons={persons}
          shortDescription={shortDescription}
        />
        <FilmShortButtons setButtonHover={setButtonHover} film={film} />
      </div>
    </div>
  );
};

export default FilmCard;
