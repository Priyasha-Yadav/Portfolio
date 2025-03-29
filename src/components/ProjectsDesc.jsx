import React, { useState } from 'react';
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import SideNavigation from './SideNavigation';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const navigate = useNavigate();
    const categorizedProjects = {
        "Full-Stack Projects": [
            {
                title: "Jobmentum [ Job Portal ]",
                description: "A dynamic job portal connecting job seekers with recruiters, offering real-time job postings and applications.",
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["MERN", "JWT", "Render", "Netlify", "Multer"],
                url: "https://jobmentum.com"
            },
            {
                title: "LeafDaily",
                description: "An AI-powered sustainability tracking platform encouraging eco-friendly habits through gamification.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["Backend", "Node.js", "Express.js", "MongoDB"],
                url: "https://leafdaily.com"
            }
        ],
        "APIs": [
            {
                title: "Instagram-Inspired API",
                description: "REST API for a social media platform with user authentication, posts, likes, and comments.",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["Backend", "Node.js", "Express.js", "MongoDB"],
                url: "https://instagram-api.com"
            },
            {
                title: "Students API",
                description: "An API to manage student records, including authentication, CRUD operations, and performance tracking.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["Backend", "Node.js", "Express.js", "MongoDB"],
                url: "https://students-api.com"
            }
        ],
        "Clones": [
            {
                title: "Gmail Clone",
                description: "A functional Gmail replica built using React.js and Firebase for authentication and storage.",
                image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["React.js", "Firebase", "Tailwind CSS", "Redux"],
                url: "https://gmail-clone.com"
            },
            {
                title: "YouTube Clone",
                description: "A responsive YouTube clone fetching data via YouTube's API with modern UI and video playback.",
                image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["React.js", "YouTube API"],
                url: "https://youtube-clone.com"
            },
            {
                title: "Target E-commerce Static Clone",
                description: "A static front-end clone of Target's e-commerce platform with HTML, CSS, and JavaScript.",
                image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["CSS", "HTML", "JavaScript"],
                url: "https://target-clone.com"
            }
        ],
        "Mini Projects": [
            {
                title: "Tic Tac Toe",
                description: "A simple yet interactive Tic Tac Toe game built using JavaScript and React.",
                image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["React.js", "JavaScript"],
                url: "https://tic-tac-toe.com"
            },
            {
                title: "Ludo Static Page",
                description: "A visually appealing static page replicating the Ludo board design using HTML & CSS.",
                image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["HTML", "CSS"],
                url: "https://ludo-static.com"
            },
            {
                title: "Sudoku Game",
                description: "A browser-based Sudoku puzzle with a simple interface and validation logic.",
                image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["JavaScript", "HTML", "CSS"],
                url: "https://sudoku-game.com"
            },
            {
                title: "Amazon Landing Page Clone",
                description: "A pixel-perfect clone of Amazon's homepage built using modern front-end technologies.",
                image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["CSS", "HTML", "JavaScript"],
                url: "https://amazon-clone.com"
            },
            {
                title: "Netflix UI Clone",
                description: "A dark-themed Netflix homepage clone with CSS animations and hover effects.",
                image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["HTML", "CSS", "JavaScript"],
                url: "https://netflix-clone.com"
            }
        ],
        "Figma Projects": [
            {
                title: "LeafDaily UI/UX Design",
                description: "A sleek, modern Figma design for an eco-friendly lifestyle tracking app with gamification elements.",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["UI/UX", "Figma", "Dark Mode"],
                url: "https://www.figma.com/file/LeafDaily"
            },
            {
                title: "MERNfolio - Portfolio Builder UI",
                description: "An intuitive, customizable portfolio builder UI with dark mode and vibrant highlights.",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["UI/UX", "Figma", "Portfolio"],
                url: "https://www.figma.com/file/MERNfolio"
            },
            {
                title: "Jobmentum - Job Portal UI",
                description: "A clean and user-friendly job portal UI/UX design with an easy-to-navigate layout.",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["UI/UX", "Figma", "Web Design"],
                url: "https://www.figma.com/file/Jobmentum"
            }
        ]
    };

    // Get all categories including "All"
    const categories = ["All", ...Object.keys(categorizedProjects)];

    // Filter projects based on active category
    const filteredProjects = activeCategory === "All"
        ? Object.values(categorizedProjects).flat()
        : categorizedProjects[activeCategory] || [];

    return (

        <div className="min-h-screen bg-black text-white relative">
            <SideNavigation />
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/')} // Navigate back to home
                    className="text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                    aria-label="Back to Home"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            {/* Animated background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-red-500/50 opacity-85"></div>
                <div className="relative w-full h-full">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `translate(-50%, -50%)`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header with animated gradient */}
                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-bold mb-12 text-center text-white bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text ">
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
                                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium mr-9 ${activeCategory === category
                                    ? 'bg-red-500/70'
                                    : 'bg-black/70 text-gray-300 hover:scale-110'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Projects grid with animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                                {/* Project title overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                                </div>

                                {/* External link button */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 w-8 h-8 bg-black/40 hover:bg-purple-600 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                                    aria-label={`Visit ${project.title}`}
                                >
                                    <ExternalLink size={14} className="text-white" />
                                </a>
                            </div>

                            {/* Project details */}
                            <div className="p-5">
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2.5 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-300 border border-gray-600/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View project link */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    View project <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;