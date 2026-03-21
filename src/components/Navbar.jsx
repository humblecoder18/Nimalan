import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-text">Nimalan</span>
            <span className="navbar__logo-dot" />
          </Link>

          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? "navbar__link--active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="navbar__link navbar__resume-btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://drive.google.com/file/d/1I--DvyPW3-JgyBMSFBTCgWOFx3kWlV5W/view?usp=sharing", "_blank");
                }}
              >
                Resume ↗
              </a>
            </li>
          </ul>

          <button
            className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul className="mobile-menu__links">
          {navItems.map((item, i) => (
            <li key={item.to} style={{ animationDelay: `${i * 0.06}s` }}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `mobile-menu__link ${isActive ? "mobile-menu__link--active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li style={{ animationDelay: "0.42s" }}>
            <a href="#" className="mobile-menu__link" onClick={(e) => e.preventDefault()}>
              Resume ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
