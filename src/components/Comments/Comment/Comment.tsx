import { UserComment } from "interfaces";
import styles from "./Comment.module.css";

const Comment = ({ comment }: { comment: UserComment }) => {
  const { author, text, time } = comment;

  const date = new Date(time);
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const month = monthNames[date.getMonth()];

  const formattedTime = `${day} ${month} ${year}, ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return (
    <div className={styles.comment}>
      <div className={styles.wrapper}>
        <h3>{author}</h3>
        <span>{formattedTime}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
