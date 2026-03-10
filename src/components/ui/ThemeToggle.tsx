import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        padding: "6px 10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transition: "border-color 0.2s, background 0.3s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      {/* Track */}
      <div style={{
        width: "32px", height: "18px", borderRadius: "9px",
        background: isDark ? "var(--accent)" : "var(--border)",
        position: "relative", transition: "background 0.3s",
      }}>
        {/* Thumb */}
        <div style={{
          position: "absolute", top: "3px",
          left: isDark ? "17px" : "3px",
          width: "12px", height: "12px",
          borderRadius: "50%", background: "white",
          transition: "left 0.25s ease",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }} />
      </div>
      {/* Icon */}
      <span style={{ fontSize: "13px" }}>{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}
