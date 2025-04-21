import React from 'react';
import './about.css';

const about = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">ABOUT US</h1>

        <p className="about-text">
          Welcome to the core of this neon-forged app. Designed with a futuristic edge,
          this system combines full-stack functionality with a vibrant, immersive UI.
          Think Q&A... but jacked into the matrix.
        </p>

        <p className="about-text">
          From dynamic voting systems to real-time updates and secured authentication, every
          piece of this project reflects a seamless fusion of design and engineering.
        </p>

        <p className="about-text">
          Whether you're here to ask, answer, or explore — this isn't just a platform,
          it's a cyber realm built for interaction.
        </p>

        <div className="about-tech">
          <h2 className="about-tech-title">⚙️ TECH STACK</h2>
          <ul className="about-tech-list">
            <li>React.js for Frontend UI</li>
            <li>Node.js + Express for Backend Logic</li>
            <li>MongoDB for Data Core</li>
            <li>JWT for Secure Authentication</li>
            <li>Tailwind CSS for Cyber Styling</li>
          </ul>
        </div>

        <div className="about-footer">
          Built by <span className="about-author">Coders </span> · 2025
        </div>
      </div>
    </section>
  );
};

export default about;
