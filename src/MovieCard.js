import PropTypes from 'prop-types';
import './MovieCard.css';
import { NavLink } from 'react-router-dom'

const MovieCard = ({ movie }) => {

  const { title, poster_path, release_date, average_rating, id } = movie;

  const roundedRating = Math.round(average_rating * 10) / 10;

  return (
    <NavLink to={`/${id}`} className="movie-card" id="">
      <img className="movie-poster" src={poster_path} alt={title} />
      <div className="movie-details">
        <h2 className='movie-title'>{title}</h2>
        <p>{release_date.split("-")[0]}</p>
        <p>Rating: {roundedRating}/10</p>
      </div>
    </NavLink >
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
};


export default MovieCard;