import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="/sanjana.png" alt="Sanjana" className="logo-img" />
        Sanjana Jayaram Mottemmal
      </div>

      {/* Hamburger Menu for Mobile/Tablet */}
      <div className={`hamburger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;




