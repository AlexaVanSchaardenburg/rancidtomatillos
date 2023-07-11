import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ movie, onClick }) => {

  const { title, poster_path, release_date, average_rating } = movie;

  const roundedRating = Math.round(average_rating * 10) / 10;

  return (
    <button className="movie-card" id="" onClick={onClick}>
      <img className="movie-poster" src={poster_path} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{release_date.split("-")[0]}</p>
        <p>Rating: {roundedRating}/10</p>
      </div>
    </button>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};


export default MovieCard;