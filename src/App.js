import './App.css';
import Nav from "./Nav";
// import movieData from './mockMovieData.js'
import individualMovieData from './mockIndividualMovieData.js'
// import { getAllMovies } from './apiCalls.js'
import MovieCard from "./MovieCard";
import Details from './Details.js'
import { useState, useEffect } from 'react';

const App = () => {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [allMovies, setAllMovies] = useState([])

  // let allMoviesData;

  const handleMovieClick = () => {
    setShowMovieDetails(true);
  };

  const getAllMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        setAllMovies(data.movies)
      })
      .catch(error => {
        //code for no repsonse reutned goes here -- ideally do not use alert BUT code below would technically work
        return alert(`${error.message}`)
      })
  };

  // Promise.all(getAllMovies()).then(allMoviesData => {
  //   setAllMovies(allMoviesData)
  // })

  useEffect(() => {
    getAllMovies()
  }, [])

  // console.log(movieData)

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