import { useState } from 'react';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categorizedProjects = {
    "Full-Stack Projects": [
      {
        title: "Jobmentum [ Job Portal ]",
        description: "A dynamic job portal connecting job seekers with recruiters, offering real-time job postings and applications.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166559/Screenshot_2025-03-05_at_2.51.41_PM_uhhicu.png",
        tags: ["MERN", "JWT", "Render", "Netlify", "Multer"],
        url: "https://jomentum.netlify.app"
      },

    ],
    "APIs": [
      {
        title: "LeafDaily",
        description: "API [Eco points] sustainability tracking platform encouraging eco-friendly habits through gamification.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Backend", "Node.js", "Express.js"],
        url: "https://documenter.getpostman.com/view/39189648/2sAYX3sjFp"
      },
      {
        title: "Instagram-Inspired API",
        description: "REST API for a social media platform with user authentication, posts, likes, and comments.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Backend", "Node.js", "Express.js", "MongoDB"],
        url: "https://github.com/Priyasha-Yadav/Instagram-Inspired-API"
      },
      {
        title: "Students API",
        description: "An API to manage student records, including authentication, CRUD operations, and performance tracking.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Backend", "Node.js", "Express.js", "MongoDB"],
        url: "https://github.com/Priyasha-Yadav/Students-API"
      }
    ],
    "Clones": [
      // {
      //   title: "Gmail Clone",
      //   description: "A functional Gmail replica built using React.js and Firebase for authentication and storage.",
      //   image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      //   tags: ["React.js", "Firebase", "Tailwind CSS", "Redux"],
      //   url: "https://gmail-clone.com"
      // },
      {
        title: "YouTube Clone",
        description: "A responsive YouTube clone fetching data via YouTube's API with modern UI and video playback.",
        image: "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Youtube.png?raw=true",
        tags: ["React.js", "YouTube API"],
        url: "https://youtube-vite.netlify.app"
      },
      {
        title: "Target E-commerce Static Clone",
        description: "A static front-end clone of Target's e-commerce platform with HTML, CSS, and JavaScript.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166578/Screenshot_2025-03-05_at_11.08.09_AM_iz39v1.png",
        tags: ["CSS", "HTML", "JavaScript"],
        url: "https://targetclonecg.netlify.app"
      }
    ],
    "Mini Projects": [
      {
        title: "Tic Tac Toe",
        description: "A simple yet interactive Tic Tac Toe game built using HTML CSS JavaScript.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166557/Screenshot_2025-03-05_at_2.48.51_PM_sxnozm.png",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://tic-tac-toe-py.netlify.app"
      },
      {
        title: "Ludo Static Page",
        description: "A visually appealing static page replicating the Ludo board design using HTML & CSS.",
        image: "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/ludo.png?raw=true",
        tags: ["HTML", "CSS"],
        url: "https://github.com/Priyasha-Yadav/Task/tree/main/Frontend_Task"
      },
      {
        title: "Static Sudoku",
        description: "A visually appealing static page replicating the Sudoku board design using HTML & CSS.",
        image: "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Sudoku.png?raw=true",
        tags: ["JavaScript", "HTML", "CSS"],
        url: "https://github.com/Priyasha-Yadav/Task/tree/main/Frontend_Task"
      },
      // {
      //   title: "Amazon Landing Page Clone",
      //   description: "A pixel-perfect clone of Amazon's homepage built using modern front-end technologies.",
      //   image: "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/amazon.png?raw=true",
      //   tags: ["CSS", "HTML", "JavaScript"],
      //   url: "https://github.com/Priyasha-Yadav/HTML"
      // },
      {
        title: "Static Chess",
        description: "A static chess board design with HTML and CSS [using flex], showcasing various chess pieces.",
        image: "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Chess.png?raw=true",
        tags: ["HTML", "CSS"],
        url: "https://github.com/Priyasha-Yadav/Task/tree/main/Frontend_Task"
      },
      // {
      //   title: "Static Kidz World Website",
      //   description: "A static website for kids with colorful design elements and interactive animations.",
      //   image: "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/kidz_world_1.png?raw=true",
      //   tags: ["HTML", "CSS"],
      //   url: "https://github.com/Priyasha-Yadav/Task/tree/main/Frontend_Task"
      // },
      {
        title: "Calculator-2.0",
        description: "A sleek, calculator made using HTML, CSS, and JavaScript with basic arithmetic operations.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1756798060/Screenshot_2025-09-02_at_12.57.31_PM_h687hk.png",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://calc-two.netlify.app"
      },
      {
        title: "Calculator-1.0",
        description: "A simple calculator made using HTML, CSS, and JavaScript with basic arithmetic operations.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1756797843/Screenshot_2025-09-02_at_12.47.31_PM_j8ok24.png",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://calc1-one.netlify.app"
      }
    ],
    "Figma Projects": [
      {
        title: "LeafDaily UI/UX Design",
        description: "A sleek, modern Figma design for an eco-friendly lifestyle tracking app with gamification elements.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166572/Screenshot_2025-03-05_at_2.47.56_PM_nubwh9.png",
        tags: ["UI/UX", "Figma", "Dark Mode"],
        url: "https://www.figma.com/design/rUVgdmJUXLelwqm0oFhEy0/LeafDaily?node-id=0-1&t=tjMwO0Xf8mHdvj7b-1"
      },
      {
        title: "Lapto",
        description: "An intuitive website to display information about laptops.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741167805/Screenshot_2025-03-05_at_3.11.24_PM_tdyxpo.png",
        tags: ["UI/UX", "Figma", "Web Design"],
        url: "https://www.figma.com/design/gIyQO0jTCwEuxiBdfwyykh/Lapto---Your-Laptop-Companion?node-id=0-1&t=7mM7DDZSITcquwaB-1"
      },
      {
        title: "Jobmentum - Job Portal UI",
        description: "A clean and user-friendly job portal UI/UX design with an easy-to-navigate layout.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166557/Screenshot_2025-03-05_at_11.06.07_AM_ku7gql.png",
        tags: ["UI/UX", "Figma", "Web Design"],
        url: "https://www.figma.com/design/rCJvmrMjiTtu9J3uqajM6z/Jobmentum?node-id=0-1&t=u6ocRs6heDdGLKEl-1"
      },
      {
        title: "Instagram UI Clone",
        description: "A Figma design for Instagram's mobile app.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741167375/Screenshot_2025-03-05_at_3.04.38_PM_quoxff.png",
        tags: ["UI/UX", "Figma", "Social Media"],
        url: "https://www.figma.com/design/Mak3m2fnwHIzyFoelNSdJU/Instagram-UI-Clone?node-id=0-1&t=kclY5P6yIfyweCVk-1"
      },
      {
        title: "Netflix UI Clone",
        description: "A dark-themed Netflix homepage clone with hover effects.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741167228/Screenshot_2025-03-05_at_3.02.47_PM_mqtdrf.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/A5WYSeMi3ffMYJcyzJOq7K/Netflix-UI-Clone?node-id=0-1&t=ldV1rn48DKlNoGZs-1"
      },
      {
        title: "Marvel Booking",
        description: "This is a high-fidelity, interactive prototype designed in Figma for a Marvel-themed movie booking mobile application.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1754385208/Screenshot_2025-08-05_at_2.43.18_PM_arg6sb.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/CfdnRVPt1pdfkpmWtnh9dv/Marvel-Booking?node-id=189-956&t=loSTGkc4JmIMUcBh-1"
      },

    ]
  };

  // Get all categories including "All"
  const categories = ["All", ...Object.keys(categorizedProjects)];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? Object.values(categorizedProjects).flat()
    : categorizedProjects[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-red-900/20 opacity-30"></div>
        <div className="relative w-full h-full">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `pulse ${Math.random() * 8 + 4}s infinite ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header with animated gradient */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient p-2 leading-[1.2]">
            My Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my work across various technologies and platforms, from full-stack applications to design projects.
          </p>
        </div>

        {/* Category navigation */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-2 md:justify-center min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid with animations */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-200 rounded-full text-xs py-1 px-3">{tag}</span>
                  ))}
                </div>
              </div>
            </a>

          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
