import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const teamMembers = [
  {
    name: "Will Patton",
    role: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    image: "/images/team1.jpg",
  },
  {
    name: "Miles Robbins",
    role: "Analyst",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/team2.jpg",
  },
  {
    name: "Chris Jane",
    role: "Marketer",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: "/images/team3.jpg",
  },
];

const AboutSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      {teamMembers.map((member, index) => (
        <motion.div
          className={`team-member ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={member.image}
            alt={member.name}
            className="team-image"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div className="team-info">
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p>{member.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default AboutSection;