import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UndrawBooks from "../assets/undraw_home-cinema_jdm1.svg"

const Home = ({ setSearchTerm }) => {
    const navigate = useNavigate()
    function loadingSearch() {

        navigate("/movies")
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
                onChange={(event) => setSearchTerm(event.target.value)}
                className="search__input"
              />
              <button className="btn" onClick={loadingSearch}>
                Search
              </button>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
          
        </div>
      </header>
    </section>
  );
};


export default Home;

// create search term on app.jsx, put the landing content inside home.jsx
// I only need to call API once, so I am going to do it on movies. The main content is on movies page 