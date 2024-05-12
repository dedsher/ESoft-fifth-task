import { useAppDispatch } from "@hooks/useReducerHooks";
import { addComment } from "@state/comments/commentsSlice";
import { v4 as uuidv4 } from "uuid";
import styles from "./CommentForm.module.css";
import { useFilm } from "@hooks/useFilm";

const CommentForm = () => {
  const { id: filmId } = useFilm();
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!formData.get("comment")) {
      return;
    }

    const dataToSend = {
      filmId: String(filmId),
      comment: {
        id: uuidv4(),
        author: "Анонимный пользователь",
        text: formData.get("comment") as string,
        time: new Date().toISOString(),
      },
    };

    dispatch(addComment(dataToSend));
    e.currentTarget.reset();

    return;
  };

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <textarea placeholder="Ваш комментарий" name="comment" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default CommentForm;
