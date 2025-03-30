import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import img from '../assets/img.png';

const AboutMe = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Handle mouse movement for tilt effect
    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Calculate rotation values (tilt)
        const x = ((clientX - left) / width - 0.5) * 50; 
        const y = ((clientY - top) / height - 0.5) * -50;

        // Calculate position for parallax effect
        const posX = ((clientX - left) / width - 0.5) * -50;
        const posY = ((clientY - top) / height - 0.5) * -50;

        setRotation({ x, y });
        setPosition({ x: posX, y: posY });
    };

    const resetTilt = () => {
        setIsHovering(false);
        
        // Animate back to default position
        setRotation({ x: 0, y: 0 });
        setPosition({ x: 0, y: 0 });
    };

    // Set hovering state when mouse enters
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    return (
        <section id="about" className="mb-16 px-6 lg:px-12 py-10 rounded-lg shadow-xl">
            {/* Section Heading */}
            <motion.h2
                className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
            >
                Who Am I? (Still Figuring Out)
            </motion.h2>

            {/* Description and Profile Image */}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 max-w-6xl mx-auto">
                {/* Description */}
                <motion.div
                    className="lg:w-2/3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                        Hi, I'm Priyasha, a passionate developer who loves building things from scratch and solving problems.
                        I specialize in front-end and full-stack development with expertise in modern web technologies.
                        Currently, I am learning more about AI and machine learning. If you're here, congrats! You just found the most unpredictable dev you'll ever meet.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            className="bg-gray-800/50 p-4 rounded-lg"
                            whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                        >
                            <h3 className="text-lg font-semibold text-purple-400 mb-2">Education</h3>
                            <p className="text-gray-300">B.Tech in Computer Science</p>
                            <p className="text-gray-400 text-sm">2024 - 2028</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800/50 p-4 rounded-lg"
                            whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                        >
                            <h3 className="text-lg font-semibold text-purple-400 mb-2">Hobbies</h3>
                            <p className="text-gray-300">
                                Playing keyboard, reading, music, searching new VSCode themes, exploring new AI's and dev tools
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Profile Image with Enhanced Interactive Tilt */}
                <motion.div
                    className="h-100 shadow-xl relative rounded-2xl overflow-hidden"
                    style={{ 
                        perspective: "1200px",
                        transformStyle: "preserve-3d"
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0px 20px 30px rgba(0,0,0,0.3)"
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={resetTilt}
                >
                    {/* Glow effect overlay */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 z-10 rounded-2xl"
                        animate={{ 
                            opacity: isHovering ? 1 : 0,
                            background: isHovering ? 
                                "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)" : 
                                "none"
                        }}
                        style={{
                            background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
                            transformStyle: "preserve-3d"
                        }}
                    />
                    
                    {/* Image with tilt effect */}
                    <motion.div
                        className="w-full h-full"
                        animate={{ 
                            rotateX: rotation.y, 
                            rotateY: rotation.x,
                            z: isHovering ? 10 : 0
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 15,
                            mass: 0.8
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Parallax effect for the image */}
                        <motion.img
                            src={img}
                            alt="Priyasha Yadav"
                            className="w-full h-full object-cover"
                            animate={{ 
                                x: position.x, 
                                y: position.y,
                                scale: isHovering ? 1.05 : 1
                            }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 150, 
                                damping: 15 
                            }}
                        />
                    </motion.div>
                    
                    {/* Reflection/shine effect */}
                    <motion.div 
                        className="absolute inset-0 z-20"
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                            transformStyle: "preserve-3d"
                        }}
                        animate={{ 
                            opacity: isHovering ? 0.7 : 0,
                            rotateZ: isHovering ? 10 : 0,
                            x: position.x * -2,
                            y: position.y * -2
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    />
                </motion.div>
            </div>

            {/* Fun Quotes */}
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
            >
                <p className="text-2xl font-semibold text-[#ff2e2e] mb-2">
                    WARNING: HIGHLY UNPREDICTABLE DEV!
                </p>
                <p className="text-xl text-gray-300 font-medium">
                    "I don't find bugs. <span className="text-[#ff5733] font-bold">Bugs find me</span>…  
                    and they bring their entire family." 🐛🐛🐛
                </p>
            </motion.div>
        </section>
    );
};

export default AboutMe;