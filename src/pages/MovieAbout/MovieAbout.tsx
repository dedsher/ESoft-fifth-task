import { useParams } from "react-router-dom";

const MovieAbout = () => {
  const { filmId } = useParams<{ filmId: string }>();

  return <div>MovieAbout {filmId}</div>;
};

export default MovieAbout;
