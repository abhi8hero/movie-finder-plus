import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "#1f2937",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          style={{ width: "200px", borderRadius: "10px" }}
        />
        <h2 style={{ marginTop: "15px" }}>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Released:</strong> {movie.Released}
        </p>
        <p>
          <strong>Rating:</strong> {movie.imdbRating} ⭐
        </p>
        <button
          onClick={onBack}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#3b82f6",
            border: "none",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
