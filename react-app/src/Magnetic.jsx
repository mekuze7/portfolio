import { useRef } from 'react';

const Magnetic = ({ children }) => {
  const magneticRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = magneticRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate3d(${relX * 10}px, ${relY * 10}px, 0)`;
  };

  const handleMouseLeave = () => {
    const el = magneticRef.current;
    if (el) el.style.transform = 'translate3d(0,0,0)';
  };

  return (
    <div ref={magneticRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="magnetic">
      {children}
    </div>
  );
};

export default Magnetic;