import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./Home.css";

const profileImg = new URL("../assets/profile.png", import.meta.url).href;

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__greeting fade-up">Hello I'm</p>
            <h1 className="hero__name display fade-up delay-1">Nimalan R,</h1>
            <h2 className="hero__title fade-up delay-2">
              Data Science, Machine Learning & AI Engineer.
            </h2>
            <p className="hero__desc fade-up delay-3">
              Aspiring Data Scientist & ML Engineer | B.Tech CSE (IoT) @ SRM Ramapuram.
              Experienced with Python, Machine Learning, Data Analysis, and Visualization.
              Former President of TechVayuna, passionate about building intelligent data-driven solutions.
            </p>
            <div className="hero__actions fade-up delay-4">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>
          </div>

          <div className="hero__image-wrap fade-up delay-3">
            <div className="hero__image-frame">
              <img
                src={profileImg}
                alt="Nimalan R"
                className="hero__profile-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero__profile-fallback" style={{ display: "none" }}>
                <span>Nimalan</span>
              </div>
            </div>
            <div className="hero__image-badge hero__image-badge--1">
              <span>📊</span> Data Scientist
            </div>
            <div className="hero__image-badge hero__image-badge--2">
              <span>🤖</span> Machine Learning Engineer
            </div>
          </div>
        </div>

        <a href="#work" className="hero__scroll-cue fade-up delay-5">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </section>

      {/* ── PROJECTS ── */}
      <section id="work" className="home-projects">
        <div className="container">
          <div className="home-projects__header">
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="home-projects__title display">Projects</h2>
            </div>
            <Link to="/projects" className="btn btn-outline">
              View All →
            </Link>
          </div>

          <div className="home-projects__grid">
            {projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP PREVIEW ── */}
      <section className="home-leadership">
        <div className="container">
          <div className="home-leadership__card">
            <div>
              <span className="section-label">Beyond the Code</span>
              <h2 className="home-leadership__title display">
                Leadership &amp; Extracurriculars
              </h2>
              <p className="home-leadership__desc">
                Explore my achievements in technical club leadership, workshops, hackathons,
                and events — showcasing teamwork and commitment to growing the tech community.
              </p>
            </div>
            <Link to="/leadership" className="btn btn-outline home-leadership__btn">
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="home-faq">
        <div className="container">
          <span className="section-label">Quick Answers</span>
          <h2 className="home-faq__title display">Frequently Asked</h2>
          <div className="faq-list">
            {[
              {
  q: "What do you specialize in?",
  a: "I specialize in Machine Learning, AI systems, and data-driven solutions, building intelligent models and automation workflows for real-world problems."
},
{
  q: "What kind of opportunities are you looking for?",
  a: "I’m actively seeking internships and opportunities in Machine Learning, Data Science, and AI-driven roles where I can apply and expand my skills."
},
{
  q: "What technologies do you work with?",
  a: "I work primarily with Python, Scikit-learn, TensorFlow, Pandas, n8n, APIs, SQL, and Git for building machine learning models and automation systems."
},
{
  q: "Do you have experience leading or organizing events?",
  a: "Yes, as a technical club president, I have organized workshops, ideathons, and coding challenges, managing both technical and non-technical domains."
},
{
  q: "Can you collaborate on projects?",
  a: "Absolutely. I enjoy collaborating on innovative projects and have experience working in team environments on technical and research-based work."
},
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-item--open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-item__header">
        <span className="faq-item__q">{q}</span>
        <span className="faq-item__icon">{open ? "−" : "+"}</span>
      </div>
      <div className="faq-item__body">
        <p>{a}</p>
      </div>
    </div>
  );
}

import { useState } from "react";
