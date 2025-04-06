// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/your-image.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
        <h1 className="text-5xl font-bold mb-4">Designing Dreams into Reality</h1>
        <p className="text-xl mb-6">Professional Architectural Designs for Modern Living</p>
        <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300">View Portfolio</button>
      </div>
    </div>
  );
};

export default HeroSection;
