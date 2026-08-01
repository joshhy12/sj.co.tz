import React, { useState, useEffect } from 'react';
import { FaBullseye, FaHandshake, FaShieldAlt, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [counterValues, setCounterValues] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    team: 0
  });

  const milestones = [
    {
      year: '2016',
      title: 'Company Inception',
      description: 'SJ Softwares founded with a mandate to deliver modern enterprise web applications and custom software.'
    },
    {
      year: '2018',
      title: 'FinTech & Cloud Expansion',
      description: 'Expanded core engineering capabilities into high-throughput cloud infrastructure and banking portals.'
    },
    {
      year: '2020',
      title: 'AI & Automation Labs',
      description: 'Integrated machine learning models, predictive telemetry, and smart workflow automation engines.'
    },
    {
      year: '2023',
      title: 'Global Delivery & Enterprise Partnerships',
      description: 'Scaled international operations serving Fortune 500 enterprises and hyper-growth tech startups.'
    },
    {
      year: '2026',
      title: 'Next-Gen IT Ecosystem',
      description: 'Pioneering edge computing, WebGL 3D visualizations, and zero-trust cybersecurity architectures.'
    }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Continuous Innovation',
      description: 'Relentlessly researching and integrating cutting-edge tech stacks to give clients competitive advantages.',
      color: '#00f2ff'
    },
    {
      icon: <FaHandshake />,
      title: 'Client Partnership',
      description: 'Collaborating as embedded technical co-founders dedicated to long-term measurable outcomes.',
      color: '#6366f1'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Zero-Compromise Security',
      description: 'Architecting robust security layers, encrypted data pipelines, and strict compliance standards.',
      color: '#ec4899'
    },
    {
      icon: <FaUsers />,
      title: 'World-Class Engineering',
      description: 'Fostering a team culture driven by clean code, automated testing, and software design patterns.',
      color: '#10b981'
    }
  ];

  useEffect(() => {
    const targets = { years: 10, projects: 180, clients: 95, team: 45 };
    const duration = 1500;
    const steps = 30;

    const interval = setInterval(() => {
      setCounterValues(prev => ({
        years: Math.min(targets.years, prev.years + Math.ceil(targets.years / steps)),
        projects: Math.min(targets.projects, prev.projects + Math.ceil(targets.projects / steps)),
        clients: Math.min(targets.clients, prev.clients + Math.ceil(targets.clients / steps)),
        team: Math.min(targets.team, prev.team + Math.ceil(targets.team / steps))
      }));
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Who We Are & What Drives Us
          </div>
          <h2 className="section-title">
            <span className="title-line">Engineers & Visionaries</span>{' '}
            <span className="title-gradient">Building Tomorrow</span>
          </h2>
          <p className="section-subtitle">
            SJ Softwares combines deep domain expertise, modern cloud technology, and human-centric design to create game-changing software.
          </p>
        </div>

        {/* About Main Grid */}
        <div className="about-main-grid">
          {/* Left Column: Story & Counter Metrics */}
          <div className="about-story-card glass-card">
            <h3 className="story-title">Pioneering High-Performance Digital Transformation</h3>
            <p className="story-text">
              Founded with the vision to bridge technical complexity and business goals, SJ Softwares has evolved into a premier full-service technology agency.
            </p>
            <p className="story-text">
              We specialize in custom enterprise software, scalable web platforms, high-conversion mobile applications, and strategic IT advisory. Our multidisciplinary engineering teams take pride in shipping resilient, clean, and beautifully crafted code.
            </p>

            {/* Metrics Counter Grid */}
            <div className="about-metrics-grid">
              <div className="metric-box">
                <span className="metric-number">{counterValues.years}+</span>
                <span className="metric-label">Years Experience</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{counterValues.projects}+</span>
                <span className="metric-label">Projects Shipped</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{counterValues.clients}+</span>
                <span className="metric-label">Global Clients</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{counterValues.team}+</span>
                <span className="metric-label">Tech Specialists</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="about-timeline-card glass-card">
            <h3 className="timeline-heading">Milestones & Growth</h3>
            <div className="timeline-list">
              {milestones.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`timeline-item ${activeTimeline === idx ? 'active' : ''}`}
                  onClick={() => setActiveTimeline(idx)}
                >
                  <div className="timeline-node">
                    <div className="node-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="values-wrapper">
          <h3 className="values-header-title">Our Guiding Values</h3>
          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card glass-card">
                <div className="value-icon-box" style={{ background: `${val.color}15`, color: val.color }}>
                  {val.icon}
                </div>
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;