import React, { useEffect } from 'react';
import { FaArrowLeft, FaLaptopCode, FaRocket, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import WebsiteBuilderForm from '../components/WebsiteBuilderForm';
import '../styles/BuildWebsitePage.css';

const BuildWebsitePage = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="build-website-page fade-in">
      {/* Page Hero Header */}
      <div className="page-hero-banner">
        <div className="container">
          <button className="btn-back-home" onClick={onNavigateHome}>
            <FaArrowLeft /> Back to Home Page
          </button>

          <div className="page-hero-content">
            <div className="page-badge glass-card">
              <FaLaptopCode className="badge-icon" />
              <span>Interactive Website Creator</span>
            </div>

            <h1 className="page-title">
              Design & Request Your <span className="title-gradient">Custom Website</span>
            </h1>

            <p className="page-subtitle">
              Fill out this step-by-step interactive specification form. Choose your site type, select custom integrations (Payments, AI Chatbots), pick your pages, and specify your exact requirements!
            </p>

            <div className="page-highlights-row">
              <div className="highlight-pill glass-card">
                <FaCheckCircle className="pill-icon cyan" />
                <span>Instant Requirement Summary</span>
              </div>
              <div className="highlight-pill glass-card">
                <FaRocket className="pill-icon indigo" />
                <span>Tailored Tech Architecture</span>
              </div>
              <div className="highlight-pill glass-card">
                <FaShieldAlt className="pill-icon pink" />
                <span>Zero Obligation Quote</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Requirement Form Section */}
      <div className="page-form-wrapper">
        <WebsiteBuilderForm />
      </div>
    </div>
  );
};

export default BuildWebsitePage;
