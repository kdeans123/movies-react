import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatabaseLogo from './assets/the-movie-database-logo.png';


const Nav = () => {
  return (
    <nav>
    <div className="nav__container">
      <img className="logo" src={DatabaseLogo} alt=""></img>
      <ul className="nav__links">
        <li><a href="#" className="nav__link">Home</a></li>
        <li><a href="#" className="nav__link">Find your movie</a></li>
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
  )
}

export default Nav;
