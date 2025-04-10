import React, { useEffect } from 'react';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import Portfolio from './components/Portfolio';
import ServicesPage from './components/ServicesPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

// ✅ Import your new Associates component
import AssociatesPage from './components/AssociatesPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='app-container'>
      <Navbar />

      <div id="hero">
        <HeroSlider />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="services">
        <ServicesPage />
      </div>

      {/* ✅ Associates Page */}
      <div id="associates">
        <AssociatesPage />
      </div>

      <div id="testimonials">
        <TestimonialsPage />
      </div>

      <div id="contact">
        <ContactPage />
      </div>

      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/9623082923" // 👈 Replace with your actual number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default App;