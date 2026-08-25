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
                Hello, I am <strong>Mekuannt Zelalem</strong>, a <strong>Full Stack Developer</strong> and <strong>Ethical Hacker (Penetration Tester)</strong> based in Ethiopia. I bridge the gap between intuitive front-end interfaces, resilient back-end systems, and rigorous penetration testing security standards — delivering solutions that are both powerful and secure.
              </p>

              {/* Personal Information Panel - Highly Attractive & Readable */}
              <div className="about-info-panel mb-5" style={{
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.2) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 0 20px rgba(56, 189, 248, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '100px', height: '100px', background: 'rgba(56,189,248,0.1)', borderRadius: '50%', filter: 'blur(30px)' }}></div>

                <div className="row g-4 position-relative">
                  {/* Column 1 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-4">
                      <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '18px', border: '1px solid rgba(56,189,248,0.25)', flexShrink: 0, boxShadow: '0 4px 15px rgba(56,189,248,0.15)' }}>
                        <i className="bx bx-phone" style={{ fontSize: '22px', color: '#38bdf8' }}></i>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: '600' }}>Phone</span>
                        <a href="tel:+251913212259" style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', textDecoration: 'none', letterSpacing: '0.5px' }}>+251 913 212 259</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 mb-md-0">
                      <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '18px', border: '1px solid rgba(56,189,248,0.25)', flexShrink: 0, boxShadow: '0 4px 15px rgba(56,189,248,0.15)' }}>
                        <i className="bx bx-map" style={{ fontSize: '22px', color: '#38bdf8' }}></i>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: '600' }}>Location</span>
                        <span style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.5px' }}>Dilla, Ethiopia</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-4">
                      <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '18px', border: '1px solid rgba(56,189,248,0.25)', flexShrink: 0, boxShadow: '0 4px 15px rgba(56,189,248,0.15)' }}>
                        <i className="bx bx-envelope" style={{ fontSize: '22px', color: '#38bdf8' }}></i>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: '600' }}>Email</span>
                        <a href="mailto:mekuze7@gmail.com" style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', textDecoration: 'none', letterSpacing: '0.5px' }}>mekuze7@gmail.com</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '18px', border: '1px solid rgba(74, 222, 128, 0.25)', flexShrink: 0, boxShadow: '0 4px 15px rgba(74, 222, 128, 0.15)' }}>
                        <i className="bx bx-briefcase" style={{ fontSize: '22px', color: '#4ade80' }}></i>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: '600' }}>Freelance</span>
                        <span style={{ fontSize: '1.15rem', fontWeight: '700', color: '#4ade80', letterSpacing: '0.5px', textShadow: '0 0 10px rgba(74,222,128,0.3)' }}>Available for Hire</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;