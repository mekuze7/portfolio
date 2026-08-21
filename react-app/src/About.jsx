import profileImg from './Mek.jpg';

const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Passionate developer creating intelligent, user-friendly digital experiences.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="about-img-wrapper">
              <img src={profileImg} className="img-fluid profile-about-img" alt="About Profile" />
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-left">
            <h3 className="about-headline">Full Stack Developer, Cyber Security Specialist &amp; AI Creator</h3>
            <p className="about-intro">
              I'm a creative Full Stack & Cybersecurity Developer based in Ethiopia. I specialize in crafting robust, high-performance web applications, ethical hacking & penetration testing, and AI tools that adhere to modern architectural standards.
            </p>
            <div className="row about-info-grid my-4">
              <div className="col-sm-6 info-item mb-3">
                <i className="bi bi-person-fill text-primary me-2"></i> <strong>Name:</strong> <span>Mekuannt Zelalem</span>
              </div>
              <div className="col-sm-6 info-item mb-3">
                <i className="bi bi-telephone-fill text-primary me-2"></i> <strong>Phone:</strong> <span>+251 913212259</span>
              </div>
              <div className="col-sm-6 info-item mb-3">
                <i className="bi bi-envelope-fill text-primary me-2"></i> <strong>Email:</strong> <span>Mekuze7@gmail.com</span>
              </div>
              <div className="col-sm-6 info-item mb-3">
                <i className="bi bi-geo-alt-fill text-primary me-2"></i> <strong>Location:</strong> <span>Dilla, Ethiopia</span>
              </div>
              <div className="col-sm-6 info-item mb-3">
                <i className="bi bi-shield-lock text-primary me-2"></i> <strong>Focus:</strong> <span>MERN, Security, Python</span>
              </div>
              <div className="col-sm-6 info-item mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i> <strong>Status:</strong> <span className="status-badge">Available for Hire</span>
              </div>
            </div>
            <p className="about-footer-text">
              My expertise includes rapid skill acquisition, full-stack app design, API design &amp; integration, database optimization, and cross-platform application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;