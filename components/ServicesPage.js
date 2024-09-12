import React from 'react';
import './ServicesPage.css';

const services = [
  {
    title: 'Web Development',
    description: 'Creating modern, responsive, and high-performance websites tailored to your needs.',
    icon: '🌐',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines to drive more organic traffic.',
    icon: '🔍',
  },
  {
    title: 'Digital Marketing',
    description: 'Developing effective marketing strategies to promote your brand and increase engagement.',
    icon: '📈',
  },
  {
    title: 'Graphic Design',
    description: 'Designing visually stunning graphics to enhance your brand identity and appeal.',
    icon: '🎨',
  },
];

const testimonials = [
  {
    name: 'Mrunalini',
    feedback: 'The team delivered exceptional results for our web development project. Highly recommended!',
    role: 'CEO, Tech Solutions',
  },
  {
    name: 'Meghana',
    feedback: 'Outstanding SEO services that significantly improved our search engine rankings.',
    role: 'Marketing Manager, Creative Co.',
  },
  {
    name: 'Krishna',
    feedback: 'Their digital marketing strategies increased our brand visibility and engagement.',
    role: 'Founder, Brand Up',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <img src="./img/06375f36-b8e6-496e-a8cc-34b881138317_3.jpeg" alt="Services" className="services-image" />
        <h1>Our Services</h1>
        <p>Explore the wide range of services we offer to meet your needs.</p>
      </header>
      <section className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </section>
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss how we can help you achieve your goals.</p>
        <a href="/contactus" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
};

export default ServicesPage;
