import './App.css';
import Nav from "./Nav";
// import movieData from './mockMovieData.js'
// import individualMovieData from './mockIndividualMovieData.js'
import { getAllMovies } from './apiCalls.js'
import MovieCard from "./MovieCard";
import Details from './Details.js'
import { useState } from 'react';

const App = () => {
  const [showMovieDetails, setShowMovieDetails] = useState(false);

  const handleMovieClick = () => {
    setShowMovieDetails(true);
  };



  return (
    <>
      <Nav />
      {showMovieDetails ? (
        <Details movie={individualMovieData.movie} />
      ) : (
        <div className="movie-card-grid">
          {movieData.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
          ))}
        </div>
      )}
    </>
  );
};


export default App;