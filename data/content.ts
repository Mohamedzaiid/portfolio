// Portfolio content data - Single source of truth for all content

export const personalInfo = {
  name: "MOHAMED ZAID",
  title: "Full-Stack Developer",
  location: "Istanbul, Turkey",
  phone: "+905347890481",
  email: "mohamedzaid.officiall@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-zaid-7b52881b3",
  github: "https://github.com/Mohamedzaiid",
  resumePath: "/MOHAMED_ZAID_CV.pdf",
};

export const heroContent = {
  headline: "MOHAMED ZAID — Full‑Stack Developer",
  subheadline:
    "Building scalable, high‑performance web applications with React/Next.js and Node/Express—clean architecture, secure APIs, and polished UI.",
  primaryCta: "View Projects",
  secondaryCta: "Download Resume",
  tertiaryCta: "Contact",
};

export const highlights = [
  { value: "1+", label: "Years Experience" },
  { value: "7+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "3", label: "Languages Spoken" },
];

export const pillars = [
  {
    icon: "frontend",
    title: "Frontend Development",
    description:
      "Crafting responsive, intuitive UIs with React, Next.js, and modern CSS—pixel-perfect, accessible, and performant.",
  },
  {
    icon: "backend",
    title: "Backend Development",
    description:
      "Building robust APIs and server logic with Node.js, Express, and Django—secure authentication, efficient data handling.",
  },
  {
    icon: "fullstack",
    title: "Full-Stack Solutions",
    description:
      "End-to-end application architecture—from database design to deployment, containerization, and CI/CD pipelines.",
  },
];

export const skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Pug",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Django",
    "RESTful APIs",
    "API Testing",
    "Authentication & Authorization",
    "MVC Architecture",
  ],
  Databases: [
    "MongoDB",
    "Mongoose",
    "MySQL",
    "Redis",
    "Database Design & Optimization",
  ],
  "DevOps & Tools": [
    "Docker",
    "Containerization",
    "Git",
    "GitHub",
    "Version Control",
    "CI/CD Integration",
    "Shopify API Integration",
  ],
  Programming: ["Python", "Data Structures & Algorithms", "OOP"],
  Languages: ["Arabic (Native)", "English (Fluent)", "Turkish (Intermediate)"],
};

export const experience = [
  {
    company: "Rooteplus",
    location: "Istanbul, Turkey",
    roles: [
      {
        title: "Full Stack Developer",
        period: "Aug 2024 — Sep 2024",
        bullets: [
          "Collaborate with senior engineers on complex projects",
          "Maintain documentation and ensure high-quality delivery through testing/debugging",
          "Develop responsive web apps with modern frameworks; focus on intuitive UI + efficient algorithms",
        ],
      },
      {
        title: "Trainee Software Engineer",
        period: "Jul 2024 — Aug 2024",
        bullets: [
          "Improve system performance by optimizing code and troubleshooting issues",
          "Participate in code reviews and give constructive feedback",
          "Design/implement scalable systems for data extraction/analysis",
          "Debugging + scripting automation; analyze source code to identify issues",
          "Collaborate with design and senior engineers to build customized products",
        ],
      },
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Engineering",
  university: "Bandırma Onyedi Eylül University",
  courses: [
    "SQL Mastery Course",
    "Ultimate React Series",
    "Ultimate Next.js Series",
    "The Complete Node.js Course",
  ],
};

export interface Project {
  id: string;
  title: string;
  type: string;
  value: string;
  features: string[];
  stack: string[];
  github: string;
  live: string | null;
  caseStudy: boolean;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "natours-backend",
    title: "Natours (Backend)",
    type: "Side Project",
    value:
      "Production-ready REST API for travel/tours app with security and optional AI services.",
    features: [
      "Filtering, pagination, aggregation for tours/users/reviews",
      "JWT auth + role-based access (admin vs users)",
      "File/image uploads; rate limiting; input sanitization; CORS",
      "AI: semantic search, personalized recommendations, itinerary generation",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JavaScript (ES6+)",
      "Pug",
      "Docker",
      "REST APIs",
      "FastAPI",
      "Python",
    ],
    github: "https://github.com/Mohamedzaiid",
    live: null,
    caseStudy: true,
    featured: true,
  },
  {
    id: "natours-frontend",
    title: "Natours (Frontend)",
    type: "Side Project",
    value: "Modern responsive UI connected to the Natours backend API.",
    features: [
      "Login/signup connected to backend API",
      "Dynamic pages for tours/reviews/booking summaries",
      "Responsive UI with animations; AI assistant bot integrated via API",
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
      "REST API Integration",
    ],
    github: "https://github.com/Mohamedzaiid",
    live: null,
    caseStudy: true,
    featured: true,
  },
  {
    id: "code-generator-backend",
    title: "Code-Generator-AI (Backend)",
    type: "Side Project",
    value:
      "Node.js API that accepts prompts and returns AI-generated code to clients.",
    features: [
      "REST endpoints for prompt submission and code generation",
      "AI service integration (e.g., OpenAI-like API)",
      "Error handling, async processing, response formatting",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "REST APIs",
      "GitHub API",
      "AI integration",
    ],
    github: "https://github.com/Mohamedzaiid",
    live: null,
    caseStudy: true,
    featured: true,
  },
  {
    id: "code-generator-frontend",
    title: "Code-Generator-AI (Frontend)",
    type: "Side Project",
    value: "Frontend workflow for code generation with code rendering UX.",
    features: [
      "Prompt input + dynamic rendering of code snippets",
      "Syntax highlighting + copy-to-clipboard",
      "Responsive layout for multiple screen sizes",
    ],
    stack: ["Svelte", "JavaScript", "CSS", "REST APIs", "GitHub"],
    github: "https://github.com/Mohamedzaiid",
    live: null,
    caseStudy: true,
    featured: true,
  },
  {
    id: "react-food-app",
    title: "ReactFoodApp",
    type: "Full-Stack",
    value: "Full-stack food ordering app (browse, cart, order, track).",
    features: [
      "Menu browsing/filtering + cart management",
      "Backend CRUD, order handling, user authentication",
      "Redux state management + responsive UI",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "REST APIs",
    ],
    github: "https://github.com/Mohamedzaiid",
    live: null,
    caseStudy: true,
    featured: true,
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    type: "Side Project",
    value: "Interactive quiz app with timer, feedback, and scoring.",
    features: [
      "Randomized questions with built-in timer",
      "Live score tracking + final summary",
      "Lightweight responsive design",
    ],
    stack: ["React.js", "JavaScript", "CSS Modules", "Tailwind", "Vite"],
    github: "https://github.com/Mohamedzaiid",
    live: null,
    caseStudy: false,
    featured: true,
  },
  {
    id: "small-shop",
    title: "Small-Shop",
    type: "E-Commerce",
    value:
      "Lightweight e-commerce SPA focusing on frontend architecture and UX.",
    features: [
      "Product listing + cart with Context API state management",
      "Responsive design and modern UI patterns",
      "Clear module separation and component-based architecture",
    ],
    stack: ["React.js", "Context API", "JavaScript", "CSS/Tailwind", "GitHub"],
    github: "https://github.com/Mohamedzaiid",
    live: null,
    caseStudy: false,
    featured: false,
  },
];

export const footerContent = {
  tagline: "Let's build something fast, reliable, and user‑focused.",
};
