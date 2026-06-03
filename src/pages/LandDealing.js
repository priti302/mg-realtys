import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function LandDealing() {
  useEffect(() => {
    document.title = 'Land Dealing | MGRealtys Pune';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Land dealing services for prime Pune plots and development opportunities with MGRealtys.');
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Baner Hill Parcel',
      location: 'Baner, Pune',
      price: '₹10 Cr - ₹18 Cr',
      area: '10,000 - 18,000 sq.ft',
      size: 'Plot',
      description: 'Prime land parcel on Baner Hill with development-ready approvals and strong capital appreciation potential.',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Highway Access', 'Scenic Views', 'Approved Layout', 'Water Connection'],
      builder: 'Pune Land Brokers',
      possession: 'Ready',
      badge: 'Land Deal'
    },
    {
      id: 2,
      name: 'Pimpri-Chinchwad Industrial Plot',
      location: 'Pimpri-Chinchwad, Pune',
      price: '₹6 Cr - ₹14 Cr',
      area: '8,000 - 14,000 sq.ft',
      size: 'Industrial Plot',
      description: 'Strategic industrial land for commercial development near the highway and major manufacturing hubs.',
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Industrial Zone', 'Power Access', 'Road Frontage', 'Nearby Logistics'],
      builder: 'Industrial Land Direct',
      possession: 'Ready',
      badge: 'Land Deal'
    },
    {
      id: 3,
      name: 'Koregaon Park South Redevelopment',
      location: 'Koregaon Park South, Pune',
      price: '₹18 Cr - ₹30 Cr',
      area: '12,000 - 22,000 sq.ft',
      size: 'Redevelopment Land',
      description: 'Rare redevelopment land in Koregaon Park South, suited for luxury residential or boutique hospitality projects.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Premium Address', 'High Demand', 'Deep Finance Support', 'Transit Connectivity'],
      builder: 'Koregaon Developers',
      possession: 'Ready',
      badge: 'Land Deal'
    },
    {
      id: 4,
      name: 'Wagholi Township Land',
      location: 'Wagholi, Pune',
      price: '₹5 Cr - ₹11 Cr',
      area: '9,000 - 16,000 sq.ft',
      size: 'Township Plot',
      description: 'Large township-ready parcel close to major IT corridors, ideal for residential or mixed-use development.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Metro Corridor Access', 'Utility Connections', 'Green Spaces', 'Master Plan Approved'],
      builder: 'Township Land Hub',
      possession: 'Ready',
      badge: 'Land Deal'
    }
  ];

  const handleInquiry = (project) => {
    setSelectedProject(project);
    setFormData({ ...formData, project: project.name, message: `I am interested in ${project.name} located in ${project.location}.` });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `🏢 *Land Dealing Inquiry* 🏢\n\n*Project:* ${formData.project}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}\n\nThank you for choosing MGRealtys!`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '918698315802';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
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

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.name} />
        <div className="project-badge">{project.badge}</div>
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p className="location">📍 {project.location}</p>
        <p className="description">{project.description}</p>
        <div className="project-details">
          <div className="detail">💰 {project.price}</div>
          <div className="detail">📐 {project.size}</div>
          <div className="detail">🏞️ {project.area}</div>
        </div>
        <div className="amenities">
          {project.amenities.map((amenity, idx) => (
            <span key={idx} className="amenity-tag">{amenity}</span>
          ))}
        </div>
        <button className="inquiry-btn" onClick={() => handleInquiry(project)}>
          Enquire Now
        </button>
      </div>
    </div>
  );

  return (
    <main className="page-container">
      <section className="service-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Land Dealing — Pune Plots & Parcels</h1>
          <p>Land dealing expertise for prime Pune plots, redevelopment parcels and investment-ready sites.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-secondary">Back to Services</Link>
            <a href="/contact" className="btn-primary">Talk to Land Team</a>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>Land Dealing Services</h2>
        <ul className="feature-list">
          <li>Strategic land sourcing across Pune</li>
          <li>Site due diligence and approval support</li>
          <li>Plot structuring for residential and commercial use</li>
          <li>Trusted negotiation and documentation assistance</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Pune Land Deals</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeForm}>×</button>
            <h2>Project Inquiry</h2>
            <p className="modal-project">Interested in: <strong>{selectedProject?.name}</strong></p>
            {submitted ? (
              <div className="success-message"><span>✓</span><p>Redirecting to WhatsApp...</p></div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <textarea name="message" rows="3" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="submit-inquiry">Send Inquiry via WhatsApp</button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default LandDealing;
