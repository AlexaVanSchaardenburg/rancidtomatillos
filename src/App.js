import './App.css';
import Nav from "./Nav";
// import movieData from './mockMovieData.js'
import individualMovieData from './mockIndividualMovieData.js'
import { getData } from './apiCalls.js'
import MovieCard from "./MovieCard";
import Details from './Details.js'
import { useState, useEffect } from 'react';

const App = () => {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [allMovies, setAllMovies] = useState([])

  const handleMovieClick = () => {
    setShowMovieDetails(true);
  };

  useEffect(() => {
    getData('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(data => {
      setAllMovies(data.movies)
    })
  }, [])

  return (
    <>
      <Nav />
      {showMovieDetails ? (
        <Details movie={individualMovieData.movie} />
      ) : (
        <div className="movie-card-grid">
          {allMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
          ))}
        </div>
      )}
    </>
  );
};


export default App;