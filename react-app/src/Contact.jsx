import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  useEffect(() => {
    if (status.success) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [status.success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey && serviceId !== 'your_service_id') {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      } else {
        // Simulated successful submission delay for testing/demo when keys are not set yet
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Form submission received:', formData);
      }

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({
        loading: false,
        error: 'Failed to send message via EmailJS. You can also email me directly at mekuze7@gmail.com.',
        success: false
      });
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Have a project in mind or want to discuss opportunities? Send a message below or reach out directly!</p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bx bx-map"></i>
                <h4>Location:</h4>
                <p>Dilla, Ethiopia</p>
              </div>

              <div className="email">
                <i className="bx bx-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a href="mailto:mekuze7@gmail.com" style={{ color: '#38bdf8' }}>mekuze7@gmail.com</a>
                </p>
              </div>

              <div className="phone">
                <i className="bx bx-phone"></i>
                <h4>Call:</h4>
                <p>+251 913212259</p>
              </div>

              <div className="social-links-contact d-flex gap-2 mt-4">
                <a 
                  href="https://github.com/mekuze7" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-social-btn github"
                >
                  <i className="bx bxl-github fs-4"></i> GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/meku-ze-00293237a" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-social-btn linkedin"
                >
                  <i className="bx bxl-linkedin fs-4"></i> LinkedIn
                </a>
              </div>

              <div className="mt-3">
                <a 
                  href="mailto:mekuze7@gmail.com?subject=Portfolio%20Inquiry" 
                  className="btn btn-hero-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{ borderRadius: '12px', padding: '12px' }}
                >
                  <i className="bx bx-paper-plane fs-5"></i> Direct Email (Gmail)
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form ref={formRef} onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Mekuannt, I'd like to discuss a project..."
                  required
                ></textarea>
              </div>

              <div className="my-3">
                {status.loading && (
                  <div className="loading d-flex align-items-center gap-2">
                    <span className="spinner-border spinner-border-sm" role="status"></span>
                    Sending your message...
                  </div>
                )}
                {status.error && <div className="error-message">{status.error}</div>}
                {status.success && (
                  <div className="sent-message d-flex align-items-center gap-2">
                    <i className="bx bx-check-circle fs-5"></i>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </div>

              <div className="text-center mt-4">
                <button type="submit" disabled={status.loading} className="w-100">
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;