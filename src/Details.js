import './Details.css';
import { useState, useEffect } from 'react';
import { getData } from './apiCalls.js';
import { useParams } from 'react-router-dom'

const Details = () => {

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const id = useParams().id

  useEffect(() => {

    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((data) => {
        console.log(data)
        setMovie(data.movie);
      })
      .catch((error) => {
        console.log(error)
        setError(error);
      });
  }, []);

  return (
    <>
      {error ? (
        <div className='error-message'>Error: {error.message}</div>
      ) : (
        <>
          {movie ? (
            <article className="details-page">
              <img src={movie.backdrop_path} alt={`Backdrop Image for ${movie.title}`} className="backdrop-image" />
              <div className="info">
                <img src={movie.poster_path} alt={`Cover Image for ${movie.title}`} className="cover-image" />
                <div className="movie-overview-section">
                  <h1 className='movie-title'>{movie.title}</h1>
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
          ) : (
            <p>loading...</p>
          )}
        </>
      )}
    </>
  );  
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