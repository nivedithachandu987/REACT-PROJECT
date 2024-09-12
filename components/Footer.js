// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons including GitHub
import { AiOutlineTwitter} from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 WebUniverse. All Rights Reserved.</p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/in/NivedithaBellamkonda" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com/in/NivedithaBellamkonda" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a>

          <a href="https://www.instagram.com/in/NivedithaBellamkonda" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/NivedithaBellamkonda" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.github.com/in/nivedithachandu987" target="_blank" rel="noopener noreferrer"><FaGithub /></a> {/* GitHub Icon */}
        </div>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Terms of Service</a></li>
          <li><a href="/contactus">Privacy Policy</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
       
      </div>
    </footer>
  );
};

export default Footer;
