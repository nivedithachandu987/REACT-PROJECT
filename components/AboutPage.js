import React, { useState, useEffect } from 'react';
import './AboutPage.css';

const images = [
  './img/f25bce3a-2acf-4f89-8e34-99831d44d035_3.jpeg',
  './img/33de56aa-6f93-4160-97f9-a37d9e0d2db8_0.jpeg',
  
  // Add more images if needed
];

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-section">
      {/* Hero Section with Image Carousel */}
      <section className="hero-section">
        <div className="carousel-image">
          <img src={images[currentImageIndex]} alt="Carousel" />
        </div>
        <div className="carousel-content">
          <h1>About Us</h1>
          <p>Dedicated to excellence in every aspect of our work, ensuring your satisfaction.Building a future of success through quality services and strategic partnerships.</p>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="details-section">
        <div className="detail-card">
          <h2>Our Mission</h2>
          <p>To empower individuals and organizations with cutting-edge solutions that drive success.</p>
        </div>
        <div className="detail-card">
          <h2>Our Vision</h2>
          <p>To be recognized as the global leader in our industry, setting new standards for quality and innovation.</p>
        </div>
        <div className="detail-card">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Customer Focus</li>
          </ul>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="./img/ceo1.jpg" alt="Member 1" />
            <h3>Mrunalini</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="./img/Apoorv-Kumar-CTO-.jpg" alt="Member 2" />
            <h3>Kumar</h3>
            <p>CTO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or need more information, <a href="/contactus">contact us</a>.</p>
      </section>
    </div>
  );
};

export default AboutPage;