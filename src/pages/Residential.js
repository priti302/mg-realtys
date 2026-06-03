// src/pages/Residential.js
import React, { useEffect, useState } from 'react';
import './Residential.css';

function Residential() {
  useEffect(() => {
    document.title = "Residential Properties in Pune - MGRealtys | Best Homes & Apartments";
    
    // Meta tags for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore top residential properties in Pune. Luxury apartments, villas, and independent houses. Expert real estate consulting by MGRealtys.');
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    project: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Regular residential projects
  const residentialProjects = [
    {
      id: 1,
      name: "Amanora Park Town",
      location: "Hadapsar, Pune",
      price: "₹1.2 Cr - ₹3.5 Cr",
      area: "2, 3, 4 BHK",
      size: "1200 - 2500 sq.ft",
      description: "Luxury township with modern amenities, clubhouse, swimming pool, and excellent connectivity to IT parks.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Swimming Pool", "Gym", "Clubhouse", "Landscaped Gardens", "24/7 Security"],
      builder: "Amanora Builders",
      possession: "Ready to Move",
      rating: 4.8
    },
    {
      id: 2,
      name: "Magarpatta City",
      location: "Hadapsar, Pune",
      price: "₹1.5 Cr - ₹4 Cr",
      area: "2, 3, 4 BHK",
      size: "1350 - 2800 sq.ft",
      description: "Integrated township with IT park, school, hospital, and shopping complex. Perfect for working professionals.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["IT Park", "School", "Hospital", "Mall", "Sports Complex"],
      builder: "Magarpatta Township",
      possession: "Ready to Move",
      rating: 4.9
    },
    {
      id: 3,
      name: "Kolte Patil Life Republic",
      location: "Hinjewadi, Pune",
      price: "₹80 Lacs - ₹2.5 Cr",
      area: "1, 2, 3 BHK",
      size: "650 - 1800 sq.ft",
      description: "Affordable luxury apartments in Hinjewadi, close to IT parks. Excellent investment opportunity.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Pool", "Gym", "Children's Play Area", "Jogging Track", "Clubhouse"],
      builder: "Kolte Patil Developers",
      possession: "2024",
      rating: 4.6
    },
    {
      id: 4,
      name: "Godrej Hillside",
      location: "Baner, Pune",
      price: "₹2 Cr - ₹5 Cr",
      area: "2, 3, 4 BHK",
      size: "1500 - 3200 sq.ft",
      description: "Premium luxury villas and apartments with hill view. World-class amenities and prime location.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Infinity Pool", "Spa", "Tennis Court", "Golf Simulator", "Sky Lounge"],
      builder: "Godrej Properties",
      possession: "2025",
      rating: 4.9
    },
    {
      id: 5,
      name: "Panchshil Ritz",
      location: "Kharadi, Pune",
      price: "₹3 Cr - ₹8 Cr",
      area: "3, 4, 5 BHK",
      size: "2000 - 4500 sq.ft",
      description: "Ultra-luxury residences with stunning city views. Premium finishing and world-class amenities.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Private Pool", "Home Theater", "Wine Cellar", "Private Gym", "Concierge"],
      builder: "Panchshil Realty",
      possession: "2025",
      rating: 5.0
    },
    {
      id: 6,
      name: "Kumar City",
      location: "Wakad, Pune",
      price: "₹75 Lacs - ₹2 Cr",
      area: "1, 2, 3 BHK",
      size: "550 - 1600 sq.ft",
      description: "Budget-friendly apartments with all modern amenities. Close to Mumbai-Bangalore Highway.",
      image: "https://images.unsplash.com/photo-1560185008-a7b66b4a2b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Pool", "Gym", "Garden", "Community Hall", "Security"],
      builder: "Kumar Builders",
      possession: "Ready to Move",
      rating: 4.5
    }
  ];

  // New: Mandate & Sole Selling Projects
  const mandateProjects = [
    {
      id: 101,
      name: "Elite Residency Wakad",
      location: "Wakad, Pune",
      price: "₹90 Lacs - ₹2.2 Cr",
      area: "2, 3 BHK",
      size: "950 - 1650 sq.ft",
      description: "Premium residences with 35+ amenities. Exclusive mandate with MGRealtys. Limited inventory available.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80",
      amenities: ["Swimming Pool", "Sky Deck", "Mini Theatre", "Co-working Space"],
      builder: "Elite Developers",
      possession: "Dec 2024",
      rating: 4.7,
      mandateType: "Sole Selling"
    },
    {
      id: 102,
      name: "The Palm Springs",
      location: "Baner, Pune",
      price: "₹2.2 Cr - ₹4.5 Cr",
      area: "3, 4 BHK",
      size: "1800 - 3100 sq.ft",
      description: "Luxury residences with exclusive amenities. Sole selling rights with MGRealtys for this premium project.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Infinity Pool", "Private Garden", "Tennis Court", "Club Lounge"],
      builder: "Palm Group",
      possession: "Q1 2025",
      rating: 4.9,
      mandateType: "Sole Selling"
    },
    {
      id: 103,
      name: "Green Valley Homes",
      location: "Hinjewadi Phase 3",
      price: "₹65 Lacs - ₹1.5 Cr",
      area: "1, 2, 3 BHK",
      size: "520 - 1400 sq.ft",
      description: "Affordable luxury with green surroundings. Mandate project with special benefits for MGRealtys clients.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Park", "Kids Zone", "Gymnasium", "Multipurpose Hall"],
      builder: "Green Earth Constructions",
      possession: "Ready to Move",
      rating: 4.6,
      mandateType: "Mandate"
    },
    {
      id: 104,
      name: "Riverside Towers",
      location: "Kharadi, Pune",
      price: "₹1.5 Cr - ₹3.8 Cr",
      area: "2, 3, 4 BHK",
      size: "1250 - 2600 sq.ft",
      description: "Premium residences overlooking the river. Exclusive mandate project with customized payment plans.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Rooftop Pool", "Yoga Deck", "Golf Putting Green", "Concierge"],
      builder: "Riverside Constructions",
      possession: "Mid 2025",
      rating: 4.8,
      mandateType: "Sole Selling"
    }
  ];

  // New: Luxurious Selling Projects
  const luxuryProjects = [
    {
      id: 201,
      name: "Oberon Grande",
      location: "Prabhat Road, Pune",
      price: "₹5 Cr - ₹12 Cr",
      area: "4, 5 BHK & Penthouses",
      size: "3500 - 6200 sq.ft",
      description: "Ultra-luxury penthouses with 360-degree views. Each residence features private elevator access and premium Italian marble flooring.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Private Pool", "Home Automation", "Spa & Sauna", "Wine Cellar", "Helipad Access"],
      builder: "Oberon Realty",
      possession: "2026",
      rating: 5.0,
      luxuryTag: "Ultra-Luxury"
    },
    {
      id: 202,
      name: "Royal Crest Villas",
      location: "Mundhwa, Pune",
      price: "₹4.5 Cr - ₹9 Cr",
      area: "4, 5 BHK Villas",
      size: "4200 - 6800 sq.ft",
      description: "Exclusive gated community of luxury villas. Each villa comes with a private garden, terrace pool, and dedicated staff quarters.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      amenities: ["Private Theater", "Gym", "Steam Room", "Landscaped Gardens", "Security System"],
      builder: "Royal Constructions",
      possession: "Ready to Move",
      rating: 4.9,
      luxuryTag: "Luxury Villas"
    },
    {
      id: 203,
      name: "The Sapphire Towers",
      location: "Koregaon Park, Pune",
      price: "₹3.8 Cr - ₹8.5 Cr",
      area: "3, 4 BHK",
      size: "2200 - 4500 sq.ft",
      description: "Luxury residences in the heart of Koregaon Park. World-class finishes and unmatched views of the city skyline.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Rooftop Infinity Pool", "Sky Lounge", "Private Cinema", "Concierge Services"],
      builder: "Sapphire Group",
      possession: "Q3 2025",
      rating: 4.9,
      luxuryTag: "Premium Luxury"
    },
    {
      id: 204,
      name: "Forest Edge Estate",
      location: "Pashan, Pune",
      price: "₹6 Cr - ₹15 Cr",
      area: "5, 6 BHK",
      size: "5000 - 8500 sq.ft",
      description: "Boutique luxury estate with only 12 exclusive residences. Set amidst a private forest with panoramic hillside views.",
      image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Private Spa", "Indoor Pool", "Theatre Room", "Wine Cellar", "Guest House"],
      builder: "Edge Developers",
      possession: "2026",
      rating: 5.0,
      luxuryTag: "Signature Collection"
    }
  ];

  const handleInquiry = (project) => {
    setSelectedProject(project);
    setFormData({
      ...formData,
      project: project.name,
      message: `I'm interested in ${project.name} located in ${project.location}`
    });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `🏢 *New Property Inquiry* 🏢

*Project:* ${formData.project}
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Message:* ${formData.message}

Thank you for choosing MGRealtys! 🏠`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918698315802"; // Your WhatsApp number
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

  // Component to render a project card (reused across sections)
  const ProjectCard = ({ project, onInquire, badgeText, badgeColor }) => (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.name} />
        <div className="project-badge" style={{ backgroundColor: badgeColor || '#0A1F44' }}>
          {badgeText || project.possession}
        </div>
        <div className="project-rating">
          <span>⭐</span> {project.rating}
        </div>
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p className="location">📍 {project.location}</p>
        <p className="description">{project.description}</p>
        <div className="project-details">
          <div className="detail">
            <span>💰</span> {project.price}
          </div>
          <div className="detail">
            <span>📐</span> {project.size}
          </div>
          <div className="detail">
            <span>🏠</span> {project.area}
          </div>
        </div>
        <div className="amenities">
          {project.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="amenity-tag">{amenity}</span>
          ))}
          {project.amenities.length > 3 && <span className="amenity-tag">+{project.amenities.length - 3} more</span>}
        </div>
        <div className="project-footer">
          <span className="builder">🏗️ {project.builder}</span>
          <button onClick={() => onInquire(project)} className="inquiry-btn">
            Enquire Now →
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="residential-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Residential Properties in Pune</h1>
          <p>Find your dream home in Pune's most sought-after locations</p>
          <div className="hero-stats">
            <div className="stat">
              <span>50+</span>
              <p>Luxury Projects</p>
            </div>
            <div className="stat">
              <span>2000+</span>
              <p>Happy Families</p>
            </div>
            <div className="stat">
              <span>100%</span>
              <p>Legal Verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <h3>Find Your Perfect Home</h3>
          <div className="filter-tags">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">2 BHK</button>
            <button className="filter-btn">3 BHK</button>
            <button className="filter-btn">4+ BHK</button>
            <button className="filter-btn">Luxury</button>
            <button className="filter-btn">Affordable</button>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Mandate & Sole Selling Projects */}
      <section className="projects-section special-section">
        <div className="section-header">
          <h2 className="section-title">📋 Mandate & Sole Selling Projects</h2>
          <p className="section-subtitle">Exclusive properties with special benefits for MGRealtys clients</p>
        </div>
        <div className="projects-grid">
          {mandateProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onInquire={handleInquiry}
              badgeText={`🔑 ${project.mandateType}`}
              badgeColor="#E67E22"
            />
          ))}
        </div>
      </section>

      {/* NEW SECTION: Luxurious Selling Projects */}
      <section className="projects-section luxury-section">
        <div className="section-header">
          <h2 className="section-title">✨ Luxurious Selling Projects</h2>
          <p className="section-subtitle">Experience unparalleled luxury and sophistication</p>
        </div>
        <div className="projects-grid">
          {luxuryProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onInquire={handleInquiry}
              badgeText={`👑 ${project.luxuryTag}`}
              badgeColor="#B8860B"
            />
          ))}
        </div>
      </section>

      {/* Regular Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">Featured Residential Projects</h2>
        <div className="projects-grid">
          {residentialProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onInquire={handleInquiry}
              badgeText={project.possession}
              badgeColor="#0A1F44"
            />
          ))}
        </div>
      </section>

      {/* Inquiry Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeForm}>×</button>
            <h2>Property Inquiry</h2>
            <p className="modal-project">Interested in: <strong>{selectedProject?.name}</strong></p>
            
            {submitted ? (
              <div className="success-message">
                <span>✓</span>
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
                  Send Inquiry via WhatsApp
                  <span>💬</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Residential;