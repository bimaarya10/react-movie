import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { getTopRatedMovies } from "./serviceApi";
import MovieList from "./components/MovieList";
import LoadingItem from "./components/LoadingItem";
import CarouselComponent from "./components/Carousel";

export default function TopMovie() {
  const [topMovie, setTopMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopRatedMovies(setTopMovie, setLoading);
  }, []);

  return (
    <>
      <CarouselComponent />
      <Navbar />
      <Header position="left" />
      {loading ? <LoadingItem /> : <MovieList popularMovies={topMovie} />}
    </>
  );
}
