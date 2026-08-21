const About = () => {
  const highlights = [
    { icon: 'bx bx-code-alt', label: 'Full Stack MERN', desc: 'Scalable React, Node.js, Express & MongoDB apps' },
    { icon: 'bx bx-shield-quarter', label: 'Cyber Security', desc: 'Ethical hacking, penetration testing & web security' },
    { icon: 'bx bx-brain', label: 'AI Solutions', desc: 'Python-driven diagnostic tools & intelligent algorithms' }
  ];

  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        {/* Section Title Card */}
        <div className="section-title text-center mb-5">
          <div className="section-title-card">
            <div className="section-tag"><span className="section-tag-dot"></span> Who I Am</div>
            <h2>About Me</h2>
            <p>Passionate developer creating secure, intelligent, and modern digital experiences.</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            <div className="about-main-card" data-aos="fade-up" data-aos-delay="100">

              {/* Name + Status Header */}
              <div className="about-header d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div>
                  <h3 className="about-headline m-0">
                    Building <span className="gradient-text">Secure, High-Performance</span><br className="d-none d-md-block" /> &amp; Intelligent Applications
                  </h3>
                  <p className="about-profile-role mt-2 mb-0">Software &amp; Security Engineer — Dilla, Ethiopia</p>
                </div>
                <span className="status-badge d-inline-flex align-items-center gap-2">
                  <span className="pulse-green-dot"></span> Available for Hire
                </span>
              </div>

              {/* Intro Text */}
              <p className="about-intro mb-4">
                I am a <strong>Full Stack Developer</strong> and <strong>Cyber Security Specialist</strong> based in Ethiopia. I bridge the gap between intuitive front-end interfaces, resilient back-end systems, and rigorous penetration testing security standards — delivering solutions that are both powerful and secure.
              </p>

              {/* Smart Feature Pills */}
              <div className="row g-3 mb-4">
                {highlights.map((item, idx) => (
                  <div className="col-md-4 col-sm-6 col-12" key={idx}>
                    <div className="about-feature-card h-100">
                      <i className={`${item.icon} feature-card-icon`}></i>
                      <h5 className="feature-card-title">{item.label}</h5>
                      <p className="feature-card-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Grid */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6 col-md-3">
                  <div className="info-pill-card">
                    <i className="bi bi-person-fill icon-accent"></i>
                    <div>
                      <span className="info-label">Name</span>
                      <span className="info-val">Mekuannt Zelalem</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="info-pill-card">
                    <i className="bi bi-geo-alt-fill icon-accent"></i>
                    <div>
                      <span className="info-label">Location</span>
                      <span className="info-val">Dilla, Ethiopia</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="info-pill-card">
                    <i className="bi bi-envelope-fill icon-accent"></i>
                    <div>
                      <span className="info-label">Email</span>
                      <a href="mailto:Mekuze7@gmail.com" className="info-val info-link">Mekuze7@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="info-pill-card">
                    <i className="bi bi-telephone-fill icon-accent"></i>
                    <div>
                      <span className="info-label">Phone</span>
                      <a href="tel:+251913212259" className="info-val info-link">+251 913 212 259</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Bar */}
              <div className="about-stats-bar d-flex justify-content-around align-items-center flex-wrap gap-3 mt-3">
                <div className="stat-item text-center">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Production Apps</span>
                </div>
                <div className="stat-divider d-none d-sm-block"></div>
                <div className="stat-item text-center">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Security Focus</span>
                </div>
                <div className="stat-divider d-none d-sm-block"></div>
                <div className="stat-item text-center">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;