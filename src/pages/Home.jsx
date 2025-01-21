import React, {useEffect, useState} from 'react'







const Home = () => {
    const [searchTerm, setSearchTerm] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=aecc1b78&s=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data);
        };

        if (searchTerm) {
            fetchData();
        }
    }, [searchTerm]);

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
              placeholder="Search by Category, Reviews, Keywords"
              className="search__input"/>
                <i className="fa-solid fa-magnifying-glass search__icon" onClick="renderMovies()"></i>
          </div>
        </div>
      </div>
    </header>
  </section>
  )
}

export default Home;