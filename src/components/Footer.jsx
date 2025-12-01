import React, { useState } from 'react';
import '../styles/App.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 2000);
    }, 1000);
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const technologies = [
    { label: 'Blockchain', href: '#' },
    { label: 'AI/ML', href: '#' },
    { label: 'Web3', href: '#' },
    { label: 'Cloud Computing', href: '#' },
    { label: 'IoT', href: '#' }
  ];

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
    { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-discord', href: '#' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <div className="logo">
              <div className="logo-img">
                <img src="/images/logo.png" alt="SJ Softwares Logo" />
              </div>
              <div className="logo-text">
                <h1>SJ <span>Softwares</span></h1>
              </div>
            </div>
            <p>
              Pioneering digital transformation through innovative software
              solutions, cutting-edge web development, and strategic IT
              consultancy services.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Technologies</h3>
            <ul className="footer-links">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <a href={tech.href}>{tech.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>
              Subscribe for tech insights, industry trends, and company updates.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn" disabled={isSubscribing}>
                {isSubscribing ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : isSubscribed ? (
                  <i className="fas fa-check"></i>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} SJ Softwares and Consultancy. All Rights Reserved. |
            <a href="#"> Privacy Policy</a> | <a href="#"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;