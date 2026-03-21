import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetails.css";

const ICONS = {
  "Automation": "⚡",
  "Machine Learning": "🧠",
  "Data Science": "📊",
  "AI Systems": "🌐",
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-wrapper">
        <div className="container pd-notfound">
          <h1 className="display">Project not found</h1>
          <Link to="/projects" className="btn btn-outline" style={{ marginTop: 24 }}>
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.id === id);
  const prev = projects[idx - 1] || null;
  const next = projects[idx + 1] || null;

  return (
    <div className="page-wrapper">
      <div className="container pd-page">
        {/* Back */}
        <Link to="/projects" className="back-link fade-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="pd-header fade-up delay-1">
          <div className="pd-header__meta">
            <span className="pd-category">{project.category}</span>
            <span className="pd-year mono">{project.year}</span>
          </div>
          <h1 className="pd-title display">{project.title}</h1>
          <p className="pd-desc">{project.description}</p>
        </div>

        {/* Hero image / placeholder */}
        <div className="pd-hero fade-up delay-2">
          {project.image ? (
            <img src={project.image} alt={project.title} className="pd-hero__img" />
          ) : (
            <div className="pd-hero__placeholder">
              <span className="pd-hero__icon">{ICONS[project.category] || "💡"}</span>
              <span className="pd-hero__placeholder-label">{project.title}</span>
            </div>
          )}
        </div>

        {/* Body grid */}
        <div className="pd-body">
          {/* Main content */}
          <div className="pd-content fade-up delay-3">
            <span className="section-label">Overview</span>
            <div className="pd-long-desc">
              {project.longDesc.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="pd-sidebar fade-up delay-4">
            <div className="pd-sidebar__card">
              <div className="pd-sidebar__section">
                <p className="pd-sidebar__label mono">Tech Stack</p>
                <div className="pd-sidebar__tags">
                  {project.stack.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="pd-sidebar__divider" />

              <div className="pd-sidebar__section">
                <p className="pd-sidebar__label mono">Year</p>
                <p className="pd-sidebar__val">{project.year}</p>
              </div>

              <div className="pd-sidebar__divider" />

              <div className="pd-sidebar__section">
                <p className="pd-sidebar__label mono">Category</p>
                <p className="pd-sidebar__val">{project.category}</p>
              </div>

              <div className="pd-sidebar__divider" />

              <div className="pd-sidebar__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline pd-sidebar__btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary pd-sidebar__btn"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Prev / Next nav */}
        <div className="pd-nav fade-up">
          <div className="pd-nav__inner">
            {prev ? (
              <Link to={`/projects/${prev.id}`} className="pd-nav__item pd-nav__item--prev">
                <span className="pd-nav__dir mono">← Previous</span>
                <span className="pd-nav__name">{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/projects/${next.id}`} className="pd-nav__item pd-nav__item--next">
                <span className="pd-nav__dir mono">Next →</span>
                <span className="pd-nav__name">{next.title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
