import './Details.css';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getData } from './apiCalls.js';
import { useParams } from 'react-router-dom'

const Details = () => {

  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movie, setMovie] = useState([]);

  //fetch call goes here -- do I wrap it in a function or useEffect? Need to figure out how it is beign invoked - need to invoke it on "page load" aka when the details link is followed
  let releaseYear
  const id = useParams()
  console.log(id)

  //I am getting the id from use Params but it is not accessbile in the useEffect???

  useEffect(() => {
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((data) => {
        setMovie(data);
        setShowMovieDetails(true);
        return releaseYear = movie.release_date.slice(0, 4)
      })
      .catch((error) => {
        // setError(error);
      });
  });

  return (
    <>
    {showMovieDetails
    ? (
      <article className="details-page">
        <img src={movie.backdrop_path} alt={`Backdrop Image for ${movie.title}`} className="backdrop-image"></img>
        <div className="info">
          <img src={movie.poster_path} alt={`Cover Image for ${movie.title}`} className="cover-image"></img>
          <div className="movie-overview-section">
            <h1>{movie.title}</h1>
            <div className="date-and-runtime">
              <p>{releaseYear}</p>
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

// Details.propTypes = {
//   movie: PropTypes.shape({
//     release_date: PropTypes.string.isRequired,
//     backdrop_path: PropTypes.string.isRequired,
//     poster_path: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     runtime: PropTypes.number.isRequired,
//     tagline: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired,
//     average_rating: PropTypes.number.isRequired,
//     budget: PropTypes.number.isRequired,
//     revenue: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Details;

/* 
1. move the fetch call to the details component
2. add state to check if the fetch call has returned 
3. add state to set the movie data
4. refactor to include condtional logic
  - if fetch has run then return the details component with all the data
  - if the fetch has NOT returned then display a p-tag that says loading
5. refactor to change prop types as no prop will be passed to the details component
6. refactor to remove any now uneeded states
*/