import './App.css';
import Nav from "./Nav";
// import movieData from './mockMovieData.js'
import individualMovieData from './mockIndividualMovieData.js'
import { getData } from './apiCalls.js'
import MovieCard from "./MovieCard";
import Details from './Details.js'
import { useState, useEffect } from 'react';

const App = () => {
  const [movieId, setMovieId] = useState(null)
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [allMovies, setAllMovies] = useState([])
  const [individualMovie, setIndividualMovie] = useState([])

  const handleMovieClick = (id) => {
    setMovieId(id)
    console.log(movieId);
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`).then(data => {
      setIndividualMovie(data)
    })
    // })
    setShowMovieDetails(true)
  };

  useEffect(() => {
    getData('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(data => {
      setAllMovies(data.movies)
    })
    // getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270`).then(data => {
    //   setIndividualMovie(data)
    // })
  }, [])

  return (
    <>
      <Nav />
      {showMovieDetails ? (
        <Details movie={individualMovieData.movies} />
      ) : (
        <div className="movie-card-grid">
          {allMovies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} movie={movie} onClick={handleMovieClick} />
          ))}
        </div>
      )}
    </>
  );
};


export default App;