import React, { useRef } from 'react';
import '../styles/App.css';

const projects = [
  {
    icon: 'fas fa-shopping-cart',
    title: 'Nexus E-commerce Platform',
    description: 'A revolutionary online marketplace with AI-powered recommendations, blockchain payment integration, and immersive AR product visualization.',
    link: 'https://example-ecommerce.com'
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'MediTrack Pro',
    description: 'Comprehensive healthcare solution with telemedicine capabilities, IoT device integration, and secure patient data management.',
    link: 'https://example-healthcare.com'
  },
  {
    icon: 'fas fa-building',
    title: 'Quantum Corporate Portal',
    description: 'An interactive corporate website with WebGL animations, real-time data visualization, and personalized content delivery.',
    link: 'https://example-corporate.com'
  },
  {
    icon: 'fas fa-university',
    title: 'NeoBank Mobile',
    description: 'Next-generation banking application with biometric security, cryptocurrency support, and AI-driven financial insights.',
    link: 'https://example-banking.com'
  }
];

const Projects = () => {
  const projectsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Our Projects</h2>
          <p>
            Explore our portfolio of innovative solutions that have transformed
            businesses across industries.
          </p>
        </div>
        <div className="projects-slider">
          <div className="projects-container" ref={projectsContainerRef}>
            {projects.map((project, index) => (
              <div className="project-card glass" key={index}>
                <div className="project-image">
                  <i className={project.icon}></i>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Live <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-nav">
            <button className="slider-btn prev-btn" onClick={scrollLeft}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-btn next-btn" onClick={scrollRight}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;