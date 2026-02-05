import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  // Simplified hero: removed mouse and scroll-driven animations for better performance and responsiveness

  // Simplified floating cards data (no animation delays)
  const floatingCards = [
    {
      icon: 'fas fa-code',
      title: 'Full-Stack Development',
      description: 'End-to-end solutions',
      color: 'var(--neon-blue)'
    },
    {
      icon: 'fas fa-brain',
      title: 'AI Integration',
      description: 'Smart automation',
      color: 'var(--neon-red)'
    },
    {
      icon: 'fas fa-chart-network',
      title: 'Digital Transformation',
      description: 'Future-proof strategies',
      color: '#9c27b0'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Solutions',
      description: 'Enterprise-grade security',
      color: '#00c853'
    }
  ];

  // Technology stack animation
  const techStack = [
    'React.js', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'AI/ML', 'Blockchain'
  ];

  return (
    <section className="hero" id="home">
      {/* Animated background elements */}
      <div className="hero-bg-animation">
        <div 
          className="animated-circle" 
          style={{
            left: '8%',
            top: '20%',
            background: 'radial-gradient(circle, var(--neon-blue) 0%, transparent 70%)',
            opacity: 0.08
          }}
        />
        <div 
          className="animated-circle" 
          style={{
            left: '72%',
            top: '28%',
            background: 'radial-gradient(circle, var(--neon-red) 0%, transparent 70%)',
            opacity: 0.06
          }}
        />
        
        {/* Grid pattern */}
        <div className="grid-pattern" />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Animated tagline */}
          <div className="hero-tagline glass">
            <span className="pulse-dot"></span>
            <span className="tagline-text">Pioneering Digital Excellence Since 2014</span>
          </div>

          {/* Main heading with typewriter effect */}
          <h1 className="hero-heading">
            <span className="heading-line">Transform Your</span>
            <span className="heading-gradient">Digital Vision</span>
            <span className="heading-line">Into Reality</span>
          </h1>

          {/* Subheading with animated underline */}
          <div className="hero-subheading">
            <h2>
              Next-Gen Software Solutions
              <span className="animated-underline"></span>
            </h2>
            <p className="hero-description">
              We craft cutting-edge custom software, immersive web experiences, and
              transformative IT strategies powered by <strong>AI</strong>, <strong>Cloud</strong>, 
              and <strong>Blockchain</strong> technologies to propel your business into the future.
            </p>
          </div>

          {/* CTA Buttons with hover effects */}
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary glass-hover">
              <span className="btn-text">Start Your Digital Journey</span>
              <span className="btn-icon">
                <i className="fas fa-rocket"></i>
              </span>
              <span className="btn-glow"></span>
            </a>
            <a href="#services" className="btn btn-secondary glass-hover">
              <span className="btn-text">Explore Our Innovations</span>
              <span className="btn-icon">
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </div>

          {/* Technology stack scroll */}
          <div className="tech-stack-container glass">
            <div className="tech-stack-scroll">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="tech-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating cards with parallax */}
      <div className="hero-visual">
        {floatingCards.map((card, index) => (
          <div 
            key={index}
            className="floating-card simple-card"
            style={{
              '--card-color': card.color
            }}
          >
            <div className="card-glow" style={{ background: card.color }} />
            <div className="card-icon" style={{ color: card.color }}>
              <i className={card.icon}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="card-arrow">
              <i className="fas fa-arrow-right" style={{ color: card.color }}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Stats counter */}
    

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to Explore</span>
        <i className="fas fa-chevron-down bounce"></i>
      </div>
    </section>
  );
};

export default Hero;