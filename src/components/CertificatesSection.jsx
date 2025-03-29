import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
    {
      title: "Coding for Data",
      organization: "Sololearn",
      date: "March 2025",
      category: "Data Science",
      image: "https://api2.sololearn.com/v2/certificates/CC-IPYFAP0I/image/jpg?t=638787887526806060", 
      link: "https://www.sololearn.com/certificates/CC-IPYFAP0I", 
    },
    {
      title: "Introduction to C",
      organization: "SheKunj",
      date: "March 2025",
      category: "Programming",
      image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1743193967/Screenshot_2025-03-29_at_2.01.50_AM_gbemki.png",
      link: "https://www.sololearn.com/certificates/CC-FYR8YLCR",
    },
    {
      title: "Introduction to C",
      organization: "SheKunj",
      date: "March 2025",
      category: "Programming",
      image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1743193966/Screenshot_2025-03-29_at_2.01.32_AM_iogfis.png",
      link: "https://www.sololearn.com/certificates/CC-FYR8YLCR",
    },
    {
      title: "C++ Intermediate",
      organization: "Sololearn",
      date: "March 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-HTMIXKTY/image/png?t=638767937300349920",
      link: "https://www.sololearn.com/certificates/CC-HTMIXKTY",
    },
    {
      title: "SQL Intermediate",
      organization: "Sololearn",
      date: "February 2025",
      category: "Database",
      image: "https://api2.sololearn.com/v2/certificates/CC-Q4ZHP1PI/image/png?t=638755872614346040",
      link: "https://www.sololearn.com/certificates/CC-Q4ZHP1PI",
    },
    {
      title: "Python Intermediate",
      organization: "Sololearn",
      date: "February 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-701NQAQ2/image/png?t=638753146342863320",
      link: "https://www.sololearn.com/certificates/CC-701NQAQ2",
    },
    {
      title: "Tech for Everyone",
      organization: "Sololearn",
      date: "January 2025",
      category: "Technology",
      image: "https://api2.sololearn.com/v2/certificates/CC-X2IMUN2O/image/png?t=638739370423358900",
      link: "https://www.sololearn.com/certificates/CC-X2IMUN2O",
    },
    {
      title: "Coding Foundations",
      organization: "Sololearn",
      date: "January 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-XWLDCGVW/image/jpg?t=638738513375866280",
      link: "https://www.sololearn.com/certificates/CC-XWLDCGVW",
    },
    {
      title: "Introduction to C++",
      organization: "Sololearn",
      date: "December 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-7BGJSIBU/image/png?t=638726507033878350",
      link: "https://www.sololearn.com/certificates/CC-7BGJSIBU",
    },
    {
      title: "Introduction to Java",
      organization: "Sololearn",
      date: "December 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-BM8X6NZI/image/png?t=638725252007505580",
      link: "https://www.sololearn.com/certificates/CC-BM8X6NZI",
    },
    {
      title: "JavaScript Intermediate",
      organization: "Sololearn",
      date: "December 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-MZA4LT9Y/image/png?t=638724558711724680",
      link: "https://www.sololearn.com/certificates/CC-MZA4LT9Y",
    },
    {
      title: "Python Developer",
      organization: "Sololearn",
      date: "December 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-PULWLYCU/image/png?t=638718778158268370",
      link: "https://www.sololearn.com/certificates/CC-PULWLYCU",
    },
    {
      title: "Web Development",
      organization: "Sololearn",
      date: "December 2025",
      category: "Web Development",
      image: "https://api2.sololearn.com/v2/certificates/CC-P6H0LEIA/image/png?t=638705317285883560",
      link: "https://www.sololearn.com/certificates/CC-P6H0LEIA",
    },
    {
      title: "Introduction to Python",
      organization: "Sololearn",
      date: "December 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-NEZBGXJJ/image/png?t=638717458600839120",
      link: "https://www.sololearn.com/certificates/CC-NEZBGXJJ",
    },
    {
      title: "Introduction to SQL",
      organization: "Sololearn",
      date: "December 2025",
      category: "Database",
      image: "https://api2.sololearn.com/v2/certificates/CC-G5ZCWBF1/image/png?t=638595931432498120",
      link: "https://www.sololearn.com/certificates/CC-G5ZCWBF1",
    },
    {
      title: "Introduction to JavaScript",
      organization: "Sololearn",
      date: "December 2025",
      category: "Web Development",
      image: "https://api2.sololearn.com/v2/certificates/CC-U4WVGRPQ/image/png?t=638597480140183890",
      link: "https://www.sololearn.com/certificates/CC-U4WVGRPQ",
    },
    {
      title: "Introduction to CSS",
      organization: "Sololearn",
      date: "December 2025",
      category: "Web Development",
      image: "https://api2.sololearn.com/v2/certificates/CC-T4FW0T6L/image/png?t=638678515211608360",
      link: "https://www.sololearn.com/certificates/CC-U4WVGRPQ",
    },
    {
      title: "Introduction to HTML",
      organization: "Sololearn",
      date: "December 2025",
      category: "Web Development",
      image: "https://api2.sololearn.com/v2/certificates/CC-M0AEWCSO/image/png?t=638604643713739320",
      link: "https://www.sololearn.com/certificates/CC-M0AEWCSO",
    },
    {
      title: "Introduction to C",
      organization: "Sololearn",
      date: "December 2025",
      category: "Programming",
      image: "https://api2.sololearn.com/v2/certificates/CC-FYR8YLCR/image/png?t=638625746253262490",
      link: "https://www.sololearn.com/certificates/CC-FYR8YLCR",
    },
];

