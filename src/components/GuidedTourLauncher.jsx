import { motion } from 'framer-motion';
import { useGuidedTour } from './GuidedTourProvider.jsx';

const GuidedTourLauncher = ({ variant = 'floating' }) => {
  const { startTour } = useGuidedTour();

  if (variant === 'floating') {
    return null;
  }

  return (
    <motion.button
      type="button"
      onClick={startTour}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur transition hover:bg-white/15 hover:text-white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      Take the Tour
    </motion.button>
  );
};

export default GuidedTourLauncher;