const ServiceCard = ({ icon, title, description, delay, color }) => {
  return (
    <div className="service-card" data-aos="fade-up" data-aos-delay={delay} style={{ '--service-color': color }}>
      <div className="icon"><i className={icon}></i></div>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    { icon: "bi bi-code-slash", title: "Web Development", description: "Building scalable and responsive web applications using the MERN stack and modern JavaScript frameworks.", delay: 0, color: "#3b82f6" },
    { icon: "bi bi-palette", title: "UI/UX Design", description: "Creating visually stunning and user-centric interfaces with a focus on seamless user experience.", delay: 100, color: "#8b5cf6" },
    { icon: "bi bi-phone", title: "Mobile Solutions", description: "Developing high-performance cross-platform applications that work perfectly across all screen sizes.", delay: 200, color: "#f59e0b" },
    { icon: "bi bi-cpu", title: "API Development", description: "Designing and integrating robust RESTful APIs to connect front-end interfaces with complex backend logic.", delay: 300, color: "#10b981" },
    { icon: "bi bi-database", title: "Database Systems", description: "Architecting efficient data structures using MongoDB and MySQL for secure and fast data retrieval.", delay: 400, color: "#4479A1" },
    { icon: "bi bi-lightning-charge", title: "Optimization", description: "Enhancing website speed and performance while ensuring clean, maintainable, and high-quality code.", delay: 500, color: "#ef4444" }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="services-content">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;