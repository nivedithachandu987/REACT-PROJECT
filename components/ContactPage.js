import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactPage.css';

function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccess(true);
    // Reset the form after submission if needed
    event.target.reset();
    // You can also add further form handling logic here (e.g., sending form data to a server)
  };

  return (
    <section className="contact-us">
      <div className="container">
        <div className="contact-image">
          <img src="./img/163e9f9d-6799-4e24-9831-21d38c34ddb8_0.jpeg" alt="Contact Us" />
        </div>
        <h1>Contact Us</h1>
        <p>
          Let’s connect! We're here to help, and we'd love to hear from you! Whether you have a question, comment, or just want to chat, you can reach out to us through the contact form of this page, or by phone, email, or social media.
        </p>
        <div className="contact-methods">
          <a href="https://example.com/support-chat" target="_blank" rel="noopener noreferrer" className="contact-method">
            <span role="img" aria-label="support">💬</span> Via Support Chat
          </a>
          <a href="tel:+1234567890" className="contact-method">
            <span role="img" aria-label="call">📞</span> +1 (234) 567-890
          </a>
          <Link to="#" className="contact-method">
            <span role="img" aria-label="email">📧</span> Via Email Form
          </Link>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-Mail" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Text" required></textarea>
          <button type="submit">Submit</button>
        </form>
        {isSuccess && (
          <div className="success-message">
            Your message has been sent successfully!
          </div>
        )}
        <div className="social-media">
          <p>Follow us on Social Media</p>
          <div className="social-icons">
            <a href="https://facebook.com/in/NivedithaBellamkonda" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com/in/Niveditha_Bellamkonda" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/in/NivedithaBellamkonda" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
