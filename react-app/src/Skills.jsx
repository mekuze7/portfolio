import './Skills.css';

const SkillCard = ({ label, icon, color }) => {
  return (
    <div className="skill-card" style={{ '--skill-color': color }}>
      <i className={icon} style={{ color: color }}></i>
      <span className="skill-name">{label}</span>
    </div>
  );
};

const Skills = () => {
  const skillGroups = {
    "Frontend": [
      { label: "HTML5", icon: "bx bxl-html5", color: "#E34F26" },
      { label: "CSS3", icon: "bx bxl-css3", color: "#1572B6" },
      { label: "JavaScript", icon: "bx bxl-javascript", color: "#F7DF1E" },
      { label: "TypeScript", icon: "bx bxl-typescript", color: "#3178C6" },
      { label: "React", icon: "bx bxl-react", color: "#61DAFB" },
      { label: "Bootstrap", icon: "bx bxl-bootstrap", color: "#7952B3" },
      { label: "Tailwind", icon: "bx bxl-tailwind-css", color: "#06B6D4" },
    ],
    "Backend": [
      { label: "Node.js", icon: "bx bxl-nodejs", color: "#339933" },
      { label: "Express", icon: "bx bxs-server", color: "#000000" },
      { label: "PHP", icon: "bx bxl-php", color: "#777BB4" },
      { label: "MySQL", icon: "bx bxs-data", color: "#4479A1" },
      { label: "MongoDB", icon: "bx bxl-mongodb", color: "#47A248" },
    ],
    "Cyber Security & Hacking": [
      { label: "Web Security", icon: "bx bx-lock-alt", color: "#8B5CF6" },
      { label: "Cyber Security", icon: "bx bx-shield-alt-2", color: "#3B82F6" },
      { label: "Ethical Hacking", icon: "bx bx-shield-quarter", color: "#10B981" },
      { label: "Penetration Testing", icon: "bx bx-lock-open-alt", color: "#EF4444" },
      { label: "Network Security", icon: "bx bx-radar", color: "#F59E0B" },
    ],
    "Languages": [
      { label: "Java", icon: "bx bxl-java", color: "#007396" },
      { label: "Python", icon: "bx bxl-python", color: "#3776AB" },
      { label: "C++", icon: "bx bxl-c-plus-plus", color: "#00599C" },
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <div className="section-title-card">
            <div className="section-tag"><span className="section-tag-dot"></span> Technical Skills</div>
            <h2>My Expertise &amp; Tools</h2>
            <p>A curated snapshot of my technical skills across frontend, backend, security, and AI development.</p>
          </div>
        </div>

        {Object.entries(skillGroups).map(([groupName, skills], index) => (
          <div key={groupName} className="skill-group-container" data-aos="fade-up" data-aos-delay={index * 150}>
            <h3 className="skill-group-title">{groupName}</h3>
            <div className="skills-content mb-5">
              {skills.map((skill, index) => (
                <SkillCard key={index} label={skill.label} icon={skill.icon} color={skill.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;