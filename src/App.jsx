import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState } from "react";
import { getFindMovies } from "./serviceApi";
import MovieList from "./components/MovieList";
import LoadingItem from "./components/LoadingItem";

function App() {
  const [search, setSearch] = useState("");
  const [foundMovie, setFoundMovie] = useState([]);
  const [loading, setLoading] = useState();

  function searchMovie(event) {
    setSearch(event.target.value);
    setLoading(true);
    getFindMovies(search, setFoundMovie, setLoading);
  }

  return (
    <>
      <Navbar />
      <Header position="center">
        <div className="w-full flex rounded-xl shadow-lg bg-[#6d6d6d] items-center">
          <img
            src="./search-svgrepo-com.svg"
            className="w-6 ml-2 text-white"
            alt=""
          />
          <input
            onChange={searchMovie}
            value={search}
            className="w-full focus:outline-none  text-lg md:text-xl text-white px-3 py-2 bg-transparent"
            type="text"
            placeholder="Search movie here..."
          />
        </div>
      </Header>

      <section className="pt-4 pb-12 px-5">
        {loading ? <LoadingItem /> : <MovieList popularMovies={foundMovie} />}
      </section>
    </>
  );
}

export default App;
