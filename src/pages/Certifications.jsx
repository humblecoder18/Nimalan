import { Link } from "react-router-dom";   // ← ADDED
import "./Certifications.css";

const certs = [
  {
    title: "Machine Learning Specialization",
    org: "Coursera / Stanford University",
    instructor: "Andrew Ng",
    date: "2024",
    icon: "🤖",
    color: "#a78bfa",
    topics: ["Supervised Learning", "Neural Networks", "ML Pipelines"],
    verified: true,
    link: "#",
  },
  {
    title: "Python for Everybody",
    org: "Coursera / University of Michigan",
    instructor: "Dr. Chuck",
    date: "2023",
    icon: "🐍",
    color: "#60a5fa",
    topics: ["Python Fundamentals", "Data Structures", "APIs", "Databases"],
    verified: true,
    link: "#",
  },
  {
    title: "Data Science Course - Mastering the Fundamentals",
    org: "scaler / AMAZON",
    instructor: "AMAZON Team",
    date: "2026",
    icon: "📊",
    color: "#fbbf24",
    topics: ["Data Analysis", "Visualisation", "Pandas Library", "SQL"],
    verified: true,
    link: "#",
  },
  {
    title: "AI Automation with n8n",
    org: "n8n Academy",
    instructor: "n8n Team",
    date: "2025",
    icon: "⚡",
    color: "#fb923c",
    topics: ["Workflow Automation", "API Integration", "AI Agents", "Webhooks"],
    verified: true,
    link: "#",
  },
];

const papers = [
  {
    id: "lidge-air-quality",              // ← ADDED (used for routing)
    title: "Leveraging Hybrid Regression Models for Urban Air Quality Assessment: Development of LIDGE",
    journal: "IEEE Xplore / ICSCDS",
    date: "2025",
    doi: "https://ieeexplore.ieee.org/abstract/document/11167242?casa_token=PpNMZpgWu2gAAAAA:kIoD8DaWZfI7aL33xmQQxxvPw6tHVfbDtVKaFPjr6yQxEk4yR5YmqP5opT7P2CKbX8sykkV1nei8vv4",
    icon: "📄",
    coAuthors: "Nimalan. R, K. Priya Dharshini, Prajeet. R, Sahaya Sakila V",
    abstract: "Developed a hybrid ML model (Linear + Ridge Regression) for urban air quality prediction, presented at ICSCDS-2025. Focused on improving prediction accuracy and enabling data-driven environmental monitoring.",
  },
];

const stats = [
  { num: "4+", label: "Certifications Earned" },
  { num: "1",  label: "Research Paper Published" },
  { num: "4",  label: "Platforms Covered" },
  { num: "100%", label: "Verified" },
];

export default function Certifications() {
  return (
    <div className="page-wrapper">
      <div className="container certs-page">

        {/* ── HEADER ── */}
        <div className="certs-header fade-up">
          <span className="section-label"></span>
          <h1 className="certs-header__title display">Credentials &amp; Learning</h1>
          <p className="certs-header__sub">
          Verified expertise across ML, Data Science, programming, and software development platforms.
          </p>
        </div>

        {/* ── STATS ── */}
        <div className="certs-stats fade-up delay-1">
          {stats.map((s, i) => (
            <div key={i} className="certs-stat">
              <div className="certs-stat__num display">{s.num}</div>
              <div className="certs-stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── CERTIFICATIONS GRID ── */}
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="cert-card fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="cert-card__top">
                <div
                  className="cert-card__icon-wrap"
                  style={{
                    background: cert.color + "18",
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  <span className="cert-card__icon">{cert.icon}</span>
                </div>
                {cert.verified && (
                  <span className="cert-card__verified">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Verified
                  </span>
                )}
              </div>

              <div className="cert-card__body">
                <div className="cert-card__org" style={{ color: cert.color }}>
                  {cert.org}
                </div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <div className="cert-card__meta">
                  <span className="cert-card__instructor">{cert.instructor}</span>
                  <span className="cert-card__date mono">{cert.date}</span>
                </div>
              </div>

              <div className="cert-card__topics">
                {cert.topics.map((t) => (
                  <span key={t} className="cert-card__topic">{t}</span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card__link"
                onClick={(e) => { if (cert.link === "#") e.preventDefault(); }}
              >
                View Certificate ↗
              </a>
            </div>
          ))}
        </div>

        {/* ── RESEARCH PAPERS ── */}
        <div className="certs-papers fade-up">
          <span className="section-label">Research</span>
          <h2 className="certs-papers__title display">Published Papers</h2>
          <div className="papers-list">
            {papers.map((paper, i) => (
              <div key={i} className="paper-card">

                {/* Icon */}
                <div className="paper-card__left">
                  <div className="paper-card__icon">{paper.icon}</div>
                </div>

                {/* Body */}
                <div className="paper-card__body">
                  <div className="paper-card__meta">
                    <span className="paper-card__journal">{paper.journal}</span>
                    <span className="paper-card__date mono">{paper.date}</span>
                  </div>
                  <h3 className="paper-card__title">{paper.title}</h3>
                  {paper.coAuthors && (
                    <p className="paper-card__authors">
                      Co-authors: {paper.coAuthors}
                    </p>
                  )}
                  <p className="paper-card__abstract">{paper.abstract}</p>

                  {/* ── TWO BUTTONS ── */}
                  <div className="paper-card__actions">
                    {/* Read More → goes to detail page */}
                    <Link
  to={`/research/${paper.id}`}
  className="paper-card__link paper-card__link--internal"
>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
  Read More
</Link>

                    {/* View on IEEE → opens external link */}
                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="paper-card__link paper-card__link--external"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                      View on IEEE ↗
                    </a>
                  </div>

                </div>

                {/* Published badge */}
                <div className="paper-card__badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Published
                </div>

              </div>
            ))}
          </div>
        </div>
        

        {/* ── RESUME CTA ── */}
        <div className="certs-resume fade-up">
          <div className="certs-resume__inner">
            <div>
              <span className="section-label">Download</span>
              <h2 className="certs-resume__title display">My Curriculum Vitae</h2>
              <p className="certs-resume__sub">
                A complete overview of my education, certifications, projects, skills, and experience.
              </p>
            </div>
            <button
              className="btn btn-primary certs-resume__btn"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1I--DvyPW3-JgyBMSFBTCgWOFx3kWlV5W/view?usp=sharing",
                  "_blank"
                )
              }
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download CV — PDF
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}