import {useState} from "react";
import {PROJECTS} from "../constants/data";
import {useLang} from "../context/LanguageContext";
import {FadeIn} from "./ui/FadeIn";

export function Projects() {
    const {t} = useLang();
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section data-section="Projects" className="section-padding"
                 style={{padding: "120px 48px", position: "relative", zIndex: 1}}>
            <FadeIn>
                <div className="line-accent"/>
                <div className="projects-header" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: "56px"
                }}>
                    <div>
                        <h2 style={{
                            fontSize: "clamp(28px, 5vw, 40px)",
                            fontWeight: 300,
                            letterSpacing: "-0.02em",
                            color: "var(--text)"
                        }}>{t("projects.title")}</h2>
                        <p style={{
                            color: "var(--text-muted)",
                            marginTop: "8px",
                            fontSize: "14px"
                        }}>{t("projects.subtitle")}</p>
                    </div>
                    <span style={{fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--border-hover)"}}>
                        0{PROJECTS.length} {t("projects.title").toLowerCase()}
                    </span>
                </div>
            </FadeIn>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                gap: "20px"
            }}>
                {PROJECTS.map((project, i) => {
                    const isHovered = hoveredProject === i;
                    const hasMedia = project.img || project.gif;
                    const mediaSrc = isHovered && project.gif ? project.gif : project.img;

                    return (
                        <FadeIn key={project.title} delay={i * 80}>
                            <div
                                className="project-card"
                                onMouseEnter={() => setHoveredProject(i)}
                                onMouseLeave={() => setHoveredProject(null)}
                                style={{display: "flex", flexDirection: "column"}}
                            >
                                {/* Header — année + flèche */}
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "14px"
                                }}>
                                    <span style={{
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: "11px",
                                        color: "var(--text-muted)"
                                    }}>{project.year}</span>
                                    <span style={{
                                        fontSize: "18px",
                                        color: isHovered ? "var(--accent)" : "var(--text-muted)",
                                        transition: "color 0.3s"
                                    }}>↗</span>
                                </div>

                                {/* Image / GIF */}
                                {hasMedia && (
                                    <div style={{
                                        width: "100%",
                                        borderRadius: "8px", overflow: "hidden",
                                        marginBottom: "16px",
                                        background: "var(--bg)",
                                        border: "1px solid var(--border)",
                                    }}>
                                        <img
                                            src={mediaSrc}
                                            alt={project.alt ?? project.title}
                                            style={{
                                                width: "100%",
                                                height: "auto",       // 👈 hauteur automatique
                                                display: "block",     // 👈 évite l'espace sous l'image
                                                objectFit: "contain", // 👈 plus de recadrage
                                                transition: "opacity 0.3s"
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Titre */}
                                <h3 style={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    marginBottom: "10px",
                                    letterSpacing: "-0.01em",
                                    color: "var(--text)"
                                }}>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: "14px",
                                    color: "var(--text-sub)",
                                    lineHeight: 1.65,
                                    marginBottom: "16px",
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div style={{display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px"}}>
                                    {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                                </div>

                                {/* Collaborators */}
                                {project.collaborators && project.collaborators.length > 0 && (
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        marginBottom: "12px",
                                        flexWrap: "wrap"
                                    }}>
                                        <span style={{
                                            fontSize: "11px",
                                            color: "var(--text-muted)",
                                            fontFamily: "'DM Mono', monospace"
                                        }}>
                                            {t("projects.collab")}
                                        </span>
                                        {project.collaborators.map((c) => (
                                            <a key={c.github} href={c.github} target="_blank" rel="noopener noreferrer"
                                               style={{
                                                   fontSize: "11px",
                                                   fontFamily: "'DM Mono', monospace",
                                                   color: "var(--accent-light)",
                                                   textDecoration: "none",
                                                   padding: "2px 8px",
                                                   borderRadius: "4px",
                                                   border: "1px solid var(--border)",
                                                   background: "var(--accent-badge)",
                                                   transition: "border-color 0.2s"
                                               }}
                                               onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                                               onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                                            >
                                                {c.name}
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {/* Boutons GitHub + Live Demo */}
                                {(project.github || project.demo) && (
                                    <div style={{display: "flex", gap: "10px", marginTop: "auto"}}>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                               style={{
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "6px",
                                                   padding: "7px 14px",
                                                   borderRadius: "7px",
                                                   border: "1px solid var(--border)",
                                                   color: "var(--text-muted)",
                                                   fontSize: "12px",
                                                   fontFamily: "'DM Mono', monospace",
                                                   textDecoration: "none",
                                                   transition: "border-color 0.2s, color 0.2s"
                                               }}
                                               onMouseEnter={(e) => {
                                                   e.currentTarget.style.borderColor = "var(--accent)";
                                                   e.currentTarget.style.color = "var(--accent-light)";
                                               }}
                                               onMouseLeave={(e) => {
                                                   e.currentTarget.style.borderColor = "var(--border)";
                                                   e.currentTarget.style.color = "var(--text-muted)";
                                               }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                                                </svg>
                                                {t("projects.github")}
                                            </a>
                                        )}
                                        {project.demo && project.demo !== "https://..." && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                               style={{
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "6px",
                                                   padding: "7px 14px",
                                                   borderRadius: "7px",
                                                   background: "var(--accent)",
                                                   color: "white",
                                                   fontSize: "12px",
                                                   fontFamily: "'DM Mono', monospace",
                                                   textDecoration: "none",
                                                   transition: "background 0.2s"
                                               }}
                                               onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
                                               onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
                                            >
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                                     strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                                    <polyline points="15 3 21 3 21 9"/>
                                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                                </svg>
                                                {t("projects.demo")}
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </section>
    );
}
