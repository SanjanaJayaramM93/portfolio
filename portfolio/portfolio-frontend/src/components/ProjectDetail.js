import React from "react";
import { useParams } from "react-router-dom";

// Sample data for demo (replace with API call)
const projects = [
  {
    id: 1,
    name: "Red Team Automated Hypothesis Tool",
    description: "A tool for automated threat detection and hypothesis generation.",
    technologies: ["Cybersecurity", "React", "Python"],
    githubLink: "https://github.com/your-repo-link1",
  },
  {
    id: 2,
    name: "EasyToDo Task Manager",
    description: "A task management application using Express.js and MongoDB.",
    technologies: ["Web Development", "Express.js", "MongoDB"],
    githubLink: "https://github.com/your-repo-link2",
  },
  {
    id: 3,
    name: "Freight Network Management",
    description: "React-based web app to manage truck logistics.",
    technologies: ["React", "Node.js", "Web Development"],
    githubLink: "https://github.com/your-repo-link3",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h4>Technologies:</h4>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDetail;
