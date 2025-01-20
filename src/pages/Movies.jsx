import React, {useEffect, useState} from 'react'




const Movies = () => {
    return (
<section id="movies">
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
    
    <section id="search">
    <div className="content__wrapper">
      <div className="movies__header">
          <h2 className="search__results black">Search results:</h2>
          <select id="filter" onchange="filterMovies(event)">
            <option value="" disabled selected>Sort</option>
            <option value="A_TO_Z">A to Z</option>
            <option value="Z_TO_A">Z to A</option>
            <option value="YEAR_DESC">Year Descending</option>
            <option value="YEAR_ASC">Year Ascending</option>
          </select>
        </div>
      <div className="movies__container">

      </div>
  
    </div>

    <div className="overlay">
    </div>

  </section>
  </section>

    )

  
}

export default Movies;