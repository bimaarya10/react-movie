import { useEffect, useState } from "react";
import { getPopularMovies } from "./serviceApi";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import LoadingItem from "./components/LoadingItem";

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies(setPopularMovies, setLoading);
  }, []);

  return (
    <>
      <Navbar />
      <Header position="left" />
      {loading ? <LoadingItem /> : <MovieList popularMovies={popularMovies} />}
    </>
  );
}
