import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sanjana-jayaram-m-435133235" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://medium.com/@sanjanajayaramm" target="_blank" rel="noopener noreferrer">
          <img src="medium-icon.png" alt="Medium" className="social-icon" />
        </a>
        <a href="https://github.com/SanjanaJayaramM93" target="_blank" rel="noopener noreferrer">
          <img src="github-icon.png" alt="GitHub" className="social-icon" />
        </a>
      </div>
      <p className="footer-text">© 2024 Sanjana Jayaram</p>
    </footer>
  );
};

export default Footer;
