import React from 'react';
import { FaCode, FaPencilRuler, FaTasks } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient text-white px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Bio */}
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p className="text-xl font-semibold text-white">
              Passionate Web Developer 
            </p>
            <p>
              With my experience in web development, I specialize in creating responsive,
              accessible, and performant web applications using modern technologies.
            </p>
            <p>
              I'm passionate about creating elegant solutions to complex problems and constantly
              learning new technologies and techniques to stay at the forefront of the ever-evolving
              web landscape.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#contact"
                className="bg-blue-400 hover:bg-blue-800 text-white py-2 px-5 rounded-lg shadow-md transition"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-5 rounded-lg shadow-md transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#111827] p-6 rounded-xl shadow-lg border border-slate-800 hover:shadow-blue-600 transition">
              <FaCode className="text-blue-400 text-2xl mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Web Development</h3>
              <p className="text-slate-400 text-sm">
                Creating responsive websites and web apps using modern frameworks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111827] p-6 rounded-xl shadow-lg border border-slate-800 hover:shadow-blue-600 transition">
              <FaPencilRuler className="text-blue-400 text-2xl mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">UI/UX Design</h3>
              <p className="text-slate-400 text-sm">
                Designing intuitive user interfaces and seamless user experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111827] p-6 rounded-xl shadow-lg border border-slate-800 hover:shadow-blue-600 transition col-span-2 sm:col-span-1">
              <FaTasks className="text-blue-400 text-2xl mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Data Analytics</h3>
              <p className="text-slate-400 text-sm">
               Transforming complex data into actionable insights to drive strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional glowing particle background effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none">
        <div className="stars-pattern w-full h-full" />
      </div>
    </section>
  );
};

export default AboutSection;
