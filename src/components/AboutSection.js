import React from "react";
import "./AboutSection.css";

const teamMembers = [
    {
        id: 1,
        name: "Vallabh Patil",
        role: "Lead Architect",
        image:"",
        description: "Specialized in modern architectural designs with 5+ years of experience."
    },
    {
        id: 2,
        name: "Apurva Desai",
        role: "Interior Designer",
        image: "/images/member2.jpg",
        description: "Expert in minimalist and space-saving interior solutions."
    },
    {
        id: 3,
        name: "Raj More",
        role: "Structural Engineer",
        image: "/images/member3.jpg",
        description: "Ensures all designs are structurally sound and sustainable."
    },
    {
        id: 4,
        name: "Sneha Kulkarni",
        role: "Landscape Architect",
        image: "/images/member4.jpg",
        description: "Brings nature into design through beautiful outdoor spaces."
    },
];

const AboutSection = () => {
    return (
        <section className="about-team-section">
            <h2 style={{ textAlign: "center" }}
                className="portfolio-title">Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div className="team-card" key={member.id}>
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        <p className="team-description">{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;
