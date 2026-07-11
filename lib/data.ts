export const siteConfig = {
  name: "Deoule-Allah Madjitoloum Heliodore",
  title: "Développeur Fullstack MERN",
  tagline:
    "Je conçois des applications web performantes, accessibles et élégantes, du concept à la mise en production.",
  email: "deouleallahh@email.com",
  location: "N'Djaména, Tchad",
  availability: "Disponible pour de nouvelles opportunités",
  social: {
    github: "https://github.com/helionux",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#competences", label: "Compétences" },
  { href: "#stack", label: "Stack" },
  { href: "#projets", label: "Projets" },
  { href: "#experiences", label: "Expériences" },
  { href: "#contact", label: "Contact" },
] as const

export const softSkills = [
  {
    name: "Communication",
    description: "Vulgariser des sujets techniques auprès de tous les profils.",
  },
  {
    name: "Esprit d'équipe",
    description: "Collaboration agile, code review constructive et entraide.",
  },
  {
    name: "Résolution de problèmes",
    description: "Approche analytique face aux défis complexes.",
  },
  {
    name: "Adaptabilité",
    description: "Apprentissage rapide de nouvelles technologies et contextes.",
  },
  {
    name: "Sens du détail",
    description: "Qualité du code, UX soignée et attention aux edge cases.",
  },
  {
    name: "Autonomie",
    description:
      "Prise d'initiative et livraison fiable en remote ou sur site.",
  },
]

export const hardSkills = [
  { name: "Architecture REST", level: 85 },
  { name: "React / Next.js", level: 95 },
  { name: "Node.js / Express", level: 88 },
  { name: "MongoDB & PostgreSQL", level: 85 },
  { name: "TypeScript", level: 92 },
  { name: "Tests & CI/CD", level: 80 },
  { name: "Docker & Déploiement", level: 75 },
  { name: "Performance Web", level: 90 },
]

export const techStack = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Framer Motion",
    ],
  },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "REST API"] },
  { category: "Base de données", items: ["MongoDB", "PostgreSQL", "Mongoose"] },
  {
    category: "Outils & Déploiement",
    items: ["Docker", "Git", "GitHub Actions", "Vercel", "Figma"],
  },
]

export const projects = [
  {
    title: "API Backend Social media",
    description:
      "Conception d'une API Backend pour une de réseau sociale, qui prends en charge l'authentification par email, et par OTP, publication des images, likes et commentaire.",
    tags: ["Node.js", "MongoDB", "Express.js", "Cloudinary", "Render"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Bizflow",
    description:
      "Une application de gestion de et centralistion des factures, cette plateforme génère également les facture en format pdf ainsi qu'un rapport détailler sous forme de tableur.",
    tags: ["Next.js", "Typescript", "Shadcn", "MongoDb", "Vercel"],
    github: "https://github.com",
    live: null,
    featured: false,
  },
  {
    title: ".DotNet",
    description:
      "Intégration de la maquette du site web de la communauté dotNet Cammeroun.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    github: "https://github.com",
    live: "https://dot-net-web-site-app.vercel.app/",
    featured: false,
  },
  {
    title: "CareLane",
    description:
      "Réfonte du site de prise de rendez-vous et de soins infirmiers à domicile.",
    tags: ["CMS", "Hostinger"],
    github: "https://github.com",
    live: "https://pascaldev.be",
    featured: false,
  },
]

export const experiences = [
  {
    role: "Développeur FullStack",
    company: "MUSS Digital",
    period: "2026 — Présent",
    description:
      "Création d'interfaces responsives pour des clients variés. Optimisation SEO, accessibilité mobile-first et animations fluides, ainsi la création des application Full-stack.",
    technologies: [
      "React",
      "Next.js",
      "Express.js",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    role: "Formation en Dévéloppement web",
    company: "MUSS Digital",
    period: "2024 — 2025",
    description: "Apprentissage des notions de bases du dévéloppement web.",
    technologies: ["HTML5", "CSS3", "JS", "Git", "React"],
  },
  {
    role: "Meta Full-Stack Developper from Scratch",
    company: "Meta — Coursera",
    period: "2025 — 2026",
    description:
      "Perfectionnement et apprentissage des notions avancées du dévéloppement web.",
    technologies: [
      "HTML & CSS in Depth",
      "Git",
      "React Basic",
      "Advanced React",
      " Python",
      "Database & Backend",
      "Django",
      "APIs",
    ],
  },
  {
    role: "IBM Backend",
    company: "IBM — Coursera",
    period: "2025 — 2026",
    description:
      "Apprentissage avancé du dévélopement backend avec Nodejs et Express et l'architecture MVC et de l'opération CRUD.",
    technologies: ["Node.js", "Express.js", "MVC", "MongoDB"],
  },
]
