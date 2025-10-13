import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGuidedTour } from './GuidedTourProvider.jsx';

const maskPadding = 16;

const createMaskStyle = (targetRect) => {
  if (!targetRect) {
    return {
      WebkitMaskImage: 'none',
      maskImage: 'none'
    };
  }

  const { height, left, top, width } = targetRect;
  const insetTop = Math.max(top - maskPadding, 0);
  const insetLeft = Math.max(left - maskPadding, 0);
  const insetWidth = width + maskPadding * 2;
  const insetHeight = height + maskPadding * 2;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="100%" height="100%" fill="black"/>
    <rect x="${insetLeft}" y="${insetTop}" width="${insetWidth}" height="${insetHeight}" rx="24" ry="24" fill="white"/>
  </svg>`;

  const maskUrl = `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;

  return {
    WebkitMaskImage: maskUrl,
    maskImage: maskUrl,
    WebkitMaskMode: 'alpha',
    maskMode: 'alpha'
  };
};

const GuidedTourOverlay = () => {
  const { currentStep, currentStepIndex, isActive, nextStep, previousStep, skipTour, steps, stopTour, toggleVoice, voiceEnabled } =
    useGuidedTour();
  const [targetRect, setTargetRect] = useState(null);

  useEffect(() => {
    if (!isActive || !currentStep) {
      setTargetRect(null);
      return;
    }

    const targetElement = document.querySelector(currentStep.selector);
    if (!targetElement) {
      setTargetRect(null);
      return;
    }

    const updateRect = () => {
      const rect = targetElement.getBoundingClientRect();
      const viewportOffset = {
        height: rect.height,
        left: rect.left,
        top: rect.top,
        width: rect.width
      };
      setTargetRect(viewportOffset);
    };

    updateRect();

    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(targetElement);

    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
    };
  }, [currentStep, isActive]);

  useEffect(() => {
    if (!voiceEnabled || !currentStep?.voiceScript) return;
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(currentStep.voiceScript);
    utterance.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentStep, voiceEnabled]);

  useEffect(() => {
    if (!isActive) return;

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        skipTour();
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        nextStep();
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previousStep();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isActive, nextStep, previousStep, skipTour]);

  const maskStyle = useMemo(() => createMaskStyle(targetRect), [targetRect]);

  return (
    <AnimatePresence>
      {isActive && currentStep ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-live="polite"
        >
          <div className="pointer-events-auto fixed inset-0 bg-black/50" style={maskStyle} />

          <div className="pointer-events-none fixed inset-0">
            {targetRect ? (
              <motion.div
                className="pointer-events-none absolute border-2 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  height: targetRect.height + maskPadding * 2,
                  left: Math.max(targetRect.left - maskPadding, 16),
                  top: Math.max(targetRect.top - maskPadding, 16),
                  width: targetRect.width + maskPadding * 2
                }}
              />
            ) : null}
          </div>

          <motion.div
            className="pointer-events-auto fixed inset-x-0 bottom-12 mx-auto flex max-w-xl flex-col gap-4 rounded-2xl bg-[#10101f] p-6 text-white shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-red-400">
                  Step {currentStepIndex + 1} of {steps.length}
                </p>
                <h3 className="text-2xl font-semibold">{currentStep.title}</h3>
                <p className="mt-2 text-gray-300">{currentStep.description}</p>
              </div>
              <button
                type="button"
                onClick={skipTour}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20"
              >
                Skip
              </button>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <button
                  type="button"
                  onClick={toggleVoice}
                  className={`rounded-full px-3 py-1 text-sm transition ${voiceEnabled ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`}
                >
                  {voiceEnabled ? 'Voice On' : 'Voice Off'}
                </button>
                <button
                  type="button"
                  onClick={previousStep}
                  className="rounded-full px-3 py-1 text-sm text-white/70 transition hover:bg-white/10"
                  disabled={currentStepIndex === 0}
                >
                  Back
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={stopTour}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
                >
                  End Tour
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="rounded-full bg-gradient-to-r from-red-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:shadow-purple-500/40"
                >
                  {currentStepIndex + 1 === steps.length ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default GuidedTourOverlay;