// Create categories for filtering
const allCategories = ['All', ...new Set(certificates.map(cert => cert.category))];

const CertificatesSection = () => {
    const itemsPerPage = 6; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isFiltering, setIsFiltering] = useState(false);
    const [filteredCertificates, setFilteredCertificates] = useState(certificates);
    
    // Filter certificates when category changes
    useEffect(() => {
        setIsFiltering(true);
        setTimeout(() => {
            const filtered = activeCategory === 'All' 
                ? certificates 
                : certificates.filter(cert => cert.category === activeCategory);
            setFilteredCertificates(filtered);
            setCurrentPage(1);
            setIsFiltering(false);
        }, 300);
    }, [activeCategory]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);
    
    // Get current certificates
    const currentCertificates = filteredCertificates.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
  
    // Handle pagination logic
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
  
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };
  
    return (
        <section id="certificates-section" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black">
            {/* Section Title with enhanced styling */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="text-center mb-16"
            >
          <h2 className="text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
          Certifications
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                    A collection of professional certificates showcasing my technical expertise
                </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {allCategories.map((category, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg shadow-red-500/20'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Certificate Cards with Animation */}
            <AnimatePresence mode="wait">
                {isFiltering ? (
                    <motion.div 
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center py-20"
                    >
                        <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {currentCertificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 group"
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="p-6">
                                    <div className="mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    
                                    <div className="mb-2">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full">
                                            {cert.category}
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        {cert.title}
                                    </h4>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <p className="text-gray-300 text-sm font-medium">{cert.organization}</p>
                                        <p className="text-gray-500 text-xs">{cert.date}</p>
                                    </div>
                
                                    <div className="mt-4 text-center">
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block w-full px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-red-500/20 transform transition-all duration-300 hover:-translate-y-1"
                                        >
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Improved Pagination Controls */}
            {filteredCertificates.length > 0 && (
                <div className="flex justify-center items-center mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevPage}
                        className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 transition-all duration-300 ${
                            currentPage === 1
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-800 text-white hover:bg-red-500'
                        }`}
                        disabled={currentPage === 1}
                    >
                        ←
                    </motion.button>
                    
                    <div className="flex items-center">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <motion.button
                                key={page}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    currentPage === page
                                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {page}
                            </motion.button>
                        ))}
                    </div>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextPage}
                        className={`flex items-center justify-center w-10 h-10 rounded-full ml-4 transition-all duration-300 ${
                            currentPage === totalPages
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-800 text-white hover:bg-red-500'
                        }`}
                        disabled={currentPage === totalPages}
                    >
                        →
                    </motion.button>
                </div>
            )}

            {/* No results message */}
            {filteredCertificates.length === 0 && !isFiltering && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-10"
                >
                    <p className="text-gray-400 text-lg">No certificates found in this category.</p>
                </motion.div>
            )}
        </section>
    );
};
  
export default CertificatesSection;