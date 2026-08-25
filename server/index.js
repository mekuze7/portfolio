import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const getTransporter = () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

const isSmtpConfigured = () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
  } = process.env;
  return !!(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);
};

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    smtpConfigured: isSmtpConfigured(),
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({
        ok: false,
        error: 'Please fill in all fields before submitting.',
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        ok: false,
        error: 'Please enter a valid email address.',
      });
    }

    if (!isSmtpConfigured()) {
      return res.status(500).json({
        ok: false,
        error: 'SMTP is not configured on the server. Please contact the site owner.',
      });
    }

    const transporter = getTransporter();
    if (!transporter) {
      return res.status(500).json({
        ok: false,
        error: 'Mail transporter could not be initialized.',
      });
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.SMTP_USER;
    const fullSubject = `[Portfolio] ${subject.trim()}`;
    const separator = '—'.repeat(40);
    const bodyText = [
      `Hi Mekuannt,`,
      '',
      message.trim(),
      '',
      separator,
      `From:    ${name.trim()}`,
      `Email:   ${email.trim()}`,
      `Subject: ${subject.trim()}`,
      separator,
      '',
      `Sent from portfolio contact form.`,
    ].join('\n');

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: fullSubject,
      text: bodyText,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #6366f1); color: white; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0;">New Message From Your Portfolio</h2>
          </div>
          <div style="padding: 24px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; line-height: 1.6; color: #1f2937;">Hi Mekuannt,</p>
            <p style="font-size: 16px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${message.trim()}</p>
            <hr style="border: none; border-top: 2px dashed #d1d5db; margin: 24px 0;" />
            <div style="background: #f9fafb; padding: 16px; border-radius: 8px; font-size: 14px;">
              <p style="margin: 4px 0;"><strong>Name:</strong> ${name.trim()}</p>
              <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${email.trim()}" style="color: #0ea5e9;">${email.trim()}</a></p>
              <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject.trim()}</p>
            </div>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[SMTP] Email sent to ${recipientEmail} — messageId: ${info.messageId}`);

    return res.status(200).json({
      ok: true,
      messageId: info.messageId,
      message: 'Email sent successfully.',
    });
  } catch (err) {
    console.error('[SMTP] Error sending email:', err);
    return res.status(500).json({
      ok: false,
      error: 'Failed to send email. Please try again later or email me directly.',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio backend running on http://localhost:${PORT}`);
  console.log(`📬 SMTP configured: ${isSmtpConfigured() ? '✅ YES' : '❌ NO (check server/.env)'}`);
  console.log(`🧪 Health check: http://localhost:${PORT}/api/health\n`);
});
