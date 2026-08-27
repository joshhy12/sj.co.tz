import React, { useState } from 'react';
import { 
  FaGlobe, 
  FaUpload, 
  FaCheckCircle, 
  FaArrowRight, 
  FaArrowLeft, 
  FaRobot, 
  FaCreditCard, 
  FaFileCode, 
  FaServer, 
  FaComments, 
  FaLayerGroup, 
  FaPaperPlane, 
  FaCheck, 
  FaCopy, 
  FaTrashAlt, 
  FaMagic, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaBriefcase,
  FaBullseye,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaTasks
} from 'react-icons/fa';
import '../styles/WebsiteBuilderForm.css';

const WebsiteBuilderForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Website Profile
    websiteName: '',
    websiteDescription: '',
    location: '',
    logoFile: null,
    logoPreview: null,
    needLogoDesign: false,

    // Step 2: Outcomes & Business Goals
    outcomes: [],
    customOutcome: '',

    // Step 3: Architecture & Tech Integrations
    siteType: 'static', // 'static' | 'webapp'
    paymentIntegrations: [],
    aiIntegrations: [],
    contactFeatures: ['contact_form'],

    // Step 4: Pages & Sections
    selectedPages: ['projects', 'services', 'about', 'contact'],
    customPages: '',

    // Step 5: Contact Info & Custom Wishes
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    budgetRange: 'Medium ($500 - $1500)',
    timeline: '2-4 Weeks',
    customNotes: ''
  });

  // Goal options
  const outcomeOptions = [
    { id: 'leads', label: 'Generate Sales & Leads', icon: <FaBullseye />, desc: 'Convert visitors into paying clients' },
    { id: 'branding', label: 'Brand Awareness & Trust', icon: <FaGlobe />, desc: 'Establish professional corporate identity' },
    { id: 'booking', label: 'Online Booking / Appointments', icon: <FaBriefcase />, desc: 'Allow clients to schedule services' },
    { id: 'ecommerce', label: 'Sell Products Online', icon: <FaCreditCard />, desc: 'Accept payments and handle store orders' },
    { id: 'support', label: 'Customer Portal / Support', icon: <FaComments />, desc: 'Serve existing clients with automated tools' },
    { id: 'portfolio', label: 'Showcase Past Projects', icon: <FaBuilding />, desc: 'Display case studies, images & work history' }
  ];

  // Payment Options
  const paymentOptions = [
    { id: 'mpesa', label: 'M-Pesa Mobile Money' },
    { id: 'stripe', label: 'Stripe International' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'cards', label: 'Credit / Debit Cards' },
    { id: 'subscriptions', label: 'Recurring Subscriptions' }
  ];

  // AI Integration Options
  const aiOptions = [
    { id: 'chatbot', label: 'AI Smart Assistant / Chatbot', desc: 'Answers visitor queries 24/7' },
    { id: 'content_ai', label: 'AI Content & Copywriting Tool', desc: 'Auto-generate blog posts or descriptions' },
    { id: 'recommendations', label: 'Personalized AI Recommendations', desc: 'Suggest relevant products/services' },
    { id: 'voice_ai', label: 'Voice AI Search / Commands', desc: 'Hands-free voice interactivity' }
  ];

  // Page Options
  const pageOptions = [
    { id: 'projects', label: 'Projects / Portfolio', defaultChecked: true },
    { id: 'services', label: 'Services Offered', defaultChecked: true },
    { id: 'about', label: 'About Us / Story', defaultChecked: true },
    { id: 'contact', label: 'Contact Us & Map', defaultChecked: true },
    { id: 'blog', label: 'Blog / Articles Section', defaultChecked: false },
    { id: 'faq', label: 'FAQ Section', defaultChecked: false }
  ];

  // Handlers
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        logoFile: file,
        logoPreview: previewUrl,
        needLogoDesign: false
      }));
    }
  };

  const removeLogo = () => {
    setFormData(prev => ({
      ...prev,
      logoFile: null,
      logoPreview: null
    }));
  };

  const toggleMultiSelect = (field, itemId) => {
    setFormData(prev => {
      const currentList = prev[field] || [];
      if (currentList.includes(itemId)) {
        return { ...prev, [field]: currentList.filter(id => id !== itemId) };
      } else {
        return { ...prev, [field]: [...currentList, itemId] };
      }
    });
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate clean specification summary text for copying or emailing
  const generateSpecSummary = () => {
    const pages = formData.selectedPages.join(', ');
    const outcomes = formData.outcomes.join(', ');
    const payments = formData.paymentIntegrations.length ? formData.paymentIntegrations.join(', ') : 'None';
    const ai = formData.aiIntegrations.length ? formData.aiIntegrations.join(', ') : 'None';
    
    return `=== WEBSITE REQUIREMENT SPECIFICATION ===
Website Name: ${formData.websiteName || 'Not specified'}
Location: ${formData.location || 'Not specified'}
Site Type: ${formData.siteType === 'static' ? 'Static Site (Fast, SEO & Content)' : 'Web Application (Dynamic, Auth, DB & App Logic)'}
Description: ${formData.websiteDescription || 'N/A'}
Logo Status: ${formData.needLogoDesign ? 'Need SJ Softwares to Design Logo' : formData.logoFile ? 'Logo Attached / Uploaded' : 'Will Provide Later'}

Outcomes / Goals: ${outcomes || 'Custom: ' + formData.customOutcome}
Payment Integrations: ${payments}
AI Integrations: ${ai}
Selected Pages: ${pages} ${formData.customPages ? '(Extra: ' + formData.customPages + ')' : ''}

Contact Name: ${formData.clientName}
Email: ${formData.clientEmail}
Phone: ${formData.clientPhone}
Budget & Timeline: ${formData.budgetRange} | ${formData.timeline}

Special Custom Desires:
${formData.customNotes || 'None specified'}
==========================================`;
  };

  const handleCopySummary = async () => {
    const summaryText = generateSpecSummary();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(summaryText);
      } else {
        // Fallback for HTTP / non-secure contexts (e.g. local IP network access)
        const textArea = document.createElement('textarea');
        textArea.value = summaryText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy specification text: ', err);
    }
  };

  return (
    <section className="website-builder-section" id="website-builder">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Custom Website Planner</span>
          </div>
          <h2 className="section-title">
            Build Your <span className="title-gradient">Website Specification</span>
          </h2>
          <p className="section-subtitle">
            Tell us exactly what you need in your website—from AI integrations and payment gateways to custom pages and design preferences. We'll bring your vision to life!
          </p>
        </div>

        {/* Wizard Container */}
        <div className="builder-container glass-card">
          
          {/* Step Progress Header */}
          <div className="step-progress-bar">
            {[
              { step: 1, title: 'Profile & Logo' },
              { step: 2, title: 'Goals & Outcome' },
              { step: 3, title: 'Type & Integrations' },
              { step: 4, title: 'Pages & Sections' },
              { step: 5, title: 'Contact & Finish' }
            ].map(item => (
              <div 
                key={item.step}
                className={`step-item ${currentStep === item.step ? 'active' : ''} ${currentStep > item.step ? 'completed' : ''}`}
                onClick={() => currentStep > item.step && setCurrentStep(item.step)}
              >
                <div className="step-circle">
                  {currentStep > item.step ? <FaCheck /> : item.step}
                </div>
                <span className="step-label">{item.title}</span>
              </div>
            ))}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="builder-form-body">
              
              {/* STEP 1: WEBSITE PROFILE & LOGO */}
              {currentStep === 1 && (
                <div className="form-step-pane fade-in">
                  <div className="step-heading">
                    <h3><FaGlobe className="heading-icon" /> Step 1: Website Profile & Identity</h3>
                    <p>Enter basic information about your project or business.</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label className="form-label">
                        Website Name / Business Name <span className="required">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="e.g. Acme Tech Solutions, Serengeti Safaris" 
                        value={formData.websiteName}
                        onChange={(e) => handleInputChange('websiteName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Business Location / Target Market <span className="required">*</span>
                      </label>
                      <div className="input-with-icon">
                        <FaMapMarkerAlt className="input-icon" />
                        <input 
                          type="text" 
                          className="form-control"
                          placeholder="e.g. Dar es Salaam, Tanzania / Global" 
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label">Description of Your Website & Business</label>
                      <textarea 
                        className="form-control textarea"
                        rows="3"
                        placeholder="Briefly describe what your website does, your services, and target audience..."
                        value={formData.websiteDescription}
                        onChange={(e) => handleInputChange('websiteDescription', e.target.value)}
                      ></textarea>
                    </div>

                    {/* Logo Upload Box */}
                    <div className="form-group full-width">
                      <label className="form-label">Logo Upload</label>
                      <div className="logo-upload-container">
                        {formData.logoPreview ? (
                          <div className="logo-preview-box">
                            <img src={formData.logoPreview} alt="Uploaded logo preview" className="logo-preview-img" />
                            <div className="logo-actions">
                              <span className="logo-file-name">{formData.logoFile?.name}</span>
                              <button type="button" className="btn-remove-logo" onClick={removeLogo}>
                                <FaTrashAlt /> Remove Logo
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="dropzone-box">
                            <input 
                              type="file" 
                              id="logoUpload" 
                              accept="image/*" 
                              onChange={handleLogoUpload}
                              className="file-input-hidden"
                            />
                            <label htmlFor="logoUpload" className="dropzone-label">
                              <div className="dropzone-icon">
                                <FaUpload />
                              </div>
                              <div className="dropzone-text">
                                <strong>Click to upload your logo</strong> or drag & drop image here
                                <p className="file-hint">PNG, JPG, SVG or WEBP (Max 5MB)</p>
                              </div>
                            </label>
                          </div>
                        )}

                        <div className="checkbox-option">
                          <label className="custom-checkbox">
                            <input 
                              type="checkbox" 
                              checked={formData.needLogoDesign}
                              onChange={(e) => handleInputChange('needLogoDesign', e.target.checked)}
                            />
                            <span className="checkmark"></span>
                            <span className="checkbox-text">
                              <FaMagic className="icon-magic" /> I don't have a logo yet — I need SJ Softwares to design a custom logo for me!
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: OUTCOMES & GOALS */}
              {currentStep === 2 && (
                <div className="form-step-pane fade-in">
                  <div className="step-heading">
                    <h3><FaBullseye className="heading-icon" /> Step 2: What is the Main Outcome of Your Website?</h3>
                    <p>Select the main goals and key results you want to achieve with your website.</p>
                  </div>

                  <div className="options-grid">
                    {outcomeOptions.map(option => (
                      <div 
                        key={option.id}
                        className={`option-card ${formData.outcomes.includes(option.id) ? 'selected' : ''}`}
                        onClick={() => toggleMultiSelect('outcomes', option.id)}
                      >
                        <div className="option-icon">{option.icon}</div>
                        <div className="option-content">
                          <h4 className="option-title">{option.label}</h4>
                          <p className="option-desc">{option.desc}</p>
                        </div>
                        <div className="option-check">
                          <FaCheck />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="form-group full-width" style={{ marginTop: '24px' }}>
                    <label className="form-label">Other Custom Outcome or Specific Goal</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. We want to increase online consultation bookings by 50% within 3 months..." 
                      value={formData.customOutcome}
                      onChange={(e) => handleInputChange('customOutcome', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: SITE TYPE & INTEGRATIONS */}
              {currentStep === 3 && (
                <div className="form-step-pane fade-in">
                  <div className="step-heading">
                    <h3><FaLayerGroup className="heading-icon" /> Step 3: Website Type & Tech Integrations</h3>
                    <p>Choose the website architecture and integrations required for your platform.</p>
                  </div>

                  {/* Site Type Selector */}
                  <div className="site-type-selector">
                    <label className="form-label">Choose Website Type <span className="required">*</span></label>
                    <div className="type-cards-row">
                      <div 
                        className={`type-card ${formData.siteType === 'static' ? 'active' : ''}`}
                        onClick={() => handleInputChange('siteType', 'static')}
                      >
                        <div className="type-badge">Recommended for Speed & SEO</div>
                        <div className="type-icon"><FaFileCode /></div>
                        <h4>Static Website</h4>
                        <p>Ultra-fast loading, lightning SEO, ideal for business landing pages, company profiles, portfolios & brochures.</p>
                        <ul>
                          <li><FaCheck /> Maximum Speed & Security</li>
                          <li><FaCheck /> High Google SEO Ranking</li>
                          <li><FaCheck /> Cost-Effective Hosting</li>
                        </ul>
                      </div>

                      <div 
                        className={`type-card ${formData.siteType === 'webapp' ? 'active' : ''}`}
                        onClick={() => handleInputChange('siteType', 'webapp')}
                      >
                        <div className="type-badge app-badge">Dynamic & Interactive</div>
                        <div className="type-icon"><FaServer /></div>
                        <h4>Web Application</h4>
                        <p>Interactive web application with databases, user logins, dashboards, custom API workflows & dynamic content.</p>
                        <ul>
                          <li><FaCheck /> User Accounts & Dashboards</li>
                          <li><FaCheck /> Database Storage & APIs</li>
                          <li><FaCheck /> Custom Workflow Logic</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Payment Integrations */}
                  <div className="integration-section">
                    <label className="form-label"><FaCreditCard /> Need Payment Gateway Integration?</label>
                    <p className="sublabel">Select all payment methods you wish to accept on your website:</p>
                    <div className="pills-flex">
                      {paymentOptions.map(payment => (
                        <button
                          key={payment.id}
                          type="button"
                          className={`pill-btn ${formData.paymentIntegrations.includes(payment.id) ? 'active' : ''}`}
                          onClick={() => toggleMultiSelect('paymentIntegrations', payment.id)}
                        >
                          <FaCheckCircle className="pill-icon" />
                          {payment.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* AI Integration */}
                  <div className="integration-section">
                    <label className="form-label"><FaRobot /> Need AI Features Integration?</label>
                    <p className="sublabel">Supercharge your website with cutting-edge AI capabilities:</p>
                    <div className="options-grid compact">
                      {aiOptions.map(ai => (
                        <div 
                          key={ai.id}
                          className={`option-card ${formData.aiIntegrations.includes(ai.id) ? 'selected' : ''}`}
                          onClick={() => toggleMultiSelect('aiIntegrations', ai.id)}
                        >
                          <div className="option-icon"><FaRobot /></div>
                          <div className="option-content">
                            <h4 className="option-title">{ai.label}</h4>
                            <p className="option-desc">{ai.desc}</p>
                          </div>
                          <div className="option-check"><FaCheck /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: PAGES & CONTENT SECTIONS */}
              {currentStep === 4 && (
                <div className="form-step-pane fade-in">
                  <div className="step-heading">
                    <h3><FaTasks className="heading-icon" /> Step 4: Pages & Website Sections</h3>
                    <p>Select which pages and sections you want included in your website structure.</p>
                  </div>

                  <div className="pages-selection-grid">
                    {pageOptions.map(page => (
                      <div 
                        key={page.id}
                        className={`page-card ${formData.selectedPages.includes(page.id) ? 'active' : ''}`}
                        onClick={() => toggleMultiSelect('selectedPages', page.id)}
                      >
                        <div className="page-check-box">
                          {formData.selectedPages.includes(page.id) && <FaCheck />}
                        </div>
                        <span className="page-name">{page.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="form-group full-width" style={{ marginTop: '24px' }}>
                    <label className="form-label">Any Additional Custom Pages or Specific Content?</label>
                    <textarea
                      className="form-control textarea"
                      rows="2"
                      placeholder="e.g. Careers page, Pricing table, Gallery, Case studies..."
                      value={formData.customPages}
                      onChange={(e) => handleInputChange('customPages', e.target.value)}
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 5: CLIENT CONTACT DETAILS & CUSTOM NOTES */}
              {currentStep === 5 && (
                <div className="form-step-pane fade-in">
                  <div className="step-heading">
                    <h3><FaPaperPlane className="heading-icon" /> Step 5: Contact Information & Extra Desires</h3>
                    <p>Finalize your submission so our technical team can review your exact website requirements.</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Your Full Name <span className="required">*</span></label>
                      <div className="input-with-icon">
                        <FaUser className="input-icon" />
                        <input 
                          type="text" 
                          className="form-control"
                          placeholder="John Doe" 
                          value={formData.clientName}
                          onChange={(e) => handleInputChange('clientName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address <span className="required">*</span></label>
                      <div className="input-with-icon">
                        <FaEnvelope className="input-icon" />
                        <input 
                          type="email" 
                          className="form-control"
                          placeholder="john@example.com" 
                          value={formData.clientEmail}
                          onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number / WhatsApp <span className="required">*</span></label>
                      <div className="input-with-icon">
                        <FaPhoneAlt className="input-icon" />
                        <input 
                          type="tel" 
                          className="form-control"
                          placeholder="+255 7XX XXX XXX" 
                          value={formData.clientPhone}
                          onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Expected Timeline</label>
                      <select 
                        className="form-control select"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                      >
                        <option value="Urgent (1-2 Weeks)">Urgent (1-2 Weeks)</option>
                        <option value="Standard (2-4 Weeks)">Standard (2-4 Weeks)</option>
                        <option value="Flexible (1-2 Months)">Flexible (1-2 Months)</option>
                      </select>
                    </div>

                    {/* What else do you want in your website? */}
                    <div className="form-group full-width">
                      <label className="form-label highlight-label">
                        <FaMagic /> What else do you want in creating your website? (Custom Requests & Preferences)
                      </label>
                      <textarea 
                        className="form-control textarea"
                        rows="4"
                        placeholder="Tell us any specific animations, design inspiration links, color themes, third-party integrations, or special features you envision..."
                        value={formData.customNotes}
                        onChange={(e) => handleInputChange('customNotes', e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  {/* Summary Box Before Submitting */}
                  <div className="summary-preview-box">
                    <div className="summary-header">
                      <h4><FaCheckCircle className="icon-success" /> Specification Snapshot</h4>
                      <button type="button" className="btn-copy-sm" onClick={handleCopySummary}>
                        <FaCopy /> {copied ? 'Copied!' : 'Copy Summary'}
                      </button>
                    </div>
                    <div className="summary-body-pills">
                      <span className="sum-pill"><strong>Site:</strong> {formData.websiteName || 'Custom Website'}</span>
                      <span className="sum-pill"><strong>Type:</strong> {formData.siteType === 'static' ? 'Static Site' : 'Web Application'}</span>
                      <span className="sum-pill"><strong>Location:</strong> {formData.location || 'Not set'}</span>
                      <span className="sum-pill"><strong>Pages:</strong> {formData.selectedPages.length} selected</span>
                      <span className="sum-pill"><strong>Payments:</strong> {formData.paymentIntegrations.length ? formData.paymentIntegrations.join(', ') : 'None'}</span>
                      <span className="sum-pill"><strong>AI Features:</strong> {formData.aiIntegrations.length ? formData.aiIntegrations.join(', ') : 'None'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Wizard Navigation Buttons */}
              <div className="builder-nav-footer">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handlePrevStep}
                  >
                    <FaArrowLeft /> Back
                  </button>
                )}

                {currentStep < 5 ? (
                  <button 
                    type="button" 
                    className="btn btn-glow btn-next-step"
                    onClick={handleNextStep}
                    disabled={
                      (currentStep === 1 && (!formData.websiteName || !formData.location))
                    }
                  >
                    Next Step <FaArrowRight />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-glow btn-submit-spec"
                  >
                    Submit Requirement Specification <FaPaperPlane />
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* SUBMISSION SUCCESS STATE */
            <div className="submission-success-pane fade-in">
              <div className="success-icon-badge">
                <FaCheckCircle />
              </div>
              <h3>Website Specification Created Successfully!</h3>
              <p>
                Thank you, <strong>{formData.clientName}</strong>. We have received your detailed requirements for <strong>{formData.websiteName}</strong>. Our engineering team at SJ Softwares will review your specifications and contact you shortly.
              </p>

              <div className="spec-copy-area">
                <div className="spec-copy-header">
                  <span>Your Generated Website Specification:</span>
                  <button className="btn btn-secondary btn-sm" onClick={handleCopySummary}>
                    <FaCopy /> {copied ? 'Copied to Clipboard!' : 'Copy Specification'}
                  </button>
                </div>
                <pre className="spec-code-block">{generateSpecSummary()}</pre>
              </div>

              <div className="success-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                >
                  Create Another Specification
                </button>
                <a href="#contact" className="btn btn-secondary">
                  Contact Support Directly
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default WebsiteBuilderForm;
