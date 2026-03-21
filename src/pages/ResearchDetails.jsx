import { useState } from "react";
import { Link } from "react-router-dom";
import "./ResearchDetails.css";

// ── PAPER IMAGES — add your images to src/assets/ and import here ──
// import paperImg1 from "../assets/paper-img1.jpg";
// import paperImg2 from "../assets/paper-img2.jpg";
// import paperImg3 from "../assets/paper-img3.jpg";

const paper = {
  id: "lidge-air-quality",
  title: "Leveraging Hybrid Regression Models for Urban Air Quality Assessment: Development of LIDGE",
  journal: "IEEE Xplore",
  conference: "ICSCDS-2025",
  date: "2025",
  doi: "https://ieeexplore.ieee.org/abstract/document/11167242?casa_token=PpNMZpgWu2gAAAAA:kIoD8DaWZfI7aL33xmQQxxvPw6tHVfbDtVKaFPjr6yQxEk4yR5YmqP5opT7P2CKbX8sykkV1nei8vv4",
  authors: ["Nimalan. R", "K. Priya Dharshini", "Prajeet. R", "Sahaya Sakila V"],
  tags: ["Machine Learning", "Air Quality", "Hybrid Regression", "Urban Analytics", "Python", "IoT"],

  // ── EDIT ALL TEXT BELOW ──
  abstract: `Developed a hybrid ML model combining Linear Regression and Ridge Regression for urban air quality prediction, presented at ICSCDS-2025. The LIDGE model focuses on improving prediction accuracy and enabling data-driven environmental monitoring across urban regions.`,

  overview: `Urban air quality has become a critical concern due to rapid industrialisation and increased vehicular traffic. Accurate prediction of air quality index (AQI) values is essential for public health planning and environmental policy decisions. This research presents LIDGE — a hybrid regression framework that combines the interpretability of Linear Regression with the regularisation strength of Ridge Regression to deliver more robust predictions.`,

  methodology: `The LIDGE model was developed using a multi-step pipeline: data collection from urban IoT sensor networks, preprocessing and feature engineering, followed by model training using a weighted ensemble of Linear and Ridge regression. Hyperparameter tuning was performed using cross-validation. The dataset included parameters such as PM2.5, PM10, NO2, CO, SO2, and meteorological factors like temperature and humidity.`,

  results: `The hybrid LIDGE model achieved a significant improvement in prediction accuracy over standalone models. Key results include a reduction in RMSE by 18% compared to Linear Regression alone, and improved stability on noisy sensor data compared to Ridge Regression. The model demonstrated strong generalisation across multiple urban zones tested in the study.`,

  conclusion: `The LIDGE framework presents a viable, lightweight approach to urban air quality forecasting that can be deployed on edge devices with limited compute resources. Future work includes extending the model to real-time streaming data and incorporating deep learning layers for improved temporal prediction.`,

  // ── ADD YOUR IMAGES HERE ──
  // Replace null with imported image variables e.g: paperImg1
  images: [
   
  ],
};

export default function ResearchDetails() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="page-wrapper">
      <div className="container rd-page">

        {/* ── BACK ── */}
        <Link to="/certifications" className="back-link fade-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          Back to Certifications
        </Link>

        {/* ── HEADER ── */}
        <div className="rd-header fade-up delay-1">
          <div className="rd-header__meta">
            <span className="rd-journal">{paper.journal}</span>
            <span className="rd-conference">{paper.conference}</span>
            <span className="rd-date mono">{paper.date}</span>
          </div>
          <h1 className="rd-title display">{paper.title}</h1>

          {/* Authors */}
          <div className="rd-authors">
            {paper.authors.map((a, i) => (
              <span key={i} className="rd-author">{a}</span>
            ))}
          </div>

          {/* Tags */}
          <div className="rd-tags">
            {paper.tags.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* ── IMAGES (only shows if images array has items) ── */}
        {paper.images.length > 0 && (
          <div className="rd-gallery fade-up delay-2">
            <div className="rd-gallery__main">
              <img src={paper.images[activeImg]} alt={`Figure ${activeImg + 1}`} />
              <span className="rd-gallery__label mono">Figure {activeImg + 1}</span>
            </div>
            {paper.images.length > 1 && (
              <div className="rd-gallery__thumbs">
                {paper.images.map((img, i) => (
                  <div
                    key={i}
                    className={`rd-gallery__thumb ${i === activeImg ? "rd-gallery__thumb--active" : ""}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={img} alt={`Thumb ${i + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── BODY ── */}
        <div className="rd-body">

          {/* Main content */}
          <div className="rd-content fade-up delay-3">

            <div className="rd-section">
              <span className="section-label">Abstract</span>
              <p className="rd-text">{paper.abstract}</p>
            </div>

            <div className="rd-section">
              <span className="section-label">Overview</span>
              <p className="rd-text">{paper.overview}</p>
            </div>

            <div className="rd-section">
              <span className="section-label">Methodology</span>
              <p className="rd-text">{paper.methodology}</p>
            </div>

            <div className="rd-section">
              <span className="section-label">Results</span>
              <p className="rd-text">{paper.results}</p>
            </div>

            <div className="rd-section">
              <span className="section-label">Conclusion</span>
              <p className="rd-text">{paper.conclusion}</p>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="rd-sidebar fade-up delay-4">
            <div className="rd-sidebar__card">

              <div className="rd-sidebar__section">
                <p className="rd-sidebar__label mono">Published In</p>
                <p className="rd-sidebar__val">{paper.journal}</p>
              </div>

              <div className="rd-sidebar__divider" />

              <div className="rd-sidebar__section">
                <p className="rd-sidebar__label mono">Conference</p>
                <p className="rd-sidebar__val">{paper.conference}</p>
              </div>

              <div className="rd-sidebar__divider" />

              <div className="rd-sidebar__section">
                <p className="rd-sidebar__label mono">Year</p>
                <p className="rd-sidebar__val">{paper.date}</p>
              </div>

              <div className="rd-sidebar__divider" />

              <div className="rd-sidebar__section">
                <p className="rd-sidebar__label mono">Authors</p>
                <div className="rd-sidebar__authors">
                  {paper.authors.map((a, i) => (
                    <span key={i} className="rd-sidebar__author">{a}</span>
                  ))}
                </div>
              </div>

              <div className="rd-sidebar__divider" />

              <div className="rd-sidebar__section">
                <p className="rd-sidebar__label mono">Keywords</p>
                <div className="rd-sidebar__tags">
                  {paper.tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="rd-sidebar__divider" />

              <a
                href={paper.doi}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rd-sidebar__btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
                View on IEEE ↗
              </a>

            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}