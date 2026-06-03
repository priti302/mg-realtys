import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

function CommercialSales() {
  useEffect(() => {
    document.title = 'Commercial Sales | MGRealtys Pune';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Commercial sales services for Pune offices, retail spaces, and investment assets with MGRealtys.');
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      id: 1,
      name: "World Trade Center",
      location: 'Kharadi, Pune',
      price: '₹4 Cr - ₹15 Cr',
      area: '1,000 - 5,000 sq.ft',
      size: 'Office Spaces',
      description: 'Premium corporate tower with world-class infrastructure and excellent connectivity.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['SEZ Zone', '24/7 Backup', 'Conference Rooms', 'Food Court'],
      builder: 'Panchshil Realty',
      possession: 'Ready to Move',
      badge: 'Commercial'
    },
    {
      id: 2,
      name: "MG Road Commercial Complex",
      location: 'Camp, Pune',
      price: '₹8 Cr - ₹25 Cr',
      area: '1,500 - 5,000 sq.ft',
      size: 'Retail / Office',
      description: 'High visibility commercial property in Pune’s prime business district.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Prime Location', 'Parking', 'Restaurants', 'Banking'],
      builder: 'Premium Developers',
      possession: '2025',
      badge: 'Commercial'
    },
    {
      id: 3,
      name: 'King’s Business Tower',
      location: 'MG Road, Pune',
      price: '₹10 Cr - ₹35 Cr',
      area: '3,000 - 12,000 sq.ft',
      size: 'Luxury Corporate',
      description: 'Ultra-luxury commercial tower designed for high-end corporate headquarters.',
      image: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80',
      amenities: ['Executive Lounge', 'Board Rooms', 'Valet Parking', 'Sky Garden'],
      builder: "King's Group",
      possession: '2026',
      badge: 'Luxury Sales'
    },
    {
      id: 4,
      name: 'Crystal Business Park',
      location: 'Viman Nagar, Pune',
      price: '₹7 Cr - ₹22 Cr',
      area: '2,000 - 8,000 sq.ft',
      size: 'Premium Corporate',
      description: 'Modern glass-clad business park close to the airport, ideal for corporate spaces.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Business Lounge', 'Banquet Hall', 'Parking', 'Security'],
      builder: 'Crystal Group',
      possession: '2025',
      badge: 'Commercial'
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
    const whatsappMessage = `🏢 *Commercial Sales Inquiry* 🏢\n\n*Project:* ${formData.project}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}\n\nThank you for choosing MGRealtys!`;
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
          <div className="detail">🏢 {project.area}</div>
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
          <h1>Commercial Sales — Pune Listings</h1>
          <p>Commercial sales expertise for premium office and retail projects across Pune’s best business districts.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-secondary">Back to Services</Link>
            <a href="/contact" className="btn-primary">Talk to Commercial Sales</a>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>What We Offer</h2>
        <ul className="feature-list">
          <li>Top commercial listings in Pune’s prime corridors</li>
          <li>Investment-grade office and retail spaces</li>
          <li>Guidance on leasing, purchase, and ROI</li>
          <li>Structured negotiation support and closing assistance</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Featured Commercial Projects</h2>
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

export default CommercialSales;
