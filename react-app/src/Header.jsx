import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';
import profileImg from './Mek.jpg';

const Header = ({ isMobileNavActive, setIsMobileNavActive }) => {
  const navItems = [
    { id: 'hero', icon: 'bx bx-home', label: 'Home' },
    { id: 'about', icon: 'bx bx-user', label: 'About' },
    { id: 'skills', icon: 'bx bx-receipt', label: 'Skills' },
    { id: 'resume', icon: 'bx bx-file-blank', label: 'Resume and Certificate' },
    { id: 'portfolio', icon: 'bx bx-book-content', label: 'Portfolio' },
    { id: 'services', icon: 'bx bx-server', label: 'Services' },
    { id: 'contact', icon: 'bx bx-envelope', label: 'Contact' }
  ];

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const onScroll = () => {
      const scrollPos = window.scrollY + 180;
      let current = 'hero';

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;
        if (scrollPos >= section.offsetTop) {
          current = sectionId;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileNavActive(false);
  };

  return (
    <>
      <header id="header">
        <div className="d-flex flex-column align-items-center">
          <div className="profile text-center">
            <img src={profileImg} alt="Mekuannt Zelalem" className="img-fluid rounded-circle" />
            <h3 className="text-light mt-3"><a href="#hero">Mekuannt Zelalem</a></h3>
            <div className="sidebar-social-links">
              <Magnetic>
                <a href="https://github.com/mekuze7" className="github" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
              </Magnetic>
              <Magnetic>
                <a href="https://linkedin.com/in/meku-ze-00293237a" className="linkedin" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
              </Magnetic>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar mt-4">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link scrollto ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <i className={item.icon}></i> <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;