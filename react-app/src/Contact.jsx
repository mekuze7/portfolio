import React, { useState, useRef, useEffect } from 'react';

const RECIPIENT_EMAIL = 'mekuze7@gmail.com';

const Contact = () => {
  const statusTimerRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [clipboardMessage, setClipboardMessage] = useState(null);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current);
        statusTimerRef.current = null;
      }
    };
  }, []);

  const clearStatusAfter = (delay) => {
    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current);
      statusTimerRef.current = null;
    }
    statusTimerRef.current = setTimeout(() => {
      setErrorMessage(null);
      setSuccessMessage(null);
      setClipboardMessage(null);
    }, delay);
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const buildEmailBody = () => {
    const separator = '—'.repeat(40);
    return [
      `Hi Mekuannt,`,
      '',
      message,
      '',
      separator,
      `From:    ${name}`,
      `Email:   ${email}`,
      `Subject: ${subject}`,
      separator,
      '',
      `Sent from my portfolio contact form.`,
    ].join('\n');
  };

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setIsLoading(false);
      setSuccessMessage(null);
      setClipboardMessage(null);
      setErrorMessage('Please fill in all fields before submitting.');
      clearStatusAfter(5000);
      return;
    }

    if (!validateEmail(email)) {
      setIsLoading(false);
      setSuccessMessage(null);
      setClipboardMessage(null);
      setErrorMessage('Please enter a valid email address.');
      clearStatusAfter(5000);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setClipboardMessage(null);

    try {
      const fullSubject = `[Portfolio] ${subject}`;
      const body = buildEmailBody();
      const mailtoUrl =
        `mailto:${encodeURIComponent(RECIPIENT_EMAIL)}` +
        `?subject=${encodeURIComponent(fullSubject)}` +
        `&cc=${encodeURIComponent(email)}` +
        `&body=${encodeURIComponent(body)}`;

      await new Promise((r) => setTimeout(r, 500));

      window.location.href = mailtoUrl;

      const plaintextToCopy =
        `To: ${RECIPIENT_EMAIL}\n` +
        `Subject: ${fullSubject}\n\n${body}`;

      const copied = await copyToClipboard(plaintextToCopy);

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsLoading(false);
      setErrorMessage(null);
      setSuccessMessage(
        'Your email app has been opened with a pre-filled draft. Please click "Send" there to deliver your message!'
      );
      if (copied) {
        setClipboardMessage(
          'Tip: A copy of your message is also on your clipboard, so you can paste it anywhere if your email app did not open.'
        );
      }
      clearStatusAfter(12000);
    } catch (err) {
      console.error('Contact form error:', err);
      setIsLoading(false);
      setSuccessMessage(null);
      setClipboardMessage(null);
      setErrorMessage(
        `Something went wrong. Please email me directly at ${RECIPIENT_EMAIL}.`
      );
      clearStatusAfter(10000);
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <div className="section-title-card">
            <div className="section-tag">
              <span className="section-tag-dot"></span> Get In Touch
            </div>
            <h2>Contact Me</h2>
            <p>
              Have a project in mind or want to discuss opportunities? Send a
              message below or reach out directly!
            </p>
          </div>
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
                  <a
                    href={`mailto:${RECIPIENT_EMAIL}`}
                    style={{ color: '#38bdf8' }}
                  >
                    {RECIPIENT_EMAIL}
                  </a>
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
                  href={`mailto:${RECIPIENT_EMAIL}?subject=Portfolio%20Inquiry`}
                  className="btn btn-hero-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{ borderRadius: '12px', padding: '12px' }}
                >
                  <i className="bx bx-paper-plane fs-5"></i> Direct Email
                  (Gmail)
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
              noValidate
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="7"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=""
                  required
                ></textarea>
              </div>

              <div className="my-3" data-status-container>
                {isLoading && (
                  <div
                    className="loading d-flex align-items-center gap-2"
                    role="status"
                    aria-live="polite"
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Opening your email app...
                  </div>
                )}
                {!isLoading && errorMessage && (
                  <div
                    className="error-message"
                    role="alert"
                    aria-live="assertive"
                  >
                    {errorMessage}
                  </div>
                )}
                {!isLoading && successMessage && (
                  <div
                    className="sent-message d-flex align-items-center gap-2"
                    role="status"
                    aria-live="polite"
                  >
                    <i className="bx bx-check-circle fs-5"></i>
                    <div>
                      <div>{successMessage}</div>
                      {clipboardMessage && (
                        <div style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '6px' }}>
                          <i className="bx bx-clipboard" style={{ marginRight: '4px' }}></i>
                          {clipboardMessage}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-100"
                >
                  {isLoading ? 'Opening Email...' : (
                    <span className="d-flex align-items-center justify-content-center gap-2">
                      <i className="bx bx-paper-plane"></i> Send Message
                    </span>
                  )}
                </button>
              </div>

              <div className="mt-3 text-center" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                <i className="bx bx-shield-quarter" style={{ marginRight: '4px' }}></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
