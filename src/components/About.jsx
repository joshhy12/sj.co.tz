import React from 'react';
import '../styles/App.css';

const stats = [
  {
    icon: 'fas fa-users',
    number: '150+',
    text: 'Certified Specialists'
  },
  {
    icon: 'fas fa-project-diagram',
    number: '500+',
    text: 'Projects Completed'
  },
  {
    icon: 'fas fa-globe',
    number: '25+',
    text: 'Countries Served'
  },
  {
    icon: 'fas fa-award',
    number: '92%',
    text: 'Client Retention'
  }
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2>About SJ Softwares</h2>
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
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="stat-item glass" key={index}>
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;