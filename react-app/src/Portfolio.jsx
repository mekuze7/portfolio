const getProjectTheme = (category) => {
  const cat = category.toLowerCase();
  if (cat.includes('python') || cat.includes('ai')) 
    return { color: '#8b5cf6', bg: '#f5f0ff' }; // Violet tint
  if (cat.includes('java')) 
    return { color: '#f59e0b', bg: '#fff8e6' }; // Amber tint
  if (cat.includes('node.js') || cat.includes('express'))
    return { color: '#10b981', bg: '#e6fcf5' }; // Emerald tint
  if (cat.includes('tailwind') || cat.includes('css'))
    return { color: '#0ea5e9', bg: '#e0f7ff' }; // Sky tint
  if (cat.includes('react')) 
    return { color: '#3b82f6', bg: '#e7f0ff' }; // Blue tint
  
  return { color: '#64748b', bg: '#f1f5f9' }; // Slate tint
};

const getTechData = (category) => {
  const techMap = {
    'react': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    'node.js': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    'tailwind': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
    'mongodb': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    'css': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    'javascript': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    'java': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
    'mysql': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
    'python': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    'vite': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: '#646CFF' },
    'bootstrap': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3' },
    'ai': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#6f42c1' },
    'machine learning': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#6f42c1' }
  };

  const techs = category.toLowerCase().split(' / ');
  const data = [];
  techs.forEach(t => {
    const key = Object.keys(techMap).find(k => t.trim().includes(k));
    if (key) data.push(techMap[key]);
  });
  return data;
};

const ProjectCard = ({ project }) => {
  const theme = getProjectTheme(project.category);
  const techData = getTechData(project.category);
  
  return (
    <div className="project-card" style={{ '--project-color': theme.color, '--project-bg': theme.bg }}>
      <div className="project-card-inner">
        <div className="project-icon-header">
          <div className="tech-icons-row">
            {techData.map((tech, idx) => (
              <img key={idx} src={tech.icon} alt="tech" className="tech-logo-mini" />
            ))}
          </div>
        </div>
        <div className="project-info-body">
          <h3>{project.title}</h3>
          <div className="project-tags">{project.category}</div>
          {project.githubLink && (
            <div className="mt-3">
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-button github-button">
                <i className="bi bi-github me-2"></i> GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className="portfolio"> 
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Some of my awesome previous projects.</p>
        </div>
        <div className="portfolio-content" data-aos="fade-up">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;