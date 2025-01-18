import React, {useEffect, useState} from 'react'
import 

const Home = () => {
  return (
    <section id="landing">
    <nav>
      <div class="nav__container">
        <img class="logo" src="./assets/the-movie-database-logo.png" alt=""></img>
        <ul class="nav__links">
          <li><a href="#" class="nav__link">Home</a></li>
          <li><a href="#" class="nav__link">Find your movie</a></li>
          <li><button class="contact__btn">Contact</button></li>
        </ul>
        <button class="btn__menu" onclick="openMenu()">
          <i class="fas fa-bars"></i>
        </button>
        <div class="menu__backdrop">
          <button class="btn__menu btn__menu--close" onclick="closeMenu()">
            <i class="fas fa-times"></i>
          </button>
          <ul class="menu__links">
            <li class="menu__list">
              <a href="#" class="menu__link" onclick="closeMenu()">Home</a>
            </li>
            <li class="menu__list">
              <a href="#features" class="menu__link" onclick="closeMenu()">Movies</a>
            </li>
            <li class="menu__list">
              <a href="#features" class="menu__link" onclick="closeMenu()">Movies</a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
    <header>
      <div class="header__container">
        <div class="header__description">
          <h1>America's most awarded movies platform</h1>
          <h2>Find the movie you love</h2>
          <div class="input__wrapper">
            <input
              type="text"
              placeholder="Search by Category, Reviews, Keywords"
              onchange="renderMovies()" class="search__input"/>
                <i class="fa-solid fa-magnifying-glass search__icon" onclick="renderMovies()"></i>
          </div>
        </div>
      </div>
    </header>
  </section>
  )
}

export default Home;