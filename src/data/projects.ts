export interface ProjectArchitectureNode {
  name: string;
  type: "client" | "gateway" | "service" | "ml" | "storage" | "infra";
  description: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  period: string;
  category: ("AI / ML" | "Full Stack" | "Healthcare" | "Experiments")[];
  featured: boolean;
  status: "Live Product" | "Active Platform" | "Production Built";
  tagline: string;
  summary: string;
  overview: string[];
  problem: string;
  solution: string;
  resumeBullets: string[];
  architectureNodes: ProjectArchitectureNode[];
  architectureSummary: string;
  technologies: string[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  securityConsiderations: string[];
  challenges: string[];
  outcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  nextSlug: string;
}

export const projects: ProjectData[] = [
  {
    slug: "healthchain",
    title: "HealthChain — AI-Powered Healthcare Platform",
    shortTitle: "HealthChain",
    subtitle: "Role-Based Clinical Dashboards & Secure Healthcare Data Workflows",
    period: "Aug 2025 – Present",
    category: ["Healthcare", "Full Stack"],
    featured: true,
    status: "Active Platform",
    tagline: "Connecting Patients, Doctors, Clinical Staff, and Administrators through secure role-based dashboards and real-time application workflows.",
    summary:
      "A responsive healthcare platform built with React.js, Vite, Tailwind CSS, and React Router, integrating Node.js, Express.js REST APIs, WebSockets, and Firebase Authentication with PostgreSQL and Firestore data stores.",
    overview: [
      "Developed a responsive React.js healthcare platform featuring customized, role-based dashboards tailored for Patients, Doctors, Clinical Staff, and Administrators.",
      "Constructed a modular frontend architecture utilizing React Router and Tailwind CSS, integrating REST APIs and real-time WebSockets for responsive clinical workflows.",
      "Implemented Firebase Authentication alongside PostgreSQL and Cloud Firestore data pipelines, enforcing strict role-based access controls (RBAC) to ensure secure patient record handling.",
    ],
    resumeBullets: [
      "Developed a responsive React.js healthcare platform with role-based dashboards for Patients, Doctors, Clinical Staff, and Administrators.",
      "Built reusable React components and modular frontend architecture using React Router and Tailwind CSS, integrating REST APIs and WebSockets for application workflows.",
      "Implemented Firebase Authentication with PostgreSQL and Firestore data workflows, along with role-based access controls for secure user experiences.",
    ],
    problem:
      "Healthcare facilities struggle with fragmented communication channels between clinical staff, doctors, and patients. Traditional portals lack real-time WebSocket notifications and flexible role-based access controls, resulting in communication bottlenecks and vulnerable record access.",
    solution:
      "Engineered an integrated healthcare architecture featuring dedicated portals for each stakeholder, bi-directional WebSocket communication, and hybrid data persistence combining PostgreSQL for relational integrity with Firestore for real-time dashboard updates.",
    architectureNodes: [
      { name: "Role-Based Dashboards", type: "client", description: "React.js + Vite + Tailwind CSS with React Router" },
      { name: "API & WebSocket Gateway", type: "gateway", description: "Express.js REST APIs & WebSocket event dispatchers" },
      { name: "Auth & RBAC Service", type: "service", description: "Firebase Authentication with claim-based role verification" },
      { name: "Hybrid Data Layer", type: "storage", description: "PostgreSQL relational schemas & Cloud Firestore real-time store" },
      { name: "Cloud Infrastructure", type: "infra", description: "Firebase Hosting & Docker containerized backends" },
    ],
    architectureSummary:
      "Client requests transit through an Express.js gateway validating Firebase Auth tokens. Real-time clinical updates stream via WebSockets, while transactional data persists across PostgreSQL and Firestore with strict RBAC rules.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "React Router", "Node.js", "Express.js", "REST APIs", "WebSockets", "Firebase", "PostgreSQL", "Firestore"],
    engineeringDecisions: [
      {
        decision: "Hybrid PostgreSQL + Firestore Data Strategy",
        rationale: "PostgreSQL provides relational consistency for medical audit logs, while Firestore enables instant real-time synchronization for active clinical dashboards.",
        tradeoff: "Requires coordinating data updates across two storage systems.",
      },
      {
        decision: "WebSockets for Real-Time Clinical Notifications",
        rationale: "Ensures doctors and clinical staff receive instantaneous alerts regarding patient status without repetitive client polling.",
        tradeoff: "Demands persistent connection management and reconnection fallback handling.",
      },
    ],
    securityConsiderations: [
      "Strict Role-Based Access Control (RBAC) isolating patient records across administrative tiers.",
      "Firebase Auth token validation on all WebSocket handshake and REST request paths.",
      "Sanitized clinical inputs preventing SQL injection and XSS in consultation notes.",
    ],
    challenges: [
      "Designing an ergonomic multi-portal interface that remains clear and rapid under high clinical stress.",
      "Synchronizing real-time WebSocket states across multiple active doctor and nurse sessions.",
    ],
    outcomes: [
      "Active production deployment serving multi-role healthcare workflows.",
      "Sub-200ms API response latency and instant WebSocket event propagation.",
      "Clean modular component library facilitating rapid clinical feature expansion.",
    ],
    liveUrl: "https://healthchain.co.in",
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Portals", value: "4 Role Views" },
      { label: "Data Layer", value: "Postgres + Firestore" },
      { label: "Real-Time", value: "WebSockets" },
    ],
    nextSlug: "far-find-a-role",
  },
  {
    slug: "far-find-a-role",
    title: "FarFindARole — AI-Powered Recruitment Platform",
    shortTitle: "FarFindARole",
    subtitle: "Connecting Students, Universities, Recruiters & Placement Officers",
    period: "Jan 2025 – Jan 2026",
    category: ["AI / ML", "Full Stack"],
    featured: true,
    status: "Live Product",
    tagline: "AI-powered talent acquisition platform streamlining university hiring through resume intelligence and role-based portals.",
    summary:
      "A scalable recruitment hub built with React.js, Node.js, Firebase, and REST APIs, featuring AI-powered resume analysis, role-based interfaces, and performance-optimized React state management.",
    overview: [
      "Developed a responsive React.js platform connecting students, universities, recruiters, and placement officers through unified, role-based interfaces.",
      "Engineered reusable React components, interactive applicant dashboards, secure authentication workflows, and REST API integrations for maintainable user experiences.",
      "Integrated AI-powered resume analysis while optimizing frontend performance using React Hooks, lazy loading, and efficient state management.",
    ],
    resumeBullets: [
      "Developed a responsive React.js platform connecting students, universities, recruiters, and placement officers through role-based interfaces.",
      "Built reusable React components, dashboards, authentication workflows, and REST API integrations for maintainable user experiences.",
      "Integrated AI-powered resume analysis while optimizing frontend performance using React Hooks and efficient state management.",
    ],
    problem:
      "University placement drives suffer from disconnected communication between student applicants, college placement officers, and company recruiters. Manually parsing hundreds of resumes is slow, error-prone, and leads to hiring mismatches.",
    solution:
      "Built a unified multi-stakeholder ecosystem with dedicated portals for each party, integrated AI-driven resume scoring, and sub-50ms search filtering across candidate rosters.",
    architectureNodes: [
      { name: "Stakeholder Portals", type: "client", description: "Role-based React.js interfaces for Students, Recruiters, and Officers" },
      { name: "API & Ingestion Service", type: "gateway", description: "Node.js REST endpoints with Firebase Authentication" },
      { name: "AI Resume Analyzer", type: "ml", description: "Natural language skill extractor and candidate scoring engine" },
      { name: "Firestore Candidate Store", type: "storage", description: "Indexed applicant profiles, resumes, and application tracks" },
      { name: "Firebase Cloud Hosting", type: "infra", description: "Global edge CDN with optimized static bundle hydration" },
    ],
    architectureSummary:
      "Students submit profile data and resumes which are processed through the AI analysis pipeline. Recruiters and placement officers filter candidates via indexed search queries with instant client-side rendering.",
    technologies: ["React.js", "Node.js", "Firebase", "REST APIs", "AI", "Tailwind CSS", "React Hooks"],
    engineeringDecisions: [
      {
        decision: "Custom React Hook Architecture for Multi-attribute Filtering",
        rationale: "Encapsulates filtering and sorting logic, preventing component re-rendering and providing an instant search experience.",
        tradeoff: "Requires careful memoization of large candidate datasets.",
      },
      {
        decision: "Role-Based Navigation Guards in Frontend and Firestore Rules",
        rationale: "Guarantees student applicants cannot inspect other candidates' submissions or university administrative data.",
        tradeoff: "Dual-layer validation needed on both client routers and Firestore access rules.",
      },
    ],
    securityConsiderations: [
      "Strict data isolation between competing employer job postings.",
      "Sanitized resume file ingestion with size and MIME type verification.",
    ],
    challenges: [
      "Building a complex 4-way dashboard structure (Student, Recruiter, University, Officer) without bloated bundle sizes.",
      "Extracting structured technical skill arrays from unformatted PDF and DOCX resume uploads.",
    ],
    outcomes: [
      "Live platform operating at farfindarole.com.",
      "Successfully streamlined multi-university applicant tracking workflows.",
      "Fast, fluid user experience with high user satisfaction across hiring cycles.",
    ],
    liveUrl: "https://farfindarole.com/",
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Users", value: "4 Roles Connected" },
      { label: "Intelligence", value: "AI Resume Analysis" },
      { label: "Deployment", value: "farfindarole.com" },
    ],
    nextSlug: "feasto",
  },
  {
    slug: "feasto",
    title: "Food Ordering Platform (Feasto)",
    shortTitle: "Feasto",
    subtitle: "High-Performance Food Ordering & Dining Platform",
    period: "Aug 2025 – Nov 2025",
    category: ["Full Stack"],
    featured: true,
    status: "Live Product",
    tagline: "Responsive dining and food delivery application with restaurant browsing, catalog search, cart workflows, and Razorpay checkout.",
    summary:
      "A responsive React.js food ordering application built with Node.js, Firebase, and Razorpay, featuring dynamic restaurant browsing, product search, cart state management, and secure checkout workflows.",
    overview: [
      "Developed a responsive React.js food ordering application with restaurant browsing, product search, cart management, and seamless checkout workflows.",
      "Built reusable UI components and REST API integrations while implementing Firebase Authentication, Cloud Firestore, and Razorpay payment processing.",
      "Optimized responsive layouts and frontend performance using React Hooks, local state caching, and modern web development best practices.",
    ],
    resumeBullets: [
      "Developed a responsive React.js food ordering application with restaurant browsing, product search, cart, and checkout workflows.",
      "Built reusable components and REST API integrations while implementing Firebase Authentication, Firestore, and Razorpay.",
      "Optimized responsive layouts and frontend performance using React Hooks and modern development practices.",
    ],
    problem:
      "Mobile restaurant ordering experiences often break down on slower cellular connections due to sluggish cart updates, heavy assets, and payment checkout drop-offs.",
    solution:
      "Created an ultra-fast food ordering web app with instant cart state persistence, optimized search indexing, and a streamlined Razorpay checkout pipeline.",
    architectureNodes: [
      { name: "Customer Web App", type: "client", description: "Responsive React.js application with instant cart reducer" },
      { name: "Node.js REST Service", type: "service", description: "Menu catalog dispatch, order validation, and checkout orchestration" },
      { name: "Payment Gateway", type: "gateway", description: "Razorpay secure payment processing with webhook order confirmation" },
      { name: "Firestore Order Store", type: "storage", description: "Real-time order statuses, cart items, and restaurant menus" },
      { name: "Firebase CDN", type: "infra", description: "Asset optimization pipeline delivering sub-second load times" },
    ],
    architectureSummary:
      "Users browse restaurant menus with instant search filtering. Cart modifications operate locally through state reducers, with checkout transitioning to Razorpay and order confirmation stored in Firestore.",
    technologies: ["React.js", "Node.js", "Firebase", "Razorpay", "REST APIs", "Tailwind CSS", "React Hooks"],
    engineeringDecisions: [
      {
        decision: "Razorpay Webhook Handshake for Order State Verification",
        rationale: "Prevents fraudulent order creation by validating cryptographic signatures from Razorpay before writing final paid order states to Firestore.",
        tradeoff: "Requires webhook endpoint resilience against retry storms.",
      },
      {
        decision: "Optimistic Cart State Management",
        rationale: "Provides zero-latency tactile feedback when users increment or customize dishes during ordering.",
        tradeoff: "Needs local rollback if line-item validation fails.",
      },
    ],
    securityConsiderations: [
      "Server-side price and total verification preventing client-side cart tampering.",
      "HMAC SHA-256 signature verification on all Razorpay payment confirmation payloads.",
    ],
    challenges: [
      "Managing complex food customization states (addons, portion sizes, spice levels) within a clean, intuitive mobile cart.",
      "Ensuring fluid 60fps scrolling across image-heavy multi-restaurant menus.",
    ],
    outcomes: [
      "Live deployment operating at feasto.food.",
      "Integrated seamless Razorpay payment flows with zero checkout friction.",
      "Mobile-optimized responsive UX with 95+ Lighthouse performance scores.",
    ],
    liveUrl: "https://feasto.food/",
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Payments", value: "Razorpay Integrated" },
      { label: "Deployment", value: "feasto.food" },
      { label: "Architecture", value: "React + Node + Firebase" },
    ],
    nextSlug: "healthchain",
  },
];
