import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { guidedTourSteps } from './guidedTourSteps.jsx';

const GuidedTourContext = createContext(null);

export const GuidedTourProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [hasCompletedTour, setHasCompletedTour] = useState(false);
  const hasSeenSettingsRef = useRef(false);


  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('guidedTour:completed');
    setHasCompletedTour(stored === 'true');
  }, []);

  const startTour = useCallback(() => {
    hasSeenSettingsRef.current = false;
    setCurrentStepIndex(0);
    setIsActive(true);
  }, []);

  const stopTour = useCallback(() => {
    setIsActive(false);
    setVoiceEnabled(false);
    setCurrentStepIndex(0);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('guidedTour:completed', 'true');
    }
    setHasCompletedTour(true);

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const skipTour = useCallback(() => {
    stopTour();
  }, [stopTour]);

  const nextStep = useCallback(() => {
    setCurrentStepIndex((prev) => {
      if (prev + 1 < guidedTourSteps.length) return prev + 1;
      stopTour();
      return prev;
    });
  }, [stopTour]);

  const previousStep = useCallback(() => {
    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleVoice = useCallback(() => {
    setVoiceEnabled((prev) => !prev);
  }, []);

  const resolveStepTarget = useCallback(
    (step = guidedTourSteps[currentStepIndex]) => {
      if (typeof window === 'undefined' || !step) return null;

      if (typeof step.selector === 'function') {
        return step.selector({ hasSeenSettings: hasSeenSettingsRef.current });
      }

      return document.querySelector(step.selector);
    },
    [currentStepIndex]
  );


  useEffect(() => {
    if (!isActive) return;

    const step = guidedTourSteps[currentStepIndex];
    if (!step) {
      stopTour();
      return;
    }

    const targetElement = resolveStepTarget(step);
    if (!targetElement) {
      stopTour();
      return;
    }

    if (targetElement.dataset?.tourTarget === 'settings-panel') {
      hasSeenSettingsRef.current = true;
    }

    const timeout = window.setTimeout(() => {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [isActive, currentStepIndex, resolveStepTarget, stopTour]);


  useEffect(() => {
    if (!isActive) return;

    const step = guidedTourSteps[currentStepIndex];
    const target = resolveStepTarget(step);
    if (!target) return;

    window.dispatchEvent(
      new CustomEvent('guided-tour:step-target', {
        detail: { id: step?.id ?? null, element: target }
      })
    );

    return () => {
      window.dispatchEvent(new CustomEvent('guided-tour:step-target-clear'));
    };
  }, [isActive, currentStepIndex, resolveStepTarget]);

  const value = useMemo(
    () => ({
      currentStep: guidedTourSteps[currentStepIndex] ?? null,
      currentStepIndex,
      hasCompletedTour,
      isActive,
      nextStep,
      previousStep,
      skipTour,
      startTour,
      steps: guidedTourSteps,
      stopTour,
      toggleVoice,
      voiceEnabled
    }),
    [
      currentStepIndex,
      hasCompletedTour,
      isActive,
      nextStep,
      previousStep,
      skipTour,
      startTour,
      stopTour,
      toggleVoice,
      voiceEnabled
    ]
  );

  return (
    <GuidedTourContext.Provider value={value}>
      {children}
    </GuidedTourContext.Provider>
  );
};

export const useGuidedTour = () => {
  const context = useContext(GuidedTourContext);
  if (!context) {
    throw new Error('useGuidedTour must be used within a GuidedTourProvider');
  }
  return context;
};
