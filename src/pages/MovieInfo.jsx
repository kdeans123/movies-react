import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useParams } from 'react-router-dom';

const MovieInfo = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((movie) => +movie.id === +id);


  return (
    <div id="movies__body">
        <main id="movies__main">
            <div className='movies__container'>
                <div className='row'>
                    <div className="movie__selected--top">
                        <Link to="/movies" className='movie__link'/>
                        <FontAwesomeIcon icon="arrow-left"/>
                        <Link/>
                        <Link to="/movies" className='movie__link'/>
                        <h2 className="movie__selected--title--top">Movies</h2>
                        <Link/>
                    </div>
                    <div className="movie__selected">
                        <figure className="movie__selected--figure">
                            <img src={movie.url} alt="" className="movie__selected--img" />
                        </figure>
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
  )
}

export default MovieInfo;

