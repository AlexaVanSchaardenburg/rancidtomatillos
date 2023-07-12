
import './App.css';
import Nav from "./Nav";
import { getData } from './apiCalls.js';
import MovieCard from "./MovieCard";
import Details from './Details.js';
import { useState, useEffect } from 'react';
//In order to define all the paths that will be used by the app I imported Routes and Route below. The Routes component will now be a part of the App's return statment.
import { Routes, Route } from 'react-router-dom'

const App = () => {
  //I removed a lot of the state that delt with conditonal rendering and any state for the specific movie that is rendered on the details page has moved to the details component
  const [allMovies, setAllMovies] = useState([]);
  const [error, setError] = useState(null);

  //The functions for calling the specific movie data, and for handling any clicks were removed from here as routing takes care of the clicks and the fetch has been moved into the details component. 

  useEffect(() => {
    getData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((data) => {
        setAllMovies(data.movies);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const allMoviesView = (movies) => {
    //This function is really just to make the retun more readable, but is the part of the app component that takes all of the fetched movies and maps them into rendered movie cards - this function is called in the return statement so the data is rendered on page load just like it was before.
    return (
      <div className="movie-card-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            movie={movie}
          />
        ))}
      </div>
    )
  }

  return (
    <>
      <Nav />
      //The routes component below defines all of the routes in the app
      <Routes >
        //The route below is the home page and the default for the app to start on. The element for the home page is the invocation of the mapping functiona above and displays all the movie cards - important that it's path is just the /
        <Route path="/" element={allMoviesView(allMovies)} />
        //The route below this is the path for the details page - the element is the Details component which no longer needs any props, and the path is dynamic with anything after the colon beign dynamic. In this case the id is determined in the MovieCard componenet and is explained more there.
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  )
};

export default App;
