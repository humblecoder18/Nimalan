import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ── PASTE YOUR EMAILJS KEYS HERE ──
const EMAILJS_SERVICE_ID  = "service_4htrtnp";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "87cv4ed";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "fjluJ3lgthfxD-lrw";   // e.g. "aBcDeFgHiJkLmNoP"

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container contact-page">
        <div className="contact-header fade-up">
          <span className="section-label"></span>
          <h1 className="contact-header__title display">Let's build something</h1>
          <p className="contact-header__sub">
            Open for collaborations, internships, freelance projects, and interesting ideas.
            Don't hesitate to reach out — I respond to every message.
          </p>
        </div>

        <div className="contact-grid">
          {/* ── INFO ── */}
          <div className="contact-info fade-up delay-1">
            <h2 className="contact-info__heading">Get in touch</h2>
            <p className="contact-info__body">
              Whether you have a project in mind, want to collaborate, or just want to
              talk tech — I'm always happy to connect.
            </p>

            <div className="contact-details">
              <a href="mailto:nimalanraja2004@gmail.com" className="contact-detail-row">
                <div className="contact-detail-row__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-row__label mono">Email</div>
                  <div className="contact-detail-row__val">nimalanraja2004@gmail.com</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" className="contact-detail-row__arrow">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/nimalanrajar23/" target="_blank" rel="noreferrer" className="contact-detail-row">
                <div className="contact-detail-row__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-row__label mono">LinkedIn</div>
                  <div className="contact-detail-row__val">linkedin.com/in/nimalanrajar23/</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" className="contact-detail-row__arrow">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>

              <a href="https://github.com/humblecoder18" target="_blank" rel="noreferrer" className="contact-detail-row">
                <div className="contact-detail-row__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-row__label mono">GitHub</div>
                  <div className="contact-detail-row__val">github.com/humblecoder18</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" className="contact-detail-row__arrow">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>

              <div className="contact-detail-row contact-detail-row--static">
                <div className="contact-detail-row__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-row__label mono">Location</div>
                  <div className="contact-detail-row__val">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="contact-form-wrap fade-up delay-2">

            {/* SUCCESS */}
            {status === "success" ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3 className="contact-success__title display">Message sent!</h3>
                <p>Thanks for reaching out — I'll get back to you soon.</p>
                <button className="btn btn-outline" onClick={() => setStatus("idle")}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>

                <div className="contact-form__group">
                  <label className="contact-form__label mono">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="contact-form__input"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label mono">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="contact-form__input"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label mono">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="contact-form__textarea"
                    required
                    rows={6}
                    disabled={status === "loading"}
                  />
                </div>

                {/* ERROR BANNER */}
                {status === "error" && (
                  <div className="contact-form__error">
                    ⚠️ Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact-form__submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="contact-form__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}