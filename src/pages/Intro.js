// src/pages/Intro.jsx
import React, { useEffect, useState } from 'react';
import './Intro.css';

function Intro({ onComplete }) {
  const [animationState, setAnimationState] = useState('initial');
  const [displayText, setDisplayText] = useState('');
  const fullText = "Welcome to MG Realtys.";
  const subText = "Trusted Real Estate Consultant in Pune | 7+ Years Experience";
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    document.title = "MG Realtys - Premier Real Estate Consultants in Pune";
    
    // Update meta tags for SEO
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'MG Realtys offers expert real estate consulting in Pune. Residential & commercial properties with 7+ years of trusted experience.');

    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'MG Realtys - Premier Real Estate Consultants');

    // Typing animation for main title
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setAnimationState('typingComplete');
        // Start subtitle typing after main title completes
        startSubtitleTyping();
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const startSubtitleTyping = () => {
    let currentSubIndex = 0;
    const subInterval = setInterval(() => {
      if (currentSubIndex <= subText.length) {
        setSubIndex(currentSubIndex);
        currentSubIndex++;
      } else {
        clearInterval(subInterval);
        setAnimationState('complete');
      }
    }, 30);
  };

  const handleEnter = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="intro-container">
      <div className="animated-bg"></div>
      <div className="intro-overlay"></div>
      
      <div className="intro-content">
        <div className="glow-effect"></div>
        
        <h1 className="intro-title">
          {displayText}
         
        </h1>
        
        <p className={`intro-subtitle ${animationState === 'complete' ? 'show' : ''}`}>
          {subText.slice(0, subIndex)}
          {subIndex < subText.length && <span className="cursor-thin">|</span>}
        </p>

        <div className={`intro-locations ${animationState === 'complete' ? 'show' : ''}`}>
          <p>We offers services in these locations:</p>
          <ul>
            <li>Maharashtra</li>
            <li>Delhi, Gurgaon</li>
            <li>Dubai</li>
            <li>Bangalore</li>
          </ul>
        </div>
        
        <button 
          onClick={handleEnter} 
          className={`intro-btn ${animationState === 'complete' ? 'show' : ''}`}
        >
          <span className="btn-text">Enter Website</span>
          <span className="btn-glow"></span>
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <div className="arrow-down"></div>
      </div>
    </div>
  );
}

export default Intro;