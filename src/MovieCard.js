import PropTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  //I removed the onClick prop from this componenet becasue the link takes care of it

  const { title, poster_path, release_date, average_rating, id } = movie;
  //Above I needed to add the id as a prop passed 

  const roundedRating = Math.round(average_rating * 10) / 10;

  //in the return I changed what was an article to a Link so that when the movie card is clicked the user is taken to the path defined. Becuase the path for this is dynamic the to="" contains an interpolated id which is passed in the movie prop. This is what tells our router what id to pass and in turn tells the detail component what movie to fetch for (this is what we use useParams to grab)
  return (
    <Link to={`/${id}`} className="movie-card" id="">
      <img className="movie-poster" src={poster_path} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{release_date.split("-")[0]}</p>
        <p>Rating: {roundedRating}/10</p>
      </div>
    </Link >
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