
import React, { useState, useEffect } from 'react';

import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppChannelButton from './components/WhatsAppChannelButton';
import SEO from './components/SEO';

import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import MandateSoleSelling from './pages/MandateSoleSelling';
import LuxurySales from './pages/LuxurySales';
import LandDealing from './pages/LandDealing';
import Blog from './pages/Blog';

import './App.css';

// SEO information for all website pages
const seoData = {
  "/home": {
    title: "Property Consultant in Pune & PCMC | MG Realtys",
    description:
      "Find residential and commercial properties, 2 BHK and 3 BHK flats, new projects and investment opportunities in Pune and PCMC with MG Realtys.",
    canonical: "/home"
  },

  "/about": {
    title: "About MG Realtys | Property Consultants in Pune",
    description:
      "Learn about MG Realtys, our real estate consulting services, property expertise and commitment to helping buyers make confident property decisions.",
    canonical: "/about"
  },

  "/services": {
    title: "Real Estate Consulting Services in Pune | MG Realtys",
    description:
      "Explore residential property consulting, commercial property solutions, luxury sales, land dealing and real estate project marketing services.",
    canonical: "/services"
  },

  "/residential": {
    title: "Residential Properties in Pune & PCMC | MG Realtys",
    description:
      "Explore residential properties, 2 BHK and 3 BHK flats, new launch projects and ready-to-move homes in Pune and PCMC.",
    canonical: "/residential"
  },

  "/commercial": {
    title: "Commercial Properties in Pune & PCMC | MG Realtys",
    description:
      "Discover commercial properties, office spaces and investment opportunities in Pune and Pimpri-Chinchwad with MG Realtys.",
    canonical: "/commercial"
  },

  "/mandate-sole-selling": {
    title: "Real Estate Project Marketing & Sole Selling Pune | MG Realtys",
    description:
      "Explore real estate project marketing, mandate services, sole selling and property sales solutions for developers in Pune and PCMC.",
    canonical: "/mandate-sole-selling"
  },

  "/luxury-sales": {
    title: "Luxury Properties in Pune | MG Realtys",
    description:
      "Explore premium residential properties and luxury real estate opportunities in Pune with MG Realtys.",
    canonical: "/luxury-sales"
  },

  "/land-dealing": {
    title: "Land Dealing & Development Opportunities Pune | MG Realtys",
    description:
      "Explore land dealing, property development opportunities and real estate consultation in Pune and PCMC with MG Realtys.",
    canonical: "/land-dealing"
  },

  "/blog": {
    title: "Real Estate Blogs & Property Guides Pune | MG Realtys",
    description:
      "Read property buying guides, Pune real estate market insights, residential investment tips and property updates from MG Realtys.",
    canonical: "/blog"
  },

  "/contact": {
    title: "Contact MG Realtys | Property Consultant in Pune",
    description:
      "Contact MG Realtys for residential and commercial property consultation, property enquiries and real estate assistance in Pune and PCMC.",
    canonical: "/contact"
  },

  "/privacy-policy": {
    title: "Privacy Policy | MG Realtys",
    description:
      "Read the privacy policy of MG Realtys to understand how website information and customer enquiries are handled.",
    canonical: "/privacy-policy",
    noIndex: true
  }
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const location = useLocation();

  const currentSEO =
    seoData[location.pathname] || seoData["/home"];

  // Check intro status
  useEffect(() => {
    const hasSeenIntro =
      sessionStorage.getItem('hasSeenIntro');

    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  return (
    <>
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
        canonical={currentSEO.canonical}
        noIndex={currentSEO.noIndex}
      />

      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <div className="App">

          <ScrollToTop />

          <Navbar />

          <Routes>

            <Route
              path="/"
              element={<Navigate to="/home" replace />}
            />

            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/blog" element={<Blog />} />

            <Route
              path="/mandate-sole-selling"
              element={<MandateSoleSelling />}
            />

            <Route
              path="/luxury-sales"
              element={<LuxurySales />}
            />

            <Route
              path="/land-dealing"
              element={<LandDealing />}
            />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/residential"
              element={<Residential />}
            />

            <Route
              path="/commercial"
              element={<Commercial />}
            />

            <Route
              path="*"
              element={<Navigate to="/home" replace />}
            />

          </Routes>

          <Footer />

          <WhatsAppChannelButton />

        </div>
      )}
    </>
  );
}

export default App;
