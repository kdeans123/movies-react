import React, { useEffect, useState } from "react";



const Movies = ({ searchTerm, setSearchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [sortOption, setSortOption] = useState("DEFAULT");
  async function getMovieInfo(searchTerm) {
    try {
      const data = await fetch(
        `https://www.omdbapi.com/?apikey=aecc1b78&s=${searchTerm}`
      );
      const movieData = await data.json();
      console.log(movieData);
      if (movieData.Error) {
        console.error("Error fetching movie info:", movieData.Error);
        return;
      }
      const result = movieData.Search;
      setMovies(result);
    } catch (error) {
      console.error("Error fetching movie info:", error);
    }
  }
  useEffect(() => {
    const defaultSearch = searchTerm || "2025"
    getMovieInfo(defaultSearch);
  }, [searchTerm]);
  useEffect(() => {
    const sortMovies = () => {
      let sortedMovies = [...movies];
      switch (sortOption) {
        case "A_TO_Z":
          sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
          break;
        case "Z_TO_A":
          sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
          break;
        case "YEAR_DESC":
          sortedMovies.sort((a, b) => b.Year - a.Year);
          break;
        case "YEAR_ASC":
          sortedMovies.sort((a, b) => a.Year - b.Year);
          break;
        default:
          break;
      }
      setMovies(sortedMovies);
      // that returns sorted movies
    };
    if (movies.length > 0) {
      sortMovies();
      // if there are no movies, nothing is displayed as nothing is to be sorted 
    }
  }, [movies, sortOption]);

  // dependencies. We are sorting the movies, copying the, and switching variable from default to a to z or 
  return (
    <>
      <div id="movies__body">
        <main id="movies__main">
          <section>
            <div className="movies__container">
              <div className="row">
              <h2 className="section__title movies__header--title">Movies</h2>
                <div className="movies__header">
                  
                  <div className="input__wrapper">
                    <input
                      type="text"
                      onChange={(event) => setSearchTerm(event.target.value)}
                      className="search__input"
                    />
                    <button className="btn" onClick={() => getMovieInfo(searchTerm)}>Search</button>
                  </div>
                  
                  <select
                    id="filter"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="sort__field"
                  >
                    <option value="DEFAULT" disabled>
                      Sort
                    </option>
                    <option value="A_TO_Z">A to Z</option>
                    <option value="Z_TO_A">Z to A</option>
                    <option value="YEAR_DESC">Year Descending</option>
                    <option value="YEAR_ASC">Year Ascending</option>
                  </select>
                </div>
                <h2 className="search__results black">Search results:{searchTerm}</h2>
                <div className="movies">
        
                        {movies.map((movie, index) => (
                        <div className="movie-card" key={index}>
                          <div>
                            <img src={movie?.Poster} className="movie__img" alt="movie poster" />
                            <div className="movie__description">
                            <h4>{movie.Title}</h4>
                            <h5>{movie.Year}</h5>
                            <h5>{movie.Genre}</h5>
                            </div>
                          </div>
                        </div>
                      ))}
                 

                   
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </section>
        </main>
      </div>
    </>
  );
};
export default Movies;