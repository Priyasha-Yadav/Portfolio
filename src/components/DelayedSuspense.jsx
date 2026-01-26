import { useEffect, useState } from "react";

export default function DelayedSuspense({
  children,
  fallback,
  minDuration = 900
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  return (
    <>
      {children}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-700 
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {fallback}
      </div>
    </>
  );
}
