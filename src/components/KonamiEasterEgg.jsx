import { useEffect, useRef, useState } from "react";
import { Sparkles, Laugh } from "lucide-react";

const KonamiEasterEgg = () => {
  const [activated, setActivated] = useState(false);


  const konamiCode = ['h', 'e', 'l', 'l', 'o'];


  const inputSequenceRef = useRef([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const sequence = inputSequenceRef.current;

      sequence.push(key);

      // Keep only last N keys
      if (sequence.length > konamiCode.length) {
        sequence.shift();
      }

      // Check match
      if (sequence.join('') === konamiCode.join('')) {
        setActivated(true);
        inputSequenceRef.current = [];

        const timeout = setTimeout(() => {
          setActivated(false);
        }, 5000);

        return () => clearTimeout(timeout);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {activated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white">
          <div className="text-center">
            <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse mx-auto" />
            <h1 className="text-3xl font-bold mt-4">Secret Unlocked! 🔥</h1>
            <p className="text-lg mt-2">You have the skills of a true dev! 🚀</p>
            <Laugh className="w-12 h-12 text-green-300 mt-4 mx-auto animate-spin" />
          </div>
        </div>
      )}
    </>
  );
};

export default KonamiEasterEgg;
