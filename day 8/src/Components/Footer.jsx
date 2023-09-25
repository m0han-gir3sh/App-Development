import React from 'react';
import { Link } from 'react-router-dom';
import "../Assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 STUDENT INFORMATION MANAGEMENT SYSTEM. All rights reserved.</p>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
