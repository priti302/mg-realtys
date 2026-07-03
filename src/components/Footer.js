// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from "../assets/logo.png";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! Welcome to MGRealtys. How can we help you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add user message
      const userMsg = {
        id: Date.now(),
        sender: 'user',
        text: newMessage.trim()
      };
      setChatMessages([...chatMessages, userMsg]);
      setNewMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botMsg = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'Thank you for your message. Our team will get back to you shortly. Meanwhile, you can call us at 86983 15802 for immediate assistance.'
        };
        setChatMessages(prev => [...prev, botMsg]);
      }, 1000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        
        <div className="footer-container">
          <div className="footer-section brand-section">
           {/* <h3 className="footer-logo">
  <img src={logo} alt="MGR Properties Logo" className="footer-logo-img" />
</h3> */}
            <p className="footer-desc">
              Trusted real estate consulting in Pune with 7+ years of experience.
              Your partner in finding the perfect property.
            </p>
            <div className="trust-badge">
              <span>✓ 5000+ Happy Clients</span>
              <span>✓ 200+ Properties Sold</span>
            </div>
            <div className="rera-certification">
              <p>🏛️ MAHA RERA Certified- A52100036539</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/home">🏠 Home</Link></li>
              <li><Link to="/about">📖 About Us</Link></li>
              <li><Link to="/services">⚡ Services</Link></li>
              <li><Link to="/contact">📞 Contact</Link></li>
              <li><Link to="/privacy-policy">🔒 Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-detail">
              <span className="contact-icon">📍</span>
              <p>Office no:-308, 2nd floor, 18  Lattitude Mall, Gaikwad Nagar Rd, Kate Wasti, Punawale, Pune, Pimpri-Chinchwad, Maharashtra 411033</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">📞</span>
              <p><a href="tel:8698315802">86983 15802</a></p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">✉️</span>
              <p><a href="mailto:mgrealtys01@gmail.com">mgrealtys01@gmail.com</a></p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">⏰</span>
              <p>Mon-Sun: 10am - 7pm <br /><span className="off-day">(Tuesday Closed)</span></p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/people/MG-Realtys/100083167276868/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon facebook">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/reel/DQBkhAjEbVt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mangesh-gawai-623465225?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                </svg>
              </a>
              
              <a href="https://www.youtube.com/@mgrealtys" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon youtube">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MGRealtys. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 4l-8 8h6v8h4v-8h6z"/>
          </svg>
        </button>
      )}

      {/* Live Chat Floating Button */}
      <div className="live-chat-container">
        <button 
          className="live-chat-btn" 
          onClick={toggleChat}
          aria-label="Live Chat"
        >
          <div className="chat-icon">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              <circle fill="currentColor" cx="12" cy="10" r="2"/>
              <circle fill="currentColor" cx="8" cy="10" r="2"/>
              <circle fill="currentColor" cx="16" cy="10" r="2"/>
            </svg>
            <span className="chat-notification">●</span>
          </div>
          <span className="chat-tooltip">Chat with us!</span>
        </button>

        {/* Chat Window */}
        {showChat && (
          <div className="chat-window">
            <div className="chat-header">
              <div className="chat-header-info">
                <span className="chat-avatar">💬</span>
                <div>
                  <h4>Live Chat</h4>
                  <p className="chat-status">Online</p>
                </div>
              </div>
              <button className="chat-close" onClick={toggleChat}>✕</button>
            </div>
            <div className="chat-messages">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                  <div className="message-bubble">
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button type="submit" className="chat-send-btn">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;