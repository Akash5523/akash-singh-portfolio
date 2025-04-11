import React from 'react';

const Skills = () => {
  const skillCategories = {
    "Frontend": ["React", "HTML", "CSS", "JavaScript"],
    "Backend": ["Node.js", "Express", "Flask"],
    "Database": ["MongoDB", "PostgreSQL"],
    "Other": ["Git", "Docker", "CI/CD"]
  };

  return (
    <section className="skills py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold">{category}</h3>
              <ul className="list-disc ml-5">
                {skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;