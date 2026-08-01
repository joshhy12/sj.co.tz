import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      position: 'CTO',
      company: 'TechCorp Enterprise',
      content: 'SJ Softwares transformed our legacy digital infrastructure. Their engineering precision, microservice design, and cloud optimization increased our system throughput by 45%. Exceeded every expectation.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Director',
      company: 'Global Finance Group',
      content: 'Working with SJ Softwares was a game-changer for our FinTech mobile platform. Their focus on zero-trust security and sub-second transaction speed drove a 300% surge in active user engagement.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      name: 'David Chen',
      position: 'CEO & Founder',
      company: 'HealthTech Innovations',
      content: 'The HIPAA-compliant telemedicine platform they engineered revolutionized patient access across our partner clinics. Intuitive design paired with flawless WebRTC integration.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800'
    },
    {
      id: 4,
      name: 'Emma Williams',
      position: 'VP of Digital Commerce',
      company: 'OmniRetail Global',
      content: 'Our e-commerce store overhaul delivered a 250% online revenue bump in Q3. The customized AI recommendation engine boosted checkout conversions dramatically.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c1?auto=format&fit=crop&w=800'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => setActiveSlide((activeSlide + 1) % testimonials.length);
  const prevSlide = () => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Verified Client Endorsements
          </div>
          <h2 className="section-title">
            <span className="title-line">Trusted by Leaders</span>{' '}
            <span className="title-gradient">Across Industries</span>
          </h2>
          <p className="section-subtitle">
            Discover how our custom software solutions drive measurable impact for pioneering brands.
          </p>
        </div>

        {/* Testimonials Carousel Slider */}
        <div className="testimonials-carousel-wrapper">
          <div className="testimonial-active-card glass-card">
            <div className="quote-watermark">
              <FaQuoteLeft />
            </div>

            <div className="card-top-row">
              <div className="rating-stars">
                {[...Array(testimonials[activeSlide].rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <span className="verified-badge">
                <FaCheckCircle /> Verified Client
              </span>
            </div>

            <p className="testimonial-text">
              "{testimonials[activeSlide].content}"
            </p>

            <div className="client-info-row">
              <div className="client-avatar-glow">
                <img src={testimonials[activeSlide].image} alt={testimonials[activeSlide].name} />
              </div>
              <div className="client-details">
                <h4 className="client-name">{testimonials[activeSlide].name}</h4>
                <p className="client-role">{testimonials[activeSlide].position} — <span className="company-name">{testimonials[activeSlide].company}</span></p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button className="control-btn" onClick={prevSlide} aria-label="Previous Testimonial">
              <FaChevronLeft />
            </button>
            <div className="carousel-indicators">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator-dot ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
            <button className="control-btn" onClick={nextSlide} aria-label="Next Testimonial">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Company Logos Row */}
        <div className="client-logos-row glass-card">
          <span className="logos-label">POWERING INNOVATION FOR INDUSTRY LEADERS:</span>
          <div className="logos-chips">
            <span>TechCorp</span>
            <span>Global Finance</span>
            <span>HealthTech</span>
            <span>OmniRetail</span>
            <span>Manufacture Corp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;