import React from "react";
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-container">

                <div className="footer-section about" data-aos="fade-right">
                    <img src="/logo.png" alt="Logo" className="footer-logo" />
                    <h3>Vallabh Designs</h3>
                    <p>Bringing your dream spaces to life with innovative architecture, planning, and design.</p>
                </div>

                <div className="footer-section links" data-aos="fade-up">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section contact" data-aos="fade-left">
                    <h4>Contact</h4>
                    <p>
                        <a href="tel:+919876543210" className="footer-contact-link">
                            <FaPhoneAlt style={{ marginRight: '8px' }} />
                            +91 98765 43210
                        </a>
                    </p>
                    <p>
                        <a href="mailto:vallabhpande79@gmail.com" className="footer-contact-link">
                            <FaEnvelope style={{ marginRight: '8px' }} />
                            vallabhpande79@gmail.com
                        </a>
                    </p>
                </div>

                <div className="footer-section social" data-aos="zoom-in">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Shreejay Architect & Associates.
            </div>
        </footer>
    );
};

export default Footer;
