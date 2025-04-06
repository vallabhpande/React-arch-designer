import React from "react";
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section about">
                    <img src="/logo.png" alt="Logo" className="footer-logo" /> {/* LOGO */}
                    <h3>Vallabh Designs</h3>
                    <p>Bringing your dream spaces to life with innovative architecture, planning, and design.</p>
                </div>


                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact</h4>
                    <p><FaPhoneAlt /> +91 98765 43210</p>
                    <p><FaEnvelope /> vallabhpande79@gmail.com</p>
                </div>

                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Vallabh Designs. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;