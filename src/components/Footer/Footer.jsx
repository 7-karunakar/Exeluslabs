// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../../assets/chem.png'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section with Logo on Top */}
        <div className="footer-section about">
          <img src={logo} alt="Exelus Labs Logo" className="footer-logo" />
          <h3>Exelus Labs</h3>
          <p>
            Leading provider of high-quality chemical reference standards,
            impurities, and stable isotopes for pharmaceutical research.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Contact Us">Contact Us</a></li>
            <li><a href="/About Us">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>
            <i className="fas fa-envelope"></i>&nbsp;
            <a href="mailto:info@exeluslabs.com?subject=Inquiry&body=Hello%20Exelus%20Labs,">info@exeluslabs.com</a>

          </p>
          <p>
            <i className="fas fa-phone"></i>&nbsp;
            <a href="tel:+917989540212">+91-79895-40212</a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>&nbsp;
            <a href="https://maps.app.goo.gl/22jL8jTjBt5pdRoBA" target="_blank" rel="noopener noreferrer">
              Hyderabad, India
            </a>
          </p>
          <p className="contact-snippet">
            Certified ISO 9001:2015 | Serving clients in 20+ countries
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/exelus_labs?igsh=MXEyeWU2bXF0NHdhcg==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/exelus-labs-private-limited-1/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Exelus Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
