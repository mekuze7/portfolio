import { useRef, useState } from 'react';

const Resume = ({ projects = [] }) => {
  const resumeRef = useRef();
  const cvContentRef = useRef();
  const [cvOpen, setCvOpen] = useState(true);

  const scrollToCv = () => {
    setCvOpen(true);
    setTimeout(() => {
      cvContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      cvContentRef.current?.classList.add('cv-cards-highlight');
      setTimeout(() => cvContentRef.current?.classList.remove('cv-cards-highlight'), 1800);
    }, 80);
  };

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 10,
      filename: 'Mekuannt_Zelalem_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        onclone: (clonedDoc) => {
          const aosElements = clonedDoc.querySelectorAll('[data-aos]');
          aosElements.forEach((el) => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.visibility = 'visible';
          });
        }
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (window.html2pdf) {
      window.html2pdf().set(opt).from(element).save();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => {
        window.html2pdf().set(opt).from(element).save();
      };
      document.head.appendChild(script);
    }
  };

  const experienceItems = [
    {
      role: 'Cyber Security Specialist & Ethical Hacker',
      period: '2023 - Present',
      organization: 'Independent Security Researcher / Penetration Tester',
      description: 'Performing web application penetration testing, vulnerability assessments, and network security audits for clients. Identifying critical OWASP Top 10 vulnerabilities, reporting findings with actionable remediation steps, and implementing secure coding practices.',
      highlights: ['Penetration Testing (Web & Network)', 'OWASP Top 10 & Bug Bounty', 'Vulnerability Assessment', 'Network Security & Hardening']
    },
    {
      role: 'Full Stack & AI Developer',
      period: '2023 - Present',
      organization: 'Independent / Open Source',
      description: 'Building end-to-end secure web applications, AI diagnostic engines, and scalable management systems using React, Node.js, Python, and Java. Integrating security-first design principles into every layer of the architecture.',
      highlights: ['MERN Stack Architecture', 'Secure RESTful APIs', 'Input Validation & Sanitization', 'Machine Learning Models']
    },
    {
      role: 'Software Developer Intern / Student Developer',
      period: '2020 - 2024',
      organization: 'Dilla University',
      description: 'Developed core software projects including Hospital Management and Event Management applications with a focus on secure authentication, role-based access control, and SQL injection prevention. Collaborated on data structures and software engineering practices.',
      highlights: ['Data Structures & Algorithms', 'Secure Authentication Systems', 'Database Optimization', 'UI/UX Principles']
    }
  ];

  const cyberSecurityProjects = projects.filter(p =>
    p.category.toLowerCase().includes('security') ||
    p.category.toLowerCase().includes('hacking') ||
    p.category.toLowerCase().includes('penetration') ||
    p.category.toLowerCase().includes('python')
  ).slice(0, 3);

  const otherProjects = projects.filter(p =>
    !cyberSecurityProjects.includes(p)
  ).slice(0, 3 - cyberSecurityProjects.length);

  const featuredProjects = [...cyberSecurityProjects, ...otherProjects].slice(0, 3);

  return (
    <section id="resume" className="resume section-bg" ref={resumeRef}>
      <div className="container" data-aos="fade-up">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <div className="section-title-card">
            <div className="section-tag"><span className="section-tag-dot"></span> Career Journey</div>
            <h2>Resume &amp; Experience</h2>
            <p>Explore my professional background in Cyber Security, Ethical Hacking, Full Stack Development, and AI Engineering.</p>

            {/* Action CTAs */}
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap" data-html2canvas-ignore="true">
              <a
                href="/mekuannt_zelalem%20_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-hero-primary d-inline-flex align-items-center gap-2"
              >
                <i className="bx bx-file fs-5"></i> View My CV
              </a>
              <a
                href="/AI_certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-hero-outline d-inline-flex align-items-center gap-2"
              >
                <i className="bx bx-award fs-5"></i> View AI Certificate
              </a>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2" ref={cvContentRef} style={{ display: cvOpen ? '' : 'none' }}>
          {/* Column 1: Summary & Education */}
          <div className="col-lg-6">
            {/* Professional Summary Card */}
            <div className="resume-card mb-5" data-aos="fade-up">
              <div className="resume-card-header d-flex align-items-center gap-3">
                <div className="resume-icon-badge">
                  <i className="bx bx-user-check fs-4"></i>
                </div>
                <div>
                  <h3 className="resume-card-title m-0">Professional Summary</h3>
                  <span className="resume-card-subtitle">Mekuannt Zelalem</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                <p className="resume-summary-text">
                  <strong>Cyber Security Specialist &amp; Ethical Hacker (Penetration Tester)</strong> with complementary expertise as a <strong>Full Stack Developer</strong> &amp; <strong>AI Enthusiast</strong>. Skilled in identifying and exploiting vulnerabilities, conducting web &amp; network penetration tests, OWASP Top 10, secure coding, and building secure, scalable applications with the MERN Stack, Python, and Java.
                </p>
                <ul className="resume-contact-list list-unstyled mt-3 mb-0">
                  <li><i className="bx bx-map text-info me-2"></i><strong>Location:</strong> Dilla, Ethiopia</li>
                  <li><i className="bx bx-envelope text-info me-2"></i><strong>Email:</strong> Mekuze7@gmail.com</li>
                  <li><i className="bx bx-phone text-info me-2"></i><strong>Phone:</strong> +251 913 212 259</li>
                </ul>
              </div>
            </div>

            {/* Education Card */}
            <div className="resume-card mb-5" data-aos="fade-up" data-aos-delay="100">
              <div className="resume-card-header d-flex align-items-center gap-3">
                <div className="resume-icon-badge">
                  <i className="bx bx-book-open fs-4"></i>
                </div>
                <div>
                  <h3 className="resume-card-title m-0">Education</h3>
                  <span className="resume-card-subtitle">Academic Credentials</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                <div className="education-item">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <h4 className="edu-title m-0">Bachelor in Computer Science</h4>
                    <span className="resume-period-badge">2020 - 2024</span>
                  </div>
                  <p className="edu-institution mt-1 mb-2"><em>Dilla University, Ethiopia</em></p>
                  <p className="edu-desc">
                    Comprehensive computer science degree focusing on algorithms, database management, web technologies, software architecture, <strong>network security, cryptography, and secure software development.</strong>
                  </p>
                  <div className="tag-badges-container d-flex flex-wrap gap-2 mt-2">
                    <span className="tag-badge">Data Structures</span>
                    <span className="tag-badge">Software Engineering</span>
                    <span className="tag-badge">Web Development</span>
                    <span className="tag-badge">DBMS</span>
                    <span className="tag-badge" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>Network Security</span>
                    <span className="tag-badge" style={{ background: 'rgba(59,130,246,0.15)', color: '#3b82f6' }}>Cryptography</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Card */}
            <div className="resume-card cert-card mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="resume-card-header d-flex align-items-center gap-3">
                <div className="resume-icon-badge cert-badge">
                  <i className="bx bx-certification fs-4"></i>
                </div>
                <div>
                  <h3 className="resume-card-title m-0">Certificates &amp; Awards</h3>
                  <span className="resume-card-subtitle">Verified Qualifications</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                <div className="mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div>
                      <h4 className="edu-title m-0" style={{ color: '#10b981' }}>
                        <i className="bx bx-shield-quarter me-2"></i>Cyber Security &amp; Ethical Hacking
                      </h4>
                      <p className="edu-institution mt-1 mb-0">Penetration Testing &amp; Network Security — Professional Training</p>
                    </div>
                    <span className="tag-badge" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>
                      Active
                    </span>
                  </div>
                  <div className="tag-badges-container d-flex flex-wrap gap-2 mt-2">
                    <span className="tag-badge">Pen Testing</span>
                    <span className="tag-badge">OWASP Top 10</span>
                    <span className="tag-badge">Web Security</span>
                    <span className="tag-badge">Network Security</span>
                    <span className="tag-badge">Bug Bounty</span>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Practical Experience & Key Projects */}
          <div className="col-lg-6">
            {/* Experience Card */}
            <div className="resume-card mb-5" data-aos="fade-up" data-aos-delay="100">
              <div className="resume-card-header d-flex align-items-center gap-3">
                <div className="resume-icon-badge">
                  <i className="bx bx-briefcase fs-4"></i>
                </div>
                <div>
                  <h3 className="resume-card-title m-0">Work &amp; Development Experience</h3>
                  <span className="resume-card-subtitle">Technical Career Milestones</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                {experienceItems.map((exp, idx) => (
                  <div className={`timeline-item ${idx < experienceItems.length - 1 ? 'mb-4 pb-3 border-bottom-dark' : ''}`} key={idx}>
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <h4 className="exp-role m-0">{exp.role}</h4>
                      <span className="resume-period-badge">{exp.period}</span>
                    </div>
                    <p className="exp-org mt-1 mb-2"><em>{exp.organization}</em></p>
                    <p className="exp-desc">{exp.description}</p>
                    <div className="tag-badges-container d-flex flex-wrap gap-2 mt-2">
                      {exp.highlights.map((h, i) => (
                        <span key={i} className="tag-badge">{h}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Technical Projects Showcase Card */}
            <div className="resume-card" data-aos="fade-up" data-aos-delay="200">
              <div className="resume-card-header d-flex align-items-center gap-3">
                <div className="resume-icon-badge">
                  <i className="bx bx-code-alt fs-4"></i>
                </div>
                <div>
                  <h3 className="resume-card-title m-0">Featured Projects</h3>
                  <span className="resume-card-subtitle">Security &amp; Software Engineering</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                {featuredProjects.map((proj, idx) => (
                  <div className="project-resume-item mb-3" key={idx}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <h5 className="proj-title m-0">{proj.title}</h5>
                      <span className="tag-badge text-info">{proj.category.split('/')[0]}</span>
                    </div>
                    <p className="proj-desc mt-1 mb-0">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
