import React, { useState } from 'react';
import { FaExternalLinkAlt, FaTimes, FaLayerGroup, FaMobileAlt, FaGlobe, FaBolt, FaArrowRight, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Nexus E-Commerce Platform',
      description: 'A high-concurrency online marketplace featuring AI-driven personalized product recommendations, real-time order tracking, and multi-currency payment integration.',
      fullSpecs: 'Architected with React, Node.js microservices, MongoDB, and Redis cache layer. Handled 50k+ daily transactions with 99.98% service reliability.',
      category: 'web',
      tech: ['React 19', 'Node.js', 'MongoDB', 'Redis', 'Stripe API'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      title: 'MediTrack Pro Mobile App',
      description: 'Comprehensive healthcare portal enabling remote patient telemetry, encrypted video consultations, and IoT health sensor integration.',
      fullSpecs: 'Built with React Native and Python FastAPI on AWS. HIPAA compliant data vault with WebRTC streaming and push alerts.',
      category: 'mobile',
      tech: ['React Native', 'Python', 'AWS IoT', 'WebRTC', 'FastAPI'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      title: 'Quantum WebGL Corporate Portal',
      description: 'Interactive enterprise web platform showcasing 3D product visualizations, real-time analytics dashboards, and multi-lingual content delivery.',
      fullSpecs: 'Leveraged Next.js 14, Three.js WebGL shaders, GraphQL, and edge caching for sub-500ms load times worldwide.',
      category: 'web',
      tech: ['Next.js', 'Three.js', 'GraphQL', 'Tailwind', 'Vercel Edge'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800'
    },
    {
      id: 4,
      title: 'NeoBank Digital FinTech Suite',
      description: 'Next-generation mobile banking experience with biometric hardware security, instant peer-to-peer payments, and AI budget forecasting.',
      fullSpecs: 'Developed with Flutter & Firebase backend. Integrated biometrics, bank grade 256-bit AES encryption, and automated fraud prevention models.',
      category: 'mobile',
      tech: ['Flutter', 'Firebase', 'Machine Learning', 'FinTech API'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800'
    },
    {
      id: 5,
      title: 'Smart Factory Industrial IoT Hub',
      description: 'Industrial automation telemetry suite providing predictive machine failure alerts, sensor metric processing, and plant line control.',
      fullSpecs: 'Processed over 1M telemetry data points per minute via MQTT protocol, Docker containers, Kubernetes orchestration, and TensorFlow anomaly detectors.',
      category: 'iot',
      tech: ['Python', 'Kubernetes', 'TensorFlow', 'MQTT', 'Docker'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800'
    },
    {
      id: 6,
      title: 'EdTech Virtual Campus Suite',
      description: 'Adaptive learning classroom system with live interactive whiteboards, automatic attendance monitoring, and automated assignment grading.',
      fullSpecs: 'Built using Vue 3, Laravel REST API, PostgreSQL, and WebRTC video mesh architecture for up to 10,000 simultaneous virtual classroom attendees.',
      category: 'web',
      tech: ['Vue.js', 'Laravel', 'WebRTC', 'PostgreSQL', 'Docker'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work', icon: <FaLayerGroup /> },
    { id: 'web', label: 'Web Systems', icon: <FaGlobe /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <FaMobileAlt /> },
    { id: 'iot', label: 'IoT & AI', icon: <FaBolt /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Featured Engineering Showcase
          </div>
          <h2 className="section-title">
            <span className="title-line">Proven Track Record of</span>{' '}
            <span className="title-gradient">Digital Excellence</span>
          </h2>
          <p className="section-subtitle">
            Explore selected case studies demonstrating our engineering depth, technical innovation, and business impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-pills">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-box">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-image-overlay">
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
                <span className={`project-badge ${project.category}`}>
                  {project.category.toUpperCase()}
                </span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <button 
                    className="project-spec-link"
                    onClick={() => setSelectedProject(project)}
                  >
                    <FaCode /> Architecture & Details
                  </button>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-live-link"
                    title="Live Preview"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>

              <div className="modal-header-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-title-overlay">
                  <span className="project-badge">{selectedProject.category.toUpperCase()}</span>
                  <h2>{selectedProject.title}</h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-section">
                  <h4>Technical Architecture & Specifications</h4>
                  <p>{selectedProject.fullSpecs}</p>
                </div>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="project-tech-stack">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge glow">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href="#contact" 
                    className="btn btn-glow"
                    onClick={() => setSelectedProject(null)}
                  >
                    Build Similar Solution <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;