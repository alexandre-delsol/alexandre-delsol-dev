import {HOBBIES, MY_BIO, MY_NAME, MY_TITLE} from "../constants/data";

// 👉 Remplacez par le chemin de votre photo dans le dossier /public
//    Ex: "/photo.jpg" si vous mettez photo.jpg dans /public
const MY_PHOTO = "/alex.png";

interface HeroProps {
    onNavigate: (section: string) => void;
}

export function Hero({onNavigate}: HeroProps) {
    return (
        <section data-section="About" className="hero-padding"
                 style={{
                     minHeight: "100vh",
                     display: "flex",
                     alignItems: "center",
                     padding: "0 48px",
                     position: "relative",
                     zIndex: 1
                 }}>

            <div style={{maxWidth: "660px"}}>
                <div className="hero-photo-mobile" style={{display: "none", marginBottom: "32px"}}>
                    <PhotoFrame small/>
                </div>

                <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "13px",
                    color: "var(--accent)",
                    letterSpacing: "0.15em",
                    marginBottom: "12px"
                }}>
                    {MY_TITLE}
                </div>

                <h1 style={{
                    fontSize: "clamp(33px, 8vw, 82px)",
                    fontWeight: 300,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    marginBottom: "16px",
                    animation: "fadeUp 0.9s ease forwards",
                    color: "var(--text)"
                }}>
                    Hi, I'm<br/>
                    <span style={{color: "var(--accent-name)", fontWeight: 500}}>{MY_NAME}</span>
                </h1>

                <p style={{
                    fontSize: "clamp(16px, 2vw, 19px)",
                    color: "var(--text-sub)",
                    lineHeight: 1.75,
                    maxWidth: "520px",
                    fontWeight: 300,
                    marginBottom: "32px"
                }}>
                    {MY_BIO}
                </p>

                <div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}>
                    <button className="btn-primary" onClick={() => onNavigate("Projects")}>View my work</button>
                    <button className="btn-ghost" onClick={() => onNavigate("Contact")}>Get in touch</button>
                </div>


                <div style={{marginTop: "32px"}}>
                    <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "10px"
                    }}>
                        Beyond the code
                    </div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                        {HOBBIES.map((hobby) => (
                            <div key={hobby.label} title={hobby.description}
                                 style={{
                                     display: "flex",
                                     alignItems: "center",
                                     gap: "8px",
                                     background: "var(--accent-badge)",
                                     border: "1px solid var(--border)",
                                     borderRadius: "8px",
                                     padding: "8px 14px",
                                     cursor: "default",
                                     transition: "border-color 0.2s"
                                 }}
                                 onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
                                 onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                            >
                                <span style={{fontSize: "16px"}}>{hobby.icon}</span>
                                <span style={{
                                    fontSize: "14px",
                                    color: "var(--accent-tag)",
                                    fontFamily: "'DM Mono', monospace"
                                }}>{hobby.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="floating-code" style={{
                position: "absolute", right: "25%", top: "50%",
                transform: "translateY(-20%)",
                display: "flex", flexDirection: "row", alignItems: "center", gap: "20px",
            }}>
                <PhotoFrame/>

                <div style={{display: "flex", flexDirection: "column", gap: "14px",}}>

                    <div style={{
                        background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px",
                        padding: "18px 20px", fontFamily: "'DM Mono', monospace", fontSize: "12px",
                        color: "var(--text-muted)", lineHeight: 1.9, width: "220px",
                        animation: "float 6s ease-in-out infinite",
                    }}>
                        <div style={{
                            color: "var(--accent)",
                            marginBottom: "6px",
                            fontSize: "10px",
                            letterSpacing: "0.1em"
                        }}>// about.ts
                        </div>
                        <div><span style={{color: "var(--code-keyword)"}}>const</span> <span
                            style={{color: "var(--code-var)"}}>me</span> = {"{"}</div>
                        <div style={{paddingLeft: "12px"}}><span
                            style={{color: "var(--accent-light)"}}>passion</span>: <span
                            style={{color: "var(--code-string)"}}>"coding"</span>,
                        </div>
                        <div style={{paddingLeft: "12px"}}><span
                            style={{color: "var(--accent-light)"}}>hobby1</span>: <span
                            style={{color: "var(--code-string)"}}>"chess ♟"</span>,
                        </div>
                        <div style={{paddingLeft: "12px"}}><span
                            style={{color: "var(--accent-light)"}}>hobby2</span>: <span
                            style={{color: "var(--code-string)"}}>"climb 🧗"</span>,
                        </div>
                        <div style={{paddingLeft: "12px"}}><span
                            style={{color: "var(--accent-light)"}}>mindset</span>: <span
                            style={{color: "var(--code-string)"}}>"solver"</span>,
                        </div>
                        <div>{"}"}</div>
                    </div>

                    <div style={{
                        background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px",
                        padding: "18px 20px", fontFamily: "'DM Mono', monospace", fontSize: "12px",
                        color: "var(--text-muted)", lineHeight: 1.9, width: "220px",
                        animation: "float 6s ease-in-out infinite",
                        animationDelay: "1.5s",
                    }}>
                        <div style={{
                            color: "var(--accent)",
                            marginBottom: "6px",
                            fontSize: "10px",
                            letterSpacing: "0.1em"
                        }}>// stack.ts
                        </div>
                        <div><span style={{color: "var(--code-keyword)"}}>const</span> <span
                            style={{color: "var(--code-var)"}}>stack</span> = {"{"}</div>
                        <div style={{paddingLeft: "12px"}}><span
                            style={{color: "var(--accent-light)"}}>frontend</span>: <span
                            style={{color: "var(--code-string)"}}>"React"</span>,
                        </div>
                        <div style={{paddingLeft: "12px"}}><span
                            style={{color: "var(--accent-light)"}}>backend</span>: <span
                            style={{color: "var(--code-string)"}}>"Spring Boot"</span>,
                        </div>
                        <div style={{paddingLeft: "12px"}}><span style={{color: "var(--accent-light)"}}>db</span>: <span
                            style={{color: "var(--code-string)"}}>"MySQL"</span>,
                        </div>
                        <div style={{paddingLeft: "12px"}}><span
                            style={{color: "var(--accent-light)"}}>deploy</span>: <span
                            style={{color: "var(--code-string)"}}>"Docker"</span>,
                        </div>
                        <div>{"}"}</div>
                    </div>

                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hero-photo-mobile { display: block !important; }
        }
      `}</style>
        </section>
    );
}

/* ── Component PhotoFrame ── */
function PhotoFrame({small = false}: { small?: boolean }) {
    const size = small ? 100 : 180;

    return (
        <div style={{position: "relative", width: size, height: size}}>

            <div style={{
                position: "absolute", top: 8, left: 8,
                width: size, height: size,
                borderRadius: "16px",
                border: "2px solid var(--accent)",
                opacity: 0.3,
            }}/>


            <div style={{
                position: "relative",
                width: size, height: size,
                borderRadius: "16px",
                border: "2px solid var(--border-hover)",
                overflow: "hidden",
                background: "var(--accent-badge)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "8px",
            }}>

                {MY_PHOTO ? (
                    <img src={MY_PHOTO} alt="Profile" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                ) : (
                    <>
                        <span style={{fontSize: small ? 28 : 48, opacity: 0.25}}>🧑</span>
                        <span style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: small ? "9px" : "11px",
                            color: "var(--text-muted)",
                            opacity: 0.5,
                            letterSpacing: "0.08em",
                            textAlign: "center",
                            padding: "0 8px",
                        }}>
              {small ? "your photo" : "add your photo\nin /public"}
            </span>
                    </>
                )}
            </div>
        </div>
    );
}
