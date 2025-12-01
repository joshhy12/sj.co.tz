import React from 'react';
import '../styles/App.css';

const testimonials = [
  {
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Jesica Johnson',
    position: 'CTO, TechSolutions Inc.',
    text: 'SJ Softwares completely transformed our digital infrastructure. Their blockchain integration reduced our transaction costs by 40% while improving security. The team\'s expertise in decentralized technologies is unmatched in the industry.',
    rating: 5
  },
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Michael Chen',
    position: 'Director, Global Retail',
    text: 'The AR-powered e-commerce platform SJ Softwares developed increased our conversion rates by 150% and reduced returns by 30%. Their ability to blend immersive technologies with practical business solutions is extraordinary.',
    rating: 5
  },
  {
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Emma Rodriguez',
    position: 'CEO, HealthPlus',
    text: 'Our AI-driven patient management system developed by SJ Softwares has revolutionized our operations. The predictive analytics capabilities have improved patient outcomes while reducing administrative workload by 45%.',
    rating: 4.5
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Client Experiences</h2>
          <p>
            Don't just take our word for it. Here's what industry leaders say
            about partnering with us.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card glass" key={index}>
              <div className="testimonial-text">
                {testimonial.text}
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;