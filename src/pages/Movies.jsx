import React, {useEffect, useState} from 'react'
// import { movies } from "../data";



const Movies = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  async function getMovieInfo(searchTerm) {
    try {
      const data = await fetch(
        `https://www.omdbapi.com/?apikey=aecc1b78&s=${searchTerm}`
      );
      const movieData = await data.json();
      console.log(movieData)
      // Check if there's an error message from the API response
      if (movieData.Error) {
        console.error('Error fetching movie info:', movieData.Error);
        // You can also set an error state to display to the user here
        return;
      }
      const result = movieData.Search;
      setMovies(result);
    } catch (error) {
      console.error('Error fetching movie info:', error);
    }
  }

  useEffect(() => {
    getMovieInfo(searchTerm)
  }, [searchTerm] )

    return (
<>
<div id="movies__body">
    <main id="movies__main">    
        <section>
            <div className="movies__container">
              <div className='row'>
                    <div className="movies__header">
                        <h2 className='section__title movies__header--title'>Movies</h2>
                        <div className="input__wrapper">
              <input
                type="text"
                onChange={(event) => setSearchTerm(event.target.value)}
                className="search__input"
              />
              <button onClick={loadingSearch}>
                Search
              </button>
            </div>
                          <h2 className="search__results black">Search results:</h2>
                          <select id="filter" defaultValue="DEFAULT">
                            <option value="DEFAULT" disabled>Sort</option>
                            <option value="A_TO_Z">A to Z</option>
                            <option value="Z_TO_A">Z to A</option>
                            <option value="YEAR_DESC">Year Descending</option>
                            <option value="YEAR_ASC">Year Ascending</option>
                          </select>
                    </div>
                    <div className='movies'>
                   
                    {movies.map((movie, index) => (
                        <div key={index}>
                          <div>
                            <img src={movie?.Poster} alt="movie poster" />
                            <h4>{movie.Title}</h4>
                            <h5>{movie.Year}</h5>
                            <h5>{movie.Type}</h5>
                          </div>
                        </div>
                      ))}

                    </div>
              </div>
                
            </div>
            <div className="overlay">
            </div>
        </section>
      </main>
  </div>
  </>
    )  
}

export default Movies;