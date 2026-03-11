import {useEffect, useState} from "react";
import {useLang} from "../context/LanguageContext";
import {ThemeToggle} from "./ui/ThemeToggle";
import {LangToggle} from "./ui/LangToggle";

interface NavbarProps {
    active: string;
    onNavigate: (section: string) => void;
}

export function Navbar({active, onNavigate}: NavbarProps) {
    const {t} = useLang();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        {key: "About", label: t("nav.about")},
        {key: "Projects", label: t("nav.projects")},
        {key: "Skills", label: t("nav.skills")},
        {key: "Contact", label: t("nav.contact")},
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavigate = (section: string) => {
        onNavigate(section);
        setMobileOpen(false);
    };

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            background: scrolled || mobileOpen ? "var(--nav-bg)" : "transparent",
            backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
            borderBottom: scrolled || mobileOpen ? "1px solid var(--border)" : "1px solid transparent",
            transition: "all 0.4s ease",
        }}>
            <div className="nav-inner" style={{
                padding: "20px 48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px"
            }}>

                {/* Logo */}
                <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "14px",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    flexShrink: 0
                }}>
                    dev<span style={{color: "var(--text-muted)"}}>/</span>portfolio
                </div>

                {/* Desktop links */}
                <div className="nav-links" style={{display: "flex", gap: "32px", alignItems: "center"}}>
                    {navItems.map(({key, label}) => (
                        <span key={key} className="nav-link" onClick={() => handleNavigate(key)}
                              style={{color: active === key ? "var(--accent-light)" : "var(--text-muted)"}}>
              {label}
            </span>
                    ))}
                </div>

                {/* Right side: lang toggle + theme toggle + burger */}
                <div style={{display: "flex", alignItems: "center", gap: "10px", flexShrink: 0}}>
                    <LangToggle/>
                    <ThemeToggle/>

                    {/* Mobile burger */}
                    <button
                        className="nav-mobile-menu"
                        onClick={() => setMobileOpen((v) => !v)}
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "4px",
                            flexDirection: "column",
                            gap: "5px"
                        }}
                        aria-label="Toggle menu"
                    >
                        <span style={{
                            display: "block",
                            width: "22px",
                            height: "2px",
                            background: "var(--accent)",
                            borderRadius: "2px",
                            transition: "all 0.3s",
                            transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none"
                        }}/>
                        <span style={{
                            display: "block",
                            width: "22px",
                            height: "2px",
                            background: "var(--accent)",
                            borderRadius: "2px",
                            transition: "all 0.3s",
                            opacity: mobileOpen ? 0 : 1
                        }}/>
                        <span style={{
                            display: "block",
                            width: "22px",
                            height: "2px",
                            background: "var(--accent)",
                            borderRadius: "2px",
                            transition: "all 0.3s",
                            transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none"
                        }}/>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div style={{
                    padding: "0 24px 16px",
                    display: "flex",
                    flexDirection: "column",
                    background: "var(--nav-bg)",
                    backdropFilter: "blur(16px)"
                }}>
                    {navItems.map(({key, label}) => (
                        <span key={key} className="nav-link" onClick={() => handleNavigate(key)}
                              style={{
                                  color: active === key ? "var(--accent-light)" : "var(--text-muted)",
                                  padding: "14px 0",
                                  borderBottom: "1px solid var(--border)",
                                  fontSize: "14px"
                              }}>
              {label}
            </span>
                    ))}
                </div>
            )}
        </nav>
    );
}
