// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import MandateSoleSelling from './pages/MandateSoleSelling';
import LuxurySales from './pages/LuxurySales';
import LandDealing from './pages/LandDealing';
import Blog from './pages/Blog';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  // Check if user has seen intro in this session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  // If intro hasn't been shown, show it regardless of URL
  if (showIntro) {
    return <Intro onComplete={handleIntroComplete} />;
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mandate-sole-selling" element={<MandateSoleSelling />} />
        <Route path="/luxury-sales" element={<LuxurySales />} />
        <Route path="/land-dealing" element={<LandDealing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;