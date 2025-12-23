const KEY = "movie_watchlist";

export const getWatchlist = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const addToWatchlist = (movie) => {
  const list = getWatchlist();
  if (!list.find((m) => m.imdbID === movie.imdbID)) {
    localStorage.setItem(KEY, JSON.stringify([...list, movie]));
  }
};

export const removeFromWatchlist = (id) => {
  const list = getWatchlist().filter((m) => m.imdbID !== id);
  localStorage.setItem(KEY, JSON.stringify(list));
};

export const isInWatchlist = (id) => {
  return getWatchlist().some((m) => m.imdbID === id);
};
