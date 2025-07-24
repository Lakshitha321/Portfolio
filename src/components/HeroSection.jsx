import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0d0d14] to-[#111] text-white relative overflow-hidden px-10 py-20 flex items-center">
      {/* Left Content */}
      <div className="z-10 relative max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          {typedText}
          <span className="blinking-cursor text-blue-500">|</span>
        </h1>
        <p className="text-gray-400 max-w-xl mb-30 ">
          I specialize in building full-stack web applications that are scalable, responsive, and user-friendly.
          With experience across the MERN stack and modern development tools, I bridge the gap between elegant UI
          and robust backend logic.
        </p>
        <p className="text-sm text-gray-500">
          Passionate about solving real-world problems through clean code, innovation, and continuous learning.
        </p>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none select-none">
        <img
          src="\web.png"
          alt="Profile Visual"
          className="object-cover h-full w-full opacity-80 grayscale mix-blend-screen"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-800/30 to-black/70 z-0" />

      {/* Cursor Animation */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
