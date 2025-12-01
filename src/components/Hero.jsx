import React from 'react';
import '../styles/App.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2>Next-Gen IT Solutions for the Digital Era</h2>
          <p>
            We craft cutting-edge custom software, immersive web experiences, and
            transformative IT strategies to propel your business into the future.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn">Start Your Project <i className="fas fa-rocket"></i></a>
            <a href="#services" className="btn btn-secondary">Explore Services <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      
      {/* Desktop floating cards (hidden on mobile) */}
      <div className="hero-visual">
        <div className="floating-card glass">
          <i className="fas fa-globe"></i>
          <h3>Web Development</h3>
          <p>Professional websites</p>
        </div>
        <div className="floating-card glass">
          <i className="fas fa-mobile-alt"></i>
          <h3>Mobile Apps</h3>
          <p>iOS & Android</p>
        </div>
        <div className="floating-card glass">
          <i className="fas fa-cogs"></i>
          <h3>IT Consultancy</h3>
          <p>Expert advice</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;