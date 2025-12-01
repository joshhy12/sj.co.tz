import React, { useState, useEffect } from 'react';
import '../styles/App.css'; 
import '../images/logo.png';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-img">
            <img src="/images/logo.png" alt="SJ Softwares Logo" />
          </div>
          <div className="logo-text">
            <h1>SJ <span>Softwares</span></h1>
          </div>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="active" onClick={handleNavClick}>Home</a></li>
          <li><a href="#services" onClick={handleNavClick}>Services</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
        
        <button className="mobile-menu-btn" onClick={handleMenuToggle}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;