import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Nexus E-commerce Platform',
      description: 'A revolutionary online marketplace with AI-powered recommendations, blockchain payment integration, and immersive AR product visualization.',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB', 'Blockchain'],
      link: 'https://example-ecommerce.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      title: 'MediTrack Pro',
      description: 'Comprehensive healthcare solution with telemedicine capabilities, IoT device integration, and secure patient data management.',
      category: 'mobile',
      tech: ['React Native', 'Python', 'AWS', 'IoT'],
      link: 'https://example-healthcare.com',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      title: 'Quantum Corporate Portal',
      description: 'An interactive corporate website with WebGL animations, real-time data visualization, and personalized content delivery.',
      category: 'web',
      tech: ['Next.js', 'Three.js', 'GraphQL', 'Redis'],
      link: 'https://example-corporate.com',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800'
    },
    {
      id: 4,
      title: 'NeoBank Mobile',
      description: 'Next-generation banking application with biometric security, cryptocurrency support, and AI-driven financial insights.',
      category: 'mobile',
      tech: ['Flutter', 'Firebase', 'Machine Learning', 'Blockchain'],
      link: 'https://example-banking.com',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800'
    },
    {
      id: 5,
      title: 'Smart Factory IoT Suite',
      description: 'Industrial IoT platform for real-time monitoring, predictive maintenance, and automation in manufacturing plants.',
      category: 'iot',
      tech: ['Python', 'Kubernetes', 'TensorFlow', 'MQTT'],
      link: 'https://example-iot.com',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800'
    },
    {
      id: 6,
      title: 'EdTech Learning Platform',
      description: 'Interactive educational platform with adaptive learning algorithms, virtual classrooms, and progress tracking.',
      category: 'web',
      tech: ['Vue.js', 'Laravel', 'WebRTC', 'PostgreSQL'],
      link: 'https://example-edtech.com',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'iot', label: 'IoT Solutions' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-background">
        <div className="projects-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag glass">
            <span className="tag-dot"></span>
            Our Portfolio
          </div>
          <h2 className="section-title">
            <span className="title-line">Innovative</span>
            <span className="title-gradient">Projects Delivered</span>
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of cutting-edge digital solutions that have transformed businesses across industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter glass">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              {activeFilter === filter.id && <span className="filter-indicator"></span>}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <div 
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="project-overlay">
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-category">
                  <span className={`category-badge ${project.category}`}>
                    {project.category === 'web' && '🌐 Web'}
                    {project.category === 'mobile' && '📱 Mobile'}
                    {project.category === 'iot' && '⚡ IoT'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content glass">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-actions">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>View Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <button className="project-details-btn">
                    <i className="fas fa-plus"></i>
                    Details
                  </button>
                </div>
              </div>

              {/* Project Hover Effect */}
              <div className={`project-hover-effect ${hoveredProject === project.id ? 'active' : ''}`}>
                <div className="hover-glow" style={{ background: `linear-gradient(45deg, ${getCategoryColor(project.category)}, transparent)` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="projects-cta">
          <button className="view-more-btn glass">
            <span>View Complete Portfolio</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

// Helper function for category colors
const getCategoryColor = (category) => {
  const colors = {
    web: '#00f2ff',
    mobile: '#9c27b0',
    iot: '#00c853'
  };
  return colors[category] || '#2196f3';
};

export default Projects;