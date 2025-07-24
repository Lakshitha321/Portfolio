import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#0d0d14] to-[#111]dark:bg-slate-900 px-6 text-slate-800 dark:text-slate-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-blue-600 inline-block pb-2">
          Get In Touch
        </h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          I’m open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-10 mb-12">
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-blue-600 mb-2" />
            <p>kmclakshitha@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Linkedin className="h-8 w-8 text-blue-600 mb-2" />
            <p>@chamidu-lakshitha</p>
          </div>
          <div className="flex flex-col items-center">
            <Github className="h-8 w-8 text-blue-600 mb-2" />
            <p>@Lakshitha321</p>
          </div>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:kmclakshitha@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition"
          >
            <Mail className="h-5 w-5" />
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/chamidu-lakshitha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Lakshitha321"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
