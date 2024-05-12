import { useAppSelector } from "@hooks/useReducerHooks";
import styles from "./CommentList.module.css";
import Comment from "@components/Comments/Comment/Comment";
import { useFilm } from "@hooks/useFilm";

const CommentList = () => {
  const { id: filmId } = useFilm();
  const comments = useAppSelector((state) => state.comments[filmId] || []);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {comments.length === 0 && <p>Комментариев пока нет :(</p>}
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
