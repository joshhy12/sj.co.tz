import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      position: 'CTO, TechCorp Inc.',
      company: 'Fortune 500',
      content: 'SJ Softwares transformed our digital infrastructure. Their AI-powered solutions increased our operational efficiency by 40%. The team\'s expertise and professionalism exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Director',
      company: 'Global Finance Group',
      content: 'Working with SJ Softwares was a game-changer for our mobile banking platform. Their attention to security and user experience resulted in a 300% increase in mobile app engagement.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      name: 'David Chen',
      position: 'CEO',
      company: 'HealthTech Innovations',
      content: 'The healthcare management system they built for us revolutionized patient care. Real-time data processing and intuitive UI led to a 60% reduction in administrative workload.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800'
    },
    {
      id: 4,
      name: 'Emma Williams',
      position: 'Head of Digital',
      company: 'Retail Chain Global',
      content: 'Their e-commerce platform overhaul increased our online sales by 250%. The AR product visualization feature alone boosted conversion rates by 35%. Exceptional work!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c1?auto=format&fit=crop&w=800'
    },
    {
      id: 5,
      name: 'Robert Kim',
      position: 'Operations Director',
      company: 'Manufacturing Corp',
      content: 'The IoT solutions implemented by SJ Softwares optimized our production line, reducing downtime by 45% and increasing output by 30%. Their expertise in industrial tech is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      position: 'Marketing VP',
      company: 'Media Group',
      content: 'The custom CRM and analytics platform they developed gave us unprecedented insights into customer behavior. Marketing ROI increased by 180% within the first quarter.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Retention' },
    { value: '4.9/5', label: 'Satisfaction Score' },
    { value: '150+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support' }
  ];

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-background">
        <div className="testimonials-bg">
          <div className="bg-quote bg-quote-1">"</div>
          <div className="bg-quote bg-quote-2">"</div>
          <div className="bg-quote bg-quote-3">"</div>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag glass">
            <span className="tag-dot"></span>
            Client Success Stories
          </div>
          <h2 className="section-title">
            <span className="title-line">Trusted by</span>
            <span className="title-gradient">Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Hear from our satisfied clients about their transformative experiences with our solutions.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
      

        {/* Company Logos */}
        <div className="company-logos glass">
          <div className="logos-title">Trusted by leading companies</div>
          <div className="logos-grid">
            {['TechCorp', 'Global Finance', 'HealthTech', 'Retail Global', 'Manufacturing Inc', 'Media Group'].map((company, index) => (
              <div key={index} className="logo-item">
                <div className="logo-placeholder">
                  <span className="logo-text">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;