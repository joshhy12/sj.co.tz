import React, { useState } from 'react';
import '../styles/App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Headquarters',
      content: 'Arusha, Tanzania Boma Road Street<br />At New Safari Hotel Business Center, Office No 417 Arusha'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Contact Number',
      content: '<a href="tel:+255717392442">+255 717 392 442</a>'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Address',
      content: '<a href="mailto:info@sjsoftwares.com">info@sjsoftwares.com</a>'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 3:00 PM'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Connect With Us</h2>
          <p>
            Ready to transform your business? Reach out to discuss your project or
            learn more about our services.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div className="contact-card glass" key={index}>
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-text">
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form glass">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <i className="fas fa-check"></i> Sent!
                  </>
                ) : (
                  <>
                    Send Message <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;