import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm a <span className="highlight">Niveditha</span></h1>
          <p>I'm a highly motivated and detail-oriented web developer with a passion for building responsive, scalable, and maintainable applications. My expertise spans a wide range of technologies, including HTML, CSS, JavaScript, and React, allowing me to tackle complex projects with confidence and precision.<br/>(You can view my previous project)</p>
          
          <Link to="https://beautybrand.netlify.app/" className="btn-primary">View My Work</Link>

          {/* Social Icons Section */}
          <div className="social-iconss">
            <a href="https://github.com/nivedithachandu987" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/NivedithaBellamkonda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="2162afe3-116d-4aec-b22a-acdada99099e_3.jpeg" alt="Hero illustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
