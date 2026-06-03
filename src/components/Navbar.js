// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on location change
  useEffect(() => {
    closeMenu();
    setShowDropdown(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
       <Link to="/home" className="nav-logo">
  <img src={logo} alt="MGR Properties Logo" className="logo-img" />
</Link>
        

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <span className="nav-link-text">Home</span>
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <span className="nav-link-text">About</span>
            </NavLink>
          </li>
          
          <li 
            className={`nav-item dropdown ${showDropdown ? 'hover' : ''}`}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="nav-link dropdown-toggle">
              <span className="nav-link-text">Services</span>
              <span className="dropdown-arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
              <li>
                <Link 
                  to="/residential" 
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon">🏠</span>
                  Residential Consulting
                </Link>
              </li>
              <li>
                <Link 
                  to="/commercial" 
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon">🏢</span>
                  Commercial Consulting
                </Link>
              </li>
              <li>
                <Link 
                  to="/mandate-sole-selling" 
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon">🔑</span>
                  Mandate & Sole Selling
                </Link>
              </li>
              <li>
                <Link 
                  to="/luxury-sales" 
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon">✨</span>
                  Luxury Sales
                </Link>
              </li>
              <li>
                <Link 
                  to="/land-dealing" 
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon">🌱</span>
                  Land Dealing
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="nav-item">
            <NavLink 
              to="/blog" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <span className="nav-link-text">Blog</span>
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <span className="nav-link-text">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;