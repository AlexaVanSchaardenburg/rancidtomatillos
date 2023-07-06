import './App.css';
import movieData from './mockMovieData.js'
import MovieCard from "./MovieCard";

const App = () => {
  return (
    <div className="movie-card-grid">
      {movieData.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default App;
