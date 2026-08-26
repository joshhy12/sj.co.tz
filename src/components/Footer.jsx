import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Build Site', href: '#website-builder' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Custom Software', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'IT Consultancy', href: '#services' },
    { label: 'Cybersecurity', href: '#services' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' }
  ];

  const contactInfo = [
    { label: 'Email', value: 'info@sjsoftwares.com', href: 'mailto:info@sjsoftwares.com' },
    { label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { label: 'Address', value: '123 Tech Street, San Francisco, CA 94107' }
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-background">
        <div className="footer-bg-pattern"></div>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-logo" onClick={scrollToTop}>
              <div className="logo-icon">
                <span className="logo-code">{"<>"}</span>
              </div>
              <div className="logo-text">
                <span className="logo-main">SJ</span>
                <span className="logo-sub">SOFTWARES</span>
              </div>
            </div>
            <p className="company-description">
              Pioneering digital transformation through innovative software solutions since 2014.
            </p>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section footer-services">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="footer-link">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-details">
              {contactInfo.map((contact, index) => (
                <li key={index} className="contact-item">
                  {contact.href ? (
                    <a href={contact.href} className="contact-link">
                      <span className="contact-label">{contact.label}: </span>
                      <span className="contact-value">{contact.value}</span>
                    </a>
                  ) : (
                    <>
                      <span className="contact-label">{contact.label}: </span>
                      <span className="contact-value">{contact.value}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="newsletter">
              <h4>Stay Updated</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} SJ Softwares. All rights reserved.
          </div>
          
          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top glass"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;