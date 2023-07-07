import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date, average_rating } = movie;

  const roundedRating = Math.round(average_rating * 10) / 10;

  return (
    <article className="movie-card">
      <img className="movie-poster" src={poster_path} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{release_date.split("-")[0]}</p>
        <p>Rating: {roundedRating}/10</p>
      </div>
    </article>
  );
};


export default MovieCard;