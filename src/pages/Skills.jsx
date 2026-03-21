import "./Skills.css";

const categories = [
  {
    label: "Programming Languages",
    icon: "< />",
    color: "#60a5fa",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    label: "AI & Machine Learning",
    icon: "🧠",
    color: "#a78bfa",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Artificial Intelligence", level: 78 },
      { name: "LLM / GPT APIs", level: 80 },
      { name: "scikit-learn", level: 75 },
    ],
  },
  {
    label: "IoT & Embedded",
    icon: "📡",
    color: "#34d399",
    skills: [
      { name: "Internet of Things", level: 85 },
      { name: "Arduino / ESP32", level: 80 },
      { name: "MQTT Protocol", level: 65 },
      { name: "Sensor Integration", level: 70 },
    ],
  },
  {
    label: "Automation",
    icon: "⚡",
    color: "#fbbf24",
    skills: [
      { name: "n8n Workflows", level: 70 },
      { name: "API Integration", level: 75 },
      { name: "Process Automation", level: 75 },
      { name: "Bot Development", level: 70 },
    ],
  },
  {
    label: "Web & Frameworks",
    icon: "🌐",
    color: "#f472b6",
    skills: [
      { name: "React", level: 72 },
      { name: "REST APIs", level: 80 },
      { name: "SQL / Databases", level: 74 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
  {
    label: "Tools & Platforms",
    icon: "🛠️",
    color: "#fb923c",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "Postman", level: 70 },
    ],
  },
];

const techStack = [
  "Python", "C", "C++", "Java",
  "React", "n8n", "Git", "SQL",
  "TensorFlow", "scikit-learn", "LangChain",
  "Arduino", "ESP32", "MQTT",
  "Postman", "OpenAI API", "Telegram API", "Gmail API",
];

import { useEffect, useRef } from "react";

function SkillBar({ name, level, color }) {
  const fillRef = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        setTimeout(() => {
          el.style.width = level + "%";
        }, 200);
      }
    }, { threshold: 0.4 });
    obs.observe(el.parentElement);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          ref={fillRef}
          className="skill-bar__fill"
          style={{ width: 0, background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="page-wrapper">
      <div className="container skills-page">
        <div className="skills-header fade-up">
          <span className="section-label"></span>
          <h1 className="skills-header__title display">Technologies I work with</h1>
          <p className="skills-header__sub">
            A curated stack of languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div key={i} className="skill-category-card fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="skill-category-card__head">
                <span className="skill-category-card__icon">{cat.icon}</span>
                <h3 className="skill-category-card__label">{cat.label}</h3>
              </div>
              <div className="skill-category-card__bars">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-stack fade-up">
          <span className="section-label">Full Stack</span>
          <h2 className="skills-stack__title display">All Technologies</h2>
          <div className="skills-stack__chips">
            {techStack.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
