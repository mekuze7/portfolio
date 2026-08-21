const getProjectTheme = (category) => {
  const cat = category.toLowerCase();
  if (cat.includes('python') || cat.includes('ai')) 
    return { color: '#8b5cf6', bg: '#1e1b4b' }; 
  if (cat.includes('java')) 
    return { color: '#f59e0b', bg: '#451a03' }; 
  if (cat.includes('node.js') || cat.includes('express'))
    return { color: '#10b981', bg: '#064e3b' }; 
  if (cat.includes('tailwind') || cat.includes('css'))
    return { color: '#0ea5e9', bg: '#0c4a6e' }; 
  if (cat.includes('react')) 
    return { color: '#38bdf8', bg: '#082f49' }; 
  
  return { color: '#64748b', bg: '#0f172a' }; 
};

const getTechData = (category) => {
  const techMap = {
    'react': { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    'node.js': { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    'tailwind': { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
    'mongodb': { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    'css': { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    'javascript': { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    'java': { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
    'mysql': { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
    'python': { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    'vite': { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: '#646CFF' },
    'bootstrap': { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3' }
  };

  const techs = category.toLowerCase().split(' / ');
  const data = [];
  techs.forEach(t => {
    const key = Object.keys(techMap).find(k => t.trim().includes(k));
    if (key && !data.some(d => d.name === techMap[key].name)) {
      data.push(techMap[key]);
    }
  });
  return data;
};

const ProjectCard = ({ project }) => {
  const theme = getProjectTheme(project.category);
  const techData = getTechData(project.category);
  const tags = project.category.split(' / ');

  return (
    <div className="project-card" style={{ '--project-color': theme.color }}>
      <div className="project-card-header">
        <div className="project-tech-icons">
          {techData.map((tech, idx) => (
            <img key={idx} src={tech.icon} alt={tech.name} className="tech-logo-mini" title={tech.name} />
          ))}
        </div>
        <span className="project-type-pill" style={{ background: theme.color }}>
          {tags[0]}
        </span>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tag-badges mb-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag-badge">{tag.trim()}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-project-github">
              <i className="bi bi-github me-2"></i> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className="portfolio section-bg"> 
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <div className="section-title-card">
            <div className="section-tag"><span className="section-tag-dot"></span> My Work</div>
            <h2>Portfolio &amp; Projects</h2>
            <p>Explore my recent software development work, security projects, and AI engineering applications.</p>
          </div>
        </div>
        <div className="portfolio-content" data-aos="fade-up" data-aos-delay="100">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;