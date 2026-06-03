import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  useEffect(() => {
    document.title = "Real Estate Consulting Services Pune | Residential & Commercial";
  }, []);

  const serviceCategories = [
    {
      title: 'Mandate & Sole Selling',
      description: 'Exclusive mandate and sole selling services for premium Pune properties.',
      link: '/mandate-sole-selling',
      icon: '🔑'
    },
    {
      title: 'Luxury Sales',
      description: 'Luxury property sales with high-end homes, villas and penthouses in Pune.',
      link: '/luxury-sales',
      icon: '✨'
    },
    {
      title: 'Land Dealing',
      description: 'Pune land sourcing and deal structuring for residential and commercial plots.',
      link: '/land-dealing',
      icon: '🌱'
    }
  ];

  const residentialFeatures = [
    'Expert guidance for apartments, villas, and independent houses',
    'End-to-end support from site visit to possession',
    'Legal verification and documentation assistance',
    'Home loan facilitation',
    'Best deals in prime Pune locations',
  ];

  const commercialFeatures = [
    'Office spaces, retail shops, and industrial properties',
    'Market analysis and ROI assessment',
    'Lease negotiation and agreement support',
    'Property management services',
    'Strategic locations in Hinjewadi, Kharadi, and more',
  ];

  return (
    <main className="page-container">
      <section className="services-overview">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Explore dedicated real estate services backed by Pune-based expertise and premium project listings.</p>
        </div>
        <div className="service-cards">
          {serviceCategories.map((service, idx) => (
            <Link key={idx} to={service.link} className="service-card">
              <div className="service-card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card-action">View Projects →</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="residential" className="service-section residential">
        <div className="service-content">
          <h2>Residential Consulting</h2>
          <p>Find your dream home with our expert residential property consulting. We help you navigate Pune's residential market to find the perfect home that matches your lifestyle and budget.</p>
          <ul className="feature-list">
            {residentialFeatures.map((feature, i) => (
              <li key={i}>✓ {feature}</li>
            ))}
          </ul>
          <a href="/contact" className="btn-primary">Get Consultation</a>
        </div>
        <div className="service-image">
          <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Luxury residential property in Pune" />
        </div>
      </section>

      <section id="commercial" className="service-section commercial">
        <div className="service-image">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" alt="Modern commercial office space" />
        </div>
        <div className="service-content">
          <h2>Commercial Consulting</h2>
          <p>Strategic commercial property solutions for businesses of all sizes. From office spaces to retail outlets, we help you find locations that drive growth.</p>
          <ul className="feature-list">
            {commercialFeatures.map((feature, i) => (
              <li key={i}>✓ {feature}</li>
            ))}
          </ul>
          <a href="/contact" className="btn-primary">Discuss Commercial Needs</a>
        </div>
      </section>

      <section className="process-section">
        <h2 className="section-title">Our Consulting Process</h2>
        <div className="process-steps">
          <div className="step"><span>01</span><h3>Understand</h3><p>Your requirements and preferences</p></div>
          <div className="step"><span>02</span><h3>Search</h3><p>Curated property recommendations</p></div>
          <div className="step"><span>03</span><h3>Visit</h3><p>Site visits and evaluations</p></div>
          <div className="step"><span>04</span><h3>Close</h3><p>Negotiation and paperwork support</p></div>
        </div>
      </section>
    </main>
  );
}

export default Services;