import React, { useEffect, useState } from 'react';

const Home = () => {

const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  async function getMovieInfo(searchTerm) {
    try {
      const data = await fetch(
        `https://www.omdbapi.com/?apikey=aecc1b78&s=${searchTerm}`
      );
      const movieData = await data.json();
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
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded movies platform</h1>
            <h2>Find the movie you love</h2>
            <div className="input__wrapper">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="search__input"
              />
              <button onClick={() => getMovieInfo(searchTerm)}>
                Search
              </button>
            </div>
          </div>
          <div>
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
      </header>
    </section>
  );
};


export default Home;

// create search term on app.jsx, put the landing content inside home.jsx
// I only need to call API once, so I am going to do it on movies. The main content is on movies page 