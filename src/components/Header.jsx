import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaUser, FaCode } from 'react-icons/fa';
import { MdDesignServices, MdSupport } from 'react-icons/md';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { IoIosGlobe } from 'react-icons/io';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const sections = [
    { id: 'home', label: 'Home', icon: <FaCode /> },
    { id: 'services', label: 'Services', icon: <MdDesignServices /> },
    { id: 'projects', label: 'Projects', icon: <IoIosGlobe /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MdSupport /> },
    { id: 'contact', label: 'Contact', icon: <FaUser /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container" onClick={() => scrollToSection('home')}>
          <div className="logo-glass">
            <div className="logo-icon">
              <FaCode className="logo-code-icon" />
            </div>
            
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className="nav-link"
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="nav-icon">{section.icon}</span>
                  <span className="nav-label">{section.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button 
            className="header-cta glass"
            onClick={() => scrollToSection('contact')}
          >
            <span>Start Project</span>
            <GiArtificialIntelligence className="cta-icon" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn glass"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo" onClick={() => scrollToSection('home')}>
            <FaCode className="mobile-logo-icon" />
            <span>SJ SOFTWARES</span>
          </div>
          <button 
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(section.id)}
            >
              <span className="mobile-nav-icon">{section.icon}</span>
              <span className="mobile-nav-label">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="mobile-cta">
          <button 
            className="mobile-cta-btn glass"
            onClick={() => {
              scrollToSection('contact');
              setMobileMenuOpen(false);
            }}
          >
            <span>Get Started</span>
            <GiArtificialIntelligence className="mobile-cta-icon" />
          </button>
        </div>
      </div>

      {/* Floating Indicator */}
      
    </header>
  );
};

export default Header;