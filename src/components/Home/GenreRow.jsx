import { useEffect, useState } from "react";
import { getMovieByTitle } from "../../api/omdb";
import MovieCard from "../MovieCard";
import "./GenreRow.css";

const GenreRow = ({ title, movies, onSelectMovie }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await Promise.all(
          movies.map((movieTitle) => getMovieByTitle(movieTitle))
        );

        // Keep only valid movies
        const validMovies = results.filter(
          (m) => m && m.Response === "True" && m.Poster !== "N/A"
        );

        setMovieList(validMovies);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, [movies]);

  if (!movieList.length) return null;

  return (
    <div className="genre-row">
      <h2 className="genre-title">{title}</h2>

      <div className="genre-scroll">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onSelect={onSelectMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default GenreRow;
