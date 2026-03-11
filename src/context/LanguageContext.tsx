import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.cta.work": "View my work",
    "hero.cta.contact": "Get in touch",
    "hero.beyond": "Beyond the code",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of my recent work",
    "projects.github": "GitHub",
    "projects.demo": "Live Demo",
    "projects.collab": "collab :",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technologies and tools I work with daily",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk.",
    "contact.name": "NAME",
    "contact.email": "EMAIL",
    "contact.message": "MESSAGE",
    "contact.name.placeholder": "John Doe",
    "contact.email.placeholder": "john@example.com",
    "contact.message.placeholder": "Tell me about your project...",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.success.sub": "I'll get back to you soon.",
    "contact.error.required": "All fields are required.",
    "contact.error.email": "Please enter a valid email address.",
    "contact.error.network": "Network error. Please check your connection.",
    "contact.error.server": "Something went wrong. Please try again.",

    // Footer
    "footer.rights": "All rights reserved",
  },
  fr: {
    // Navbar
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Bonjour, je suis",
    "hero.cta.work": "Voir mes projets",
    "hero.cta.contact": "Me contacter",
    "hero.beyond": "En dehors du code",

    // Projects
    "projects.title": "Projets",
    "projects.subtitle": "Une sélection de mes réalisations récentes",
    "projects.github": "GitHub",
    "projects.demo": "Démo",
    "projects.collab": "collab :",

    // Skills
    "skills.title": "Compétences",
    "skills.subtitle": "Technologies et outils que j'utilise au quotidien",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Un projet en tête ? Parlons-en.",
    "contact.name": "NOM",
    "contact.email": "EMAIL",
    "contact.message": "MESSAGE",
    "contact.name.placeholder": "Jean Dupont",
    "contact.email.placeholder": "jean@exemple.com",
    "contact.message.placeholder": "Parlez-moi de votre projet...",
    "contact.send": "Envoyer",
    "contact.sending": "Envoi...",
    "contact.success": "Message envoyé avec succès !",
    "contact.success.sub": "Je vous répondrai rapidement.",
    "contact.error.required": "Tous les champs sont obligatoires.",
    "contact.error.email": "Veuillez entrer une adresse email valide.",
    "contact.error.network": "Erreur réseau. Vérifiez votre connexion.",
    "contact.error.server": "Une erreur est survenue. Réessayez.",

    // Footer
    "footer.rights": "Tous droits réservés",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return (saved as Language) ?? "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations["en"]] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
