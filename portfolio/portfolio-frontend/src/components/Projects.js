import React, { useState } from "react";
import "./Projects.css";
import projectData from "./Project.json";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  // State to handle the visibility of project details
  const [visibleProjectId, setVisibleProjectId] = useState(null);

  const handleFilterChange = (tag) => {
    setFilter(tag);
    if (tag === "All") {
      setFilteredProjects(projectData);
    } else {
      setFilteredProjects(
        projectData.filter((project) => project.tags.includes(tag))
      );
    }
  };

  const toggleProjectDetails = (id) => {
    setVisibleProjectId(visibleProjectId === id ? null : id);
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <h2>PROJECTS</h2>
        <p>Current Filter: <strong>{filter}</strong></p>

        <div className="filter-buttons">
          <button className="btn-all" onClick={() => handleFilterChange("All")}>All</button>
          <button className="btn-cybersecurity" onClick={() => handleFilterChange("Cybersecurity")}>Cybersecurity</button>
          <button className="btn-webdev" onClick={() => handleFilterChange("Web Development")}>Web Development</button>
          <button className="btn-devops" onClick={() => handleFilterChange("DevOps")}>DevOps</button>
          <button className="btn-cloud" onClick={() => handleFilterChange("Cloud Computing")}>Cloud Computing</button>
          <button className="btn-threatmodeling" onClick={() => handleFilterChange("Threat Modeling")}>Threat Modeling</button>
          <button className="btn-react" onClick={() => handleFilterChange("React")}>React</button>
          <button className="btn-node" onClick={() => handleFilterChange("Node.js")}>Node.js</button>
          <button className="btn-python" onClick={() => handleFilterChange("Python")}>Python</button>
          <button className="btn-forensics" onClick={() => handleFilterChange("Forensics")}>Forensics</button>
          <button className="btn-dsa" onClick={() => handleFilterChange("DSA")}>DSA</button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => toggleProjectDetails(project.id)}>
              <div className="title">{project.title}</div>
              <p><strong>{project.type}</strong> | {project.date}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>

              {/* Show description and GitHub link only when the card is clicked */}
              {visibleProjectId === project.id && (
                <>
                  <p className="description"><strong>Description:</strong> {project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

