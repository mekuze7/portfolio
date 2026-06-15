import { useRef } from 'react';

const Resume = ({ projects }) => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin:       10,
      filename:     'Mekuannt_Zelalem_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
        onclone: (clonedDoc) => {
          // Force all elements hidden by AOS to be visible in the PDF
          const aosElements = clonedDoc.querySelectorAll('[data-aos]');
          aosElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.visibility = 'visible';
          });
        }
      },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (window.html2pdf) {
      window.html2pdf().set(opt).from(element).save();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
      script.onload = () => {
        window.html2pdf().set(opt).from(element).save();
      };
      document.head.appendChild(script);
    }
  };

  return (
    <section id="resume" className="resume section-bg" ref={resumeRef}>
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check out my professional background and technical journey below.</p>
          <div className="mt-3" data-html2canvas-ignore="true">
            <a 
              href="/Mekuannt_Zelalem_Resume.pdf" 
              download 
              className="btn btn-primary rounded-pill px-4 py-2 me-3"
            >
              <i className="bi bi-download me-2"></i> Download Resume
            </a>
            <a href="/AI_Certificate.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill px-4 py-2">
              <i className="bi bi-award me-2"></i> View Certificate
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Professional Summary</h3>
            <div className="resume-item pb-0">
              <h4>Mekuannt Zelalem</h4>
              <p><em>Passionate Full Stack Developer with expertise in the MERN stack, Java, and Python. Focused on building scalable web applications and AI-driven solutions.</em></p>
              <ul>
                <li>Dilla, Ethiopia</li>
                <li><strong>Phone:</strong> +251 913 212 259</li>
                <li><strong>Email:</strong> Mekuze7@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor in Computer Science</h4>
              <h5>2020 - 2024</h5>
              <p><em>Dilla University, Ethiopia</em></p>
              <p>Relevant coursework: Data Structures & Algorithms, Web Development, Database Management, and Software Engineering.</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Key Technical Projects</h3>
            {projects.map((project, index) => (
              <div className="resume-item" key={index}>
                <h4>{project.title}</h4>
                <h5>{project.category}</h5>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;