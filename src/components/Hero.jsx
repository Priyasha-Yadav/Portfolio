import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
      {/* Text Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold leading-tight">
          <span className="text-red-500">Code, but</span>
          <br />
          make it vibe.
        </h2>
        <p className="text-gray-300 max-w-md">
          Turning "it'll never work" into "wait, that was too easy."
          Spoiler: I'm still debugging—probably forever.
          But hey, at least it compiles… most of the time.
        </p>
        <div className="flex items-center gap-4 pt-4">
          {/* Button to scroll to Projects */}
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>

          {/* Button to scroll to About */}
          <motion.button
            className="px-6 py-3 bg-transparent border border-gray-700 text-white rounded-full hover:bg-gray-800/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 to-purple-500/40 rounded-full filter blur-xl"></div>
        <div className="grid grid-cols-4 gap-4 opacity-90">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-1 bg-white/20 rounded-full transform rotate-45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
