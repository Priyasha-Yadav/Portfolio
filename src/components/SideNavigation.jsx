import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, MessageSquare, Award, X, Github, Mail, Settings, BookCheck, Code2, ChevronRight } from 'lucide-react';

const socialLinks = {
    github: "https://github.com/Priyasha-Yadav",
    linkedin: "https://www.linkedin.com/in/priyasha-yadav/",
    twitter: "https://x.com/YadavPriyasha",
    leetcode: "https://leetcode.com/u/Priyasha_Yadav/",
    hackerrank: "https://www.hackerrank.com/profile/priyasha_yadav_1",
    sololearn: "https://www.sololearn.com/en/profile/32474399",
    mail: "mailto:priyasha.yadav.cg@gmail.com"
};

const colorOptions = [
    { name: 'Blue', value: 'blue', textColor: 'text-white' },
    { name: 'Green', value: 'green', textColor: 'text-white' },
    { name: 'Black', value: 'black', textColor: 'text-white' },
    { name: 'Violet', value: 'violet', textColor: 'text-white' },
    { name: 'Pink', value: 'pink', textColor: 'text-white' },
    { name: 'Red', value: 'red', textColor: 'text-white' },
    { name: 'Orange', value: 'orange', textColor: 'text-white' },


];

const SideNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [highlighted, setHighlighted] = useState('');
    const [activeColor, setActiveColor] = useState(colorOptions[0].value);
    const [showColorOptions, setShowColorOptions] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showTooltip, setShowTooltip] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [tooltipOpacity, setTooltipOpacity] = useState(0);

    // Added tooltip timer for smooth transitions
    const [tooltipTimer, setTooltipTimer] = useState(null);

    // Apply the initial background color on component mount
    useEffect(() => {
        const savedColor = localStorage.getItem('preferredBgColor');
        if (savedColor) {
            setActiveColor(savedColor);
        } else {
            localStorage.setItem('preferredBgColor', activeColor);
        }
        return () => {
            document.body.style.backgroundColor = 'black';
        };
    }, [activeColor]);

    const handleNavigation = (section) => {
        setHighlighted(section);

        setTimeout(() => {
            if (section === 'contact') {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            } else if (section === 'linkedin') {
                window.open(socialLinks.linkedin, '_blank');
            } else if (section === 'twitter') {
                window.open(socialLinks.twitter, '_blank');
            } else if (section === 'github') {
                window.open(socialLinks.github, '_blank');
            } else if (section === 'settings') {
                setShowColorOptions((prev) => !prev);
                setActiveSection(section);
            } else if (section === 'certificates') {
                document.getElementById('certificates-section')?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(section);
            } else if (section === 'home') {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection('home');
            } else if (section === 'leetcode') {
                window.open(socialLinks.leetcode, '_blank');
            } else if (section === 'sololearn') {
                window.open(socialLinks.sololearn, '_blank');
            } else {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(section);
            }

            setTimeout(() => {
                setHighlighted('');
            }, 300);
        }, 300);
    };

    const handleColorChange = (color) => {
        setActiveColor(color);
        localStorage.setItem('preferredBgColor', color);

        setTimeout(() => {
            setShowColorOptions(false);
        }, 300);
    };

    const handleMouseEnter = (section, e) => {
        // Clear any existing timer
        if (tooltipTimer) clearTimeout(tooltipTimer);

        const rect = e.currentTarget.getBoundingClientRect();

        // Set position first
        setTooltipPosition({
            top: rect.top + (rect.height / 2),
            left: rect.left - 110  // Adjust to prevent edge glitching
        });

        // Set the section before fading in
        setShowTooltip(section);

        // Fade in after a short delay
        const timer = setTimeout(() => {
            setTooltipOpacity(1);
        }, 50);

        setTooltipTimer(timer);
    };

    const handleMouseLeave = () => {
        // Clear any existing timer
        if (tooltipTimer) clearTimeout(tooltipTimer);

        // Fade out
        setTooltipOpacity(0);

        // Remove tooltip after animation completes
        const timer = setTimeout(() => {
            setShowTooltip('');
        }, 300);

        setTooltipTimer(timer);
    };

    // Cleanup timers on unmount
    useEffect(() => {
        return () => {
            if (tooltipTimer) clearTimeout(tooltipTimer);
        };
    }, [tooltipTimer]);

    const navigationItems = [
        { icon: <Home size={22} />, section: 'home', label: 'Home' },
        { icon: <User size={22} />, section: 'about', label: 'About Me' },
        { icon: <Briefcase size={22} />, section: 'projects', label: 'Projects' },
        { icon: <MessageSquare size={22} />, section: 'skills', label: 'Skills' },
        { icon: <Award size={22} />, section: 'certificates', label: 'Certificates' },
        { icon: <Github size={22} />, section: 'github', label: 'GitHub' },
        { icon: <BookCheck size={22} />, section: 'sololearn', label: 'Sololearn' },
        { icon: <Code2 size={22} />, section: 'leetcode', label: 'LeetCode' },
        { icon: <Mail size={22} />, section: 'contact', label: 'Contact Me' },
        { icon: <Settings size={22} />, section: 'settings', label: 'Settings' },
    ];

    return (
        <>
            {/* Expand/collapse toggle button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="fixed right-6 top-6 z-50 bg-black/80 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
                aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
            >
                <ChevronRight
                    size={20}
                    className={`text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`fixed right-0 top-0 h-full z-40 transition-all duration-500 ease-in-out ${isExpanded ? 'w-50' : 'w-20'
                    } bg-black/30 backdrop-blur-md border-l border-white/10 shadow-2xl flex flex-col justify-center`}
            >
                <div className="py-8 px-4 flex flex-col items-center gap-6">
                    {navigationItems.map(({ icon, section, label }) => (
                        <button
                            key={section}
                            onClick={() => handleNavigation(section)}
                            onMouseEnter={(e) => !isExpanded && handleMouseEnter(section, e)}
                            onMouseLeave={handleMouseLeave}
                            className={`group relative flex items-center ${isExpanded ? 'w-full justify-start px-4' : 'w-12 h-12 justify-center'
                                } ${activeSection === section
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                    : highlighted === section
                                        ? 'bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white'
                                        : 'text-gray-300 ho'
                                } rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${isExpanded ? 'hover:translate-x-1' : ''
                                }`}
                        >
                            <span className={`${highlighted === section ? 'animate-pulse' : ''}`}>
                                {icon}
                            </span>

                            {isExpanded && (
                                <span className={`ml-3 text-sm font-medium transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    {label}
                                </span>
                            )}

                            {/* Glowing effect on hover */}
                            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 to-pink-600/0 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tooltip for non-expanded state - Fixed positioning with smooth transition */}
            {showTooltip && (
                <div
                    className="fixed z-50 bg-black/90 text-white text-sm py-1.5 px-3 rounded-md shadow-lg transform -translate-y-1/2 pointer-events-none"
                    style={{
                        top: `${tooltipPosition.top}px`,
                        left: `${tooltipPosition.left}px`,
                        opacity: tooltipOpacity,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    {navigationItems.find(item => item.section === showTooltip)?.label}
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-black/90"></div>
                </div>
            )}

            {/* Color options panel */}
            {showColorOptions && (
                <div className={`fixed right-0 top-0 h-full w-100 z-30 bg-black/80 backdrop-blur-lg border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out ${showColorOptions ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="p-6 pr-20 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Settings</h3>
                            <button
                                onClick={() => setShowColorOptions(false)}
                                className="p-1.5 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors"
                            >
                                <X size={18} className="text-gray-300" />
                            </button>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-400 mb-3">Background Color</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {colorOptions.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => handleColorChange(color.value)}
                                        className={`relative h-16 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 ${activeColor === color.value ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''
                                            }`}
                                        style={{ backgroundColor: color.value }}
                                    >
                                        <span className={`text-xs font-medium ${color.textColor}`}>
                                            {color.name}
                                        </span>
                                        {activeColor === color.value && (
                                            <div className="absolute inset-0 border-2 border-white/50 rounded-lg"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className=" p-4 bg-black/50 rounded-lg shadow-md">
                            <p className="text-lg font-semibold text-gray-300 mb-2">✨ Puzzle Challenge</p>
                            <p className="text-sm text-gray-400 italic">"The one who greets is the sole noble."</p>
                            <p className="text-sm text-gray-500 mt-1">Solution: Just type <span className="text-green-400 font-bold">'hello'</span>.</p>
                        </div>

                        <div className="mt-4 p-4 bg-black/50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                            <p className="text-lg font-semibold text-gray-300 mb-2">✨ Tech Stack Tip</p>
                            <p className="text-sm text-gray-400">Hover over the tech stack to see the icons bubble with a dynamic effect.</p>
                        </div>

                        <div className="mt-auto text-center text-xs text-gray-500">
                            <p>Your theme preferences will be saved for your next visit.</p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default SideNavigation;