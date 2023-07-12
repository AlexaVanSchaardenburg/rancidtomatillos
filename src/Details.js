import './Details.css';
import { useState, useEffect } from 'react';
import { getData } from './apiCalls.js';
//I am importing useParams here 
import { useParams } from 'react-router-dom'

const Details = () => {

  //Here I brought the states for the individual movie and the error handling
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  //here I define id as the parameter passed in the path of the route used to get to this component - it is returned as an object with a key of id where the value of that id is the id of the movie we need to fetch
  const id = useParams().id

  useEffect(() => {
    //I now have the fetch call for getting the individual movie data here in the useEffect so it is run on state change
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((data) => {
        setMovie(data.movie);
      })
      .catch((error) => {
        setError(error);
      });
  });

  //I added a conditonal rendering to the return statement below that checks if the movie state has been updated - if it has it displays the details just like it did before, if it hasn't then it displays a p tag I added that says loading

  //the conditional rendering is important becasue if you try to display the details right away the fetch does not have time to load and I got a runtime error - with this set up the conditonal gives the component soemthing to run, and then relaods when the state changes from the completed fetch request to render all teh details. 

  return (
    <>
    {movie
    ? (
      <article className="details-page">
        <img src={movie.backdrop_path} alt={`Backdrop Image for ${movie.title}`} className="backdrop-image"></img>
        <div className="info">
          <img src={movie.poster_path} alt={`Cover Image for ${movie.title}`} className="cover-image"></img>
          <div className="movie-overview-section">
            <h1>{movie.title}</h1>
            <div className="date-and-runtime">
              <p>{movie.release_date}</p>
              <p>{movie.runtime} min</p>
            </div>
            <p>{movie.tagline}</p>
            <p>{movie.overview}</p>
          </div>
          <div className="movie-rating-section">
            <h3>Rating: {movie.average_rating}/10</h3>
            <p>Movie Budget:</p>
            <p>${movie.budget}</p>
            <p>Movie Revenue:</p>
            <p>${movie.revenue}</p>
          </div>
        </div>
      </article>
    )
  : <p>loading...</p>}
    </>
  )
};

export default Details;

/* 
STEPS I FOLLOWED TO REFACOTR THIS COMPONENT
1. move the fetch call to the details component
3. add state to set the movie data
4. refactor to include condtional logic
  - if fetch has run then return the details component with all the data
  - if the fetch has NOT returned then display a p-tag that says loading
5. refactor to change prop types as no prop will be passed to the details component
6. refactor to remove any now uneeded states
*/