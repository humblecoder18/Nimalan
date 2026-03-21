import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/ProjectDetails";
import Extracurricular from "./pages/Extracurricular";
import Certifications from "./pages/Certifications";
import ResearchDetails from "./pages/ResearchDetails";
import Contact from "./pages/Contact";
import "./index.css";

function ScrollToTop() {
  const { pathname } = window.location;
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/about"             element={<About />} />
        <Route path="/skills"            element={<Skills />} />
        <Route path="/projects"          element={<Projects />} />
        <Route path="/projects/:id"      element={<ProjectDetails />} />
        <Route path="/leadership"        element={<Extracurricular />} />
        <Route path="/certifications"    element={<Certifications />} />
        <Route path="/contact"           element={<Contact />} />
        <Route path="/research/:id" element={<ResearchDetails />} />
        {/* Fallback */}
        <Route path="*" element={
          <div style={{ padding: "160px 32px", textAlign: "center" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", marginBottom: 16 }}>404</h1>
            <p style={{ color: "var(--text2)", marginBottom: 32 }}>Page not found.</p>
            <a href="/" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>← Back to Home</a>
          </div>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
