import { useState } from 'react';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categorizedProjects = {
    "Full‑Stack Projects": [
      {
        "title": "Jobmentum [ Job Portal ]",
        "description": "A full‑stack job‑portal platform built with the MERN stack that enables job‑seekers to create an account, browse live job‑postings and apply in real‑time. Recruiters can log in, post jobs, review applications and manage workflows via dynamic dashboards. Authentication is secured via JWT, file uploads for resumes are handled (via Multer), and the app is deployed using Render for backend and Netlify for frontend to ensure scalable delivery. The portal features responsive UI, role‑based access (job‑seeker / recruiter) and seamless flow from posting to application.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166559/Screenshot_2025-03-05_at_2.51.41_PM_uhhicu.png",
        "tags": ["MERN", "JWT", "Render", "Netlify", "Multer"],
        "url": "https://jomentum.netlify.app"
      }
    ],
    "APIs": [
      {
        "title": "LeafDaily",
        "description": "A backend API designed to encourage eco‑friendly habits through gamified tracking of sustainable actions. Built using Node.js and Express.js, the API exposes endpoints for logging eco‑actions, awarding points, tracking user progress and retrieving sustainability dashboards. It serves as the server‑side backbone of an eco‑lifestyle platform where data can be consumed by front‑end clients or mobile apps.",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb‑1.2.1&auto=format&fit=crop&w=800&q=80",
        "tags": ["Backend", "Node.js", "Express.js"],
        "url": "https://documenter.getpostman.com/view/39189648/2sAYX3sjFp"
      },
      {
        "title": "Instagram‑Inspired API",
        "description": "A RESTful server implemented in Node.js/Express.js with MongoDB that supports core social‑media workflows: user registration & authentication, post creation, likes and comments, as well as retrieval of feed data. The API is structured to power a front‑end client mimicking Instagram’s architecture, enabling CRUD operations on posts and real‑time interactive features in a scalable backend design.",
        "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "tags": ["Backend", "Node.js", "Express.js", "MongoDB"],
        "url": "https://github.com/Priyasha-Yadav/Instagram-Inspired-API"
      },
      {
        "title": "Students API",
        "description": "An API service built in Node.js/Express and MongoDB for managing student‑records. It supports CRUD operations on student profiles.",
        "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "tags": ["Backend", "Node.js", "Express.js", "MongoDB"],
        "url": "https://github.com/Priyasha-Yadav/Students-API"
      },
      {
        "title": "Companies API",
        "description": "An API created to store and manage company‑data such as company name, location, salary bands (base/bonus/stock), hiring criteria (minimum CGPA, required skills, experience), interview rounds, employee benefits and head‑count. Built with Next.js API routes and MongoDB, this backend service supports detailed filtering and data retrieval.",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2230",
        "tags": ["NextJS", "MongoDB"],
        "url": "https://documenter.getpostman.com/view/39189648/2sB3QRmSR1"
      }
    ],
    "Clones": [
      {
        "title": "YouTube Clone",
        "description": "A front‑end clone of YouTube built with React.js and Vite, fetching data via the YouTube Data API to show trending videos, search results and playback functionality. It features side navigation, video lists and video views — enabling users to browse and view video content in a UI closely resembling the original YouTube experience.",
        "image": "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Youtube.png?raw=true",
        "tags": ["React.js", "YouTube API"],
        "url": "https://youtube-vite.netlify.app"
      },
      {
        "title": "Target E‑commerce Static Clone",
        "description": "A static front‑end clone of the Target e‑commerce landing page built purely with HTML and CSS. It replicates the visual layout, typography and product grid of the retail site, allowing for practice in design, component structuring and UI layout.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166578/Screenshot_2025-03-05_at_11.08.09_AM_iz39v1.png",
        "tags": ["CSS", "HTML"],
        "url": "https://targetclonecg.netlify.app"
      },
      {
        "title": "Static Amazon Landing Page Clone",
        "description": "A pixel‑perfect static recreation of Amazon’s homepage using modern front‑end techniques, focusing on layout fidelity, responsive behaviour and front‑end performance. This clone emphasises deep understanding of CSS, media‑queries and markup semantics in replicating a complex commercial site’s landing page.",
        "image": "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/amazon.png?raw=true",
        "tags": ["CSS", "HTML"],
        "url": "https://static-amazon.netlify.app"
      },
      {
        "title": "Static Flipkart Landing Page Clone",
        "description": "A structured static landing page clone of Flipkart built with HTML and CSS, designed to replicate the brand’s layout and category grid. It serves as a focused exercise in front‑end craftsmanship and static UI assembly.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1761052349/flipkart.png",
        "tags": ["CSS", "HTML"],
        "url": "https://static-flip-dev.netlify.app"
      }
    ],
    "Mini Projects": [
      {
        "title": "Tic Tac Toe",
        "description": "An interactive browser‑based Tic Tac Toe game built with HTML, CSS and JavaScript. Users can click to place X or O, the game detects wins/draws, and the UI resets seamlessly for new rounds. A clean example of fundamental DOM‑manipulation and event‑handling in front‑end development.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166557/Screenshot_2025-03-05_at_2.48.51_PM_sxnozm.png",
        "tags": ["HTML", "CSS", "JavaScript"],
        "url": "https://tic-tac-toe-py.netlify.app"
      },
      {
        "title": "Static Sudoku",
        "description": "A visually styled static representation of a Sudoku board created purely with HTML and CSS. While not offering interactivity or game logic, this project focuses on mastering grid layouts, typography and board‑structure design for UI practice.",
        "image": "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Sudoku/Sudoku.png?raw=true",
        "tags": ["HTML", "CSS"],
        "url": "https://static-sudoku.netlify.app"
      },
      {
        "title": "Static Chess",
        "description": "A static chess board layout built using HTML and CSS (leveraging flexbox and grid) with chess pieces positioned for visual authenticity. This project emphasises component positioning, board styling and layout mastery.",
        "image": "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Chess/Chess.png?raw=true",
        "tags": ["HTML", "CSS"],
        "url": "https://static-chess-dev.netlify.app"
      },
      {
        "title": "Static Super Heroes",
        "description": "A static scoreboard or styled page of superheroes crafted with HTML and CSS for visual practice. This project underscores use of imagery, layout patterns and typography to build a themed UI rather than dynamic behaviour.",
        "image": "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/SuperHeroes/Superheroes_ss.png?raw=true",
        "tags": ["HTML", "CSS"],
        "url": "https://static-super-heroes.netlify.app"
      },
      {
        "title": "Static Card",
        "description": "A simple static card component built with HTML and CSS designed for practice in structuring markup, applying CSS styles, managing spacing, and achieving component‑like styling in a standalone context.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1761052160/card.png",
        "tags": ["HTML", "CSS"],
        "url": "https://static-card-dev.netlify.app"
      },
      {
        "title": "Static Cricket Scoreboard",
        "description": "A styled static cricket‑scoreboard page created using HTML and CSS that visually mimics live match scoreboards. Although non‑interactive, it provides hands‑on practice in layout structuring, typography and thematic design of sports UI components.",
        "image": "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Cricket/Screenshot_Cricket.png?raw=true",
        "tags": ["HTML", "CSS"],
        "url": "https://static-cricket.netlify.app"
      },
      {
        "title": "Calculator‑2.0",
        "description": "An sleek web calculator built using HTML, CSS and JavaScript featuring polished UI, styling improvements. Users can input numbers and operators, see updated results and reset design, offering clear practice in interactive front‑end behaviour.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1756798060/Screenshot_2025-09-02_at_12.57.31_PM_h687hk.png",
        "tags": ["HTML", "CSS", "JavaScript"],
        "url": "https://calc-two.netlify.app"
      },
      {
        "title": "Calculator‑1.0",
        "description": "A basic web calculator implemented with HTML, CSS and JavaScript supporting fundamental arithmetic operations, built for practice in DOM‑selection, event‑handling and result‑rendering. A clear starter project for front‑end learners to master logic flow and UI design.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1756797843/Screenshot_2025-09-02_at_12.47.31_PM_j8ok24.png",
        "tags": ["HTML", "CSS", "JavaScript"],
        "url": "https://calc1-one.netlify.app"
      }
    ],
    "Figma Projects": [
      {
        "title": "LeafDaily UI/UX Design",
        "description": "A modern UI/UX prototype created in Figma for an eco‐lifestyle tracking app, emphasising gamification flows and dashboard summaries for sustainable actions. The design integrates clean typography, layered card layouts, and intuitive navigation focused on eco‑habit tracking and user engagement.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166572/Screenshot_2025-03-05_at_2.47.56_PM_nubwh9.png",
        "tags": ["UI/UX", "Figma", "Dark Mode"],
        "url": "https://www.figma.com/design/rUVgdmJUXLelwqm0oFhEy0/LeafDaily?node-id=0-1&t=tjMwO0Xf8mHdvj7b‑1"
      },
      {
        "title": "Lapto",
        "description": "A clean and intuitive website design in Figma for laptop products. It showcases product‑listing layouts, responsive grids, interactive prototype states and immersive UI details that help users navigate product comparisons easily. The design emphasises clarity, manageable card‑based UI and sleek styling for an e‑commerce companion experience.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741167805/Screenshot_2025-03-05_at_3.11.24_PM_tdyxpo.png",
        "tags": ["UI/UX", "Figma", "Web Design"],
        "url": "https://www.figma.com/design/gIyQO0jTCwEuxiBdfwyykh/Lapto---Your‑Laptop‑Companion?node-id=0‑1&t=7mM7DDZSITcquwaB‑1"
      },
      {
        "title": "Jobmentum ‑ Job Portal UI",
        "description": "A user‑friendly job‑portal UI/UX design built in Figma for the Jobmentum project, presenting a streamlined navigation experience for both job‑seekers and recruiters. It features dashboard views, search filters and clean interaction flows to facilitate job posting and application management.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166557/Screenshot_2025-03-05_at_11.06.07_AM_ku7gql.png",
        "tags": ["UI/UX", "Figma", "Web Design"],
        "url": "https://www.figma.com/design/rCJvmrMjiTtu9J3uqajM6z/Jobmentum?node-id=0‑1&t=u6ocRs6heDdGLKEl‑1"
      },
      {
        "title": "Instagram UI Clone",
        "description": "A mobile‑app UI prototype in Figma that mirrors the layout and interaction design of Instagram. It features feed views, story thumbnails and mobile design. The project focuses on visual fidelity.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741167375/Screenshot_2025-03-05_at_3.04.38_PM_quoxff.png",
        "tags": ["UI/UX", "Figma", "Social Media"],
        "url": "https://www.figma.com/design/Mak3m2fnwHIzyFoelNSdJU/Instagram‑UI‑Clone?node-id=0‑1&t=kclY5P6yIfyweCVk‑1"
      },
      {
        "title": "Netflix UI Clone",
        "description": "A dark‑theme homepage UI clone of Netflix created in Figma emphasising rich media banners, hover interactions and cinematic typography. The design replicates a streaming‑platform aesthetic with immersive visuals, card overlays and a fluid browsing experience within a static prototype context.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741167228/Screenshot_2025-03-05_at_3.02.47_PM_mqtdrf.png",
        "tags": ["UI/UX", "Figma"],
        "url": "https://www.figma.com/design/A5WYSeMi3ffMYJcyzJOq7K/Netflix‑UI‑Clone?node-id=0‑1&t=ldV1rn48DKlNoGZs‑1"
      },
      {
        "title": "Marvel Booking",
        "description": "A high‑fidelity interactive mobile‑prototype in Figma for a Marvel‑themed movie‑booking application, featuring seat‑selection flows, theming consistent with the branding, and smooth transitions between booking steps. The design emphasizes user engagement, themed visuals and coherent UI across mobile screens.",
        "image": "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1754385208/Screenshot_2025-08-05_at_2.43.18_PM_arg6sb.png",
        "tags": ["UI/UX", "Figma"],
        "url": "https://www.figma.com/design/CfdnRVPt1pdfkpmWtnh9dv/Marvel‑Booking?node‑id=189‑956&t=loSTGkc4JmIMUcBh‑1"
      }
    ]
  }


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
