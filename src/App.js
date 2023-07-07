import './App.css';
import Nav from "./Nav";
import movieData from './mockMovieData.js'
import individualMovieData from './mockIndividualMovieData.js'
import MovieCard from "./MovieCard";
import Details from './Details.js'

const App = () => {

  return (
    <>
      <Nav />
      {/* <div className="movie-card-grid">
        {movieData.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div> */}
      <Details movie={individualMovieData.movie}/>
    </>
  );
};

export default App;
