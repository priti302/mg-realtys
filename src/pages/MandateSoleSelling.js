import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function MandateSoleSelling() {
  useEffect(() => {
    document.title = 'Mandate & Sole Selling | MGRealtys Pune';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Exclusive mandate and sole selling services for premium Pune properties with MGRealtys.');
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Elite Residency Wakad',
      location: 'Wakad, Pune',
      price: '₹90 Lacs - ₹2.2 Cr',
      area: '2, 3 BHK',
      size: '950 - 1,650 sq.ft',
      description: 'Premium residences under exclusive mandate with MGRealtys, featuring modern amenities and a central Wakad location.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80',
      amenities: ['Swimming Pool', 'Sky Deck', 'Co-working Space', 'Clubhouse'],
      builder: 'Elite Developers',
      possession: 'Dec 2024',
      badge: 'Sole Selling'
    },
    {
      id: 2,
      name: 'The Palm Springs',
      location: 'Baner, Pune',
      price: '₹2.2 Cr - ₹4.5 Cr',
      area: '3, 4 BHK',
      size: '1,800 - 3,100 sq.ft',
      description: 'Luxury apartments with exclusive selling rights managed by MGRealtys. High-end living in Baner with premium finishes.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Infinity Pool', 'Private Garden', 'Tennis Court', 'Club Lounge'],
      builder: 'Palm Group',
      possession: 'Q1 2025',
      badge: 'Sole Selling'
    },
    {
      id: 3,
      name: 'Green Valley Homes',
      location: 'Hinjewadi Phase 3, Pune',
      price: '₹65 Lacs - ₹1.5 Cr',
      area: '1, 2, 3 BHK',
      size: '520 - 1,400 sq.ft',
      description: 'Mandate project offering affordable luxury in Hinjewadi. Special benefits and early access for our clients.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Park', 'Kids Zone', 'Gymnasium', 'Multipurpose Hall'],
      builder: 'Green Earth Constructions',
      possession: 'Ready to Move',
      badge: 'Mandate'
    },
    {
      id: 4,
      name: 'Riverside Towers',
      location: 'Kharadi, Pune',
      price: '₹1.5 Cr - ₹3.8 Cr',
      area: '2, 3, 4 BHK',
      size: '1,250 - 2,600 sq.ft',
      description: 'Premium river-facing residences with customized payment plans and exclusive selling rights through MGRealtys.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Rooftop Pool', 'Yoga Deck', 'Concierge', 'Golf Putting Green'],
      builder: 'Riverside Constructions',
      possession: 'Mid 2025',
      badge: 'Sole Selling'
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
    const whatsappMessage = `🏢 *Mandate & Sole Selling Inquiry* 🏢\n\n*Project:* ${formData.project}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}\n\nThank you for choosing MGRealtys!`;
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
          <h1>Mandate & Sole Selling — Pune Projects</h1>
          <p>Exclusive mandate and sole selling listings for high-demand Pune properties, curated for premium buyers.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-secondary">Back to Services</Link>
            <a href="/contact" className="btn-primary">Contact Sales Team</a>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>What You Get</h2>
        <ul className="feature-list">
          <li>Exclusive access to mandate-only projects</li>
          <li>Zero brokerage opportunities on select listings</li>
          <li>Dedicated support for negotiation and closing</li>
          <li>Priority booking for Pune's best locations</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Pune Mandate & Sole Selling Projects</h2>
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

export default MandateSoleSelling;
