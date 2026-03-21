import { Link } from "react-router-dom";
import "./About.css";

const profileImg = new URL("../assets/profile.png", import.meta.url).href;

const skills = [
  "Python", "C", "C++", "Java",
  "Machine Learning", "Artificial Intelligence",
  "Internet of Things", "Automation",
  "React", "n8n", "Git", "SQL",
  "APIs", "Arduino", "ESP32", "MQTT",
  "TensorFlow", "scikit-learn", "Docker",
];

export default function About() {
  return (
    <div className="page-wrapper">
      <div className="container about-page">
        <h1 className="about-page__title display fade-up">About Me</h1>
        <p className="about-page__intro fade-up delay-1">
          I'm a B.Tech Computer Science student specialising in IoT with a passion
          for building intelligent systems.
        </p>

        <div className="about-grid">
          {/* LEFT — Image */}
          <div className="about-image-col fade-up delay-2">
            <div className="about-image-frame">
              <img
                src={profileImg}
                alt="Nimalan R"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="about-image-fallback" style={{ display: "none" }}>
                <span>Nimalan</span>
              </div>
            </div>

            <div className="about-name-card">
              <div className="about-name-card__name">Nimalan R</div>
              <div className="about-name-card__role">Data Science, Machine Learning &amp; AI Engineer</div>
              <a
                href="#"
                className="btn btn-outline about-name-card__btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://drive.google.com/file/d/1I--DvyPW3-JgyBMSFBTCgWOFx3kWlV5W/view?usp=sharing", "_blank");
                }}
              >
                Download Resume ↓
              </a>
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="about-text-col fade-up delay-3">
            <span className="section-label">About</span>
            <h2 className="about-text-col__heading display">
              Building intelligent systems,<br/>one solution at a time.
            </h2>

            <div className="about-body">
              <p>
                I am a <strong>B.Tech Computer Science student</strong> specialising in IoT with
                strong interests in Artificial Intelligence, Machine Learning, and automation
                technologies. I enjoy building intelligent systems, experimenting with new
                technologies, and developing real-world solutions that solve meaningful problems.
              </p>
              <p>
                My journey in tech spans diverse domains — from building AI-powered automation
                pipelines to deploying IoT sensor networks and developing full-stack applications.
                I'm particularly passionate about <strong>leveraging technology for real-world impact</strong>,
                bridging the gap between hardware and intelligent software.
              </p>
              <p>
                Beyond engineering, I lead a technical club, organise workshops and hackathons,
                and mentor fellow students across AI, Web Development, and IoT domains. I believe
                in writing clean, scalable systems and building communities that grow together.
              </p>
            </div>

            <div className="about-skills-block">
              <p className="about-skills-label mono">Skills &amp; Expertise</p>
              <div className="about-skills-list">
                {skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="about-timeline fade-up">
          <span className="section-label">Timeline</span>
          <h2 className="about-timeline__title display">My Journey</h2>
          <div className="timeline-track">
            {[
              { year: "2023", title: "Started B.Tech (CS — IoT)", sub: "Discovered passion for AI & embedded systems", type: "edu" },
              { year: "2023", title: "ML & IoT Certifications", sub: "Completed Coursera ML Specialization & Cisco IoT Fundamentals", type: "cert" },
              { year: "2025", title: "President, Technical Club", sub: "Leading AI, Web Dev & IoT domains across 100+ members", type: "lead" },
              { year: "2026", title: "AI Automation Projects", sub: "Built production AI Email Bot, Job Alert Bot, and n8n pipelines", type: "proj" },
              { year: "2026", title: "Present", sub: "Seeking internships & collaborations in AI/IoT/Automation", type: "now" },
            ].map((item, i) => (
              <div key={i} className={`tl-item tl-item--${item.type}`}>
                <div className="tl-item__year">{item.year}</div>
                <div className="tl-item__dot" />
                <div className="tl-item__content">
                  <div className="tl-item__title">{item.title}</div>
                  <div className="tl-item__sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="about-contact fade-up">
          <h2 className="about-contact__title display">Let's work together</h2>
          <p>Have a project in mind? I'd love to hear about it.</p>
          <div className="about-contact__info">
            <div className="about-contact__row">
              <span className="about-contact__label mono">Email</span>
              <a href="mailto:nimalanaraja2004@gmail.com" className="about-contact__val">nimalanaraja2004@gmail.com</a>
            </div>
            <div className="about-contact__row">
              <span className="about-contact__label mono">Location</span>
              <span className="about-contact__val">Chennai, India</span>
            </div>
          </div>
          <Link to="/contact" className="btn btn-primary">Get In Touch →</Link>
        </div>
      </div>
    </div>
  );
}
