import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatabaseLogo from './assets/the-movie-database-logo.png';
import { Link } from 'react-router-dom';


const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    function openMenu() {
        setOpenMenu(true);
        document.body.classList =+ " menu--open";
    }

    function closeMenu() {}
        setMenuOpen(false);
        document.body.classList.remove("menu--open");

    

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
        <button className="btn__menu btn__menu--close" onClick={openMenu}>
          <FontAwesomeIcon icon="times"/>
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <a href="/" className="menu__link" onClick={closeMenu}>Home</a>
          </li>
          <li className="menu__list">
            <a href="/movies" className="menu__link" onClick={closeMenu}>Find your movie</a>
          </li>
          <li className="menu__list">
            <a href="/contact" className="menu__link" onClick={closeMenu}>Contact</a>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav;
