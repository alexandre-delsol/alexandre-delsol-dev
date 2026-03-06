export function Background() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.5 }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
        backgroundSize: "48px 48px",
      }} />
      <div style={{ position: "absolute", top: "20%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(29,78,216,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "30%", left: "5%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
    </div>
  );
}
