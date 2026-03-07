// ============================================================
//  CUSTOMIZE YOUR PORTFOLIO HERE
// ============================================================

export const MY_NAME = "Alexandre DELSOL";
export const MY_TITLE = "Fullstack Developer";
export const MY_BIO =
  "I love building things — whether it's a web app, solving a complex problem, or planning my next move on a chessboard. When I'm not coding, you'll find me climbing walls or playing chess.";

export const MY_STATS: [string, string][] = [
  ["5+", "years of experience"],
  ["30+", "projects delivered"],
  ["15+", "happy clients"],
];

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

// 👉 Go to https://formspree.io → create a free account → create a form
//    Then add VITE_FORMSPREE_ID=your_id in your .env file
export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string;

export const NAV_ITEMS = ["About", "Projects", "Skills", "Contact"];

export interface Project {
  img?: string;
  alt?: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
}

export const PROJECTS: Project[] = [
  {
    img:"./snake-game.gif",
    alt:"Screenshot of Snake Game showing score and grid",
    title: "Snake Game",
    description:
      "A browser-based implementation of the classic Snake game built with Vanilla JavaScript, HTML, and CSS. This project highlights core front-end development skills such as DOM manipulation, keyboard input handling, collision detection, and game state management. The game logic is implemented without external libraries to demonstrate a strong understanding of JavaScript fundamentals and browser APIs.",
    tags: ["HTML", "JavaScript", "CSS"],
    year: "2025",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "Analytics dashboard with WebSockets, D3.js visualizations and high-performance REST API.",
    tags: ["React", "Node.js", "WebSocket", "D3.js"],
    year: "2024",
  },
  {
    title: "API Gateway",
    description:
      "Authentication and routing microservice with rate limiting, JWT and built-in monitoring.",
    tags: ["Express", "Redis", "Docker", "JWT"],
    year: "2023",
  },
  {
    title: "Headless CMS",
    description:
      "Custom content management system with rich-text editor, publishing workflows and CDN integration.",
    tags: ["GraphQL", "React", "MongoDB", "AWS S3"],
    year: "2023",
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "GraphQL", "REST API"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"] },
  { category: "DevOps & Tools", items: ["Docker", "AWS", "Git", "CI/CD", "Linux"] },
];

export const SOCIAL_LINKS = ["GitHub", "LinkedIn", "Twitter"];
