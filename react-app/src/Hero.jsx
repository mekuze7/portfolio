import { useEffect, useMemo, useState } from 'react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const roles = useMemo(
    () => [
      'Full Stack Developer',
      'Python & AI Enthusiast',
      'Programer',
      'Cross-Platform Developer',
      'UI/UX Designer',
      'Problem Solver'
    ],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeoutMs = isDeleting ? 45 : 90;

    if (!isDeleting && displayText === currentRole) {
      timeoutMs = 1200;
      const timeout = setTimeout(() => setIsDeleting(true), timeoutMs);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return undefined;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.slice(0, Math.max(prev.length - 1, 0))
          : currentRole.slice(0, Math.min(prev.length + 1, currentRole.length))
      );
    }, timeoutMs);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <ParticlesBackground />
      <div className="hero-container" data-aos="fade-in">
        <div className="hero-content">
          <h1 className="hero-name">Mekuannt Zelalem</h1>
          <p className="hero-subtitle">
            I'm a <span className="typed">{displayText}</span><span className="hero-cursor">|</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;