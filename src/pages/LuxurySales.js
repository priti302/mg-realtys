import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function LuxurySales() {
  useEffect(() => {
    document.title = 'Luxury Sales | MGRealtys Pune';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Luxury sales services for premium homes, villas, and penthouses in Pune with MGRealtys.');
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Oberon Grande',
      location: 'Prabhat Road, Pune',
      price: '₹5 Cr - ₹12 Cr',
      area: '4, 5 BHK & Penthouses',
      size: '3,500 - 6,200 sq.ft',
      description: 'Ultra-luxury penthouses with private elevator access and world-class finishing in central Pune.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Private Pool', 'Home Automation', 'Spa', 'Wine Cellar'],
      builder: 'Oberon Realty',
      possession: '2026',
      badge: 'Ultra Luxury'
    },
    {
      id: 2,
      name: 'Royal Crest Villas',
      location: 'Mundhwa, Pune',
      price: '₹4.5 Cr - ₹9 Cr',
      area: '4, 5 BHK Villas',
      size: '4,200 - 6,800 sq.ft',
      description: 'Exclusive gated luxury villas with private garden and terrace pool, crafted for high-end living.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
      amenities: ['Private Theater', 'Steam Room', 'Landscaped Gardens', 'Security'],
      builder: 'Royal Constructions',
      possession: 'Ready to Move',
      badge: 'Luxury Villas'
    },
    {
      id: 3,
      name: 'The Sapphire Towers',
      location: 'Koregaon Park, Pune',
      price: '₹3.8 Cr - ₹8.5 Cr',
      area: '3, 4 BHK',
      size: '2,200 - 4,500 sq.ft',
      description: 'Luxury residences with skyline views, premium lifestyle amenities, and elegant interiors.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Sky Lounge', 'Private Cinema', 'Concierge', 'Infinity Pool'],
      builder: 'Sapphire Group',
      possession: 'Q3 2025',
      badge: 'Premium Luxury'
    },
    {
      id: 4,
      name: 'Forest Edge Estate',
      location: 'Pashan, Pune',
      price: '₹6 Cr - ₹15 Cr',
      area: '5, 6 BHK',
      size: '5,000 - 8,500 sq.ft',
      description: 'Boutique luxury estates nestled in greenery, designed for privacy, elegance and elite living.',
      image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Private Spa', 'Indoor Pool', 'Wine Cellar', 'Guest House'],
      builder: 'Edge Developers',
      possession: '2026',
      badge: 'Signature Collection'
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
    const whatsappMessage = `🏢 *Luxury Sales Inquiry* 🏢\n\n*Project:* ${formData.project}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}\n\nThank you for choosing MGRealtys!`;
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
          <div className="detail">🏠 {project.area}</div>
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
          <h1>Luxury Sales — Premium Pune Properties</h1>
          <p>Discover high-end homes, villas and penthouses handpicked for luxury buyers in Pune.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-secondary">Back to Services</Link>
            <a href="/contact" className="btn-primary">Talk to Luxury Sales</a>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>Luxury Sales Benefits</h2>
        <ul className="feature-list">
          <li>Curated luxury homes and premium resale listings</li>
          <li>Exclusive access to top Pune neighborhoods</li>
          <li>Personalized service for high-value transactions</li>
          <li>Professional closing support and legal checks</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Luxury Projects in Pune</h2>
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

export default LuxurySales;
