import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "489da623344bbab06d9b195564a114b4";

export function getPopularMovies(callback, loading) {
  axios
    .all([
      axios.get(`${baseURL}movie/popular?page=1&api_key=${apiKey}`),
      axios.get(`${baseURL}movie/popular?page=2&api_key=${apiKey}`),
    ])
    .then(
      axios.spread((movie1, movie2) => {
        const data = [...movie1.data.results, ...movie2.data.results];

        callback(data);
      })
    )
    .finally(() => loading(false))
    .catch((error) => console.log(error));
}

export function getFindMovies(data, callback, loading) {
  axios
    .get(`${baseURL}search/movie?query=${data}&page=1&api_key=${apiKey}`)
    .then((movie) => callback(movie.data.results))
    .finally(() => loading(false))
    .catch((error) => console.log(error));
}

export function getTopRatedMovies(callback, loading) {
  axios
    .get(`${baseURL}movie/top_rated?page=1&api_key=${apiKey}`)
    .then((movie) => callback(movie.data.results))
    .finally(() => loading(false))
    .catch((error) => console.log(error));
}
