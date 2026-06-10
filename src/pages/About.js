// src/pages/About.js
import React, { useEffect, useState } from 'react';
import './About.css';
import ceoImg from "../assets/ceo.PNG";
import hrImg from "../assets/hr.png";
import coowner from "../assets/coowner.png";
import Teamleader from "../assets/Teamleader.png";
import web from "../assets/web.jpeg";
import pre from "../assets/pre.jpeg";

function About() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    document.title = "About MG  Realtys - 7+ Years of Real Estate Excellence in Pune";
    
    // Add meta tags for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'MG Realtys - Premier real estate consulting in Pune since 2019. Led by Mangesh Gawai, we offer expert residential & commercial property solutions with 7+ years of experience.');
    }

    // Trigger animations after component mounts
    setTimeout(() => setAnimated(true), 100);
  }, []);

 const team = [
  {
  name: 'Mangesh Gawai',
  role: 'Founder & CEO',
  img: ceoImg,
  bio: 'Leading MG Realty with vision, expertise, and integrity.',
},
{
  name: 'Shradha Singh',
  role: 'Director & Co-owner',
  img: coowner,
  bio: 'Driving growth through leadership and customer-focused solutions.',
 
},
{
  name: 'Pallavi Gondhane',
  role: 'HR & Digital Marketing Head',
  img: hrImg,
  bio: 'Building strong teams and impactful digital strategies.',
  
},
{
  name: 'Priti Khedkar',
  role: 'Web Developer',
  img: web,
  bio: 'Specializing in web development, creative design, and digital marketing to strengthen MG Realtys online presence, engage customers, and generate quality leads.',
 
},

{
  name: 'Grace Aghamkar',
  role: 'Sr. Team leader',
  img: Teamleader,
  bio: 'Leading with vision, inspiring success, and building lasting relationships through trust, expertise, and commitment.',
 
},

{
  name: 'Gayatri Kamble',
  role: 'Pre-Sales Head',
  img: pre,
  bio: 'Focused on understanding customer needs, managing inquiries, and providing expert guidance to help clients make informed decisions while supporting the companys sales objectives.',
 
}
];

  const stats = [
    { number: '7+', label: 'Years Experience', icon: '🏆' },
    { number: '5000+', label: 'Happy Clients', icon: '😊' },
    { number: '200+', label: 'Properties Sold', icon: '🏠' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
  ];

  const values = [
    { title: 'Integrity', desc: 'Honest and transparent dealings', icon: '🤝' },
    { title: 'Excellence', desc: 'Premium quality service', icon: '✨' },
    { title: 'Innovation', desc: 'Modern real estate solutions', icon: '💡' },
    { title: 'Client First', desc: 'Your satisfaction is our priority', icon: '❤️' },
  ];

  return (
    <main className="page-container">
      {/* Hero Section with Parallax Effect */}
      <section className="about-hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className={`fade-up ${animated ? 'show' : ''}`}>About MGRealtys</h1>
          <p className={`fade-up-delay ${animated ? 'show' : ''}`}>
            Your trusted partner in Pune's real estate journey since 2019
          </p>
          <div className={`hero-stats ${animated ? 'show' : ''}`}>
            {stats.map((stat, idx) => (
              <div key={idx} className="hero-stat">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="overview-text fade-left">
          <h2>Who We Are</h2>
          <p>MGRealtys is a premier real estate consulting firm based in Pune, dedicated to providing exceptional property solutions. With over 5 years of industry experience, we have established ourselves as a trusted name in residential and commercial real estate.</p>
          <p>Our deep understanding of Pune's real estate landscape, combined with our commitment to transparency and client satisfaction, sets us apart. We've successfully helped over 500 families and businesses find their ideal properties.</p>
          <div className="exp-badge">
            <span>7+</span>
            <p>Years of Excellence</p>
          </div>
        </div>
        <div className="overview-image fade-right">
          <div className="image-wrapper">
            <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80" alt="MGRealtys team meeting" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Professional & Unique Design */}
      <section className="mission-vision-modern">
        <div className="mv-background-pattern"></div>
        <div className="mv-container">
          <div className="mv-card mission-card">
            <div className="mv-icon-wrapper">
              <div className="mv-icon-bg"></div>
              <span className="mv-icon">🎯</span>
            </div>
            <div className="mv-content">
              <h3 className="mv-title">Our Mission</h3>
              <div className="mv-divider"></div>
              <p className="mv-description">
                At MG Realtys, our mission is to become one of India's most trusted and top-performing sales-driven companies by delivering excellence, transparency, and long-term value across multiple industries.
                We are committed to creating growth opportunities in Real Estate, Hospitality, Property Management, Construction, Education, Hotel, and Medical sectors while building a strong professional ecosystem for clients, partners, and employees.
              </p>
            </div>
          </div>
          <div className="mv-card vision-card">
            <div className="mv-icon-wrapper">
              <div className="mv-icon-bg"></div>
              <span className="mv-icon">👁️</span>
            </div>
            <div className="mv-content">
              <h3 className="mv-title">Our Vision</h3>
              <div className="mv-divider"></div>
              <p className="mv-description">
                Our vision is to establish MG Realtys as a diversified business group recognized for innovation, trust, and professional excellence across India.
                Over the next 5 years, we aim to generate 20,000+ employment opportunities through sustainable business expansion and industry-leading services, contributing towards India's economic and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, idx) => (
            <div key={idx} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Leadership</h2>
        <p className="team-subtitle">Dedicated professionals committed to your real estate success</p>
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="card-image-wrapper">
                <img src={member.img} alt={member.name} />
               
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Work With Us?</h2>
          <p>Let our expertise guide you to your perfect property</p>
          <a href="/contact" className="cta-button">Get in Touch →</a>
        </div>
      </section>
    </main>
  );
}

export default About;