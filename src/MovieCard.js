import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date, average_rating } = movie;

  return (
    <div className="movie-card">
      <img src={poster_path} alt={title} />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>Year: {release_date.split("-")[0]}</p>
        <p>Rating: {average_rating}</p>
      </div>
    </div>
  );
};


export default MovieCard;