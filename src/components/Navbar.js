import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Shreejay Architect & Associates</div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          {/* ✅ New Associates link */}
          <li><a href="#associates" onClick={toggleMenu}>Associates</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;