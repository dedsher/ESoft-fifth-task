import { MoviesState, fetchMovies } from "@state/movies/moviesSlice";
import { useAppDispatch } from "@hooks/hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export interface Movie {
  id: number;
  title: string;
  name: string;
}

const Movies = () => {
  const dispatch = useAppDispatch();
  const { movies, status } = useSelector(
    (state: { movies: MoviesState }) => state.movies
  );
  console.log(movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <h2>Films</h2>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Failed to load films</div>}
      {status === "succeeded" && (
        <ul>
          {movies.map((movie: Movie) => (
            <li key={movie.id}>
              <a href={`/films/${movie.id}`}>{movie.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
