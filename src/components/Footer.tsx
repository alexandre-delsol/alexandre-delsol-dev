import { MY_NAME, SOCIAL_LINKS } from "../constants/data";

export function Footer() {
  return (
    <footer style={{ padding: "32px 48px", borderTop: "1px solid var(--border)", position: "relative", zIndex: 1 }}>
      <div className="footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} {MY_NAME}
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {SOCIAL_LINKS.map((link) => (
            <span key={link}
              style={{ fontSize: "12px", color: "var(--text-muted)", cursor: "pointer", transition: "color 0.2s", fontFamily: "'DM Mono', monospace" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-light)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
