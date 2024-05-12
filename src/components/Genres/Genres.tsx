import Genre from "@components/Genre/Genre";
import styles from "./Genres.module.css";

const Genres = ({ genres }: { genres: string[] }) => {
  return (
    <ul className={styles.genres}>
      {genres.map((genre, i) => (
        <li className={styles.genre} key={i}>
          <Genre genre={genre} />
        </li>
      ))}
    </ul>
  );
};

export default Genres;
