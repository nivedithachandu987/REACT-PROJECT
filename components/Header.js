// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.navbar-toggler')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${isDropdownOpen ? 'dropdown-open' : ''}`}>
      <div className="logo">
        <Link to="/">
          <h1>WebUniverse</h1>
        </Link>
      </div>

      <button className="navbar-toggler" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
        <span className="navbar-toggler-icon"></span>
        <span className="navbar-toggler-icon"></span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li> {/* Update to use Link */}
          <li className="dropdown">
            <a href="#apis" onClick={toggleDropdown}>
              APIs <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}></span>
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/products">Products</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
