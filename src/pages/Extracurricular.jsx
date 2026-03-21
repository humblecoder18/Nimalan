import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Extracurricular.css";

// ── ADD YOUR IMAGES HERE ──
import img1 from "C:\\Users\\nimal\\OneDrive\\Desktop\\Portfolio\\src\\assets\\techvauyan.jpeg";
import img2 from "../assets/Nimalan1.jpeg";
import img3 from "../assets/n2.jpeg";

// import img3 from "../assets/leadership3.jpg"; // add more if needed

const roles = [
  {
    id: "president",
    title: "Former President, Technical Club",
    org: "College Technical Club",
    period: "2025 — 2026",
    period_label: "2025-2026.",
    images: [img2, img1, img3], // ← add img3, img4 etc here
    desc: "I serve as Former President of the Technical Club, leading event strategy, managing multiple technical domains, and driving the club's growth across campus.",
    highlights: [
      "Organising technical events, workshops, for 100+ members",
      "Leading weekly team meetings and coordinating cross-functional teams",
      "Managing both technical and non-technical domains, including Machine Learning, AI Systems, Data Science, and team operations.",
      "Conducting hands-on workshops and mentoring junior members",
      "Building partnerships with industry professionals for tech talks",
    ],
  },
];

const events = [
  {
  title: "Data Analytics Workshop",
    type: "Hands-on Workshop",
    desc: "Conducted a Data Analytics workshop at Textus, featuring speakers from TANSAM, introducing participants to data analysis concepts, tools, and real-world applications. 120+ attendees.",
    icon: "🧠",
    year: "2026",
  },
  {
    title: "Coding Challenge",
    type: "Competitive Event",
    desc: "Organized a Data Analytics coding challenge focused on dataset analysis, feature engineering, and model building to maximize accuracy.",
    icon: "💻",
    year: "2026",
  },
  {
    title: "Ideathon Event",
    type: "Innovation Challenge",
    desc: "Ideathon event encouraging participants to propose innovative solutions to real-world problems across AI, data science, and technology domains.",
    icon: "🎙️",
    year: "2025",
  },  
];

const achievements = [
  
  

];

// ── IMAGE SLIDER COMPONENT ──
function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goTo = (i) => setCurrent(i);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  if (!images || images.length === 0) {
    return (
      <div className="ec-slider">
        <div className="ec-slider__placeholder"><span>👑</span></div>
      </div>
    );
  }

  return (
    <div className="ec-slider">
      {/* Slides */}
      <div className="ec-slider__track">
        {images.map((img, i) => (
          <div
            key={i}
            className={`ec-slider__slide ${i === current ? "ec-slider__slide--active" : ""}`}
          >
            <img src={img} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Arrows — only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button className="ec-slider__arrow ec-slider__arrow--left" onClick={prev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="ec-slider__arrow ec-slider__arrow--right" onClick={next}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="ec-slider__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`ec-slider__dot ${i === current ? "ec-slider__dot--active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Extracurricular() {
  return (
    <div className="page-wrapper">
      <div className="container ec-page">
        <Link to="/" className="back-link fade-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          Back
        </Link>

        <div className="ec-header fade-up">
          <span className="section-label"></span>
          <h1 className="ec-header__title display">Leadership &amp; Extracurriculars</h1>
          <p className="ec-header__sub">
            Achievements and experiences beyond academics — showcasing technical leadership,
            community building, and continuous growth.
          </p>
        </div>

        {/* ── LEADERSHIP ROLES ── */}
        <section className="ec-section">
          <span className="section-label">Club Leadership</span>
          <div className="ec-roles">
            {roles.map((role, i) => (
              <div key={i} className="ec-role-card fade-up">
                {/* Slider instead of single image */}
                <ImageSlider images={role.images} />

                <div className="ec-role-card__body">
                  <div className="ec-role-card__meta">
                    <span className="ec-role-card__period mono">{role.period_label}</span>
                    <span className="ec-role-card__org">{role.org}</span>
                  </div>
                  <h2 className="ec-role-card__title display">{role.title}</h2>
                  <p className="ec-role-card__desc">{role.desc}</p>
                  <ul className="ec-role-card__highlights">
                    {role.highlights.map((h, j) => (
                      <li key={j}>
                        <span className="ec-check">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EVENTS ── */}
        <section className="ec-section">
          <span className="section-label">Events Conducted</span>
          <h2 className="ec-section__title display">Technical Events</h2>
          <div className="ec-events-grid">
            {events.map((ev, i) => (
              <div key={i} className="ec-event-card fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="ec-event-card__top">
                  <span className="ec-event-card__icon">{ev.icon}</span>
                  <span className="ec-event-card__year mono">{ev.year}</span>
                </div>
                <div className="ec-event-card__type mono">{ev.type}</div>
                <h3 className="ec-event-card__title">{ev.title}</h3>
                <p className="ec-event-card__desc">{ev.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}