import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./projects.css";

const categories = ["All", "Machine Learning", "AI Systems", "Data Science", "Automation"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="page-wrapper">
      <div className="container projects-page">
        <div className="projects-page__header fade-up">
          <span className="section-label"></span>
          <h1 className="projects-page__title display">Things I've Built</h1>
          <p className="projects-page__sub">
            Real-world solutions combining AI, IoT, and automation to solve meaningful problems.
          </p>
        </div>

        <div className="projects-filters fade-up delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects-filter-btn ${active === cat ? "projects-filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-page__grid">
          {filtered.map((p, i) => (
            <div key={p.id} className="fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
