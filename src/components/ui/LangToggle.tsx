import {useLang} from "../../context/LanguageContext";

export function LangToggle() {
    const {lang, toggleLang} = useLang();

    return (
        <button
            onClick={toggleLang}
            title={lang === "en" ? "Passer en français" : "Switch to English"}
            style={{
                display: "flex", alignItems: "center", gap: "5px",
                background: "var(--accent-badge)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "5px 10px",
                cursor: "pointer",
                transition: "border-color 0.2s",
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: "var(--text)",
                letterSpacing: "0.08em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
            <span style={{opacity: lang === "en" ? 1 : 0.4, transition: "opacity 0.2s"}}>EN</span>
            <span style={{color: "var(--border-hover)"}}>/</span>
            <span style={{opacity: lang === "fr" ? 1 : 0.4, transition: "opacity 0.2s"}}>FR</span>
        </button>
    );
}