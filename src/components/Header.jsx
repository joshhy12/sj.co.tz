import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import logo from '../images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'projects', 'about', 'contact', 'testimonials'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this based on your header height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-img">
            <img 
              src={logo} 
              alt="SJ Softwares Logo" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                borderRadius: '10px'
              }} 
            />
          </div>
          <div className="logo-text">
            <h1>SJ <span>Softwares</span></h1>
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={activeSection === 'services' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        <button className="mobile-menu-btn" onClick={handleMenuToggle}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;