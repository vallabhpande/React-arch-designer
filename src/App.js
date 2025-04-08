import './App.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import Portfolio from './components/Portfolio';
import ServicesPage from './components/ServicesPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
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

      <div id="testimonials">
        <TestimonialsPage />
      </div>

      <div id="contact">
        <ContactPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;