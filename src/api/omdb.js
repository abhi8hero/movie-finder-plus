const API_KEY = "2282c69b";
const BASE_URL = "https://www.omdbapi.com/";

const CURRENT_YEAR = new Date().getFullYear();
const MIN_YEAR = CURRENT_YEAR - 10;

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie`);
  const data = await res.json();
  return data.Search || [];
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  return await res.json();
};

/* ✅ AUTO RECOMMENDATIONS – LAST 10 YEARS */
export const getMoviesByKeyword = async (keyword) => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${keyword}&type=movie`
  );

  const data = await res.json();
  if (!data.Search) return [];

  // 🎯 Filter movies from last 10 years
  return data.Search.filter(
    (movie) =>
      movie.Year &&
      Number(movie.Year) >= MIN_YEAR &&
      Number(movie.Year) <= CURRENT_YEAR
  );
};

export const getMovieByTitle = async (title) => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}&type=movie`
  );
  return await res.json();
};
