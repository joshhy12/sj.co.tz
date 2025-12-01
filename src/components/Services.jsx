import React from 'react';
import '../styles/App.css';

const services = [
  {
    icon: 'fas fa-code',
    title: 'Custom Software Development',
    description: 'Tailored solutions built from scratch to address your unique business challenges and streamline operations.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Web Development',
    description: 'High-performance websites and web applications with immersive user experiences and cutting-edge functionality.'
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'Graphic Design',
    description: 'Visually stunning designs that communicate your brand identity and captivate your audience across all platforms.'
  },
  {
    icon: 'fas fa-headset',
    title: 'IT Consultancy',
    description: 'Strategic guidance to optimize your technology infrastructure and align IT with your business objectives.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'IT Support',
    description: 'Reliable, proactive technical support to ensure your systems operate at peak performance around the clock.'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile App Development',
    description: 'Engaging, intuitive mobile applications that connect you with your customers wherever they are.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive suite of IT services designed to meet the
            evolving needs of modern businesses.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card glass" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="service-link">
                  Discover More <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;