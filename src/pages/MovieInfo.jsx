import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Component to display detailed information about a specific movie

const MovieInfo = () => {
    // State to store the fetched movie details
    const [movie, setMovie] = useState(null);
    // Get the movie ID from the URL parameters
    const { id } = useParams();
    useEffect(() => {
        // Function to fetch detailed movie information from OMDB API
        async function fetchMovieDetails() {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=aecc1b78&i=${id}`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        }
        // Call the fetch function when component mounts or ID changes
        fetchMovieDetails();
    }, [id]);
    // Show loading state while fetching movie details
    if (!movie) {
        return <div>Loading...</div>;
    }
    return (
        <div id="movies__body">
            <main id="movies__main">
                <div className='movies__container'>
                    <div className='row'>
                        {/* Navigation section with back button and title */}
                        <div className="movie__selected--top">
                            <Link to="/movies" className='movie__link'>
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to="/movies" className='movie__link'>
                                <h2 className="movie__selected--title--top">Movies</h2>
                            </Link>
                        </div>
                        {/* Main movie details section */}
                        <div className="movie__selected">
                            {/* Movie poster */}
                            <figure className="movie__selected--figure">
                                <img src={movie.Poster} alt={movie.Title} className="movie__selected--img" />
                            </figure>
                            {/* Movie information */}
                            <div className="movie__selected--description">
                                <h2 className="movie__selected--title">{movie.Title}</h2>
                                <h3 className="movie__selected--genre">{movie.Genre}</h3>
                                <h3 className="movie__selected--year">{movie.Year}</h3>
                                <h3 className="movie__selected--director">{movie.Director}</h3>
                                <h3 className="movie__summary--title">Summary</h3>
                                <p className="movie__summary--para">{movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default MovieInfo;