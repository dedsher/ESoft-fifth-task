import { useState } from "react";
import { SimilarFilmsState } from "interfaces";
import { useAppDispatch, useAppSelector } from "@hooks/useReducerHooks";
import { useFilm } from "@hooks/useFilm";
import { fetchSimilarFilms } from "@state/similarFilms/similarFilmsSlice";
import FilmsList from "@components/FilmsList/FilmsList";
import styles from "./SimilarFilms.module.css";

const SimilarFilms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasRequested, setHasRequested] = useState(false);
  const dispatch = useAppDispatch();
  const { genres, id } = useFilm();

  const onOpenClick = () => {
    dispatch(fetchSimilarFilms({ genres, id }));
  };

  const { similarFilms: films, similarStatus: status } = useAppSelector(
    (state) => state.similarFilms as SimilarFilmsState
  );

  if (isOpen && !hasRequested) {
    onOpenClick();
    setHasRequested(true);
  }

  return (
    <div className={styles.films}>
      <div className={styles.to_open}>
        <h2>Похожие фильмы</h2>
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Скрыть" : "Показать"}
        </button>
      </div>
      {isOpen && (
        <div>
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>Failed to load films</div>}
          {status === "succeeded" && <FilmsList films={Object.values(films)} />}
        </div>
      )}
    </div>
  );
};

export default SimilarFilms;
