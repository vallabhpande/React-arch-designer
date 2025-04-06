import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Modern Villa Design',
    description: 'A luxurious villa with open space and modern aesthetics.',
    image: '/images/villa.jpg'
  },
  {
    id: 2,
    title: 'Corporate Office Space',
    description: 'Professional office layout with intelligent lighting.',
    image: '/images/office.jpg'
  },
  {
    id: 3,
    title: 'Urban Apartment',
    description: 'Minimalist design with smart use of space and light.',
    image: '/images/apartment.jpg'
  },
  {
    id: 4,
    title: 'Resort Interior',
    description: 'Elegant interiors for a cozy resort experience.',
    image: '/images/resort.jpg'
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <p className="portfolio-subtitle">A glimpse of our proud architectural work</p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card" onClick={() => setSelectedProject(project)}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-card-desc">{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="portfolio-modal" onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button onClick={() => setSelectedProject(null)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
