
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id="about" className="mb-16 px-6 lg:px-12 py-10 rounded-lg shadow-xl">
            {/* Section Heading */}
            <motion.h2 
                className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
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
                >
                    <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                        Hi, I'm Priyasha, a passionate developer who loves building things from scratch and solving problems.
                        I specialize in front-end and full-stack development with expertise in modern web technologies.
                        Currently, I am learning more about AI and machine learning. If you're here, congrats! You just found the most unpredictable dev you'll ever meet.
                    </p>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-purple-400 mb-2">Education</h3>
                            <p className="text-gray-300">B.Tech in Computer Science</p>
                            <p className="text-gray-400 text-sm">2024 - 2028</p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-purple-400 mb-2">Hobbies</h3>
                            <p className="text-gray-300">Playing keyboard, reading, music, searching new VSCode themes, exploring new AI's and dev tools</p>
                        </div>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div 
                    className="w-60 h-80 rounded-full border-4 border-[#2E0709] shadow-lg overflow-hidden relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 z-10"></div>
                    <img
                       // src="https://res.cloudinary.com/dd5zrwqzj/image/upload/v1740815104/WhatsApp_Image_2025-03-01_at_13.11.03_md1y5a.jpg"
                        alt="Priyasha Yadav"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '0 -100px' }}
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