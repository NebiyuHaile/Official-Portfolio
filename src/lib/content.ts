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

export const operatorCommands = [
  {
    command: "whoami",
    response:
      "I am Nebiyu Haile — a CS student, backend/AI systems engineer, and solo builder of production workflows.",
  },
  {
    command: "proof",
    response:
      "500+ users served · 99.7% uptime · 91% model accuracy · 30% faster support resolution.",
  },
  {
    command: "projects",
    response:
      "RouteAlpha: AI routing + telemetry · EMDC: concurrent-safe tabulation · SAFEHR: role-gated clinical simulation data.",
  },
  {
    command: "stack",
    response:
      "Python · TypeScript · Next.js · FastAPI · Django · PostgreSQL · WebSockets · TensorFlow · Docker.",
  },
  {
    command: "contact",
    response: "nebiyu.haile@mnsu.edu · linkedin.com/in/nebiyuhaile · github.com/NebiyuHaile",
  },
];

export const traceManifest = [
  {
    step: "01",
    command: "resolve.identity()",
    label: "Who am I?",
    output:
      "I am a CS + Math student building backend, AI infrastructure, and full-stack systems for real users.",
    status: "verified",
  },
  {
    step: "02",
    command: "query.production_history()",
    label: "Has my work held up?",
    output:
      "I have shipped systems with 500+ users, 99.7% uptime, real-time voting, guarded transactions, and measurable support outcomes.",
    status: "stable",
  },
  {
    step: "03",
    command: "inspect.systems()",
    label: "What problems do I work on?",
    output:
      "I work on auth, RBAC, WebSockets, ETL, AI routing, telemetry, healthcare data modeling, and database correctness.",
    status: "deep signal",
  },
  {
    step: "04",
    command: "return.recruiter_signal()",
    label: "Why reach out to me?",
    output:
      "I can own ambiguous systems work from data model to deployed product and explain the tradeoffs clearly.",
    status: "200 OK",
  },
];

export type SystemNode = {
  id: string;
  label: string;
  route: string;
  metric: string;
  detail: string;
  x: number;
  y: number;
  tone: "green" | "blue" | "amber";
};

export const systemNodes: SystemNode[] = [
  {
    id: "identity",
    label: "Identity",
    route: "auth.middleware",
    metric: "RBAC x5",
    detail: "JWT/Clerk auth, role gates, and audit-minded access control for Senate-sync.",
    x: 16,
    y: 28,
    tone: "blue",
  },
  {
    id: "realtime",
    label: "Realtime State",
    route: "senate-sync.websocket",
    metric: "500+ users",
    detail: "Pusher-backed vote tallying with append-only records and real users in the loop.",
    x: 42,
    y: 18,
    tone: "green",
  },
  {
    id: "routing",
    label: "AI Routing",
    route: "routealpha.router",
    metric: "p95 + spend",
    detail: "Classifies prompts, routes LLM calls, and exposes telemetry for latency and cost.",
    x: 72,
    y: 32,
    tone: "amber",
  },
  {
    id: "database",
    label: "Database Safety",
    route: "emdc.transaction",
    metric: "guarded writes",
    detail: "Transaction guards protect live debate leaderboards from concurrent write corruption.",
    x: 28,
    y: 70,
    tone: "amber",
  },
  {
    id: "research",
    label: "Research Pipeline",
    route: "research.etl",
    metric: "91% accuracy",
    detail: "Medical-image ETL and transfer-learning pipeline for IEEE-published SLE research.",
    x: 62,
    y: 76,
    tone: "blue",
  },
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
    "I own projects end to end: data model, API design, auth, deployment, and operational feedback loops",
    "I am comfortable debugging across the stack, from concurrent database writes to real-time WebSocket state",
    "I communicate tradeoffs clearly with technical and non-technical teammates",
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
  role: string;
  proof: string;
  risk: string;
  architecture: string[];
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
    role: "I designed the routing logic, telemetry schema, and ops-facing dashboard surface.",
    proof: "Tracks model choice, spend, latency, and routing decisions instead of treating AI calls like a black box.",
    risk: "The core risk was uncontrolled LLM cost and opaque latency; I treated observability as a product feature.",
    architecture: ["Prompt intake", "Classifier", "LLM router", "Telemetry store", "Ops dashboard"],
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
    role: "I built the scoring flow around transaction safety and leaderboard integrity.",
    proof: "Concurrent writes are guarded so public rankings stay consistent while judges submit live scores.",
    risk: "The core risk was leaderboard corruption under pressure; correctness mattered more than visual flash.",
    architecture: ["Judge input", "Validation", "Transaction guard", "Score aggregation", "Leaderboard"],
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
    role: "I worked on the data model, role gates, and schema refactor path for simulation workflows.",
    proof: "The system supports 10+ scenarios while preserving role-specific access and patient-data relationships.",
    risk: "The core risk was changing schema shape mid-project without breaking scenario behavior.",
    architecture: ["Role gate", "Scenario loader", "Patient graph", "Clinical actions", "Audit trail"],
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
  { id: "manifest", label: "plan", service: "svc:manifest", attr: "route=resolved", range: [0.12, 0.22] },
  { id: "about", label: "auth.middleware", service: "svc:about", attr: "identity=verified", range: [0.22, 0.32] },
  { id: "experience-mnsu", label: "db.query", service: "svc:mnsu-it", attr: "uptime=99.7%", range: [0.32, 0.4] },
  { id: "experience-senate", label: "db.query", service: "svc:senate-sync", attr: "users=500+", range: [0.4, 0.48] },
  { id: "experience-research", label: "db.query", service: "svc:research", attr: "accuracy=91%", range: [0.48, 0.56] },
  { id: "project-routealpha", label: "call", service: "svc:routealpha", attr: "routing=multi-llm", range: [0.56, 0.72], lane: 0 },
  { id: "project-emdc", label: "call", service: "svc:emdc", attr: "tx=concurrent-safe", range: [0.56, 0.72], lane: 1 },
  { id: "project-safehr", label: "call", service: "svc:safehr", attr: "scenarios=10+", range: [0.56, 0.72], lane: 2 },
  { id: "skills", label: "cache.lookup", service: "svc:skills", attr: "hit", range: [0.72, 0.82] },
  { id: "activities", label: "emit.event", service: "svc:activities", attr: "fellowships=4", range: [0.82, 0.9] },
  { id: "contact", label: "response", service: "svc:contact", attr: "200 OK", range: [0.9, 1] },
];
