import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date, average_rating } = movie;

  const roundedRating = Math.round(average_rating * 10) / 10;

  return (
    <div className="movie-card">
      <img className="movie-poster" src={poster_path} alt={title} />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>Year: {release_date.split("-")[0]}</p>
        <p>Rating: {roundedRating}</p>
      </div>
    </div>
  );
};


export default MovieCard;