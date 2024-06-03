import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ToggleIconButton from "@components/ToggleIconButton/ToggleIconButton";
import { Link } from "react-router-dom";
import { Film } from "interfaces";
import { useFavorite } from "@hooks/useFavoriteHandle";
import { useBookmarked } from "@hooks/useBookmarkHandle";
import styles from "./FilmCardButtons.module.css";

const FilmShortButtons = ({
  setButtonHover,
  film,
}: {
  setButtonHover: React.Dispatch<React.SetStateAction<boolean>>;
  film: Film;
}) => {
  const { isFavorited, handleFavoriteClick } = useFavorite(film);
  const { isBookmarked, handleBookmarkedClick } = useBookmarked(film);

  return (
    <div className={styles.buttons}>
      <Button variant="text" color="primary">
        <Link
          to={`/films/${film.id}`}
          className={styles.link}
          onMouseEnter={() => {
            setButtonHover(true);
          }}
          onMouseLeave={() => {
            setButtonHover(false);
          }}
        >
          Подробнее
        </Link>
      </Button>
      <ToggleIconButton
        state={isFavorited}
        onClick={handleFavoriteClick}
        OutlinedIcon={FavoriteBorderOutlinedIcon}
        FilledIcon={FavoriteOutlinedIcon}
      />
      <ToggleIconButton
        state={isBookmarked}
        onClick={handleBookmarkedClick}
        OutlinedIcon={BookmarkBorderOutlinedIcon}
        FilledIcon={BookmarkOutlinedIcon}
      />
    </div>
  );
};

export default FilmShortButtons;
