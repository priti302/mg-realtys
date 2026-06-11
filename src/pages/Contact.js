// src/pages/Contact.js
import React, { useEffect, useState } from 'react';
import './Contact.css';

function Contact() {
  useEffect(() => {
    document.title = "Contact MGRealtys - Pune Real Estate Consultants";
    
    // Update meta tags for SEO
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Contact MGRealtys in Punawale, Pune for expert real estate consulting. Call 86983 15802 or visit our office for residential & commercial property guidance.');

    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Contact MGRealtys - Pune Real Estate Experts');
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const officeDetails = {
    address: "Office no:-308 ,2nd floor, 18 Lattitude Mall, Gaikwad Nagar Rd, Kate Wasti, Punawale, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    phone: "86983 15802",
    email: "mgrealtys01@gmail.com",
    timing: "Monday to Sunday: 10:00 AM - 7:00 PM",
    offDay: "Tuesday Closed"
  };

  return (
    <main className="page-container">
      <div className="contact-header">
       
        <p>We're here to help you find your perfect property</p>
      </div>

      <div className="contact-grid">
        {/* Left Side - Contact Information */}
        <div className="contact-info-card">
          <div className="info-header">
            <span className="info-icon-badge">📍</span>
            <h2>Visit Our Office</h2>
          </div>
          
          <div className="info-section">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Office Address</h4>
                <p>{officeDetails.address}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h4>Phone Number</h4>
                <p>{officeDetails.phone}</p>
                <a href={`tel:${officeDetails.phone.replace(/\s/g, '')}`} className="call-link">Call Now</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h4>Email Address</h4>
                <p>{officeDetails.email}</p>
                <a href={`mailto:${officeDetails.email}`} className="email-link">Send Email</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h4>Office Hours</h4>
                <p>{officeDetails.timing}</p>
                <p className="off-day">{officeDetails.offDay}</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="quick-contact">
            <h4>Quick Connect</h4>
            <div className="quick-buttons">
              <a href={`tel:${officeDetails.phone.replace(/\s/g, '')}`} className="quick-btn call">
                <span>📞</span> Call Us
              </a>
              <a href={`https://wa.me/${officeDetails.phone.replace(/\s/g, '')}`} className="quick-btn whatsapp" target="_blank" rel="noopener noreferrer">
                <span>💬</span> WhatsApp
              </a>
              <a href={`mailto:${officeDetails.email}`} className="quick-btn email">
                <span>✉️</span> Email
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-card">
          <div className="form-header">
            <h2>Send a Message</h2>
            <p>Fill out the form and we'll get back to you within 24 hours</p>
          </div>
          
          {submitted && (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <div>
                <strong>Thank you!</strong>
                <p>We'll get back to you soon.</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
              <label>Full Name</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required 
                />
              </div>
            </div>

            <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
              <label>Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">✉️</span>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required 
                />
              </div>
            </div>

            <div className={`form-group ${focusedField === 'phone' ? 'focused' : ''}`}>
              <label>Phone Number</label>
              <div className="input-wrapper">
                <span className="input-icon">📞</span>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  required 
                />
              </div>
            </div>

            <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
              <label>Your Message</label>
              <div className="input-wrapper">
                <span className="input-icon">💬</span>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <div className="map-header">
          <h3>Find Us On Map</h3>
          <p>18 Lattitude Mall, Punawale, Pune</p>
        </div>
        <div className="map-container">
          <iframe 
            title="MGRealtys Office Location - Punawale, Pune"
            src="https://maps.google.com/maps?q=18+Longitude+Mall+Punawale+Pune&t=&z=16&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Contact;