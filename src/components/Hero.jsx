import React from 'react';
import { FaRocket, FaArrowRight, FaCode, FaMobileAlt, FaBrain, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = ({ onNavigate }) => {
  const handleBuildWebsiteClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('website-builder');
    } else {
      window.location.hash = 'website-builder';
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge glass-card">
            <span className="badge-sparkle">✨</span>
            <span>Next-Gen Enterprise IT Solutions</span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="text-gradient-cyan">Intelligent</span> Digital Systems
          </h1>

          <p className="hero-description">
            We craft cutting-edge custom software, high-performance web applications, and AI-driven IT strategies to scale modern enterprises into the future.
          </p>

          <div className="hero-actions">
            <button onClick={handleBuildWebsiteClick} className="btn btn-glow">
              Build Your Website <FaRocket className="btn-icon" />
            </button>
            <a href="#projects" className="btn btn-secondary">
              Explore Portfolio <FaArrowRight className="btn-icon" />
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="stat-pill glass-card">
              <FaCheckCircle className="stat-icon cyan" />
              <div>
                <strong>99.9%</strong>
                <span>System Uptime</span>
              </div>
            </div>
            <div className="stat-pill glass-card">
              <FaShieldAlt className="stat-icon indigo" />
              <div>
                <strong>150+</strong>
                <span>Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Floating Tech Cards */}
        <div className="hero-visual">
          <div className="visual-glow-background"></div>
          
          <div className="hero-floating-card card-1 glass-card">
            <div className="icon-wrapper cyan-glow">
              <FaCode />
            </div>
            <div className="card-info">
              <h3>Web & SaaS Engineering</h3>
              <p>React, Node.js & Cloud</p>
            </div>
            <span className="card-tag">High Performance</span>
          </div>

          <div className="hero-floating-card card-2 glass-card">
            <div className="icon-wrapper indigo-glow">
              <FaMobileAlt />
            </div>
            <div className="card-info">
              <h3>Mobile Development</h3>
              <p>iOS & Android Apps</p>
            </div>
            <span className="card-tag">Cross-Platform</span>
          </div>

          <div className="hero-floating-card card-3 glass-card">
            <div className="icon-wrapper pink-glow">
              <FaBrain />
            </div>
            <div className="card-info">
              <h3>AI & IT Consultancy</h3>
              <p>Smart Business Automation</p>
            </div>
            <span className="card-tag">Enterprise AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;