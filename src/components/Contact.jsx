import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone, MdAccessTime } from 'react-icons/md';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const contactInfo = [
    {
      icon: <MdLocationOn />,
      title: 'Our Location',
      details: ['123 Tech Street', 'San Francisco, CA 94107', 'United States'],
      color: '#00f2ff'
    },
    {
      icon: <MdPhone />,
      title: 'Phone Number',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: '#9c27b0'
    },
    {
      icon: <MdEmail />,
      title: 'Email Address',
      details: ['info@sjsoftwares.com', 'support@sjsoftwares.com'],
      color: '#00c853'
    },
    {
      icon: <MdAccessTime />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 16:00'],
      color: '#ff9800'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-background">
        <div className="contact-bg-shapes">
          <div className="bg-shape bg-shape-1"></div>
          <div className="bg-shape bg-shape-2"></div>
          <div className="bg-shape bg-shape-3"></div>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag glass">
            <span className="tag-dot"></span>
            Get In Touch
          </div>
          <h2 className="section-title">
            <span className="title-line">Ready to Transform</span>
            <span className="title-gradient">Your Business?</span>
          </h2>
          <p className="section-subtitle">
            Let's discuss your project and explore how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="info-card glass"
                  style={{ '--card-color': info.color }}
                >
                  <div className="info-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <h3 className="info-title">{info.title}</h3>
                  <div className="info-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="info-detail">{detail}</p>
                    ))}
                  </div>
                  <div className="info-glow" style={{ background: info.color }}></div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="contact-map glass">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <h3>Visit Our Office</h3>
                  <p>San Francisco, CA</p>
                  <button className="map-direction-btn">
                    <FaMapMarkerAlt />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container glass">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>We'll get back to you within 24 hours</p>
            </div>

            {formStatus.submitted && (
              <div className="form-success">
                <div className="success-icon">
                  <FaPaperPlane />
                </div>
                <div className="success-message">
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              </div>
            )}

            {formStatus.error && (
              <div className="form-error">
                <p>{formStatus.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
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
                  <label htmlFor="email">Email Address *</label>
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on complexity, but typically range from 2-6 months for complete solutions.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we provide comprehensive support packages including maintenance, updates, and technical assistance.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We work with React, Node.js, Python, AI/ML, Blockchain, and emerging technologies.'
              },
              {
                question: 'Do you provide design services?',
                answer: 'Absolutely! Our team includes UX/UI designers who create stunning, user-friendly interfaces.'
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item glass">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;