# Portfolio Website Build Prompt — Nebiyu Haile

Paste this into an AI website builder (Claude, Claude Code, v0.dev, Lovable, bolt.new, etc.) to generate the site.

---

## The Prompt

You are a senior creative developer who designs award-winning (Awwwards/FWA-tier) portfolio sites for elite software engineers. Build a one-of-a-kind, interactive personal portfolio website for **Nebiyu Haile**, a Computer Science student and backend/AI-systems engineer. The site must feel custom-built for him — not a template with his name swapped in. Recruiters and engineers should finish it thinking "this person clearly knows how to build systems."

### Creative Direction
Nebiyu's real work is infrastructure and systems: auth layers, WebSocket state, routing engines, telemetry dashboards, transaction-safe databases. Lean into that identity instead of generic "creative portfolio" tropes (no floating blobs, no stock gradient hero text). Concept: **"the engineer's control room."**

- **Visual language:** dark-mode-first, near-black background, one confident accent color (electric blue, signal green, or amber — pick one and use it with restraint), monospace type for data/labels (e.g. JetBrains Mono) paired with a clean grotesk for headings (e.g. Inter or Geist).
- **Motif:** subtle live-system aesthetics — terminal cursors, status pills ("● 99.7% uptime"), animated request-flow lines, a faint grid/schematic background, numbers that tick up on scroll (91% accuracy, 500+ users, 30% faster resolution).
- **Motion:** scroll-triggered reveals, magnetic buttons, smooth-scroll navigation, micro-interactions on hover (cards lift, borders glow, code snippets type themselves out). Motion should feel precise and engineered, not bouncy or playful.
- **Signature interactive centerpiece (pick one and execute it well):**
  1. A live-feeling mock dashboard widget (inspired by his RouteAlpha project) showing simulated request routing/latency stats animating in real time, or
  2. An interactive terminal in the hero section where a visitor can type commands like `whoami`, `skills`, `projects` and get real responses, or
  3. An animated architecture diagram of one of his projects (e.g. Senate-sync's auth/WebSocket flow) that visitors can hover/click to explore.

### Tech Stack
Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion. Use Three.js/react-three-fiber only if it stays performant and purposeful (e.g. a subtle particle/network field), never decoration for its own sake. Fully responsive, fast (Lighthouse 90+), accessible (semantic HTML, proper contrast, keyboard navigable, prefers-reduced-motion respected).

### Site Structure & Content

**1. Hero**
Name, title ("CS Student & Backend/AI Systems Engineer"), one sharp one-liner, contact links (email, LinkedIn, GitHub, phone optional). Include the interactive centerpiece here or just below.

**2. About**
B.S. Computer Science, Minor in Mathematics — Minnesota State University, Mankato (expected Dec 2026). Coursework: Parallel Computing, Operating Systems, Computer Architecture, Intelligent Systems, Data Structures & Algorithms. Frame him as someone who builds production systems solo, from design through deployment.

**3. Experience** (timeline or stacked cards, most recent first)
- **Senior IT Student Consultant**, MNSU — Aug 2024–Present: 99.7% uptime via root-cause tracing and upstream fixes; resolved tickets 30% faster than baseline with a 98% satisfaction rate.
- **Software Engineer Intern**, Student Government @ MNSU — Jan–May 2025: Built Senate-sync solo — a TypeScript/Next.js 15 platform serving 500+ users across 4 tools; JWT/Clerk auth with RBAC across 5 roles; real-time vote tallying via Pusher WebSockets with an append-only audit ledger.
- **Undergraduate Research Engineer (IEEE Published)**, MNSU — Aug–Dec 2024: Built an ETL pipeline for a medical imaging dataset (Butterfly Malar Rash); trained CNNs via transfer learning to 91% accuracy; diagnosed and fixed class imbalance with weighted loss; co-authored a peer-reviewed IEEE paper on early detection of Systemic Lupus Erythematosus.

**4. Projects** (feature cards with tech tags, links to GitHub)
- **RouteAlpha** — AI inference routing service (FastAPI, PostgreSQL, OpenRouter, Next.js): classifies requests and routes to the optimal LLM backend; full telemetry schema and live ops dashboard tracking spend and p95 latency.
- **EMDC Tabulation System** (Django, PostgreSQL, Python): live scoring backend for a 2026 debate competition with transaction guards preventing leaderboard corruption under concurrent writes.
- **SAFEHR** — Simulation EHR (Next.js, TypeScript, React): backend/data layer for a nursing clinical-simulation platform; graph-modeled patient data, role-gated access across 10+ scenarios, zero-regression schema refactor mid-project.

**5. Skills** (grouped, not a wall of badges — use categories with subtle icons or a hover-to-reveal grid)
Languages: Python, Java, C/C++, JavaScript, TypeScript, SQL, Unix Shell
Web & Backend: React, Next.js, FastAPI, Django, Flask, Node.js, REST APIs, WebSockets
AI & Data: TensorFlow, LLM APIs (OpenAI, Anthropic, Gemini), ETL Pipelines, PostgreSQL, MySQL, MongoDB
Tools & Platforms: Git, AWS, Azure, Docker, JWT, OAuth, Vercel

**6. Activities**
CodePath AI201 (Applications of AI Engineering), Headstarter AI Fellowship, CodePath SWE Fellowship, NSBE, ColorStack.

**7. Contact / Footer**
Clear CTA to email or book a call, links to LinkedIn/GitHub, maybe a downloadable resume button.

### Non-Negotiables
- No Lorem Ipsum, no placeholder images — use the real content above.
- No generic "hire me" portfolio clichés (no cursor-follow blobs, no stock hero photos, no rainbow gradients).
- Every animation should feel intentional and reinforce the "systems engineer" identity, not just look cool in isolation.
- Ship it mobile-first responsive and genuinely fast.

---

**Tip:** if the tool supports it, ask it to build in stages (hero + nav → about/experience → projects → skills/contact) rather than all at once — you'll get higher-quality output per section.
