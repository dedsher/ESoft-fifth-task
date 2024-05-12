import CommentForm from "@components/Comments/CommentForm/CommentForm";
import CommentList from "@components/Comments/CommentList/CommentList";
import styles from "./CommentsLayout.module.css";

const CommentsLayout = () => {
  return (
    <div className={styles.container}>
      <h2>Комментарии</h2>
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default CommentsLayout;
