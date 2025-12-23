import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./watchlist";
import Footer from "./components/Footer/Footer";
import { searchMovies, getMovieDetails } from "./api/omdb";

const WATCHLIST_KEY = "movie_watchlist";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [count, setCount] = useState(0);

  // 🔢 Update watchlist count
  const updateCount = () => {
    const list = JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
    setCount(list.length);
  };

  useEffect(() => {
    updateCount();
    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, []);

  // 🔍 Search movies
  const handleSearch = async (query) => {
  if (!query.trim()) return;

  setError(null);
  setSelectedMovie(null);

  const results = await searchMovies(query);

  if (results && results.length > 0) {
    setMovies(results);
  } else {
    setMovies([]);
    setError("No movies found! try another movie  or try after 24 hours, may be it because of limit exceed. ");
  }
};

  // 🎬 Select movie
  const handleSelectMovie = async (movie) => {
    const details = await getMovieDetails(movie.imdbID);
    setSelectedMovie(details);
  };

  // 🔙 Back to landing page
  const handleBackToHome = () => {
    setMovies([]);
    setSelectedMovie(null);
    setError(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#0d1117",
        color: "#aef1f1",
        minHeight: "100vh",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* ❤️ WATCHLIST BUTTON */}
      <button
        onClick={() => {
          setShowWatchlist(!showWatchlist);
          updateCount();
        }}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "#45a29e",
          border: "none",
          padding: "8px 14px",
          borderRadius: "20px",
          cursor: "pointer",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        ❤️ Watchlist {count > 0 && `(${count})`}
      </button>

      {/* 🎬 TITLE */}
      <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
        🎬 Movie Finder
      </h1>

      {/* 📄 WATCHLIST PAGE */}
      {showWatchlist ? (
        <Watchlist onBack={() => setShowWatchlist(false)} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />

          {error && <p style={{ textAlign: "center" }}>{error}</p>}

          {/* 🔙 BACK TO HOME (only when search results exist) */}
          {movies.length > 0 && (
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <button
                onClick={handleBackToHome}
                style={{
                  background: "#1f2937",
                  border: "1px solid #45a29e",
                  color: "#45a29e",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                ← Back to Home
              </button>
            </div>
          )}

          {/* 🔍 SEARCH RESULTS */}
          {movies.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              {movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onSelect={handleSelectMovie}
                  onWatchlistChange={updateCount}
                />
              ))}
            </div>
          )}

          {/* 🎞️ MOVIE DETAILS */}
          {selectedMovie && (
            <MovieDetails
              movie={selectedMovie}
              onBack={() => setSelectedMovie(null)}
            />
          )}

          {/* 🔥 LANDING PAGE */}
          {movies.length === 0 && !selectedMovie && (
  <Home onSelectMovie={handleSelectMovie} />
)}

        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
