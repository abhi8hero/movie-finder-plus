import React, { useState, useEffect } from "react";
import "./MovieCard.css";

const WATCHLIST_KEY = "movie_watchlist";

const getWatchlist = () =>
  JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];

const isInWatchlist = (id) =>
  getWatchlist().some((m) => m.imdbID === id);

const addToWatchlist = (movie) => {
  const list = getWatchlist();
  if (!list.find((m) => m.imdbID === movie.imdbID)) {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify([...list, movie]));
  }
};

const removeFromWatchlist = (id) => {
  const list = getWatchlist().filter((m) => m.imdbID !== id);
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
};

const MovieCard = ({ movie, onSelect, onWatchlistChange }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isInWatchlist(movie.imdbID));
  }, [movie.imdbID]);

  const toggleWatchlist = (e) => {
    e.stopPropagation();

    if (saved) {
      removeFromWatchlist(movie.imdbID);
    } else {
      addToWatchlist(movie);
    }

    setSaved(!saved);

    // 🔄 notify parent (Watchlist page)
    onWatchlistChange && onWatchlistChange();
  };

  return (
    <div
      className="movie-card"
      onClick={() => onSelect && onSelect(movie)}
      style={{
        cursor: "pointer",
        backgroundColor: "#1f2937",
        borderRadius: "10px",
        padding: "10px",
        width: "180px",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <button
        onClick={toggleWatchlist}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "none",
          border: "none",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        {saved ? "❤️" : "🤍"}
      </button>

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/180x270"
        }
        alt={movie.Title}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h3 style={{ fontSize: "1rem", margin: "10px 0 5px" }}>
        {movie.Title}
      </h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
