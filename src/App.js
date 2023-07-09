
import './App.css';
import Nav from "./Nav";
import { getData } from './apiCalls.js';
import MovieCard from "./MovieCard";
import Details from './Details.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState([]);
  const [error, setError] = useState(null);

  const handleMovieClick = (id) => {
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((data) => {
        setIndividualMovie(data);
        setShowMovieDetails(true);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    getData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((data) => {
        setAllMovies(data.movies);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleReturnToMain = () => {
    setShowMovieDetails(false);
  };

  return (
    <>
      {error ? (
        <>
          <Nav showButton={showMovieDetails} onClick={handleReturnToMain} />
          <div className='error-message'>Error: {error.message}</div>
        </>
      ) : (
        <>
          <Nav showButton={showMovieDetails} onClick={handleReturnToMain} />
          {showMovieDetails ? (
            <Details movie={individualMovie.movie} />
          ) : (
            <div className="movie-card-grid">
              {allMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  movie={movie}
                  onClick={() => handleMovieClick(movie.id)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default App;
