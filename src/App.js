
import './App.css';
import Nav from "./Nav";
import { getData } from './apiCalls.js';
import MovieCard from "./MovieCard";
import Details from './Details.js';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  // const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  // const [individualMovie, setIndividualMovie] = useState([]);
  const [error, setError] = useState(null);

  // const handleMovieClick = (id) => {
  //   getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //     .then((data) => {
  //       setIndividualMovie(data);
  //       setShowMovieDetails(true);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // };

  useEffect(() => {
    getData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((data) => {
        setAllMovies(data.movies);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // const handleReturnToMain = () => {
  //   setShowMovieDetails(false);
  // };

  const allMoviesView = (movies) => {
    //thinking we may break this function out into it's own component?
    return (
      <div className="movie-card-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            movie={movie}
            // onClick={() => handleMovieClick(movie.id)}
          />
        ))}
      </div>
    )
  }

  return (
    <>
      <Nav />
      <Routes >
        <Route path="/" element={allMoviesView(allMovies)} />
        <Route path="/:id" element={<Details />} />
        //I think the async js is causing the error - aka route runs before the fetch come back and then we get a runtime error
        //need to dig into how the fetch was working before hand to better understadn hwo I prevented that and then apply that to the link
        //isnt working because the link click has immediate effects and the fetch doesn't have time
        //potential fix = put the fetch in the details component - have the component render a loading symbol of some kind - then when the fetch returns replace that loading symbol with the data
      </Routes>
    </>
  )
    //need to return the Routes - do I need to move other code out?
    //
  //   <>
  //     {error ? (
  //       <>
  //         <Nav showButton={showMovieDetails} onClick={handleReturnToMain} />
  //         <div className='error-message'>Error: {error.message}</div>
  //       </>
  //     ) : (
  //       <>
  //         <Nav showButton={showMovieDetails} onClick={handleReturnToMain} />
  //         {showMovieDetails ? (
  //           <Details movie={individualMovie.movie} />
  //         ) : (
  //           <div className="movie-card-grid">
  //             {allMovies.map((movie) => (
  //               <MovieCard
  //                 key={movie.id}
  //                 id={movie.id}
  //                 movie={movie}
  //                 onClick={() => handleMovieClick(movie.id)}
  //               />
  //             ))}
  //           </div>
  //         )}
  //       </>
  //     )}
  //   </>
  // );




};

export default App;
