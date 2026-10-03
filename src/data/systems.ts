export interface SystemCapability {
  title: string;
  description: string;
  technologies: string[];
  focusAreas: string[];
}

export interface SystemCategory {
  id: string;
  title: string;
  subtitle: string;
  capabilities: SystemCapability[];
}

export const engineeringSystems: SystemCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Component architecture, responsive state management, and modern client tooling.",
    capabilities: [
      {
        title: "React & Next.js Ecosystem",
        description: "Developing modular, reusable React components, custom hooks, and dynamic route controllers.",
        technologies: ["React.js", "React Hooks", "React Router", "Vite", "Tailwind CSS", "Next.js"],
        focusAreas: ["Reusable component libraries", "State synchronization", "Role-based dashboards", "Client performance"],
      },
      {
        title: "Modern Web Standards & UI",
        description: "Semantic HTML5, CSS3 layout engines, responsive design, and fluid multi-viewport ergonomics.",
        technologies: ["HTML5", "CSS3", "Responsive Web Design", "Tailwind CSS v4"],
        focusAreas: ["Mobile-first layouts", "Zero layout shift", "Accessible navigation", "Tactile micro-animations"],
      },
    ],
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    subtitle: "Stateless REST APIs, WebSocket channels, and server-side workflow integration.",
    capabilities: [
      {
        title: "Server Runtimes & Endpoints",
        description: "Constructing modular RESTful microservices, authentication pipelines, and API integrations.",
        technologies: ["Node.js", "Express.js", "REST APIs", "FastAPI"],
        focusAreas: ["Endpoint routing", "Authentication workflows", "Request validation", "Error handling"],
      },
      {
        title: "Real-Time & Event Streams",
        description: "Bidirectional WebSocket channels for low-latency messaging and application synchronization.",
        technologies: ["WebSockets", "Firebase Realtime", "Event Handlers"],
        focusAreas: ["Live updates", "Connection lifecycle", "Low-latency dispatch", "State reconciliation"],
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Relational, document, and cloud-native database architectures.",
    capabilities: [
      {
        title: "Relational Databases",
        description: "Structured SQL schemas, relational integrity, indexing, and ACID transaction safety.",
        technologies: ["PostgreSQL", "MySQL", "SQL"],
        focusAreas: ["Schema normalization", "Query optimization", "Foreign key constraints", "Migration pipelines"],
      },
      {
        title: "NoSQL & Document Stores",
        description: "Flexible, scalable document schemas optimized for rapid read/write application workflows.",
        technologies: ["Firebase Firestore", "MongoDB"],
        focusAreas: ["Document collections", "Security rules", "Real-time subscriptions", "Compound indexing"],
      },
    ],
  },
  {
    id: "tools-cloud",
    title: "Tools, Cloud & DevOps",
    subtitle: "Version control, container isolation, cloud platforms, and API inspection.",
    capabilities: [
      {
        title: "Version Control & Containers",
        description: "Collaborative Git workflows, repository management, and Docker container packaging.",
        technologies: ["Git", "GitHub", "Docker"],
        focusAreas: ["Feature branching", "Code reviews", "Container isolation", "Build reproducibility"],
      },
      {
        title: "Cloud Services & Tooling",
        description: "Serverless authentication, cloud storage, API testing, and deployment platforms.",
        technologies: ["Firebase", "AWS", "Postman", "Razorpay"],
        focusAreas: ["Authentication gates", "API validation suites", "Payment gateways", "Cloud hosting"],
      },
    ],
  },
  {
    id: "core-languages",
    title: "Programming Languages & Core CS",
    subtitle: "Foundational computer science principles, system design, and polyglot programming.",
    capabilities: [
      {
        title: "Core Languages",
        description: "Writing clean, type-safe, maintainable code across diverse software stacks.",
        technologies: ["JavaScript", "Python", "Java", "SQL"],
        focusAreas: ["Algorithm implementation", "Object-Oriented Programming", "Functional patterns", "Database queries"],
      },
      {
        title: "Computer Science Foundations",
        description: "Deep theoretical grounding enabling rigorous engineering trade-off evaluations.",
        technologies: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks", "System Design", "Agile"],
        focusAreas: ["Time/space complexity", "Network protocols", "Concurrency", "Agile development sprints"],
      },
    ],
  },
];

export interface SystemMapNode {
  id: string;
  name: string;
  layer: "User & Client" | "Gateway & API" | "Core Application" | "ML & Inference" | "Persistence & Ledger" | "Cloud & Edge";
  summary: string;
  relatedProjectSlug: string;
  connectedTo: string[];
}

export const systemMapNodes: SystemMapNode[] = [
  {
    id: "client-layer",
    name: "React.js Client Layer",
    layer: "User & Client",
    summary: "Role-based dashboards for Patients, Doctors, Students, and Diners using React Hooks and Tailwind CSS.",
    relatedProjectSlug: "healthchain",
    connectedTo: ["gateway-layer"],
  },
  {
    id: "gateway-layer",
    name: "REST APIs & WebSockets",
    layer: "Gateway & API",
    summary: "Node.js and Express.js endpoints with Firebase Auth and real-time WebSocket channels.",
    relatedProjectSlug: "healthchain",
    connectedTo: ["app-service", "ml-engine"],
  },
  {
    id: "app-service",
    name: "Application Workflows",
    layer: "Core Application",
    summary: "Role-based authorization matrices, checkout workflows, and Razorpay integration.",
    relatedProjectSlug: "feasto",
    connectedTo: ["persistence-layer", "cloud-infra"],
  },
  {
    id: "ml-engine",
    name: "AI & Resume Analysis",
    layer: "ML & Inference",
    summary: "AI-powered resume parsing, candidate scoring, and prompt engineering pipelines.",
    relatedProjectSlug: "far-find-a-role",
    connectedTo: ["persistence-layer"],
  },
  {
    id: "persistence-layer",
    name: "PostgreSQL & Firestore",
    layer: "Persistence & Ledger",
    summary: "Relational records in PostgreSQL alongside real-time document collections in Cloud Firestore.",
    relatedProjectSlug: "healthchain",
    connectedTo: ["cloud-infra"],
  },
  {
    id: "cloud-infra",
    name: "Docker, AWS & Firebase",
    layer: "Cloud & Edge",
    summary: "Cloud deployment on Firebase and AWS with Docker container isolation and Git CI/CD.",
    relatedProjectSlug: "far-find-a-role",
    connectedTo: [],
  },
];
