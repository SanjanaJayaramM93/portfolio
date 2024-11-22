import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isToggled, setIsToggled] = useState(false);

  // Automatic toggling every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsToggled((prev) => !prev); // Toggle the image every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="about-container">
      {/* Left Half: Image + Text Section */}
      <div className="left-half">
        <div className="about-image">
          <img
            src={isToggled ? "/computer.jpg" : "/girl.png"} // paths for images
            alt="AI Generated"
          />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I’m Sanjana Jayaram Mottemmal, an Electronics and Communication Engineer turned IT professional with over 5 years of experience in IT support, system administration, and web development. My journey into technology has been fueled by a passion for problem-solving and a desire to make a difference.
          </p>
          <p>
            After completing my Master of Computing (Cybersecurity) at Curtin University, I expanded my expertise into <strong>cybersecurity, DevOps, and data science,</strong> embracing the challenge of securing systems and building solutions for real-world problems.
          </p>
          <p>
            Programming is not just my profession—it’s my creative outlet. Beyond technology, I enjoy writing, sharing knowledge on Medium, reading, and exploring creative hobbies like crafting. Every step of my journey has been about bridging gaps, learning new things, and making meaningful contributions. Let’s connect to share ideas, collaborate, and build something amazing!
          </p>
        </div>
      </div>

      {/* Skills Section  */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-cards">
          {/* Programming Languages */}
          <div className="skills-card">
            <h3>Languages</h3>
            <ul>
              <li><img src="/python.png" alt="Python Logo" className="skill-logo" /> Python</li>
              <li><img src="/java-script.png" alt="JavaScript Logo" className="skill-logo" /> JavaScript</li>
              <li><img src="/c-.png" alt="C++ Logo" className="skill-logo" /> C++</li>
              <li><img src="/c-sharp.png" alt="C# Logo" className="skill-logo" /> C#</li>
              <li><img src="/php.png" alt="PHP Logo" className="skill-logo" /> PHP</li>
            </ul>
          </div>

          {/* Cyber Security */}
          <div className="skills-card">
            <h3>Cyber Security</h3>
            <ul>
              <li><img src="/splunk.jpeg" alt="Splunk Logo" className="skill-logo" /> Splunk</li>
              <li><img src="/Wazuh.png" alt="Wazuh Logo" className="skill-logo" /> Wazuh</li>
              <li><img src="/openvas.png" alt="OpenVAS Logo" className="skill-logo" /> OpenVAS</li>
              <li><img src="/autopsy.jpg" alt="Autopsy Logo" className="skill-logo" /> Autopsy</li>
              <li><img src="/Qualys.jpeg" alt="Qualys Logo" className="skill-logo" /> Qualys</li>
            </ul>
          </div>

          {/* Pen Testing */}
          <div className="skills-card">
            <h3>Pen Testing</h3>
            <ul>
              <li><img src="/Burp Suite.png" alt="Burp Suite Logo" className="skill-logo" /> Burp Suite</li>
              <li><img src="/nmap.jpeg" alt="Nmap Logo" className="skill-logo" /> Nmap</li>
              <li><img src="/OWASPZAP.jpeg" alt="OWASP ZAP Logo" className="skill-logo" /> OWASP ZAP</li>
              <li><img src="/Metasploit.png" alt="Metasploit Logo" className="skill-logo" /> Metasploit</li>
              <li><img src="/Mimikatz.jpeg" alt="Mimikatz Logo" className="skill-logo" /> Mimikatz</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="skills-card">
            <h3>Web Development</h3>
            <ul className="skills-list">
              <li><img src="react.png" alt="React Logo" className="skill-logo" /> React.js</li>
              <li><img src="node.png" alt="Node.js Logo" className="skill-logo" /> Node.js</li>
              
              <li><img src="django.png" alt="Django Logo" className="skill-logo" /> Django</li>
              <li><img src="angular.jpeg" alt="Angular Logo" className="skill-logo" /> Angular</li>
              <li><img src="next.png" alt="Next.js Logo" className="skill-logo" /> Next.js</li>
              <li><img src="Laravel.png" alt="Laravel Logo" className="skill-logo" /> Laravel</li>
            </ul>
          </div>
                  
        </div>
      </div>
    </div>
  );
};

export default About;










