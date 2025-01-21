import React from 'react'

const Landing = () => {
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

export default Landing;
