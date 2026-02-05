import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  // Technology stack for scrolling animation
  const techStack = [
    'React.js', 'Node.js', 'Python', 'AWS', 
    'Docker', 'Kubernetes', 'AI/ML', 'Blockchain'
  ];

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          
          {/* Logo Section */}
          <div className="hero-logo">
            <h1 className="hero-logo-main">SJ</h1>
            <div className="hero-logo-sub">SOFTWARES</div>
          </div>

          {/* Tagline */}
          <div className="hero-tagline">
            <span className="pulse-dot"></span>
            <span>Pioneering Digital Excellence Since 2014</span>
          </div>

          {/* Main Description */}
          <p className="hero-description">
            We craft cutting-edge custom software, immersive web experiences, and
            transformative strategies powered by <strong>AI</strong>, <strong>Cloud</strong>, 
            and <strong>Blockchain</strong> to propel your business into the future.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Start Your Digital Journey
              <i className="fas fa-rocket"></i>
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Our Innovations
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* Technology Stack Scroll */}
          <div className="tech-stack-container">
            <div className="tech-stack-scroll">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="tech-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
       
        </div>
      </div>

      {/* Floating Cards */}
      <div className="floating-cards">
        <div className="floating-card">
          <i className="fas fa-code"></i>
          <h4>Web Development</h4>
          <p>Professional sites</p>
        </div>
        <div className="floating-card">
          <i className="fas fa-mobile-alt"></i>
          <h4>Mobile Apps</h4>
          <p>iOS & Android</p>
        </div>
        <div className="floating-card">
          <i className="fas fa-cogs"></i>
          <h4>IT Consultancy</h4>
          <p>Expert advice</p>
        </div>
        <div className="floating-card">
          <i className="fas fa-shield-alt"></i>
          <h4>Security</h4>
          <p>Enterprise grade</p>
        </div>
      </div>

      {/* Chat Widget Preview */}
      

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;