import {useEffect, useState} from "react";
import "./styles/global.css";

import {ThemeProvider} from "./context/ThemeContext";
import {LanguageProvider} from "./context/LanguageContext";
import {Background} from "./components/Background";
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {Projects} from "./components/Projects";
import {Skills} from "./components/Skills";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function PortfolioContent() {
    const [activeSection, setActiveSection] = useState("About");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("data-section");
                        if (id) setActiveSection(id);
                    }
                });
            },
            {threshold: 0.4}
        );
        document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (section: string) => {
        document.querySelector(`[data-section="${section}"]`)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "var(--bg)",
            color: "var(--text)",
            transition: "background 0.3s, color 0.3s"
        }}>
            <Background/>
            <Navbar active={activeSection} onNavigate={scrollTo}/>
            <Hero onNavigate={scrollTo}/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default function Portfolio() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <PortfolioContent/>
            </ThemeProvider>
        </LanguageProvider>
    );
}
