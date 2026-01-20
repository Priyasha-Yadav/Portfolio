import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Figma } from "lucide-react";

/* -------------------- DATA (STATIC) -------------------- */
const skills = [
  {
    category: "Languages",
    details: "JavaScript, C, C++",
    icon: <Code className="w-7 h-7" />,
    gradient: "from-yellow-500 to-orange-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/javascript.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/c.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/c++.png",
    ],
  },
  {
    category: "Frontend Development",
    details: "React, HTML5, CSS3",
    icon: <Layout className="w-7 h-7" />,
    gradient: "from-blue-500 to-cyan-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/react.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/html.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/css.png",
    ],
  },
  {
    category: "Backend Development",
    details: "Node.js, Express, MongoDB",
    icon: <Database className="w-7 h-7" />,
    gradient: "from-green-500 to-emerald-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/node_js.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/express.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/mongodb.png",
    ],
  },
  {
    category: "Tools",
    details: "Git, GitHub, Postman, VS Code",
    icon: <Wrench className="w-7 h-7" />,
    gradient: "from-gray-400 to-slate-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/git.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/github.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/postman.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/visual_studio_code.png",
    ],
  },
  {
    category: "Design",
    details: "Figma, UI/UX",
    icon: <Figma className="w-7 h-7" />,
    gradient: "from-pink-500 to-rose-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/figma.png",
    ],
  },
];

/* -------------------- ANIMATIONS -------------------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* -------------------- COMPONENT -------------------- */
const SkillsSection = () => {
  return (
    <section
      id="skills-section"
      className="
        relative py-20 px-4 sm:px-8 lg:px-16
        bg-gradient-to-b from-gray-900 to-black
      "
      aria-labelledby="skills-heading"
    >
      {/* Heading */}
      <motion.h2
        id="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          text-center text-4xl sm:text-5xl font-bold mb-4
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
          bg-clip-text text-transparent
        "
      >
        Skills & Expertise
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Technologies and tools I actively work with and enjoy building things in.
      </p>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
          gap-8
        "
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="
              relative p-6 rounded-2xl
              bg-gray-900/60 backdrop-blur-md
              border border-gray-800
              overflow-hidden
            "
          >
            {/* Hover glow */}
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-20
                bg-gradient-to-br ${skill.gradient}
                transition-opacity duration-500
              `}
            />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div
                className={`
                  p-4 rounded-xl
                  bg-gradient-to-br ${skill.gradient}
                  text-white shadow-lg
                `}
              >
                {skill.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.category}
                </h3>
                <p className="text-gray-400 text-sm">{skill.details}</p>
              </div>
            </div>

            {/* Tech Icons */}
            <div className="grid grid-cols-4 gap-4">
              {skill.icons.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  loading="lazy"
                  alt={`${skill.category} icon`}
                  className="
                    w-15 h-15 p-2
                    bg-white/10 rounded-xl
                    backdrop-blur-sm
                  "
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
