import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Modern Villa Design',
    description: 'A luxurious villa with open space and modern aesthetics.',
    image: '/images/villa.jpg',
  },
  {
    id: 2,
    title: 'Corporate Office Space',
    description: 'Professional office layout with intelligent lighting.',
    image: '/images/office.jpg',
  },
  {
    id: 3,
    title: 'Urban Apartment',
    description: 'Minimalist design with smart use of space and light.',
    image: '/images/apartment.jpg',
  },
  {
    id: 4,
    title: 'Resort Interior',
    description: 'Elegant interiors for a cozy resort experience.',
    image: '/images/resort.jpg',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <p className="portfolio-subtitle">A glimpse of our proud architectural work</p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="portfolio-card"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-card-desc">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="portfolio-modal"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="portfolio-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>
              <button onClick={() => setSelectedProject(null)} className="close-button">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;