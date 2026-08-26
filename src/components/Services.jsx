import React, { useState } from 'react';
import { FaCode, FaGlobe, FaPalette, FaHeadset, FaShieldAlt, FaMobileAlt, FaCheckCircle, FaArrowRight, FaRocket } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FaCode />,
      title: 'Custom Software Engineering',
      tagline: 'Tailored Enterprise Systems',
      description: 'Scalable, high-performance architecture built to solve complex business challenges, streamline operations, and automate enterprise workflows.',
      features: ['Microservices & API Integration', 'Cloud Native Architecture', 'Legacy Modernization', 'Real-time Analytics Engines'],
      color: '#00f2ff'
    },
    {
      icon: <FaGlobe />,
      title: 'Web & SaaS Solutions',
      tagline: 'Immersive Web Applications',
      description: 'High-speed React and Next.js applications engineered for maximum performance, SEO dominance, conversion optimization, and user retention.',
      features: ['React & Next.js Ecosystem', 'Progressive Web Apps (PWA)', 'Headless E-commerce Platforms', 'Real-time WebSockets Integration'],
      color: '#6366f1'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      tagline: 'iOS & Android Native Apps',
      description: 'Feature-rich, intuitive mobile applications delivering seamless user experiences, push notification engines, and offline-first capabilities.',
      features: ['Cross-Platform React Native', 'Native iOS (Swift) & Android (Kotlin)', 'Biometric Auth & Security', 'In-App Payment Gateways'],
      color: '#ec4899'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design Systems',
      tagline: 'Human-Centered Design',
      description: 'Stunning visual interfaces, interactive wireframes, and standardized design tokens crafted to captivate audiences and boost engagement rates.',
      features: ['User Experience Research', 'Interactive Figma Prototypes', 'Design System Architecture', 'Accessibility Compliance (WCAG)'],
      color: '#3b82f6'
    },
    {
      icon: <FaHeadset />,
      title: 'IT & Cloud Consultancy',
      tagline: 'Strategic Tech Leadership',
      description: 'Expert technology guidance, DevOps pipeline automation, infrastructure auditing, and digital transformation roadmaps for growing companies.',
      features: ['Cloud Migration (AWS / GCP / Azure)', 'DevOps & CI/CD Automation', 'System Performance Audits', 'CTO Advisory Services'],
      color: '#10b981'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity & Compliance',
      tagline: 'Enterprise Security Defense',
      description: 'End-to-end security audits, threat monitoring, penetration testing, and data compliance protocols to safeguard your business assets.',
      features: ['Penetration Testing & Audits', 'Data Encryption & Zero Trust', 'GDPR & ISO Compliance', '24/7 Security Monitoring'],
      color: '#f59e0b'
    }
  ];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Our Specialized Expertise
          </div>
          <h2 className="section-title">
            <span className="title-line">Cutting-Edge</span>{' '}
            <span className="title-gradient">Digital Services</span>
          </h2>
          <p className="section-subtitle">
            Empowering organizations with world-class engineering, elegant design, and transformative technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card glass-card ${activeService === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="service-card-header">
                <div
                  className="service-icon-box"
                  style={{
                    background: `${service.color}15`,
                    color: service.color,
                    borderColor: `${service.color}30`
                  }}
                >
                  {service.icon}
                </div>
                <span className="service-tagline" style={{ color: service.color }}>
                  {service.tagline}
                </span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features-list">
                <h4>Core Capabilities</h4>
                <ul>
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <FaCheckCircle className="check-icon" style={{ color: service.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-footer">
                <a href="#contact" className="service-action-link" style={{ color: service.color }}>
                  <span>Discuss Project</span>
                  <FaArrowRight className="arrow-icon" />
                </a>
              </div>

              {/* Glowing Accent Line */}
              <div
                className="service-glow-line"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

      </div>
    </section>
  );
};

export default Services;