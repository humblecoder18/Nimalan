import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navItems = [
    { label: "Home",           to: "/" },
    { label: "About",          to: "/about" },
    { label: "Skills",         to: "/skills" },
    { label: "Projects",       to: "/projects" },
    { label: "Leadership",     to: "/leadership" },
    { label: "Certifications", to: "/certifications" },
    { label: "Contact",        to: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <h2 className="footer__cta-title">
            I'm always looking for new collaborators.
          </h2>
          <Link to="/contact" className="btn btn-primary">
            Get in touch →
          </Link>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__main-inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Nimalan<span className="footer__logo-dot" />
            </Link>
            <p className="footer__tagline">
              Bridging data science and machine learning to create impactful, real-world intelligent systems.<br />
            </p>
          </div>

          <div className="footer__nav">
            <p className="footer__nav-label">Navigation</p>
            <ul className="footer__nav-links">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === "/"} className="footer__nav-link">
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="footer__nav-link footer__nav-link--accent"
                  onClick={(e) => e.preventDefault()}
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__connect">
            <p className="footer__nav-label">Connect</p>
            <div className="footer__social-links">
              <a href="https://github.com/humblecoder18" target="_blank" rel="noreferrer" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nimalanrajar23/" target="_blank" rel="noreferrer" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="mailto:nimalanraja2004@gmail.com" className="footer__social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© 2026 Nimalan R. All rights reserved.</p>
          <p className="footer__built">Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
}
