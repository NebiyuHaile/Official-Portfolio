export const profile = {
  name: "Nebiyu Haile",
  title: "CS Student & Backend/AI Systems Engineer",
  focus: "Backend internships, AI infrastructure, and full-stack systems roles",
  oneLiner:
    "I build backend systems that hold up in the real world: auth layers, real-time state, AI routing, and data pipelines shipped for real users.",
  email: "nebiyu.haile@mnsu.edu",
  github: "https://github.com/NebiyuHaile",
  linkedin: "https://www.linkedin.com/in/nebiyuhaile",
  location: "Mankato, MN",
  availability: "Open to 2026 internships and early-career backend/AI systems roles",
};

export const proofPoints = [
  { value: "500+", label: "users served" },
  { value: "99.7%", label: "service uptime" },
  { value: "91%", label: "research model accuracy" },
  { value: "30%", label: "faster ticket resolution" },
];

export const nav = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "activities", label: "activities" },
  { id: "contact", label: "contact" },
];

export const about = {
  degree: "B.S. Computer Science, Minor in Mathematics",
  school: "Minnesota State University, Mankato",
  grad: "Expected Dec 2026",
  coursework: [
    "Parallel Computing",
    "Operating Systems",
    "Computer Architecture",
    "Intelligent Systems",
    "Data Structures & Algorithms",
  ],
  blurb:
    "I am a systems-minded builder who can take an ambiguous problem from schema design to deployment. My strongest work sits where backend reliability, product constraints, and AI/data systems meet.",
  strengths: [
    "Owns projects end to end: data model, API design, auth, deployment, and operational feedback loops",
    "Comfortable debugging across the stack, from concurrent database writes to real-time WebSocket state",
    "Communicates tradeoffs clearly with technical and non-technical teammates",
  ],
};

export type Experience = {
  id: string;
  service: string;
  role: string;
  org: string;
  period: string;
  attr: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "experience-mnsu",
    service: "svc:mnsu-it",
    role: "Senior IT Student Consultant",
    org: "MNSU",
    period: "Aug 2024 – Present",
    attr: "uptime=99.7%",
    bullets: [
      "99.7% uptime via root-cause tracing and upstream fixes",
      "Resolved tickets 30% faster than baseline with a 98% satisfaction rate",
    ],
  },
  {
    id: "experience-senate",
    service: "svc:senate-sync",
    role: "Software Engineer Intern",
    org: "Student Government @ MNSU",
    period: "Jan – May 2025",
    attr: "users=500+",
    bullets: [
      "Built Senate-sync solo — a TypeScript/Next.js 15 platform serving 500+ users across 4 tools",
      "JWT/Clerk auth with RBAC across 5 roles",
      "Real-time vote tallying via Pusher WebSockets with an append-only audit ledger",
    ],
  },
  {
    id: "experience-research",
    service: "svc:research",
    role: "Undergraduate Research Engineer (IEEE Published)",
    org: "MNSU",
    period: "Aug – Dec 2024",
    attr: "accuracy=91%",
    bullets: [
      "Built an ETL pipeline for a medical imaging dataset (Butterfly Malar Rash)",
      "Trained CNNs via transfer learning to 91% accuracy",
      "Diagnosed and fixed class imbalance with weighted loss",
      "Co-authored a peer-reviewed IEEE paper on early detection of Systemic Lupus Erythematosus",
    ],
  },
];

export type Project = {
  id: string;
  service: string;
  name: string;
  attr: string;
  description: string;
  impact: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "project-routealpha",
    service: "svc:routealpha",
    name: "RouteAlpha",
    attr: "routing=multi-llm",
    description:
      "AI inference routing service that classifies requests and routes to the optimal LLM backend, with a full telemetry schema and live ops dashboard tracking spend and p95 latency.",
    impact: "Shows production-minded AI engineering: routing decisions, cost visibility, latency tracking, and backend observability.",
    tech: ["FastAPI", "PostgreSQL", "OpenRouter", "Next.js"],
    link: profile.github,
  },
  {
    id: "project-emdc",
    service: "svc:emdc",
    name: "EMDC Tabulation System",
    attr: "tx=concurrent-safe",
    description:
      "Live scoring backend for a 2026 debate competition with transaction guards preventing leaderboard corruption under concurrent writes.",
    impact: "Demonstrates database correctness under pressure, where one bad write can damage public competition results.",
    tech: ["Django", "PostgreSQL", "Python"],
    link: profile.github,
  },
  {
    id: "project-safehr",
    service: "svc:safehr",
    name: "SAFEHR",
    attr: "scenarios=10+",
    description:
      "Backend/data layer for a nursing clinical-simulation platform: graph-modeled patient data, role-gated access across 10+ scenarios, zero-regression schema refactor mid-project.",
    impact: "Highlights careful schema evolution, role-based access, and healthcare simulation data modeling.",
    tech: ["Next.js", "TypeScript", "React"],
    link: profile.github,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL", "Unix Shell"],
  },
  {
    category: "Web & Backend",
    items: ["React", "Next.js", "FastAPI", "Django", "Flask", "Node.js", "REST APIs", "WebSockets"],
  },
  {
    category: "AI & Data",
    items: ["TensorFlow", "LLM APIs (OpenAI, Anthropic, Gemini)", "ETL Pipelines", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "AWS", "Azure", "Docker", "JWT", "OAuth", "Vercel"],
  },
];

export const activities = [
  "CodePath AI201 (Applications of AI Engineering)",
  "Headstarter AI Fellowship",
  "CodePath SWE Fellowship",
  "NSBE",
  "ColorStack",
];

export type TraceSpan = {
  id: string;
  label: string;
  service: string;
  attr: string;
  range: [number, number];
  lane?: number;
};

// Default fraction-based ranges — used only until TracePanel measures real
// section boundaries at runtime (see recalibration in TracePanel itself).
export const traceSpans: TraceSpan[] = [
  { id: "hero", label: "GET /", service: "svc:hero", attr: "handshake", range: [0, 0.12] },
  { id: "about", label: "auth.middleware", service: "svc:about", attr: "identity=verified", range: [0.12, 0.24] },
  { id: "experience-mnsu", label: "db.query", service: "svc:mnsu-it", attr: "uptime=99.7%", range: [0.24, 0.32] },
  { id: "experience-senate", label: "db.query", service: "svc:senate-sync", attr: "users=500+", range: [0.32, 0.4] },
  { id: "experience-research", label: "db.query", service: "svc:research", attr: "accuracy=91%", range: [0.4, 0.48] },
  { id: "project-routealpha", label: "call", service: "svc:routealpha", attr: "routing=multi-llm", range: [0.48, 0.68], lane: 0 },
  { id: "project-emdc", label: "call", service: "svc:emdc", attr: "tx=concurrent-safe", range: [0.48, 0.68], lane: 1 },
  { id: "project-safehr", label: "call", service: "svc:safehr", attr: "scenarios=10+", range: [0.48, 0.68], lane: 2 },
  { id: "skills", label: "cache.lookup", service: "svc:skills", attr: "hit", range: [0.68, 0.8] },
  { id: "activities", label: "emit.event", service: "svc:activities", attr: "fellowships=4", range: [0.8, 0.9] },
  { id: "contact", label: "response", service: "svc:contact", attr: "200 OK", range: [0.9, 1] },
];
