import React from 'react';

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 85 },
  { name: 'MongoDB', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'PowerBI', level: 80 },
  { name: 'Git/GitHub', level: 90 },
  { name: 'Docker', level: 60 },
  { name: 'Figma', level: 70 },
  { name: 'VS Code', level: 90 },
  { name: 'Springboot', level: 90 },
  { name: 'Bootstrap', level: 90 }
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0d0d14] to-[#111]text-white px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-slate-400 text-sm">Technologies I’ve worked with</p>
        </div>

        {/* Grid of skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#111] rounded-xl shadow-md p-5"
            >
              <div className="flex justify-between mb-2 text-sm font-semibold">
                <span>{skill.name}</span>
                <span className="text-slate-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-blue-400 h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
