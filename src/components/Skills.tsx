import {SKILLS} from "../constants/data";
import {useLang} from "../context/LanguageContext";
import {FadeIn} from "./ui/FadeIn";

export function Skills() {
    const {t} = useLang();

    return (
        <section data-section="Skills" className="section-padding"
                 style={{padding: "120px 48px", position: "relative", zIndex: 1, borderTop: "1px solid var(--border)"}}>
            <FadeIn>
                <div className="line-accent"/>
                <h2 style={{
                    fontSize: "clamp(28px, 5vw, 40px)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    marginBottom: "8px",
                    color: "var(--text)"
                }}>{t("skills.title")}</h2>
                <p style={{
                    color: "var(--text-muted)",
                    fontSize: "14px",
                    marginBottom: "56px"
                }}>{t("skills.subtitle")}</p>
            </FadeIn>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))",
                gap: "32px"
            }}>
                {SKILLS.map((skillGroup, i) => (
                    <FadeIn key={skillGroup.category} delay={i * 60}>
                        <div>
                            <div style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "11px",
                                color: "var(--accent)",
                                letterSpacing: "0.12em",
                                marginBottom: "16px",
                                textTransform: "uppercase"
                            }}>
                                {skillGroup.category}
                            </div>
                            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                {skillGroup.items.map((item) => <span key={item} className="skill-item">{item}</span>)}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
