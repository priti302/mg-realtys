// src/pages/Blog.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  useEffect(() => {
    document.title = "Real Estate Blog - MG Realtys | Property Buying Guides & Market Updates";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Expert real estate blog with property buying guides, investment tips, Pune market updates, and home-buying advice from MG Realtys.');
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Blog Categories
  const categories = ['All', 'Property Investment', 'Home Buying Guide', 'Pune Real Estate News', 'Area Guides', 'Home Loan Tips', 'Luxury Properties', 'Commercial Real Estate'];

  // Featured Blog Posts
  const featuredBlogs = [
    {
      id: 1,
      title: 'Top 10 Investment Properties in Pune 2024',
      excerpt: 'Discover the most promising real estate investment opportunities in Pune with expected ROI and market trends.',
      category: 'Property Investment',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80',
     
      content: 'Pune real estate market has shown tremendous growth over the past few years. With IT companies establishing their presence and infrastructure development projects underway, several areas have emerged as ideal investment destinations.\n\nTop Investment Locations:\n1. Hinjewadi - Home to major IT parks with excellent connectivity\n2. Baner - Residential hub with good amenities and schools\n3. Koregaon Park - Premium locality with luxury apartments\n4. Viman Nagar - Developing area with high appreciation potential\n5. Magarpatta - Planned township with modern infrastructure\n\nExpected ROI ranges from 8-12% annually depending on the location and property type. We recommend consulting with our expert team to identify properties that match your investment goals.'
    },
    {
      id: 2,
      title: 'Complete Home Buying Checklist for First-Time Buyers',
      excerpt: 'A comprehensive guide covering legal verification, documentation, property inspection, and negotiation tips.',
      category: 'Home Buying Guide',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
     
      content: 'Buying your first home is a significant decision. This comprehensive checklist will guide you through every step of the process.\n\nPre-Purchase Checklist:\n• Check your credit score and get pre-approved for loan\n• Determine your budget and savings\n• Research neighborhoods and localities\n• Check property title and legal documents\n• Get property inspected by experts\n• Verify RERA registration\n• Check for pending litigation\n• Review society/building approvals\n\nDuring Purchase:\n• Negotiate the best price\n• Get home insurance quote\n• Complete due diligence\n• Finalize loan documents\n• Register the property\n\nFollow this checklist carefully and don\'t hesitate to consult professionals at each stage.'
    },
    {
      id: 3,
      title: 'Pune Real Estate Market: Growth Trends & Future Outlook',
      excerpt: 'Latest market analysis, property price trends, and predictions for Pune\'s real estate sector in 2024.',
      category: 'Pune Real Estate News',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
     
      content: 'Pune\'s real estate sector has witnessed remarkable growth in 2024. With an influx of IT professionals and increasing infrastructure development, the property market continues to show strong fundamentals.\n\nMarket Trends:\n• Property prices increased by 12-15% year-over-year\n• High demand for 2-3 BHK apartments\n• Growing interest in co-working and commercial spaces\n• Surge in demand from investors and end-users\n• Rising trend of sustainable and green buildings\n\nFuture Outlook:\n• Expected growth of 10-12% in the next 2 years\n• Expansion of metro rail network will boost property values\n• Increasing demand in satellite cities\n• Growth in affordable housing segment\n\nThis is an excellent time to invest in Pune\'s real estate market for both end-users and investors.'
    }
  ];

  // All Blog Posts
  const allBlogs = [
    ...featuredBlogs,
    {
      id: 4,
      title: 'Hinjewadi IT Park Area Guide: Living & Investing',
      category: 'Area Guides',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Explore Hinjewadi - its connectivity, amenities, property prices, and why it\'s ideal for IT professionals.',
     
      content: 'Hinjewadi is one of Pune\'s most sought-after residential areas, known for its IT parks and modern infrastructure.\n\nConnectivity:\n• Direct connectivity to Pune International Airport\n• Well-connected via NH48 highway\n• Nearby railway stations for easy commute\n• Good public transportation options\n\nAmenities:\n• Multiple shopping malls and retail outlets\n• International schools and colleges\n• Hospitals and healthcare centers\n• Parks and recreational facilities\n• Restaurants and entertainment zones\n\nProperty Prices:\n• 1 BHK: ₹45-55 lakhs\n• 2 BHK: ₹65-80 lakhs\n• 3 BHK: ₹95-120 lakhs\n\nHinjewadi offers excellent value for living and investment with consistent appreciation.'
    },
    {
      id: 5,
      title: 'Home Loan Eligibility & Documentation Guide',
      category: 'Home Loan Tips',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Complete information on home loan eligibility criteria, required documents, and tips to get faster approval.',
     
      content: 'Understanding home loan eligibility and documentation requirements is crucial for a smooth approval process.\n\nEligibility Criteria:\n• Age: Typically 21-60 years\n• Income: Minimum monthly income of ₹25,000\n• Employment: Salaried or self-employed\n• Credit Score: Minimum 700 CIBIL score\n• Loan Amount: Up to 80-90% of property value\n\nRequired Documents:\n• PAN card and Aadhar card\n• Last 2 years tax returns\n• Last 6 months bank statements\n• Salary certificates and employment proof\n• Property documents and registration\n• Passport or driving license for ID verification\n\nTips for Faster Approval:\n• Maintain good credit score\n• Keep all documents ready\n• Apply to multiple banks for competitive rates\n• Consider pre-approval process\n• Provide complete and accurate information'
    },
    {
      id: 6,
      title: 'Luxury Properties in Koregaon Park: Investment Guide',
      category: 'Luxury Properties',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80',
      excerpt: 'Premium property investment in Koregaon Park with details on amenities, pricing, and expected returns.',
     
      content: 'Koregaon Park stands out as Pune\'s most prestigious residential locality, offering luxury living at its finest.\n\nLocation Highlights:\n• In the heart of Pune city\n• Close to business districts\n• Excellent school and hospital networks\n• High-end shopping and dining options\n• Surrounded by green spaces\n\nLuxury Amenities:\n• Spacious apartments with 4-5 BHK configurations\n• State-of-the-art fitness centers\n• Swimming pools and spa facilities\n• 24/7 security and surveillance\n• Concierge services\n• Parking facilities\n\nInvestment Potential:\n• Property prices range from ₹2-4 crore\n• Average annual appreciation: 10-12%\n• High rental yields: 3-4%\n• Premium end-users and investor interest\n• Strong resale value\n\nKoregaon Park is ideal for luxury living and premium investment opportunities.'
    },
    {
      id: 7,
      title: 'Commercial Real Estate Trends in Pune',
      category: 'Commercial Real Estate',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      excerpt: 'Latest trends in commercial property, office space demand, and investment opportunities in Pune.',
     
      content: 'Pune\'s commercial real estate sector is experiencing unprecedented growth with strong demand for office spaces.\n\nKey Trends:\n• Post-pandemic surge in office space demand\n• Growth of co-working spaces\n• Rise in commercial complexes in IT corridors\n• Increased demand for retail spaces\n• Development of business parks\n\nMarket Opportunities:\n• Office spaces in Hinjewadi and Baner\n• Retail shops in commercial hubs\n• Co-working space investment\n• Industrial warehouses in outskirts\n• Mixed-use developments\n\nExpected Returns:\n• Commercial properties: 8-10% annual appreciation\n• Retail spaces: 7-9% appreciation\n• Co-working: High rental yields 5-7%\n• Long-term leases provide stable income\n\nCommercial real estate offers attractive investment opportunities for savvy investors.'
    },
    {
      id: 8,
      title: 'Baner & Aundh: Best Residential Areas in Pune',
      category: 'Area Guides',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Comprehensive guide to living in Baner and Aundh with details on schools, hospitals, and property prices.',
       
      content: 'Baner and Aundh are rapidly developing residential areas in Pune, offering excellent living standards and investment potential.\n\nLocation Benefits:\n• Close to IT parks and business centers\n• Well-connected via highways and roads\n• Peaceful residential environment\n• Good weather and green surroundings\n• Growing infrastructure development\n\nEducational Institutions:\n• Multiple international and CBSE schools\n• Colleges and technical institutes\n• Educational hubs for children\n\nHealthcare Facilities:\n• Multi-specialty hospitals\n• Diagnostic centers\n• Clinics and medical facilities\n\nProperty Prices:\n• 1 BHK: ₹35-50 lakhs\n• 2 BHK: ₹55-75 lakhs\n• 3 BHK: ₹80-110 lakhs\n\nBaner and Aundh offer great value for families and first-time homebuyers.'
    },
    {
      id: 9,
      title: 'Investment Property Red Flags to Avoid',
      category: 'Property Investment',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80',
      excerpt: 'Know the warning signs when buying investment properties and how to avoid costly mistakes.',
     
      content: 'When investing in real estate, it\'s crucial to identify potential red flags that could lead to costly mistakes.\n\nLegal Red Flags:\n• Incomplete or unclear property documents\n• Disputes in property ownership\n• Pending litigation on the property\n• Unregistered plots or properties\n• Properties without RERA approval\n\nMarket Red Flags:\n• Suspiciously low prices compared to market\n• High percentage of vacant properties\n• Declining neighborhood development\n• Excessive promoter involvement\n• Poor builder reputation\n\nPhysical Red Flags:\n• Construction defects or structural issues\n• Poor water and electricity supply\n• Lack of maintenance in common areas\n• Inadequate parking and open spaces\n• Environmental concerns nearby\n\nFinancial Red Flags:\n• Builders demanding full payment upfront\n• No clear payment schedule\n• Hidden charges and additional costs\n• Unclear loan terms and conditions\n\nAlways conduct thorough due diligence before making any investment decision.'
    }
  ];

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: 'How do I choose the right property?',
      answer: 'Consider factors like location, connectivity, amenities, property type, budget, and future investment potential. Schedule a consultation with our experts for personalized guidance.'
    },
    {
      id: 2,
      question: 'Which area is best for investment in Pune?',
      answer: 'Popular investment areas include Hinjewadi, Baner, Koregaon Park, and Viman Nagar. The best choice depends on your budget, lifestyle, and investment goals. Contact us for tailored recommendations.'
    },
    {
      id: 3,
      question: 'What documents are required to buy a home?',
      answer: 'Required documents typically include PAN card, Aadhar, bank statements, proof of income, and property-related documents. Our team will guide you through the complete process.'
    },
    {
      id: 4,
      question: 'How much down payment is needed?',
      answer: 'Down payment typically ranges from 20-30% of property price, though some developers offer reduced down payments. This depends on the project and bank loan approval.'
    },
    {
      id: 5,
      question: 'What is RERA and why is it important?',
      answer: 'RERA (Real Estate Regulation Authority) regulates the real estate sector to protect consumer interests. It ensures transparency, timely delivery, and redressal of grievances.'
    }
  ];

  // Recent Posts
  const recentPosts = allBlogs.slice(0, 5);

  // Popular Posts
  const popularPosts = [
    allBlogs[0],
    allBlogs[1],
    allBlogs[2]
  ];

  // Filter blogs
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">Real Estate Insights & Property Buying Guides</h1>
          <p className="hero-subtitle">Expert advice, market updates, investment opportunities, and home-buying tips from MG Realtys.</p>
          
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </nav>

          {/* Search Bar */}
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search blogs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="featured-blogs-section">
        <div className="section-container">
          <h2 className="section-title">Featured Articles</h2>
          <div className="featured-grid">
            {featuredBlogs.map((blog) => (
              <article key={blog.id} className="featured-card">
                <div className="featured-image">
                  <img src={blog.image} alt={blog.title} />
                  <span className="category-badge">{blog.category}</span>
                </div>
                <div className="featured-content">
                  <h3>{blog.title}</h3>
                  <p className="excerpt">{blog.excerpt}</p>
                 
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedBlog(blog);
                      setShowModal(true);
                    }}
                    className="read-more"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section className="categories-section">
        <div className="section-container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="category-grid">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="blog-container">
        {/* Latest Articles */}
        <section className="latest-blogs-section">
          <div className="section-container">
            <h2 className="section-title">Latest Articles</h2>
            <div className="blogs-grid">
              {filteredBlogs.map((blog) => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} />
                    <span className="category-tag">{blog.category}</span>
                  </div>
                  <div className="blog-body">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <div className="blog-footer">
                      <div className="blog-info">
                        <span className="author-info">{blog.author}</span>
                        <span className="date-info">{blog.date}</span>
                      </div>
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedBlog(blog);
                          setShowModal(true);
                        }}
                        className="read-btn"
                      >
                        Read
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Search Widget */}
          <div className="sidebar-widget search-widget">
            <h4>Search Blog</h4>
            <div className="widget-search">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>🔍</button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="sidebar-widget">
            <h4>Recent Posts</h4>
            <ul className="posts-list">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="sidebar-widget">
            <h4>Popular Posts</h4>
            <ul className="posts-list">
              {popularPosts.map((post) => (
                <li key={post.id}>
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Widget */}
          <div className="sidebar-widget">
            <h4>Categories</h4>
            <ul className="category-list">
              {categories.filter(c => c !== 'All').map((cat, idx) => (
                <li key={idx}>
                  <button onClick={() => setSelectedCategory(cat)}>{cat}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Widget */}
          <div className="sidebar-widget">
            <h4>Tags</h4>
            <div className="tags-cloud">
              {['Real Estate', 'Pune', 'Investment', 'Home Buying', 'Property Market', 'RERA', 'Home Loan', 'Area Guide'].map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <h2>Get Weekly Property Insights</h2>
            <p>Subscribe to receive the latest real estate news, investment tips, and property updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="section-container">
          <h2>Looking for the Right Property in Pune?</h2>
          <p>Get expert guidance from MG Realtys and find properties that match your budget, lifestyle, and investment goals.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary">Schedule Consultation</Link>
            <Link to="/contact" className="cta-btn secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    {/* Blog Modal Popup */}
    {showModal && selectedBlog && (
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
          
          <div className="modal-image">
            <img src={selectedBlog.image} alt={selectedBlog.title} />
          </div>

          <div className="modal-body">
            <div className="modal-header">
              <span className="modal-category">{selectedBlog.category}</span>
             
            </div>

            <h2 className="modal-title">{selectedBlog.title}</h2>
            
            <div className="modal-excerpt">
              <p>{selectedBlog.excerpt}</p>
            </div>

            <div className="modal-text">
              {selectedBlog.content && selectedBlog.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="modal-actions">
              <Link to="/contact" className="modal-cta">Schedule Consultation</Link>
              <button className="modal-close-btn" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Blog;
