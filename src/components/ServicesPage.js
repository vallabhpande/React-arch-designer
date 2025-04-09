import React, { useEffect } from "react";
import { FaDraftingCompass, FaCubes, FaProjectDiagram, FaHammer, FaUserTie, FaBuilding, FaTree } from "react-icons/fa";

import "./ServicesPage.css";
import Aos from "aos";
// Architecture Design , 3D Elevation , Project Planning , Renovation & Remodeling , Freelancing , BPMS (Building Project Management System) , Landscape Architecture Generator
const services = [
    {
      title: "Architecture Design",
      icon: <FaDraftingCompass size={40} className="icon" />,
      description:
        "Creative and sustainable architectural solutions tailored to your vision and functionality.",
    },
    {
      title: "3D Elevation",
      icon: <FaCubes size={40} className="icon" />,
      description:
        "Realistic 3D elevation designs to visualize your dream before construction begins.",
    },
    {
      title: "Project Planning",
      icon: <FaProjectDiagram size={40} className="icon" />,
      description:
        "Detailed planning from start to finish ensuring your project is delivered on time and on budget.",
    },
    {
      title: "Freelancing",
      icon: <FaUserTie size={40} className="icon" />,
      description:
        "Hire us for freelance design and consultancy tailored to your personal or business needs.",
    },
    {
      title: "BPMS (Building Project Management System)",
      icon: <FaBuilding size={40} className="icon" />,
      description:
        "Track budget, timelines, team coordination and real-time progress through our custom management system.",
    },
    {
      title: "Landscape Architecture Generator",
      icon: <FaTree size={40} className="icon" />,
      description:
        "Design beautiful, eco-friendly outdoor spaces using AI-powered landscape planning tools.",
    },
  ];
  

const ServicesPage = () => {

  useEffect(() => {
      Aos.init({
        duration: 1000,      // animation duration
        once: true,          // animation only once per scroll
        easing: 'ease-in-out',
      });
    }, []);

    return (
        <section className="services-section">
            <h2 className="services-title">Our Services</h2>
            <div className="services-grid">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className={`service-card ${idx >= 4 ? "centered-card" : ""}`}
                    >
                        {service.icon}
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesPage;