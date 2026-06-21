import React, { useState, useEffect } from 'react';
import { FaHome, FaMap, FaBuilding, FaRoute, FaInfoCircle, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../images/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'services', label: 'Services', icon: <FaCog /> },
    { id: 'projects', label: 'Projects', icon: <FaBuilding /> },
    { id: 'about', label: 'About', icon: <FaInfoCircle /> },
    { id: 'testimonials', label: 'Testimonials', icon: <FaMap /> },
    { id: 'contact', label: 'Contact', icon: <FaRoute /> },
  ];

  const pageConfig = {
    'home': { title: 'Home', icon: <FaHome /> },
    'services': { title: 'Services', icon: <FaCog /> },
    'projects': { title: 'Projects', icon: <FaBuilding /> },
    'about': { title: 'About', icon: <FaInfoCircle /> },
    'testimonials': { title: 'Testimonials', icon: <FaMap /> },
    'contact': { title: 'Contact', icon: <FaRoute /> }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setCurrentPage(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const currentPageInfo = pageConfig[currentPage] || { title: 'SJ Softwares', icon: <FaHome /> };

  return (
    <>
      {/* Desktop Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo Section */}
            <div className="logo-section">
              <div className="logo" onClick={() => scrollToSection('home')}>
                <div className="logo-icon">
                  <img
                    src={logo}
                    alt="SJ Softwares Logo" 
                    className="logo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';  
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                 
                </div>
               
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-list">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      className={`nav-link ${currentPage === section.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(section.id)}
                    >
                      <span className="nav-icon">{section.icon}</span>
                      <span className="nav-label">{section.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Admin Button */}
            <div className="admin-button">
              <button className="btn-admin" onClick={() => scrollToSection('contact')}>
                <FaCog />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className={`mobile-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="mobile-top-bar">
            <div className="mobile-logo">
              <div className="mobile-logo-icon">
                <img
                  src={logo}
                  alt="SJ Softwares Logo"
                  className="mobile-logo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="mobile-logo-fallback">
                  <span>SJ</span>
                </div>
              </div>
              <div className="mobile-page-title">
                {currentPageInfo.icon}
                <span>{currentPageInfo.title}</span>
              </div>
            </div>
            
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      />
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-nav-logo">
            <div className="mobile-nav-logo-icon">
              <img
                src={logo}
                alt="SJ Softwares Logo"
                className="mobile-nav-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="mobile-nav-logo-fallback">
                <span>SJ</span>
              </div>
            </div>
            <h2>SJ Softwares</h2>
          </div>
          <button 
            className="close-menu"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="mobile-nav-links">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`mobile-nav-link ${currentPage === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <span className="mobile-nav-icon">{section.icon}</span>
              <span className="mobile-nav-label">{section.label}</span>
            </button>
          ))}
        </div>
        
        <div className="mobile-admin-section">
          <button className="mobile-admin-btn" onClick={() => scrollToSection('contact')}>
            <FaCog />
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;