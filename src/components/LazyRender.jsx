import { useEffect, useRef, useState } from "react";

const LazyRender = ({ children, height = 420 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

return (
  <div ref={ref} style={{ minHeight: height }}>
    {visible ? (
      <div className="h-full">
        {children}
      </div>
    ) : null}
  </div>
);

};

export default LazyRender;
