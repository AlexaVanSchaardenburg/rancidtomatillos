import './Genre.css';
import MovieCard from './MovieCard.js';

const Genre = ({ genre, movies }) => {
  return (
    <>
      <h2 className='genre-heading'>{genre}</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Genre;