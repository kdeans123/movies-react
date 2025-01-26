import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import DatabaseLogo from '../assets/Movie Database - logo.png';


const Nav = () => {
    const [setOpenMenu] = useState(false);

    function openMenu() {
        setOpenMenu(true);
        document.body.classList =+ " menu--open";
    }

    function closeMenu() {
      setOpenMenu(false);
      document.body.classList.remove("menu--open");
    }
        
   

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
            <Link to="/" className="menu__link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="menu__list">
            <Link to="/movies" className="menu__link" onClick={closeMenu}>Find your movie</Link>
          </li>
          <li className="menu__list">
            <Link to="/contact" className="menu__link" onClick={closeMenu}>Contact</Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav;
