import React, { useEffect } from "react";
import "./TestimonialsPage.css";
import Aos from "aos";

const testimonials = [
  {
    name: "Ravi Patil",
    role: "Client – 3BHK Home",
    message:
      "The architectural design exceeded our expectations. Their creativity and attention to detail turned our dream home into a reality!",
    rating: 5,
  },
  {
    name: "Shruti Deshmukh",
    role: "Interior Design Client",
    message:
      "Fantastic job on the interiors! Loved the modern touch blended with traditional elegance.",
    rating: 4,
  },
  {
    name: "Akshay Jadhav",
    role: "Office Renovation",
    message:
      "Very professional and responsive team. They transformed our office into a vibrant workspace. Highly recommended!",
    rating: 5,
  },
  {
    name: "Neha More",
    role: "Landscape Design",
    message:
      "Our garden looks like a dream! They designed a peaceful and eco-friendly space that my whole family enjoys.",
    rating: 4,
  },
];

const TestimonialsPage = () => {

    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    }, []);
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials 📣</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="stars">
              {Array.from({ length: t.rating }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-message">“{t.message}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;
