// src/pages/Commercial.js
import React, { useEffect, useState } from 'react';
import './Commercial.css';

function Commercial() {
  useEffect(() => {
    document.title = "Commercial Properties in Pune - MGRealtys | Office Spaces & Retail Shops";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Find premium commercial properties in Pune. Office spaces, retail shops, and industrial properties. Best investment opportunities with MGRealtys.');
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    project: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // ONLY PUNE-BASED COMMERCIAL PROPERTIES - No mandate, no luxury special categories
  const commercialProjects = [
    {
      id: 1,
      name: "World Trade Center",
      location: "Kharadi, Pune",
      price: "₹4 Cr - ₹15 Cr",
      area: "1000 - 5000 sq.ft",
      type: "Office Space",
      category: "office",
      description: "Premium commercial tower with world-class infrastructure, ideal for IT companies and MNCs.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: ["SEZ Zone", "24/7 Power Backup", "Conference Rooms", "Food Court", "Banking"],
      rental: "₹80 - ₹120 per sq.ft",
      roi: "8-10%",
      builder: "Panchshil Realty"
    },
    {
      id: 2,
      name: "EON Free Zone",
      location: "Kharadi, Pune",
      price: "₹3.5 Cr - ₹12 Cr",
      area: "800 - 4000 sq.ft",
      type: "IT Park",
      category: "itpark",
      description: "IT park with excellent connectivity to airport and city center. Ideal for tech companies.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: ["IT Park", "Ample Parking", "Cafeteria", "Gym", "Security"],
      rental: "₹70 - ₹100 per sq.ft",
      roi: "7-9%",
      builder: "EON Group"
    },
    {
      id: 3,
      name: "Nagar Road Retail Hub",
      location: "Nagar Road, Pune",
      price: "₹2 Cr - ₹8 Cr",
      area: "500 - 2500 sq.ft",
      type: "Retail Shop",
      category: "retail",
      description: "High-footfall retail space on Nagar Road. Perfect for showrooms, restaurants, and brands.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: ["High Footfall", "Main Road", "Parking", "ATM", "Security"],
      rental: "₹120 - ₹200 per sq.ft",
      roi: "9-12%",
      builder: "Various"
    },
    {
      id: 4,
      name: "Hinjewadi IT Park",
      location: "Hinjewadi, Pune",
      price: "₹5 Cr - ₹20 Cr",
      area: "2000 - 10000 sq.ft",
      type: "IT/Corporate Office",
      category: "itpark",
      description: "Prime location in Hinjewadi, close to major IT companies. Excellent investment opportunity.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: ["SEZ", "100% Power Backup", "Smart Building", "Conference Center", "Bank"],
      rental: "₹60 - ₹90 per sq.ft",
      roi: "8-11%",
      builder: "Various Developers"
    },
    {
      id: 5,
      name: "MG Road Commercial Complex",
      location: "Camp, Pune",
      price: "₹8 Cr - ₹25 Cr",
      area: "1500 - 5000 sq.ft",
      type: "Commercial Complex",
      category: "commercial",
      description: "Premium commercial space on MG Road, Pune's prime business district.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: ["Prime Location", "High Visibility", "Parking", "Restaurants", "Banks"],
      rental: "₹150 - ₹250 per sq.ft",
      roi: "10-14%",
      builder: "Premium Developers"
    },
    {
      id: 6,
      name: "Baner Business Park",
      location: "Baner, Pune",
      price: "₹3 Cr - ₹10 Cr",
      area: "1000 - 3000 sq.ft",
      type: "Business Park",
      category: "office",
      description: "Modern business park with excellent amenities. Ideal for startups and SMEs.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: ["Co-working Space", "Cafeteria", "Meeting Rooms", "High-speed Internet"],
      rental: "₹65 - ₹95 per sq.ft",
      roi: "7-9%",
      builder: "Various"
    },
    {
      id: 7,
      name: "Marvel Edge",
      location: "Viman Nagar, Pune",
      price: "₹6 Cr - ₹18 Cr",
      area: "1200 - 4500 sq.ft",
      type: "Premium Office",
      category: "office",
      description: "Grade A commercial tower with stunning airport views. Features world-class amenities.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      features: ["Airport View", "High-speed Elevators", "Food Court", "Conference Halls"],
      rental: "₹100 - ₹150 per sq.ft",
      roi: "9-11%",
      builder: "Marvel Group"
    },
    {
      id: 8,
      name: "ICC Trade Tower",
      location: "SB Road, Pune",
      price: "₹7 Cr - ₹22 Cr",
      area: "1000 - 4000 sq.ft",
      type: "Corporate Office",
      category: "commercial",
      description: "Iconic commercial tower on Senapati Bapat Road. Premium location with high visibility.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: ["Prime Location", "Banking", "Restaurants", "Parking", "24/7 Security"],
      rental: "₹120 - ₹180 per sq.ft",
      roi: "9-12%",
      builder: "ICC Developers"
    }
  ];

  const filteredProjects = filterType === 'all' 
    ? commercialProjects 
    : commercialProjects.filter(p => p.category === filterType);

  const handleInquiry = (project) => {
    setSelectedProject(project);
    setFormData({
      ...formData,
      project: project.name,
      message: `I'm interested in ${project.name} (${project.type}) located in ${project.location}`
    });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `🏢 *COMMERCIAL PROPERTY INQUIRY* 🏢

*Property:* ${formData.project}
*Type:* ${selectedProject?.type}
*Location:* ${selectedProject?.location}
*Area:* ${selectedProject?.area}
*Price Range:* ${selectedProject?.price}
*Expected ROI:* ${selectedProject?.roi}

*Customer Details:*
━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
💬 *Message:* ${formData.message}

━━━━━━━━━━━━━━━━
Looking forward to your response! 🏗️✨`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918698315802";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setSelectedProject(null);
    }, 3000);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedProject(null);
  };

  // Commercial Card Component
  const CommercialCard = ({ project, onInquire }) => (
    <div className="commercial-card" data-aos="fade-up">
      <div className="card-image">
        <img src={project.image} alt={project.name} />
        <div className="property-type">{project.type}</div>
        <div className="image-overlay">
          <button onClick={() => onInquire(project)} className="quick-view-btn">
            Quick Inquiry
          </button>
        </div>
      </div>
      <div className="card-content">
        <h3>{project.name}</h3>
        <p className="location">
          <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {project.location}
        </p>
        <p className="description">{project.description}</p>
        <div className="key-details">
          <div className="detail">
            <span>💰 Price Range</span>
            <strong>{project.price}</strong>
          </div>
          <div className="detail">
            <span>📐 Carpet Area</span>
            <strong>{project.area}</strong>
          </div>
        </div>
        <div className="rental-roi">
          <div className="rental">
            <span>🏷️ Rental</span>
            <strong>{project.rental}</strong>
          </div>
          <div className="roi">
            <span>📊 Expected ROI</span>
            <strong className="roi-value">{project.roi}</strong>
          </div>
        </div>
        <div className="features">
          {project.features.slice(0, 4).map((feature, idx) => (
            <span key={idx} className="feature-tag">{feature}</span>
          ))}
        </div>
        <div className="card-footer">
          <span className="builder">
            <svg className="builder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="8" width="16" height="12" rx="2"/>
              <path d="M8 4v4M16 4v4M4 12h16"/>
            </svg>
            {project.builder}
          </span>
          <button onClick={() => onInquire(project)} className="invest-btn">
            Invest Now
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="commercial-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">🏢 PREMIUM INVESTMENTS</div>
          <h1 className="hero-title">
            Commercial Properties 
            <span className="hero-gradient"> in Pune</span>
          </h1>
          <p className="hero-subtitle">
            Prime office spaces, retail shops, and high-ROI investment opportunities
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">20+</span>
              <p className="stat-label">Commercial Projects</p>
            </div>
            <div className="stat">
              <span className="stat-number">8</span>
              <p className="stat-label">Prime Locations</p>
            </div>
            <div className="stat">
              <span className="stat-number">14%</span>
              <p className="stat-label">Highest ROI</p>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-fill"></path>
          </svg>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <button 
            className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            All Properties
          </button>
          <button 
            className={`filter-btn ${filterType === 'office' ? 'active' : ''}`}
            onClick={() => setFilterType('office')}
          >
            🏢 Office Spaces
          </button>
          <button 
            className={`filter-btn ${filterType === 'itpark' ? 'active' : ''}`}
            onClick={() => setFilterType('itpark')}
          >
            💻 IT Parks
          </button>
          <button 
            className={`filter-btn ${filterType === 'retail' ? 'active' : ''}`}
            onClick={() => setFilterType('retail')}
          >
            🛍️ Retail Shops
          </button>
          <button 
            className={`filter-btn ${filterType === 'commercial' ? 'active' : ''}`}
            onClick={() => setFilterType('commercial')}
          >
            🏢 Commercial Complex
          </button>
        </div>
      </section>

      {/* Investment Tips */}
      <section className="investment-tips">
        <div className="tip-card">
          <div className="tip-icon">💼</div>
          <h4>High ROI</h4>
          <p>Commercial properties offer 8-14% annual returns</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon">📍</div>
          <h4>Prime Locations</h4>
          <p>Properties in Pune's most sought-after areas</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon">📈</div>
          <h4>Appreciation</h4>
          <p>Prime locations see 15-20% yearly appreciation</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon">✓</div>
          <h4>Tax Benefits</h4>
          <p>Multiple tax benefits on commercial investments</p>
        </div>
      </section>

      {/* Commercial Projects Grid */}
      <section className="commercial-projects">
        <div className="section-header">
          <span className="section-tag">🏢 Premium Selection</span>
          <h2 className="section-title">Commercial Properties in Pune</h2>
          <p className="section-subtitle">Discover office spaces, retail shops, and commercial complexes in Pune's prime locations</p>
        </div>
        <div className="commercial-grid">
          {filteredProjects.map((project) => (
            <CommercialCard 
              key={project.id} 
              project={project} 
              onInquire={handleInquiry}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Invest in Commercial Real Estate?</h2>
          <p>Get expert consultation and exclusive deals on premium commercial properties</p>
          <button className="cta-button" onClick={() => {
            setSelectedProject({ name: "Commercial Investment Consultation" });
            setFormData({
              ...formData,
              project: "Commercial Investment Consultation",
              message: "I'm interested in commercial property investment consultation. Please guide me with the best options available."
            });
            setShowForm(true);
          }}>
            Schedule Free Consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Inquiry Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeForm}>×</button>
            <div className="modal-header">
              <span className="modal-icon">🏢</span>
              <h2>Commercial Property Inquiry</h2>
            </div>
            <p className="modal-project">
              Property: <strong>{selectedProject?.name}</strong>
            </p>
            
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <p>Redirecting to WhatsApp...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-inquiry">
                  <span>Send Inquiry via WhatsApp</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Commercial;