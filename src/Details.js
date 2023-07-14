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

  const formatMoney = (value) => {
    return value.toLocaleString("en-US", {style:"currency", currency:"USD"});
  };

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
                    <p>{movie.release_date.slice(0,4)}</p>
                    <p>{movie.runtime} min</p>
                  </div>
                  <p>{movie.tagline}</p>
                  <p>{movie.overview}</p>
                </div>
                <div className="movie-rating-section">
                  <h3>✩ {movie.average_rating}/10</h3>
                  <p>BUDGET:</p>
                  <p>{formatMoney(movie.budget)}</p>
                  <p>REVENUE:</p>
                  <p>{formatMoney(movie.revenue)}</p>
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