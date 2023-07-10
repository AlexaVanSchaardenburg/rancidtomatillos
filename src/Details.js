import './Details.css';
import PropTypes from 'prop-types';

const Details = ({ movie }) => {

  const releaseYear = movie.release_date.slice(0, 4)

  return (
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
}

Details.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
  }).isRequired,
};

export default Details;