import { motion } from 'framer-motion';
import { useGuidedTour } from './GuidedTourProvider.jsx';

const Hero = () => {
  const { startTour } = useGuidedTour();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
      {/* Text Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-6xl font-bold leading-tight">
          <span className="text-red-500">Code, but</span>
          <br />
          make it vibe.
        </h2>

        <p className="text-gray-300 max-w-md">
          Turning "it&apos;ll never work" into "wait, that was too easy."
          Spoiler: I&apos;m still debugging—probably forever.
          But hey, at least it compiles… most of the time.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <motion.button
            onClick={startTour}
            data-tour-launcher="true"
            className="px-6 py-3 border border-gray-700 rounded-full hover:bg-gray-800/30 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Take the Tour
          </motion.button>

          <motion.button
            data-scroll-target="projects"
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-shadow"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
          </motion.button>

          <motion.button
            data-scroll-target="about"
            className="px-6 py-3 border border-gray-700 rounded-full hover:bg-gray-800/30 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            About Me
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 to-purple-500/40 rounded-full blur-xl" />

        {/* CSS-only bars */}
        <div className="grid grid-cols-4 gap-4 opacity-90">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="hero-bar"
              style={{ animationDelay: `${i * 80}ms` }}
              role="presentation"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
