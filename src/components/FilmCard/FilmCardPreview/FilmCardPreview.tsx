import { Film } from "interfaces";
import styles from "./FilmCardPreview.module.css";
import { useEffect, useState } from "react";

interface FilmPreviewProps {
  previewUrl: Film["poster"]["previewUrl"] | null;
  buttonHover: boolean;
}

const FilmPreview = ({ previewUrl, buttonHover }: FilmPreviewProps) => {
  const defaultUrl =
    "https://img.freepik.com/premium-psd/png-pop-culture-frame-art-with-movie-ticket-stub-popcorn-dec-illustration-frame-art-decorative_1020495-240770.jpg";
  const [filmUrl, setFilmUrl] = useState(defaultUrl);

  useEffect(() => {
    if (previewUrl) {
      setFilmUrl(previewUrl);
    }
  }, [previewUrl]);

  const handleImageError = () => {
    setFilmUrl(defaultUrl);
  };

  const getFilmPreviewClass = () =>
    styles.img_wrapper + " " + (buttonHover ? styles.img_wrapper_hover : "");

  return (
    <div className={getFilmPreviewClass()}>
      <img src={filmUrl} alt="film backdrop" onError={handleImageError} />
    </div>
  );
};

export default FilmPreview;
