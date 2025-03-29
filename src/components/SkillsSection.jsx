import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Tech Stack", details: "MERN Stack, JWT, Tailwind CSS, REST APIs" },
  { category: "Languages", details: "JavaScript, HTML5, CSS3, C, C++" },
  { category: "Frontend Development", details: "React.js, HTML5, CSS3 (Flexbox, Grid)" },
  { category: "Backend Development", details: "Node.js, Express.js, MongoDB" },
  { category: "Tools", details: "Git, GitHub, Postman, VS Code" },
  { category: "UI/UX Design", details: "Figma (UX, UI, Visual Design)" },
  { category: "Other", details: "Agile Methodologies, RESTful Web Services" },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // Remove TypeScript type annotation

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      if (skillsSection?.getBoundingClientRect().top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills-section" className="relative mb-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none"></div>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent shadow-lg"
      >
        Skills & Expertise
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setActiveCategory(skill.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div
              className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 ${activeCategory === skill.category ? 'bg-gradient-to-r from-red-500/20 to-purple-500/20 scale-105' : 'bg-gray-800/50 hover:bg-gray-700/50'}`}
            >
              <h4 className="text-xl font-semibold mb-3 text-red-400">{skill.category}</h4>
              <p className="text-gray-300">{skill.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
