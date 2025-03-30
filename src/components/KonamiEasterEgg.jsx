import { useEffect, useState } from "react";
import { Sparkles, Laugh } from "lucide-react"; // Fun icons!

const KonamiEasterEgg = () => {
  const [activated, setActivated] = useState(false);

  // Konami Code Sequence
  const konamiCode = [
   'h','e','l','l','o'
  ];
  
  let inputSequence = [];

  useEffect(() => {
    const handleKeyDown = (event) => {
      inputSequence.push(event.key);
      
      // Keep only the last required inputs
      if (inputSequence.length > konamiCode.length) {
        inputSequence.shift(); // Remove first element if too long
      }

      // Check if user entered the Konami Code
      if (JSON.stringify(inputSequence) === JSON.stringify(konamiCode)) {
        setActivated(true);
        inputSequence = []; // Reset sequence
        setTimeout(() => setActivated(false), 5000); // Hide after 5 sec
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {activated && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 text-white z-50">
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
