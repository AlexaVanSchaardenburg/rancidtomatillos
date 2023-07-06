import './MovieCards.css';

const MovieCard = ({ movie }) => {
  const { title, posterImage, releaseDate, averageRating } = movie;

  return (
    <div className="movie-card">
      <img className="poster" src={posterImage} alt={title} />
      <div className="movie-details">
        <h3 className="movie-title">{title}</h3>
        <p className="release-date">Year: {releaseDate.split("-")[0]}</p>
        <p className="movie-rating">Rating: {averageRating}</p>
      </div>
    </div>
  );
};

export default MovieCard;