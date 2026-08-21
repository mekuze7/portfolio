import { useEffect, useMemo, useState } from 'react';
import ParticlesBackground from './ParticlesBackground';
import heroLaptop from './assets/hero.png';

const Hero = () => {
  const roles = useMemo(
    () => [
      'Full Stack Developer',
      'Web Security Specialist',
      'Cyber Security & Ethical Hacking',
      'Python & AI Enthusiast',
      'Programmer',
      'Cross-Platform Developer',
      'UI/UX Designer',
      'Penetration Tester'
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
      <div className="hero-laptop-stage" data-aos="zoom-in">
        <div className="laptop-mockup-frame">
          <img src={heroLaptop} alt="Laptop Portfolio visual" className="laptop-bg-img" />
          <div className="laptop-screen-content">
            <div className="hero-badge">
              <span className="pulse-icon"></span> Available for Projects
            </div>
            <h1 className="hero-name">Mekuannt Zelalem</h1>
            <p className="hero-subtitle">
              I'm a <span className="typed">{displayText}</span><span className="hero-cursor">|</span>
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-hero-primary me-2 mb-2">
                <i className="bi bi-folder-check me-2"></i>View Projects
              </a>
              <a href="#contact" className="btn btn-hero-outline mb-2">
                <i className="bi bi-send me-2"></i>Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;