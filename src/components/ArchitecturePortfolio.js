// ArchitecturePortfolio.jsx
import React, { useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Modern Home Design",
    category: "Home",
    image: "https://via.placeholder.com/300x200?text=Home+Design",
    description: "A contemporary home with open spaces and natural lighting.",
  },
  {
    id: 2,
    title: "Corporate Office",
    category: "Office",
    image: "https://via.placeholder.com/300x200?text=Office+Design",
    description: "Sleek glass facade with minimalistic interiors.",
  },
  {
    id: 3,
    title: "Luxury Flat",
    category: "Flat",
    image: "https://via.placeholder.com/300x200?text=Flat+Design",
    description: "Spacious flat with modern amenities and balcony view.",
  },
  {
    id: 4,
    title: "Commercial Building",
    category: "Building",
    image: "https://via.placeholder.com/300x200?text=Building+Design",
    description: "Multi-floor building suited for retail and offices.",
  },
];

export default function ArchitecturePortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-card"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <h3 className="portfolio-name">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-description">{selectedProject.description}</p>
            <button className="close-button" onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
