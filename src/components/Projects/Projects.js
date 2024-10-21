// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    name: "Covid Treatment Project at CVS Health",
    description: "Our application aimed to stramline vaccine appointments scheduling, reduce wait times, and provide a seamless user experience",
    url: "https://github.com/yourgithub/project1",
  },
  {
    name: "Covid Immunization at Walgreens",
    description: "This application is to schedule Covid-19 and Flu vaccine appointments",
    url: "https://github.com/yourgithub/project2",
  },
  {
    name: "Pacific Gas and Electric company Home page",
    description: "This aaplication is to create a new service or managing existing service of home power bill",
    url: "https://github.com/yourgithub/project2",
  },
  {
    name: "Citi group internal application",
    description: "This application is to calclate merit and bonus information of all officers",
    url: "https://github.com/yourgithub/project2",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
