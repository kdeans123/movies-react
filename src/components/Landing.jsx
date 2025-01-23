import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {

  const [searchTerm, setSearchTerm] = useState('');

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
              className="search__input"/>
                <FontAwesomeIcon icon="magnifying-glass onClick"/>
          </div>
        </div>
      </div>
    </header>
  </section>
  )
}

export default Landing;
