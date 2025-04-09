import React, { useEffect } from 'react';
import './AssociatesPage.css';
import Aos from 'aos';

const associatesData = [
  {
    name: 'Ar. Rajesh Patil',
    role: 'Senior Architect',
    image: '/images/associate1.jpg',
    description: 'With over 10 years of experience in commercial & residential projects.',
  },
  {
    name: 'Er. Sneha Kulkarni',
    role: 'Structural Engineer',
    image: '/images/associate2.jpg',
    description: 'Expert in RCC and steel structures, safety-first approach.',
  },
  {
    name: 'Ar. Mayur Desai',
    role: 'Interior Designer',
    image: '/images/associate3.jpg',
    description: 'Specializes in modern and minimalistic interior design.',
  },
  {
    name: 'Er. Priya Joshi',
    role: 'Project Manager',
    image: '/images/associate4.jpg',
    description: 'Manages multi-crore projects with efficiency and precision.',
  },
];

const AssociatesPage = () => {
      useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out',
        });
      }, []);
  return (
    <section className="associates-section" id="associates">
      <div className="section-title">
        <h2>Our Associates</h2>
        <p>Meet the professionals who make our projects a success</p>
      </div>

      <div className="associates-grid">
        {associatesData.map((associate, index) => (
          <div className="associate-card" key={index}>
            <img src={associate.image} alt={associate.name} />
            <div className="associate-info">
              <h3>{associate.name}</h3>
              <span className="role">{associate.role}</span>
              <p>{associate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssociatesPage;
