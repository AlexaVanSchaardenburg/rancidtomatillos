import './App.css';
import Nav from "./Nav";
import movieData from './mockMovieData.js'
import MovieCard from "./MovieCard";

const App = () => {

  const displayDetails = (movie) => {
    //function to move display to the details page for whichever movie was clicked 
    console.log(`The movie with Title ${movie.title} was clicked`)
  }
  return (
    <>
      <Nav />
      <div className="movie-card-grid">
        {movieData.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </>
  );
};

export default App;
