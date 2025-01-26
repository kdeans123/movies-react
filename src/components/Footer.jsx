import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/" className="">
                    <figure className='footer__logo'>
                        <img src='/the-movie-database-logo.png' className='footer__logo--img' alt="" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="/movies" className="footer__link">Find your movie</Link>
                    <Link to="/" className="footer__link no-cursor">Contact</Link>
                </div>
                <div className="footer__copyright">Copyright &copy; 2025 Movies Database</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
