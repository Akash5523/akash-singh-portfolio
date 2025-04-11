import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects.",
      techStack: ["React", "Tailwind CSS", "Webpack"]
    },
    {
      name: "Automation Tool",
      description: "Developed an automation tool to streamline deployment processes.",
      techStack: ["Node.js", "Docker", "CI/CD"]
    }
  ];

  return (
    <section className="projects py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(({ name, description, techStack }) => (
            <div key={name} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm mt-2">{description}</p>
              <p className="text-sm mt-2 font-semibold">Tech Stack: {techStack.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;