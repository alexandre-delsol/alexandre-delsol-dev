// ============================================================
//  CUSTOMIZE YOUR PORTFOLIO HERE
// ============================================================

export const MY_NAME = "Alexandre DELSOL";
export const MY_TITLE = "Fullstack Developer";
export const MY_BIO =
    "I approach software like chess — strategic, deliberate, and always thinking a few moves ahead. Full-stack developer building robust APIs and intuitive user experiences. Off the keyboard, I enjoy climbing and tackling new challenges.";


export interface Hobby {
    icon: string;
    label: string;
    description: string;
}

export const HOBBIES: Hobby[] = [
    {
        icon: "♟",
        label: "Chess",
        description: "I enjoy the strategy and patience chess demands — skills that translate directly into better system design.",
    },
    {
        icon: "🧗",
        label: "Climbing",
        description: "Bouldering and lead climbing teach me to stay calm under pressure and break hard problems into smaller moves.",
    },
    {
        icon: "💻",
        label: "Coding",
        description: "I genuinely enjoy coding beyond work — building side projects, exploring new technologies and open source.",
    },
];

export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string;

export const NAV_ITEMS = ["About", "Projects", "Skills", "Contact"];

export interface Collaborator {
    name: string;   // ex: "@prenomnom"
    github: string; // ex: "https://github.com/prenomnom"
}

export interface Project {
    img?: string;
    gif?: string;
    alt?: string;
    title: string;
    description: string;
    tags: string[];
    year: string;
    github?: string;
    demo?: string;
    collaborators?: Collaborator[]; // 👈 nouveau champ
}

export const PROJECTS: Project[] = [
    {
        title: "ClimbJAM Frontend",
        description: "React frontend for the ClimbJAM climbing tracker. Connected to the ClimbJAM REST API with JWT authentication.",
        tags: ["React", "TypeScript", "Vite"],
        year: "2025",
        github: "https://github.com/climb-jam/climb-jam-client-web/tree/dev",
        collaborators: [
            {name: "@MariamNze", github: "https://github.com/MariamNze"},
        ],
    },
    {
        title: "ClimbJAM API",
        description: "REST API for a rock climbing tracking platform. Features JWT authentication, role-based authorization (USER/ADMIN), session and ascent management. Built with Spring Boot, Spring Security and MySQL.",
        tags: ["Java", "Spring Boot", "JWT", "MySQL", "Swagger"],
        year: "2025",
        github: "https://github.com/climb-jam/climb-jam-api/tree/main",
        collaborators: [
            {name: "@MariamNze", github: "https://github.com/MariamNze"},
        ],
    },
    {
        title: "GarageAuto Frontend",
        description: "Full-stack appointment booking platform for garages, inspired by Doctolib. Features service scheduling and customer management.",
        tags: ["React", "TypeScript", "Vite"],
        year: "2025",
        github: "https://github.com/gargeAuto/garage-auto-web",
        collaborators: [
            {name: "@norstroph", github: "https://github.com/norstroph"},
            {name: "@Alx-370", github: "https://github.com/Alx-370"},
        ],
    },
    {
        title: "GarageAuto API",
        description: "REST API backend for the GarageAuto platform. Handles authentication, appointments, garage and customer management.",
        tags: ["PHP", "Laravel", "MySQL","Docker"],
        year: "2025",
        github: "https://github.com/gargeAuto/grage-auto-api",
        collaborators: [
            {name: "@norstroph", github: "https://github.com/norstroph"},
        ],
    },
    {
        img: "./portfolio.webp",
        gif: "./portfoliow.png",
        title: "Developer Portfolio",
        description: "Personal portfolio built with React, TypeScript and Vite. Features dark/light mode with useContext, scroll animations, responsive design and a working contact form.",
        tags: ["React", "TypeScript", "Vite", "CSS Variables"],
        year: "2026",
        github: "https://github.com/alexandre-delsol/alexandre-delsol-dev",
        demo: "https://alexandre-delsol-dev.vercel.app",
    },
    {
        img: "./snake-game.webp",
        gif: "./snake-game.gif",
        alt: "Screenshot of Snake Game showing score and grid",
        title: "Snake Game",
        description:
            "A browser-based implementation of the classic Snake game built with Vanilla JavaScript, HTML, and CSS. This project highlights core front-end development skills such as DOM manipulation, keyboard input handling, collision detection, and game state management.",
        tags: ["HTML", "JavaScript", "CSS"],
        year: "2025",
        github: "https://github.com/alexandre-delsol/projet-snake",
        demo: "https://alexandre-delsol.github.io/projet-snake/",
    },
];

export interface SkillCategory {
    category: string;
    items: string[];
}

export const SKILLS: SkillCategory[] = [
    {category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Vite"]},
    {category: "Backend", items: ["Java", "Spring Boot", "Spring Security", "JWT", "REST API", "Maven", "Swagger"]},
    {category: "Database", items: ["MySQL"]},
    {category: "DevOps & Tools", items: ["Docker", "Postman", "Git", "Vercel", "Linux"]},
];

export const SOCIAL_LINKS = [
    {linkName : "GitHub" , link : "https://github.com/alexandre-delsol"},
    {linkName : "LinkedIn" , link : "https://www.linkedin.com/in/alexandre-delsol/"},
];