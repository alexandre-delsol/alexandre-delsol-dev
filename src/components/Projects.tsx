import { useState } from "react";
import { PROJECTS } from "../constants/data";
import { FadeIn } from "./ui/FadeIn";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section data-section="Projects" className="section-padding"
      style={{ padding: "120px 48px", position: "relative", zIndex: 1 }}>
      <FadeIn>
        <div className="line-accent" />
        <div className="projects-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--text)" }}>Projects</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "8px", fontSize: "14px" }}>A selection of my recent work</p>
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--border-hover)" }}>0{PROJECTS.length} projects</span>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "20px" }}>
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.title} delay={i * 80}>
            <div className="project-card" onMouseEnter={() => setHoveredProject(i)} onMouseLeave={() => setHoveredProject(null)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--text-muted)" }}>{project.year}</span>
                <span style={{ fontSize: "18px", color: hoveredProject === i ? "var(--accent)" : "var(--text-muted)", transition: "color 0.3s" }}>↗</span>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "12px", letterSpacing: "-0.01em", color: "var(--text)" }}>{project.title}</h3>
              <p style={{ fontSize: "14px", color: "var(--text-sub)", lineHeight: 1.65, marginBottom: "20px" }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
