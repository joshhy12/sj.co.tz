import React, { useState, useEffect } from 'react';
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
      year: '2014',
      title: 'Foundation',
      description: 'SJ Softwares was founded with a vision to revolutionize digital solutions.'
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Successfully delivered enterprise solution for Fortune 500 company.'
    },
    {
      year: '2018',
      title: 'AI Integration',
      description: 'Pioneered AI-powered solutions in our development pipeline.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Established offices in 3 continents, serving clients worldwide.'
    },
    {
      year: '2023',
      title: 'Innovation Lab',
      description: 'Launched R&D division focusing on emerging technologies.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'Tech Strategy, Leadership',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Software Architecture, AI/ML',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Lead Designer',
      expertise: 'UX/UI, Product Design',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c1?auto=format&fit=crop&w=800'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      expertise: 'Full-stack, Blockchain',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800'
    }
  ];

  const values = [
    {
      icon: 'fas fa-bullseye',
      title: 'Innovation First',
      description: 'Constantly pushing boundaries with emerging technologies.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Client Partnership',
      description: 'Building long-term relationships based on trust and results.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Quality Assurance',
      description: 'Uncompromising commitment to excellence in every project.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaborative Culture',
      description: 'Fostering teamwork and knowledge sharing.'
    }
  ];

  useEffect(() => {
    // Counter animation
    const counters = {
      years: 10,
      projects: 150,
      clients: 300,
      team: 50
    };

    const duration = 2000;
    const steps = 60;
    const increment = (target, key) => {
      const stepValue = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounterValues(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, duration / steps);
    };

    Object.entries(counters).forEach(([key, value]) => {
      increment(value, key);
    });

    // Auto-rotate timeline
    const timelineInterval = setInterval(() => {
      setActiveTimeline(prev => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(timelineInterval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="section-background">
        <div className="about-bg-pattern"></div>
        <div className="about-bg-glow"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag glass">
            <span className="tag-dot"></span>
            Our Story
          </div>
          <h2 className="section-title">
            <span className="title-line">Pioneering Digital</span>
            <span className="title-gradient">Excellence Since 2014</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Story */}
          <div className="about-story glass">
            <div className="story-text">
              <h3>Building the Future, One Line of Code at a Time</h3>
              <p>
                Since 2014, SJ Softwares and Consultancy has been pioneering digital
                transformation for businesses worldwide. Our team of visionaries,
                engineers, and designers are united by a passion for pushing
                technological boundaries.
              </p>
              <p>
                We don't just build solutions—we craft digital experiences that
                redefine industries. Our approach combines technical excellence with
                creative innovation to deliver results that drive measurable business
                impact.
              </p>
            </div>

            {/* Stats */}
            <div className="about-stats">
              {[
                { label: 'Years Experience', value: counterValues.years, suffix: '+' },
                { label: 'Projects Delivered', value: counterValues.projects, suffix: '+' },
                { label: 'Happy Clients', value: counterValues.clients, suffix: '+' },
                { label: 'Team Members', value: counterValues.team, suffix: '+' }
              ].map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">
                    {stat.value}
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="about-timeline glass">
            <h3>Our Journey</h3>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`timeline-item ${index === activeTimeline ? 'active' : ''}`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    <div className="marker-line"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{milestone.year}</div>
                    <h4 className="timeline-title">{milestone.title}</h4>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card glass">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3 className="team-title">Meet Our Leadership</h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card glass">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <div className="team-role">{member.role}</div>
                  <div className="team-expertise">{member.expertise}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;