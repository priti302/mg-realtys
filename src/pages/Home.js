// src/pages/Home.js
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import LeadGenModal from '../components/LeadGenModal';

import lodha from "../assets/lodha.png";
import shapoorji from "../assets/shapoorji.jpg";
import ashiyana from "../assets/ashiyana.png";
import majestique from "../assets/majestique.png";
import godrej from "../assets/godrej.png";
import kolte from "../assets/kolte.jpg";
import panchshil from "../assets/panchshil.jpg";
import kumar from "../assets/kumar.png";
import vj from "../assets/vjlogo.jpg";


import lodhaBelmondo from "../assets/lodha-belmondo.png";
import joyville from "../assets/joyville.png";
import ashiyanaMalhar from "../assets/ashiyana-malhar.png";
import majestiqueLandmark from "../assets/majestique-landmark.png";
import godrejHillside from "../assets/godrej-hillside.png";
import vanaha from "../assets/vanaha.png";


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    document.title = "MGRealtys - Residential & Commercial Property Consultants Pune";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Find your dream property with MGRealtys. Expert real estate consulting in Pune for residential and commercial needs. 7+ years of trust.');
    }
  }, []);

  // Auto slide for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Find Your Dream Property",
      subtitle: "Luxury homes & premium commercial spaces in Pune",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      ctaText: "Explore Properties",
      ctaLink: "/residential"
    },
    {
      id: 2,
      title: "Commercial Excellence",
      subtitle: "High-ROI office spaces & retail shops",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ctaText: "View Commercial",
      ctaLink: "/commercial"
    },
    {
      id: 3,
      title: "Trusted Since 2019",
      subtitle: "7+ years of real estate excellence in Pune",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    }
  ];

 const properties = [
    { id: 1, title: 'Luxury Apartment, Koregaon Park', price: '₹2.5 Cr', beds: 3, baths: 2, area: '1800 sqft', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { id: 2, title: 'Commercial Office, Hinjewadi', price: '₹4.2 Cr', area: '2500 sqft', type: 'Office', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { id: 3, title: 'Penthouse, Viman Nagar', price: '₹3.8 Cr', beds: 4, baths: 3, area: '2200 sqft', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { id: 4, title: 'Cozy 2BHK, Baner', price: '₹1.2 Cr', beds: 2, baths: 2, area: '1100 sqft', img: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { id: 5, title: 'Studio Apartment, Kharadi', price: '₹75 Lakhs', beds: 1, baths: 1, area: '650 sqft', img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { id: 6, title: 'Luxury Villa, Bavdhan', price: '₹6.5 Cr', beds: 5, baths: 4, area: '3500 sqft', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80' },
   { id: 7, title: 'Retail Shop, Camp Area', price: '₹1.8 Cr', area: '800 sqft', type: 'Commercial', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { id: 8, title: 'Row House, Wakad', price: '₹2.2 Cr', beds: 3, baths: 3, area: '1650 sqft', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { id: 9, title: 'Luxury Penthouse, Kalyani Nagar', price: '₹5.5 Cr', beds: 5, baths: 5, area: '3100 sqft', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
 ];



  // AOP Signed Projects (Pune Based)
  const aopProjects = [
    {
  id: 1,
  name: "Lodha Belmondo",
  location: "Baner, Pune",
  developer: "Lodha Group",
  price: "₹1.5 Cr - ₹4.5 Cr",
  type: "Luxury Residences",
  description: "Premium luxury apartments with world-class amenities. Located in the heart of Baner with excellent connectivity.",
  image: lodhaBelmondo,
  amenities: ["Clubhouse", "Swimming Pool", "Gym", "Landscaped Gardens", "24/7 Security"]
},
   {
  id: 2,
  name: "Shapoorji Pallonji Joyville",
  location: "Hadapsar, Pune",
  developer: "Shapoorji Pallonji",
  price: "₹80 Lacs - ₹2.2 Cr",
  type: "Premium Apartments",
  description: "Affordable luxury homes in Hinjewadi. Perfect for IT professionals with excellent amenities.",
  image: joyville,
  amenities: ["Clubhouse", "Pool", "Sports Complex", "Jogging Track", "Children's Play Area"]
},
    {
  id: 3,
  name: "Ashiyana Malhar",
  location: "Hinjewadi, Pune",
  developer: "Ashiyana Group",
  price: "₹1.2 Cr - ₹3.2 Cr",
  type: "Luxury Township",
  description: "Spacious 2,3,4 BHK apartments with modern amenities. Prime location near Mumbai-Bangalore Highway.",
  image: ashiyanaMalhar,
  amenities: ["Swimming Pool", "Gym", "Clubhouse", "Tennis Court", "Landscaped Gardens"]
},
    {
  id: 4,
  name: "Majestique Landmark",
  location: "kharadi, Pune",
  developer: "Majestique Group",
  price: "₹90 Lacs - ₹2.5 Cr",
  type: "Premium Residences",
  description: "Ultra-modern apartments with smart home features. Located close to IT parks and commercial hubs.",
  image: majestiqueLandmark,
  amenities: ["Smart Home", "Gym", "Pool", "Clubhouse", "Co-working Space"]
},
  {
  id: 5,
  name: "Godrej Hillside",
  location: "Mahalunge, Pune",
  developer: "Godrej Properties",
  price: "₹85 Lacs - ₹1.8 Cr",
  type: "Premium Apartments",
  description: "Modern homes with scenic hill views. Located near Baner with excellent connectivity and lifestyle amenities.",
  image: godrejHillside,
  amenities: ["Clubhouse", "Swimming Pool", "Gym", "Garden", "Children's Play Area"]
},
{
  id: 6,
  name: "Shapoorji Vanaha",
  location: "Bavdhan, Pune",
  developer: "Shapoorji Pallonji",
  price: "₹75 Lacs - ₹1.8 Cr",
  type: "Integrated Township",
  description: "A premium township surrounded by nature with modern lifestyle amenities and excellent connectivity.",
  image: vanaha,
  amenities: ["Clubhouse", "Swimming Pool", "Jogging Track", "Gym", "Open Spaces"]
},
{
  id: 7,
  name: "VJ Signature",
  location: "Wadgaon Sheri, Pune",
  developer: "VJ Developers",
  price: "₹1.1 Cr - ₹2.8 Cr",
  type: "Luxury Residences",
  description: "Premium luxury apartments with modern amenities. Strategic location with excellent connectivity to IT parks and highways.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  amenities: ["Swimming Pool", "Gym", "Clubhouse", "Landscaped Gardens", "24/7 Security"]
},
{
  id: 8,
  name: "VJ Crown",
  location: "Pimpri-Chinchwad, Pune",
  developer: "VJ Developers",
  price: "₹68 Lacs - ₹2.2 Cr",
  type: "Premium Apartments",
  description: "Modern residential community with world-class infrastructure. Perfect for families seeking comfort and connectivity.",
  image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  amenities: ["Pool", "Gym", "Clubhouse", "Children's Play Area", "Jogging Track"]
},
{
  id: 9,
  name: "VJ Manor",
  location: "Kothrud, Pune",
  developer: "VJ Developers",
  price: "₹1.3 Cr - ₹3.5 Cr",
  type: "Luxury Villas",
  description: "Exclusive villa community with spacious layouts and premium finishes. Located in one of Pune's most sought-after localities.",
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80",
  amenities: ["Private Garden", "Swimming Pool", "Clubhouse", "Security Gate", "Landscaped Spaces"]
},
{
  id: 10,
  name: "VJ Springs",
  location: "Yerwada, Pune",
  developer: "VJ Developers",
  price: "₹95 Lacs - ₹2.5 Cr",
  type: "Premium Residences",
  description: "Contemporary living with eco-friendly design. Strategically located with easy access to all major commercial hubs.",
  image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  amenities: ["Swimming Pool", "Gym", "Clubhouse", "Landscaped Gardens", "Parking"]
}
  ];

  // Partner Builders
 const partnerBuilders = [
  { id: 1, name: "Lodha Group", logo: lodha, color: "#1a237e" },
  { id: 2, name: "Shapoorji Pallonji", logo: shapoorji, color: "#b71c1c" },
  { id: 3, name: "Ashiyana Group", logo: ashiyana, color: "#e65100" },
  { id: 4, name: "Majestique", logo: majestique, color: "#00695c" },
  { id: 5, name: "Godrej Properties", logo: godrej, color: "#4a148c" },
  { id: 6, name: "Kolte Patil", logo: kolte, color: "#01579b" },
  { id: 7, name: "Panchshil Realty", logo: panchshil, color: "#bf360c" },
  { id: 8, name: "Kumar Builders", logo: kumar, color: "#33691e" },
  { id: 9, name: "vj developers", logo: vj, color: "#33691e" }
];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Understanding your requirements and budget", icon: "🤝" },
    { step: "02", title: "Property Search", desc: "Curated property recommendations", icon: "🔍" },
    { step: "03", title: "Site Visits", desc: "Personalized site visits and evaluation", icon: "🏠" },
    { step: "04", title: "Legal Verification", desc: "Complete document verification", icon: "📋" },
    { step: "05", title: "Negotiation", desc: "Best price negotiation", icon: "💼" },
    { step: "06", title: "Closure", desc: "Paperwork and possession support", icon: "✓" },
    { step: "07", title: "Banking Support", desc: "Assistance with home loan and banking processes", icon: "🏦" },
    { step: "08", title: "NRI Support", desc: "Dedicated support for NRI buyers and documentation", icon: "🌍" }
  ];

  const whyUs = [
    { icon: '🏆', title: '5+ Years Experience', desc: 'Deep understanding of Pune\'s real estate market' },
    { icon: '🤝', title: 'Trusted by 5000+ Clients', desc: 'Successful transactions and happy customers' },
    { icon: '⚡', title: 'Fast & Reliable', desc: 'Quick response and seamless processes' },
    { icon: '🏙️', title: 'Premium Properties', desc: 'Curated selection of luxury properties' },
  ];

  const testimonials = [
    { name: 'Rahul Mehta', text: 'MGRealtys helped me find my dream home in record time. Professional and trustworthy!', rating: 5, location: 'Koregaon Park' },
    { name: 'Priya Sharma', text: 'Excellent commercial property consulting. They handled everything perfectly.', rating: 5, location: 'Hinjewadi' },
    { name: 'Amit Patil', text: 'Best real estate consultants in Pune. Highly recommended for property investments.', rating: 5, location: 'Viman Nagar' },
    { name: 'Prachi Gaikwad',text: 'MG Realty helped us buy our dream home. Mr. Mangesh provided excellent guidance, complete property information, and professional support throughout the process. Highly recommended!',rating: 5,location: 'Pune'},
    { name: 'Amol Date',text: 'MG Realty is highly professional and reliable. Mr. Mangesh’s expertise in RERA and real estate helped me make the right decision. Great service and excellent support from the entire team.',rating: 5, location: 'Pune'},
    { name: 'Pravin Jadhav',text: 'MG Realty offers excellent real estate consultation for flats and plots in Pune and Pimpri-Chinchwad. Professional, knowledgeable, and highly recommended.',rating: 5,location: 'Pimpri-Chinchwad'
}
  ];

  const handleBooking = (project) => {
    setSelectedProject(project);
    setFormData({
      ...formData,
      project: project.name,
      message: `I'm interested in booking ${project.name} by ${project.developer} located in ${project.location}`
    });
    setShowBookingForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const whatsappMessage = `🏢 *PROJECT BOOKING INQUIRY - MGRealtys* 🏢
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 *PROJECT DETAILS*
▸ Project: ${formData.project}
▸ Developer: ${selectedProject?.developer}
▸ Location: ${selectedProject?.location}
▸ Type: ${selectedProject?.type}
▸ Price Range: ${selectedProject?.price}

👤 *CUSTOMER DETAILS*
▸ Name: ${formData.name}
▸ Email: ${formData.email}
▸ Phone: ${formData.phone}

💬 *MESSAGE*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Thank you for choosing MGRealtys!
Our expert will connect with you shortly.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918698315802";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setShowBookingForm(false);
        setSubmitted(false);
        setSelectedProject(null);
      }, 3000);
    }, 1000);
  };

  const closeForm = () => {
    setShowBookingForm(false);
    setSelectedProject(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <main className="page-container">
      {/* Hero Carousel Section */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(10, 31, 68, 0.7), rgba(10, 31, 68, 0.8)), url(${slide.bgImage})` }}
            >
              <div className="carousel-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link to={slide.ctaLink} className="carousel-btn">{slide.ctaText}</Link>
              </div>
            </div>
          ))}
          <button className="carousel-arrow prev" onClick={prevSlide}>‹</button>
          <button className="carousel-arrow next" onClick={nextSlide}>›</button>
          <div className="carousel-dots">
            {heroSlides.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        <div className="hero-stats">
          <div><span>500+</span><br />Happy Clients</div>
          <div><span>5+</span><br />Years Experience</div>
          <div><span>200+</span><br />Properties Sold</div>
        </div>
      </section>


    <section className="property-guarantee">
      <div className="guarantee-container">

        <div className="guarantee-header">
          <span className="guarantee-badge">Our Commitment</span>
          <h2>
            Your Property, <span className="highlight">Our Promise!</span>
          </h2>
          <p>
            Sell Your Property Within <strong>45 Days</strong> or Get
            <strong> 100% Refund*</strong>
          </p>
        </div>

        <div className="guarantee-main-card">
          <div className="days-card">
            <div className="days-number">45</div>
            <div className="days-label">DAYS</div>
            <div className="days-subtext">Guaranteed Sale</div>
          </div>

          <div className="guarantee-divider"></div>

          <div className="guarantee-content">
            <h3>
              We Commit To Sell Your Property Within
              <span className="highlight"> 45 Days*</span>
            </h3>
            <p className="guarantee-note">Fastest turnaround in the industry</p>
            <button className="refund-btn">
              <span>OR 100% REFUND</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="guarantee-features">
          <div className="feature-box">
            <div className="feature-icon">🛡️</div>
            <h4>Exclusive Agreement</h4>
            <p>No deals with any other broker for 45 days</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">💰</div>
            <h4>₹20,000 Registration</h4>
            <p>100% refund if property not sold within 45 days</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">🤝</div>
            <h4>1% Service Charge</h4>
            <p>Payable only after successful deal closure</p>
          </div>
        </div>

        <div className="services-section">
          <h3>Our Professional Services</h3>
          <p className="services-subtitle">Everything you need to sell your property faster</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📷</div>
              <div className="service-content">
                <p className="service-title">Professional Shoot</p>
                <span className="service-desc">High-quality photography</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">📢</div>
              <div className="service-content">
                <p className="service-title">Platform Promotion</p>
                <span className="service-desc">Maximum visibility</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">👥</div>
              <div className="service-content">
                <p className="service-title">Quality Leads</p>
                <span className="service-desc">Verified potential buyers</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🏠</div>
              <div className="service-content">
                <p className="service-title">Site Visits</p>
                <span className="service-desc">Qualified buyer visits</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🤝</div>
              <div className="service-content">
                <p className="service-title">Expert Team</p>
                <span className="service-desc">Dedicated support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="visit-section">
          <div className="visit-icon">🎯</div>
          <h3>20+ Qualified Site Visits</h3>
          <p>
            We ensure qualified buyers visit your property and provide detailed 
            observation reports after every visit
          </p>
          <div className="visit-stats">
            <span>✓ Verified Buyers</span>
            <span>✓ Regular Updates</span>
            <span>✓ Feedback Reports</span>
          </div>
        </div>

      </div>
    </section>



      {/* Featured Properties */}
      <section className="featured">
        <h2 className="section-title">Featured Properties</h2>
        <div className="property-grid">
          {properties.map(prop => (
            <div key={prop.id} className="property-card">
              <img src={prop.img} alt={prop.title} loading="lazy" />
              <div className="property-info">
                <h3>{prop.title}</h3>
                <p className="price">{prop.price}</p>
                <div className="property-details">
                  {prop.beds && <span>🛏️ {prop.beds}</span>}
                  {prop.baths && <span>🛁 {prop.baths}</span>}
                  <span>📐 {prop.area}</span>
                  {prop.type && <span>🏢 {prop.type}</span>}
                </div>
                <Link to="/residential" className="btn-secondary">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AOP Signed Projects Section */}
      <section className="aop-projects">
        <div className="section-header">
          <h2 className="section-title">AOP Signed Projects</h2>
          <p>Premium Pune-based projects from India's most trusted developers</p>
        </div>
        <div className="aop-grid">
          {aopProjects.map((project) => (
            <div key={project.id} className="aop-card">
              <div className="aop-image">
                <img src={project.image} alt={project.name} />
                <div className="developer-badge">{project.developer}</div>
              </div>
              <div className="aop-content">
                <h3>{project.name}</h3>
                <p className="location">📍 {project.location}</p>
                <p className="project-type">{project.type}</p>
                <p className="description">{project.description}</p>
                <div className="price-tag">{project.price}</div>
                <div className="amenities-preview">
                  {project.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="amenity">{amenity}</span>
                  ))}
                </div>
                <button onClick={() => handleBooking(project)} className="book-btn">
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Carousel - Scrolling Logos */}
      <section className="builders-section">
  <h2>Our Partner Builders</h2>

  <div className="slider">
    <div className="slide-track">

      {partnerBuilders.concat(partnerBuilders).map((item, index) => (
        <div key={index} className="slide">
          <img src={item.logo} alt={item.name} />
        </div>
      ))}

    </div>
  </div>
</section>

      {/* Process Section */}
      <section className="process-section">
        <h2 className="section-title">Our Simple Process</h2>
        <p className="process-subtitle">We make your property journey seamless and transparent</p>
        <div className="process-steps">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {idx < processSteps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2 className="section-title">Why Choose MG Realtys</h2>
        <div className="features-grid">
          {whyUs.map((item, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Scrollable Animated Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-scroll-track">
            {testimonials.concat(testimonials).map((t, idx) => (
              <div key={idx} className="testimonial-card-scroll">
                <div className="testimonial-card-inner">
                  <div className="quote-mark">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 20C8 12.268 12.268 8 20 8C21.103 8 22 7.103 22 6C22 4.897 21.103 4 20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36H24V32H20C14.477 32 8 25.523 8 20Z" fill="#0A1F44" opacity="0.15"/>
                    </svg>
                  </div>
                  <p className="testimonial-text-scroll">{t.text}</p>
                  <div className="testimonial-footer">
                    <div className="client-info">
                      <div className="avatar">{t.name.charAt(0)}</div>
                      <div>
                        <strong className="client-name">{t.name}</strong>
                        <p className="client-location-scroll">{t.location}</p>
                      </div>
                    </div>
                    <div className="stars-scroll">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-scroll-gradient-left"></div>
          <div className="testimonial-scroll-gradient-right"></div>
        </div>
        <div className="scroll-indicator">
          <span>← Scroll for more testimonials →</span>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Find Your Perfect Property?</h2>
        <p>Let our experts guide you through Pune's best real estate opportunities.</p>
        <Link to="/contact" className="btn-primary">Get in Touch</Link>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeForm}>×</button>
            <div className="modal-header">
              <span className="modal-icon">🏠</span>
              <h2>Book Your Dream Property</h2>
            </div>
            <p className="modal-project">
              <span className="label">Selected Project:</span>
              <strong>{selectedProject?.name}</strong> by {selectedProject?.developer}
            </p>
            
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Booking Request Sent!</h3>
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
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>Confirm Booking via WhatsApp 💬</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Lead Generation Modal */}
      <LeadGenModal />
    </main>
  );
}

export default Home;