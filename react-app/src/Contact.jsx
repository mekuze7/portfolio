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

  // Automatically clear the success message after 5 seconds
  useEffect(() => {
    if (status.success) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
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

    try {
      // Real integration using EmailJS
      await emailjs.sendForm(
        'service_xxxxxxx', // Replace with your actual Service ID
        'template_xxxxxxx', // Replace with your actual Template ID
        formRef.current, 
        'your_public_key_xxxx' // Replace with your actual Public Key
      );
      
      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Email Error:', err);
      setStatus({ loading: false, error: 'Failed to send message. Please try again later.', success: false });
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
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
                <p>mekuze7@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bx bx-phone"></i>
                <h4>Call:</h4>
                <p>+251 913212259</p>
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
                  required 
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="8" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <div className="my-3">
                {status.loading && <div className="loading">Sending message...</div>}
                {status.error && <div className="error-message">{status.error}</div>}
                {status.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </div>
              <div className="text-center">
                <button type="submit" disabled={status.loading}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;