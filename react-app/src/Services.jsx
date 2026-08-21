const ServiceCard = ({ icon, title, description, delay, color }) => {
  return (
    <div className="service-card" data-aos="fade-up" data-aos-delay={delay} style={{ '--service-color': color }}>
      <div className="icon-wrapper">
        <i className={icon}></i>
      </div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="service-footer">
        <span className="service-learn-more">
          Explore Service <i className="bi bi-arrow-right me-1"></i>
        </span>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    { icon: "bi bi-shield-lock", title: "Cyber Security & Hacking", description: "Performing vulnerability assessments, ethical hacking, and penetration testing to safeguard systems and web infrastructure.", delay: 0, color: "#10b981" },
    { icon: "bi bi-code-slash", title: "Web Development", description: "Building scalable, high-performance web applications using React, Node.js, and modern full-stack architectures.", delay: 100, color: "#38bdf8" },
    { icon: "bi bi-palette", title: "UI/UX Design", description: "Crafting beautiful, intuitive, user-centric interfaces with dark mode, smooth transitions, and glassmorphism.", delay: 200, color: "#a855f7" },
    { icon: "bi bi-phone", title: "Mobile Solutions", description: "Developing responsive cross-platform solutions optimized for mobile, tablet, and desktop viewports.", delay: 300, color: "#f59e0b" },
    { icon: "bi bi-cpu", title: "API Development", description: "Designing secure RESTful APIs and backend services to connect frontend interfaces with scalable databases.", delay: 400, color: "#6366f1" },
    { icon: "bi bi-database", title: "Database Architecture", description: "Managing data models with MySQL, PostgreSQL, and MongoDB for fast data indexing and high throughput.", delay: 500, color: "#ec4899" }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Services &amp; Expertise</h2>
          <p>Delivering modern, robust technical solutions tailored for web, mobile, and intelligent systems.</p>
        </div>
        <div className="services-content" data-aos="fade-up" data-aos-delay="100">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;