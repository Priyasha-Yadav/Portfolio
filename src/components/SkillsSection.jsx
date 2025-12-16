import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Figma } from "lucide-react";

const skills = [
  {
    category: "Languages",
    details: "JavaScript, C, C++",
    icon: <Code className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png",
    ],
  },
  {
    category: "Frontend Development",
    details: "React.js, HTML5, CSS3",
    icon: <Layout className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png",
    ],
  },
  {
    category: "Backend Development",
    details: "Node.js, Express.js, MongoDB",
    icon: <Database className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png",
    ],
  },
  {
    category: "Tools",
    details: "Git, GitHub, Postman, VS Code",
    icon: <Wrench className="w-8 h-8" />,
    color: "from-gray-400 to-slate-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/visual_studio_code.png",
    ],
  },
  {
    category: "Design",
    details: "Figma, Visual Design",
    icon: <Figma className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png",
    ],
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer (better than scroll listener)
  useEffect(() => {
    const section = document.getElementById("skills-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills-section"
      aria-labelledby="skills-heading"
      className="relative min-h-[90vh]  flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16
             bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >

      {/* Background overlay */}
      <div className="absolute bg-gradient-to-b from-gray-900 to-black pointer-events-none" />

      {/* Heading */}
      <motion.h3
        id="skills-heading"
        variants={fadeUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl text-center font-bold mb-4 inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient p-2 leading-[1.2]
"
      >
        Skills & Expertise
      </motion.h3>
        <p className="text-center mb-20">An overview of my technology stack and development tools, reflecting my skills, and hands-on experience.</p>

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative p-7 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-800 overflow-hidden"
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Header */}
              <div className="relative z-10 flex items-center gap-7">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-2xl`}
                >
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    {skill.category}
                  </h4>
                  <p className="text-gray-400 mt-1">{skill.details}</p>
                </div>
              </div>

              {/* Tech Icons */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mt-8 grid grid-cols-4 gap-5 opacity-0 group-hover:opacity-100"
              >
                {skill.icons.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    loading="lazy"
                    alt={`${skill.category} technology icon`}
                    className="w-16 h-16 p-3 bg-white/10 rounded-xl backdrop-blur-sm shadow-lg"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
