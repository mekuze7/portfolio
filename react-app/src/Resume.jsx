import { useRef } from 'react';

const Resume = ({ projects = [] }) => {
  const resumeRef = useRef();

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
      role: 'Full Stack & AI Developer',
      period: '2023 - Present',
      organization: 'Independent / Open Source',
      description: 'Building end-to-end web applications, AI diagnostic engines, and scalable management systems using React, Node.js, Python, and Java.',
      highlights: ['MERN Stack Architecture', 'RESTful API & Database Design', 'Machine Learning Models']
    },
    {
      role: 'Software Developer Intern / Student Developer',
      period: '2020 - 2024',
      organization: 'Dilla University',
      description: 'Developed core software projects including Hospital Management and Event Management applications. Collaborated on data structures and software engineering practices.',
      highlights: ['Data Structures & Algorithms', 'Database Optimization', 'UI/UX Principles']
    }
  ];

  return (
    <section id="resume" className="resume section-bg" ref={resumeRef}>
      <div className="container" data-aos="fade-up">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <div className="section-title-card">
            <div className="section-tag"><span className="section-tag-dot"></span> Career Journey</div>
            <h2>Resume &amp; Experience</h2>
            <p>Explore my professional background, education, technical milestones, and certificates.</p>

            {/* Action CTAs */}
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap" data-html2canvas-ignore="true">
              <button onClick={handleDownload} className="btn btn-hero-primary d-inline-flex align-items-center gap-2">
                <i className="bx bx-download fs-5"></i> Download PDF Resume
              </button>
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

        <div className="row g-4 mt-2">
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
                  Passionate <strong>Full Stack Developer</strong> & <strong>AI Enthusiast</strong> with expertise in the MERN Stack, Python, Java, and Database Systems. Proven track record in designing scalable web applications and intuitive interfaces.
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
                    Comprehensive computer science degree focusing on algorithms, database management, web technologies, and software architecture.
                  </p>
                  <div className="tag-badges-container d-flex flex-wrap gap-2 mt-2">
                    <span className="tag-badge">Data Structures</span>
                    <span className="tag-badge">Software Engineering</span>
                    <span className="tag-badge">Web Development</span>
                    <span className="tag-badge">DBMS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Card */}
            <div className="resume-card cert-card mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="resume-card-header d-flex align-items-center gap-3">
                <div className="resume-icon-badge cert-badge">
                  <i className="bx bx-certification fs-4"></i>
                </div>
                <div>
                  <h3 className="resume-card-title m-0">Certificates & Awards</h3>
                  <span className="resume-card-subtitle">Verified Qualifications</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <div>
                    <h4 className="edu-title m-0">Artificial Intelligence & Development</h4>
                    <p className="edu-institution mt-1 mb-0">Professional Certificate Program</p>
                  </div>
                  <a
                    href="/AI_certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-hero-outline"
                    data-html2canvas-ignore="true"
                  >
                    <i className="bx bx-link-external me-1"></i> Open Certificate
                  </a>
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
                  <h3 className="resume-card-title m-0">Work & Development Experience</h3>
                  <span className="resume-card-subtitle">Technical Career Milestones</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                {experienceItems.map((exp, idx) => (
                  <div className="timeline-item mb-4 pb-3 border-bottom-dark" key={idx}>
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
                  <span className="resume-card-subtitle">Practical Implementations</span>
                </div>
              </div>
              <div className="resume-card-body mt-3">
                {projects.slice(0, 3).map((proj, idx) => (
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