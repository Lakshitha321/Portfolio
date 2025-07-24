import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Inventory Management System',
    description:' Designed a CRUD-based inventory solution with user roles and login system.Implemented real-time inventory tracking and record management.Emphasized modularity, scalability, and clean UI/UX design.',
    technologies: ['React', 'Springboot', 'MySQL'],
    // liveUrl: '#',
    githubUrl: 'https://github.com/Lakshitha321/Inventory-Management-System.git',
    image: '/Inventory.png',
  },
  {
    title: ' SkillVerse Educational Application',
    description:'  Led development of the Marketplace Module with Spring Boot APIs.Built dynamic product listings, user profiles, and authentication system.Ensured seamless frontend-backend integration for a smooth user experience',
    technologies: ['React', 'Springboot', 'Firebase','MongoDB','Rest'],
    // liveUrl: '#',
    githubUrl: 'https://github.com/maha-gedara/spring-api/tree/lakshitha ',
    image: '/skillverse.png'
  },
  {
    title: 'Mediz Hospital Management System',
    description:
      ' Developed employee management features, including salary assignment and admindashboards. Created scalable REST APIs and intuitive user interfaces.Prioritized performance, maintainability, and clean architecture.',
    technologies: ['Node.js', 'Express', 'MongoDB','React'],
    // liveUrl: '#',
    githubUrl: 'https://github.com/maha-gedara/web-app/tree/lakshitha',
     githubUrl: ' https://github.com/maha-gedara/api/tree/Lakshitha',
    image: '/Dashboard.png',
  },
  {
    title: 'Book Management Application',
    description:'A modern React-TypeScript web app designed for managing and viewing book collections. It features a clean, mobile-responsive UI styled with Tailwind CSS. The application fetches book data from a backend REST API and provides a type-safe, component-driven frontend.',
    technologies: ['TypeScript', 'Tailwindcss', 'Node.js','React'],
    // liveUrl: '#',
    githubUrl: 'https://github.com/Lakshitha321/Book-Store',
    image: '/book.png',
  },
  {
    title: 'Genius Restuarent Management System',
    description:' Built staff management module including attendance tracking and salary calculation.Developed a responsive UI with real-time calculations and data visualization.Focused on smooth integration with backend for consistent data flow.',
    technologies: ['MongoDB', 'Express', 'Node.js','React','Bootstrap'],
    // liveUrl: '#',
    githubUrl: ' https://github.com/Novatech-Nexus/Genius-frontend/tree/feature/it22172082',
    image: '/staff details.png',
  },
  
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient text-white px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ title, description, technologies, liveUrl, githubUrl, image }) => (
          <div
            key={title}
            className="bg-[#111827] rounded-xl overflow-hidden shadow-md hover:shadow-purple-500/30 border border-slate-700 transition-all"
          >
            {/* Project Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />

            {/* Content */}
            <div className="p-6 text-left">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 text-blue-300 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-slate-400 text-sm mb-4">
                {description}
              </p>

              {/* Links */}
              <div className="flex gap-4 text-sm">
                {/* <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:underline"
                >
                  <FiExternalLink className="text-base" />
                  Live Demo
                </a> */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-300 hover:underline"
                >
                  <FiGithub className="text-base" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Button */}
      <br/>
      <div className="mt-16 text-center">
        <a
          href="https://github.com/Lakshitha321"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-md transition"
        >
          Check My GitHub →
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
