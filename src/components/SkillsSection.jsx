import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Figma, Settings2 } from "lucide-react";

const skills = [
  { 
    category: "Tech Stack", 
    details: "MERN Stack, JWT, Tailwind CSS, REST APIs", 
    icon: <Settings2 className="w-6 h-6 text-red-400" />,
    floatingIcons: [
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png", x: "0%", y: "20%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png", x: "20%", y: "0%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png", x: "50%", y: "80%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png", x: "80%", y: "0%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png", x: "65%", y: "85%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png", x: "70%", y: "5%" },

    ],
  },
  { 
    category: "Languages", 
    details: "JavaScript, C, C++", 
    icon: <Code className="w-6 h-6 text-yellow-400" />,
    floatingIcons: [
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png", x: "20%", y: "0%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c.png", x: "60%", y: "5%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png", x: "75%", y: "20%" },

    ],
  },
  { 
    category: "Frontend Development", 
    details: "React.js, HTML5, CSS3 (Flexbox, Grid)", 
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    floatingIcons: [
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png", x: "5%", y: "25%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png", x: "45%", y: "35%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png", x: "75%", y: "20%" },
    ],
  },
  { 
    category: "Backend Development", 
    details: "Node.js, Express.js, MongoDB", 
    icon: <Database className="w-6 h-6 text-green-400" />,
    floatingIcons: [
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png", x: "30%", y: "0%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png", x: "70%", y: "5%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png", x: "0%", y: "20%" },

    ],
  },
  { 
    category: "Tools", 
    details: "Git, GitHub, Postman, VS Code", 
    icon: <Wrench className="w-6 h-6 text-gray-400" />,
    floatingIcons: [
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png", x: "0%", y: "30%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png", x: "20%", y: "5%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png", x: "70%", y: "15%" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/visual_studio_code.png", x: "90%", y: "10%" },
    ],
  },
  {
    category: "Design",
    details: "Figma, Visual Design",
    icon: <Figma className="w-6 h-6 text-pink-400" />,
    floatingIcons: [
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png", x: "30%", y: "0%" },
    ],
  }
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");
      if (skillsSection?.getBoundingClientRect().top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            className={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => {
              setActiveCategory(skill.category);
              setFloatingIcons(skill.floatingIcons || []);
            }}
            onMouseLeave={() => {
              setActiveCategory(null);
              setFloatingIcons([]);
            }}
          >
            <div
              className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-4 ${
                activeCategory === skill.category
                  ? "bg-gradient-to-r from-red-500/20 to-purple-500/20 scale-105"
                  : "bg-gray-800/50 hover:bg-gray-700/50"
              }`}
            >
              {/* Icon */}
              <div className="p-2 bg-gray-800/70 rounded-full">{skill.icon}</div>

              {/* Text */}
              <div>
                <h4 className="text-xl font-semibold text-red-400">{skill.category}</h4>
                <p className="text-gray-300">{skill.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Bubbles for Active Skill */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.img
            key={index}
            src={item.src}
            className="absolute w-20 h-20 p-2 bg-white/10 rounded-full shadow-md backdrop-blur-sm"
            style={{ top: item.y, left: item.x }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
