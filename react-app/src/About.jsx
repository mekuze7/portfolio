import profileImg from './Mek.jpg';

const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <img src={profileImg} className="img-fluid" alt="About Profile" />
          </div>
          <div className="col-md-8" data-aos="fade-left">
            <h3>Full Stack Developer (MERN) &amp; UI/UX Designer.</h3>
            <p>
              I'm a creative Full Stack Developer based in Ethiopia.
              With years of hands-on experience, I build appealing websites that meet modern standards.
            </p>
            <ul>
              <li><strong>My Name:</strong> Mekuannt Zelalem</li>
              <li><strong>Role:</strong> Full Stack Developer (MERN, Java, Python)</li>
              <li><strong>Phone:</strong> +251 913212259</li>
              <li><strong>City:</strong> Dilla, Ethiopia</li>
              <li><strong>Age:</strong> 25</li>
              <li><strong>Quick Learner </strong> yes</li>
              <li><strong>Email:</strong> Mekuze7@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
            <p>
              My specialties include quickly learning new skills and programming languages, problem solving, responsive design,
              website optimization, cross-platform and API management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;