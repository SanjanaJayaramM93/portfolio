import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const location = useLocation();

  // Generate 100 random circles
  const generateCircles = () => {
    let circles = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() < 0.5 ? 'tiny' : 'small';
      const top = Math.random() * 100; 
      const left = Math.random() * 100; 
      const delay = Math.random() * 10; 
      circles.push(
        <div
          key={i}
          className={`circle ${size}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    return circles;
  };

  return (
    <div className="home-container" id="home">
      {/* Generate circles */}
      {generateCircles()}

      {location.pathname === "/" && (
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sanjana-jayaram-m-435133235" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://medium.com/@sanjanajayaramm" target="_blank" rel="noopener noreferrer">
            <img src="medium-icon.png" alt="Medium" className="social-icon" />
          </a>
          <a href="https://github.com/SanjanaJayaramM93" target="_blank" rel="noopener noreferrer">
            <img src="github-icon.png" alt="GitHub" className="social-icon" />
          </a>
        </div>
      )}

      <h1 className="home-title">HI, I AM Sanjana  </h1>
      <p className="home-description">
        I am a passionate Cybersecurity and Software Development enthusiast, specializing in web development, cloud technologies, and DevOps. With a keen eye for detail and a commitment to enhancing security, I aim to bring innovative solutions to complex challenges. Let’s connect and collaborate on exciting projects!
      </p>

      {/* Projects Button */}
      <a href="#projects" className="projects-button">PROJECTS</a>
    </div>
  );
};

export default Home;




