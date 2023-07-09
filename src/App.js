import './App.css';
import Nav from "./Nav";
import { getData } from './apiCalls.js'
import MovieCard from "./MovieCard";
import Details from './Details.js'
import { useState, useEffect } from 'react';

const App = () => {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [allMovies, setAllMovies] = useState([])
  const [individualMovie, setIndividualMovie] = useState([])

  const handleMovieClick = (id) => {
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then(data => {
      setIndividualMovie(data)
      setShowMovieDetails(true)
    })
  };

  useEffect(() => {
    getData('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(data => {
      setAllMovies(data.movies)
    })
  }, [])
  const handleReturnToMain = () => {
    setShowMovieDetails(false);
  };

  return (
    <>
      <Nav showButton={showMovieDetails} onClick={handleReturnToMain} />
      {showMovieDetails ? (
        <Details movie={individualMovie.movie} />
      ) : (
        <div className="movie-card-grid">
          {allMovies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} movie={movie} onClick={() => handleMovieClick(movie.id)} />
          ))}
        </div>
      )}
    </>
  );
};

export default App;