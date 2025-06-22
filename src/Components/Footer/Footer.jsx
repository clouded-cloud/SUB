import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
        
            <li>Financial Accounting</li>
            <li>Stock Intake</li>
          
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>MSANDUKU</li>
            <li>NAIROBI, LAVINGTON</li>
            <li>Phone: 0742462975</li>
            <li>Email: SUB@COMPANY.com</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SUB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;