import './Details.css';

function Details({ movie }) {
    return (
        <article>
            <img src={movie.backdrop_path} alt={`Backdrop Image for ${movie.title}`} className="backdropImage"></img>
            <div>
            <img src={movie.poster_path} alt={`Cover Image for ${movie.title}`} className="coverImage"></img>
                <div>
                    <h1>{movie.title}</h1>
                    <div>
                        <p>{movie.release_date}</p>
                        <p>{movie.runtime} min</p>
                    </div>
                    <p>{movie.tagline}</p>
                    <p>{movie.overview}</p>
                </div>
                <div>
                    <h3>Rating: {movie.average_rating}/10</h3>
                    <p>Movie Budget:</p>
                    <p>${movie.budget}</p>
                    <p>Movie Revenue:</p>
                    <p>${movie.revenue}</p>
                </div>
            </div> 
        </article>
    )
}

export default Details;