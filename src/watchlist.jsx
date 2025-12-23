import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

const WATCHLIST_KEY = "movie_watchlist";

const Watchlist = ({ onBack }) => {
  const [movies, setMovies] = useState([]);

  const loadWatchlist = () => {
    const stored = JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
    setMovies(stored);
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={onBack}
        style={{
          marginBottom: "15px",
          background: "#45a29e",
          border: "none",
          padding: "8px 14px",
          borderRadius: "8px",
          cursor: "pointer",
          color: "#fff",
        }}
      >
        ← Back
      </button>

      <h2>❤️ My Watchlist</h2>

      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onWatchlistChange={loadWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
