import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ICONS = {
  "Automation": "⚡",
  "Machine Learning": "🧠",
  "Data Science": "📊",
  "AI Systems": "🌐",
};

export default function ProjectCard({ project, index }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__placeholder">
            <span className="project-card__icon">
              {ICONS[project.category] || "💡"}
            </span>
          </div>
        )}
        <div className="project-card__overlay">
          <span className="project-card__view">View Project →</span>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tech">{project.tech}</p>
      </div>
    </Link>
  );
}
