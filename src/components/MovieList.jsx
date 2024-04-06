import MovieItem from "./MovieItem";

export default function MovieList({popularMovies}) {
  return (
    <div className="flex pb-16 flex-wrap container mx-auto justify-center gap-4">
      {popularMovies.length > 0 &&
        popularMovies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} poster={movie.poster_path} />;
        })}
    </div>
  );
}
