import { Film } from "interfaces";
import styles from "./FilmCardPreview.module.css";

interface FilmPreviewProps {
  previewUrl: Film["poster"]["previewUrl"] | null;
  buttonHover: boolean;
}

const FilmPreview = ({ previewUrl, buttonHover }: FilmPreviewProps) => {
  const getFilmPreviewClass = () =>
    styles.img_wrapper + " " + (buttonHover ? styles.img_wrapper_hover : "");

  const filmUrl =
    previewUrl ||
    "https://img.freepik.com/premium-psd/png-pop-culture-frame-art-with-movie-ticket-stub-popcorn-dec-illustration-frame-art-decorative_1020495-240770.jpg";

  return (
    <div className={getFilmPreviewClass()}>
      {<img src={filmUrl} alt="film backdrop" />}
    </div>
  );
};

export default FilmPreview;
