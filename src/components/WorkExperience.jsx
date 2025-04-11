import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Nokia",
      role: "Software Engineer",
      timeline: "Jan 2022 - Present",
      contributions: [
        "Developed scalable web applications for internal tools.",
        "Automated deployment pipelines using CI/CD.",
        "Collaborated with cross-functional teams to deliver high-quality software."
      ]
    },
    {
      company: "Knoldus Inc.",
      role: "Software Developer",
      timeline: "Jul 2020 - Dec 2021",
      contributions: [
        "Built RESTful APIs for enterprise applications.",
        "Optimized database queries to improve performance.",
        "Mentored junior developers on best practices."
      ]
    }
  ];

  return (
    <section className="work-experience py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        {experiences.map(({ company, role, timeline, contributions }) => (
          <div key={company} className="mb-6">
            <h3 className="text-xl font-semibold">{role} at {company}</h3>
            <p className="text-sm text-gray-600">{timeline}</p>
            <ul className="list-disc ml-5 mt-2">
              {contributions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;