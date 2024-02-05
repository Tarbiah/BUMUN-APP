// Footer.js

import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="connect-section">
        <p>Let's Connect:</p>
        <div className="social-icons">
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
        </div>
      </div>
      <div className="address-section">
        <p>Address:</p>
        <p>
          Bahria University (BSEAS) Islamabad H-11/4 Campus, Islamabad Capital Territory
          {' '}
          <a
            href="https://maps.app.goo.gl/brsQaTSKfvbGp5M27" // Replace with the actual coordinates or link
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer"
          >
            View on Map
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
