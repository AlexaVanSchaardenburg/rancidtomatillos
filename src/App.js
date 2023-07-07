import './App.css';
import Nav from "./Nav";
import movieData from './mockMovieData.js'
import MovieCard from "./MovieCard";

const App = () => {
  return (
    <>
      <Nav />
      <div className="movie-card-grid">
        {movieData.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;
