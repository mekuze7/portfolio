import { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Resume from './Resume'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import image from './Mek.jpg'

function App() {
  useEffect(() => {
    // Programmatically add Icon CDNs to ensure visibility
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    bootstrapCSS.rel = "stylesheet";
    document.head.appendChild(bootstrapCSS);

    const boxicons = document.createElement("link");
    boxicons.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    boxicons.rel = "stylesheet";
    document.head.appendChild(boxicons);

    const bootstrapIcons = document.createElement("link");
    bootstrapIcons.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
    bootstrapIcons.rel = "stylesheet";
    document.head.appendChild(bootstrapIcons);

    // Inject AOS for animations and section visibility
    const aosCSS = document.createElement("link");
    aosCSS.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
    aosCSS.rel = "stylesheet";
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement("script");
    aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    aosScript.async = true;

    // Safety fallback: If AOS fails to load or initialize, show all sections after 2 seconds
    const visibilityFallback = setTimeout(() => {
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }, 2000);

    aosScript.onload = () => {
      clearTimeout(visibilityFallback);
      if (window.AOS) {
        window.AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
      }
    };
    document.body.appendChild(aosScript);
  }, []);

  const projects = [
    {
      title: "Food Contract System",
      category: "Vite / Tailwind / React / Node.js / MongoDB / JavaScript",
      description: "Digital management system for food supply contracts and vendor interaction. Optimized procurement workflows and institutional logistics.",
      link: "#", // This link is currently unused in ProjectCard, but kept for consistency
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      githubLink: "https://github.com/mekuze7",
    
    },
    {
      title: "Hospital Management System",
      category: "Vite / Tailwind / Node.js / React / MongoDB / JavaScript",
      description: "Internal healthcare portal for managing patient records and staff schedules. Developed a secure pharmacy inventory module with real-time stock tracking.",
      link: "#", // This link is currently unused in ProjectCard, but kept for consistency
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      githubLink: "https://github.com/mekuze7",
    
    },
    {
      title: "Personal Portfolio Website",
      category: "Vite / React / Bootstrap / JavaScript / CSS",
      description: "Modern, high-performance portfolio featuring custom CSS animations, interactive particle backgrounds, and responsive grid layouts.",
      link: "#", // This link is currently unused in ProjectCard, but kept for consistency
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      githubLink: "https://github.com/mekuze7",
    
    },
    {
      title: "Event Management System",
      category: "Java / CSS / MySQL",
      description: "Robust desktop application utilizing Java Swing and JDBC for secure event handling and real-time MySQL database synchronization.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      githubLink: "https://github.com/mekuze7/event-management_system",
      
    },
    {
      title: "AI Disease Diagnosis System",
      category: "Vite / Python / React",
      description: "Advanced diagnostic tool using Python-based Machine Learning models to analyze clinical data and provide predictive health insights.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      githubLink: "https://github.com/mekuze7",
    
    }
  ];

  return (
    <div className="app-container">
      <Header />

      <Hero />

      <main id="main">
        <About />
        <Skills />
        <Resume projects={projects} />
        <Portfolio projects={projects} />
        <Services />
        <Contact />
      </main>
    </div>
  )
}
export default App
