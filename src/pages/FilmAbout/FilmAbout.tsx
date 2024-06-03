import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmDetailsState } from "interfaces";
import { useAppDispatch, useAppSelector } from "@hooks/useReducerHooks";
import { FilmContext } from "@hooks/useFilm";
import { fetchFilm } from "@state/film/filmSlice";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import CommentsLayout from "@components/Comments/CommentsLayout/CommentsLayout";
import FilmInfo from "@components/FilmInfo/FilmInfo";
import SimilarFilms from "@components/SimilarFilms/SimilarFilms";
import styles from "./FilmAbout.module.css";
import Loader from "@components/Loader/Loader";

const FilmAbout = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const { film, status } = useAppSelector(
    (state) => state.film as FilmDetailsState
  );

  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(-1);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(Number(filmId)));
  }, [filmId]);

  return (
    <Loader status={status}>
      <div className={styles.container}>
        <button className={styles.back_button} onClick={onBackClick}>
          <ArrowBackIosNewIcon color="primary" />
        </button>
        <div className={styles.film_page}>
          <FilmContext.Provider value={film}>
            <FilmInfo />
            <SimilarFilms />
            <CommentsLayout />
          </FilmContext.Provider>
        </div>
      </div>
    </Loader>
  );
};

export default FilmAbout;
