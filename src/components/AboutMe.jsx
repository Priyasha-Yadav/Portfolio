import { motion, AnimatePresence } from 'framer-motion';
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
    const quotes = [
        "Dream in semicolons, live in curly braces.",
        "I speak fluent bugs. They just don’t listen.",
        "CTRL + ALT + Conquer.",
        "The code isn’t broken. It’s just... emotionally unavailable.",
    ];

    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 4000); // rotates every 4 seconds
        return () => clearInterval(interval);
    }, []);


    return (
        <section id="about" className="relative mb-16 px-6 lg:px-12 py-10 rounded-lg ">
            {/* Section Heading */}

            <motion.h2
                className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
            >
                Who Am I? (Still Figuring Out)
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 max-w-6xl mx-auto">

                {/* Description and Profile Image */}
                <motion.div
                    className="lg:w-3/3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <p className="text-lg leading-loose tracking-wide text-gray-300 lg:text-2xl lg:leading-loose">
                        Hi, I'm Priyasha — a passionate developer who loves building, breaking, and solving things.
                        I specialize in front-end and full-stack development, with a strong grip on modern web technologies.
                        Right now, I'm diving deeper into my core subjects to strengthen my foundation.
                        If you've made it here, congrats — you've just found the most unpredictable dev you'll ever meet.
                    </p>
                </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 max-w-6xl mx-auto">
                <motion.div
                    className="lg:w-2/3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                >

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="backdrop-blur-md bg-gradient-to-br from-gray-800/50 to-gray-900/60 p-2 rounded-xl shadow-xl transition-all duration-500"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #a78bfa" }}
                        >
                            <h3 className="text-xl font-bold text-purple-400 m-4 border-b border-purple-400 pb-2">🎓 Education</h3>
                            <div className="space-y-6 text-sm">
                                {/* B.Tech */}
                                <div className="bg-gray-900/50 p-5 rounded-lg hover:shadow-2xl hover:ring-1 hover:ring-purple-500/70 transition duration-300">
                                    <p className="text-white font-semibold text-lg">B.Tech in Computer Science</p>
                                    <p className="text-gray-400">Rai University × CodingGita <br /> 2024 - 2028</p>
                                    <p className="text-blue-400 font-medium mt-1">CGPA: 9.63 🌟</p>
                                </div>

                                {/* Class 12 */}
                                <div className="bg-gray-900/50 p-5 rounded-lg hover:shadow-2xl hover:ring-1 hover:ring-purple-500/70 transition duration-300">
                                    <p className="text-white font-semibold text-lg">HSC - CBSE</p>
                                    <p className="text-gray-400">Delhi Public School Harni, Vadodara</p>
                                    <p className="text-blue-400 font-medium mt-1">Percentage: 69%</p>
                                </div>

                                {/* Class 10 */}
                                <div className="bg-gray-900/50 p-5 rounded-lg hover:shadow-2xl hover:ring-1 hover:ring-purple-500/70 transition duration-300">
                                    <p className="text-white font-semibold text-lg">SSC - CBSE</p>
                                    <p className="text-gray-400">Delhi Public School Harni, Vadodara</p>
                                    <p className="text-blue-400 font-medium mt-1">Percentage: 90%</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="backdrop-blur-md bg-gradient-to-br from-gray-800/50 to-gray-900/60 p-6 rounded-xl shadow-xl transition-all duration-500"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #a78bfa" }}
                        >
                            <h3 className="text-xl font-bold text-purple-400 mb-8 border-b border-purple-400 pb-2">🎭 My Kind of Fun</h3>
                            <ul className="text-gray-300 space-y-8 text-base">
                                {[
                                    { icon: "🎹", text: "Playing keyboard like no one's watching (but hoping they are)" },
                                    { icon: "📚", text: "Binge-reading books like every chapter holds a cliffhanger" },
                                    { icon: "🎨", text: "Obsessing over VSCode themes (it's an art form, okay?)" },
                                    { icon: "🤖", text: "Making AI do silly things (and smart things too!)" },
                                    { icon: "🧪", text: "Testing new chrome extensions like a mad scientist" },
                                ].map((hobby, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-start gap-3 hover:text-purple-300 transition-all duration-300"
                                        whileHover={{ x: 8 }}
                                    >
                                        <span className="text-purple-400 text-lg">{hobby.icon}</span>
                                        <span>{hobby.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
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
                        className="w-full h-full object-cover rounded-2xl"
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
                            loading="lazy"
                            decoding="async"
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
                className="mt-18 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
            >
                <p className="text-2xl font-bold text-red-500 drop-shadow-lg mb-2 animate-pulse">
                    WARNING: HIGHLY UNPREDICTABLE DEV!
                </p>
                <p className="text-xl text-gray-300 font-medium italic">
                    "I don't find bugs. <span className="text-[#ff5733] font-bold">Bugs find me</span>…
                    and they bring their entire family." 🐛🐛🐛
                </p>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={quotes[currentQuote]}
                        className="mt-4 text-purple-300 text-lg italic drop-shadow-md"
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        style={{
                            textShadow: "0 0 6px #a855f7",
                            animation: "floaty 5s ease-in-out infinite"
                        }}
                    >
                        {quotes[currentQuote]}
                    </motion.div>
                </AnimatePresence>
            </motion.div>



        </section>
    );
};

export default AboutMe;
