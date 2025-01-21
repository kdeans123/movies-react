import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatabaseLogo from './assets/the-movie-database-logo.png';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
    <div className="nav__container">
      <Link to="/">
            <img className="logo" src={DatabaseLogo} alt=""></img>
      </Link>      
      <ul className="nav__links">
        <li>
            <Link to="/" className="nav__link">Home</Link>
            </li>
        <li>
            <Link to="/movies" className="nav__link">Find your movie</Link>
            </li>
        <li><button className="contact__btn">Contact</button></li>
      </ul>
      <button className="btn__menu" onClick="openMenu()">
        <FontAwesomeIcon icon="bars"/>
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick="closeMenu()">
          <FontAwesomeIcon icon="times"/>
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <a href="/" className="menu__link" onClick="closeMenu()">Home</a>
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
  )
}

export default Nav;
