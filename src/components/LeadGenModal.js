// src/components/LeadGenModal.js
import React, { useEffect, useState } from 'react';
import './LeadGenModal.css';

function LeadGenModal() {
  const [showModal, setShowModal] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    budget: '',
    location: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-open modal after 8 seconds
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('leadGenPopupShown');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('leadGenPopupShown', 'true');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll trigger for modal
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTriggered || sessionStorage.getItem('leadGenPopupShown')) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

      if (scrollPercentage >= 0.5) {
        setShowModal(true);
        setScrollTriggered(true);
        sessionStorage.setItem('leadGenPopupShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTriggered]);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile Number is required';
    if (formData.mobileNumber.trim() && !/^[0-9]{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Mobile Number must be 10 digits';
    }
    if (!formData.budget) newErrors.budget = 'Budget Range is required';
    if (!formData.location) newErrors.location = 'Preferred Location is required';
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    // Prepare WhatsApp message
    const message = `Hello MG Realtys,

I am interested in property consultation.

Name: ${formData.fullName}
Mobile: ${formData.mobileNumber}
Email: ${formData.email || 'Not provided'}
Budget: ${formData.budget}
Preferred Location: ${formData.location}
Requirement: ${formData.message || 'Not specified'}

Please contact me regarding suitable property options.`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918698315802?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setSubmitted(true);
      setLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          mobileNumber: '',
          email: '',
          budget: '',
          location: '',
          message: ''
        });
        setSubmitted(false);
        setShowModal(false);
      }, 2000);
    }, 500);
  };

  // Handle WhatsApp Now button
  const handleWhatsAppNow = () => {
    const message = `Hello MG Realtys, I am interested in property consultation. Please send me information about available properties.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918698315802?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  // Handle Call Now button
  const handleCallNow = () => {
    window.location.href = 'tel:+918698315802';
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="lead-gen-overlay" onClick={handleCloseModal}>
      <div className="lead-gen-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="lead-gen-close" onClick={handleCloseModal}>✕</button>

        <div className="lead-gen-container">
          {/* Left Side - Property Image & Trust Section */}
          <div className="lead-gen-left">
            <div className="lead-gen-image">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Premium Property"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Trust Section */}
            <div className="trust-section">
              <h3>Why Choose MG Realtys?</h3>
              <div className="trust-items">
                <div className="trust-item">
                  <span className="trust-icon">⭐</span>
                  <p>Trusted Property Consultants</p>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">⭐</span>
                  <p>Expert Market Knowledge</p>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">⭐</span>
                  <p>End-to-End Property Assistance</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="quick-actions">
                <button className="quick-btn whatsapp-btn" onClick={handleWhatsAppNow}>
                  💬 WhatsApp Now
                </button>
                <button className="quick-btn call-btn" onClick={handleCallNow}>
                  📞 Call Now
                </button>
              </div>

              <p className="cta-text">
                Let MG Realtys help you find the perfect property that matches your budget and lifestyle.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lead-gen-right">
            {!submitted ? (
              <>
                <div className="form-header">
                  <h2 className="form-title">🏡 Find Your Dream Property in Pune</h2>
                  <p className="form-subtitle">
                    Get expert property consultation, project recommendations, site visit assistance, and exclusive investment opportunities.
                  </p>

                  {/* Benefits */}
                  <div className="benefits">
                    <div className="benefit-item">✔ Free Property Consultation</div>
                    <div className="benefit-item">✔ Personalized Recommendations</div>
                    <div className="benefit-item">✔ Home Loan Assistance</div>
                    <div className="benefit-item">✔ Site Visit Support</div>
                    <div className="benefit-item">✔ Best Deals from Top Developers</div>
                  </div>
                </div>

                {/* Form */}
                <form className="lead-gen-form" onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={errors.fullName ? 'error' : ''}
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  {/* Mobile Number */}
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      maxLength="10"
                      className={errors.mobileNumber ? 'error' : ''}
                    />
                    {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
                  </div>

                  {/* Email Address */}
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Budget Range */}
                  <div className="form-group">
                    <label>Budget Range *</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={errors.budget ? 'error' : ''}
                    >
                      <option value="">Select your budget</option>
                      <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹75 Lakhs">₹50 Lakhs – ₹75 Lakhs</option>
                      <option value="₹75 Lakhs - ₹1 Crore">₹75 Lakhs – ₹1 Crore</option>
                      <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                    </select>
                    {errors.budget && <span className="error-message">{errors.budget}</span>}
                  </div>

                  {/* Preferred Location */}
                  <div className="form-group">
                    <label>Preferred Location *</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={errors.location ? 'error' : ''}
                    >
                      <option value="">Select preferred location</option>
                      <option value="Hinjewadi">Hinjewadi</option>
                      <option value="Wakad">Wakad</option>
                      <option value="Baner">Baner</option>
                      <option value="Kharadi">Kharadi</option>
                      <option value="Bavdhan">Bavdhan</option>
                      <option value="Wagholi">Wagholi</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.location && <span className="error-message">{errors.location}</span>}
                  </div>

                  {/* Message / Requirements */}
                  <div className="form-group">
                    <label>Message / Requirements</label>
                    <textarea
                      placeholder="Tell us your specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="3"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Processing...' : '🎯 Get Free Consultation'}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your inquiry has been sent to WhatsApp. Our team will contact you shortly with personalized property recommendations.</p>
                <p className="success-subtext">Redirecting to WhatsApp...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadGenModal;
