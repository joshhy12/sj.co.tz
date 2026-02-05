import React, { useState, useEffect } from 'react';
import '../styles/Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [visibleServices, setVisibleServices] = useState([]);

  const services = [
    {
      icon: 'fas fa-code',
      title: 'Custom Software Development',
      description: 'Tailored solutions built from scratch to address your unique business challenges and streamline operations. We create scalable, robust applications using cutting-edge technologies.',
      features: ['Enterprise Solutions', 'API Integration', 'Legacy System Modernization', 'Performance Optimization']
    },
    {
      icon: 'fas fa-globe',
      title: 'Web Development',
      description: 'High-performance websites and web applications with immersive user experiences and cutting-edge functionality. From responsive designs to complex web platforms.',
      features: ['React/Next.js', 'Progressive Web Apps', 'E-commerce Solutions', 'Real-time Applications']
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Visually stunning designs that communicate your brand identity and captivate your audience across all platforms. User-centered design approach for maximum engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: 'fas fa-headset',
      title: 'IT Consultancy',
      description: 'Strategic guidance to optimize your technology infrastructure and align IT with your business objectives. Digital transformation roadmaps and technology stack selection.',
      features: ['Tech Strategy', 'Digital Transformation', 'Cloud Migration', 'Security Audits']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets. From vulnerability assessments to complete security infrastructure implementation.',
      features: ['Penetration Testing', 'Security Monitoring', 'Compliance', 'Incident Response']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'Engaging, intuitive mobile applications that connect you with your customers wherever they are. Cross-platform and native development for iOS and Android.',
      features: ['Native iOS/Android', 'React Native', 'App Store Optimization', 'Push Notifications']
    }
  ];

  useEffect(() => {
    // Animate services in sequence
    const timer = setTimeout(() => {
      if (visibleServices.length < services.length) {
        setVisibleServices(prev => [...prev, services[prev.length]]);
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [visibleServices.length]);

  return (
    <section id="services" className="services-section">
      <div className="section-background">
        <div className="service-bg-circle"></div>
        <div className="service-bg-grid"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag glass">
            <span className="tag-dot"></span>
            Our Expertise
          </div>
          <h2 className="section-title">
            <span className="title-line">Comprehensive</span>
            <span className="title-gradient">Digital Solutions</span>
          </h2>
          <p className="section-subtitle">
            We deliver end-to-end software development services that transform ideas into powerful digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${visibleServices.includes(service) ? 'visible' : ''} ${activeService === index ? 'active' : ''}`}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="service-card-inner">
                {/* Card Front */}
                <div className="service-card-front glass">
                  <div className="service-icon-container">
                    <div className="service-icon-bg" style={{ background: `linear-gradient(135deg, ${getColor(index)}40, transparent)` }}></div>
                    <i className={`${service.icon} service-icon`} style={{ color: getColor(index) }}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-cta">
                    <span className="service-learn-more">Learn More</span>
                    <i className="fas fa-arrow-right" style={{ color: getColor(index) }}></i>
                  </div>
                </div>

                {/* Card Back (Hover/Active State) */}
                <div className="service-card-back glass">
                  <div className="service-features">
                    <h4>Key Features</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check" style={{ color: getColor(index) }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="service-action-btn" style={{ background: getColor(index) + '20', color: getColor(index) }}>
                    View Case Studies
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="service-glow" style={{ background: getColor(index) }}></div>
            </div>
          ))}
        </div>

        {/* Services Stats */}
        <div className="services-stats glass">
          <div className="stat-item">
            <div className="stat-number">99<span>%</span></div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150<span>+</span></div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50<span>+</span></div>
            <div className="stat-label">Team Experts</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24<span>/7</span></div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to assign colors
const getColor = (index) => {
  const colors = ['#00f2ff', '#9c27b0', '#00c853', '#ff9800', '#e91e63', '#2196f3'];
  return colors[index % colors.length];
};

export default Services;