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
    <nav>
      <div className="nav__container">
        <img className="logo" src="./assets/the-movie-database-logo.png" alt=""></img>
        <ul className="nav__links">
          <li><a href="#" className="nav__link">Home</a></li>
          <li><a href="#" className="nav__link">Find your movie</a></li>
          <li><button className="contact__btn">Contact</button></li>
        </ul>
        <button className="btn__menu" onClick="openMenu()">
          <i className="fas fa-bars"></i>
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick="closeMenu()">
            <i className="fas fa-times"></i>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="#" className="menu__link" onClick="closeMenu()">Home</a>
            </li>
            <li className="menu__list">
              <a href="#features" className="menu__link" onClick="closeMenu()">Movies</a>
            </li>
            <li className="menu__list">
              <a href="#features" className="menu__link" onClick="closeMenu()">Movies</a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
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