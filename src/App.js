import './App.css';
import movieData from './mockMovieData.js'
import MovieCard from "./MovieCard";

const App = () => {
  return (
    <>
      {movieData.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default App;
