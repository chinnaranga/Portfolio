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
    id: "ml-ai",
    title: "Machine Learning & AI Systems",
    subtitle: "Mathematical modeling, predictive pipelines, and automated inference systems.",
    capabilities: [
      {
        title: "Model Development & Training",
        description: "Supervised and ensemble modeling using gradient-boosted trees and deep neural architectures.",
        technologies: ["Python", "PyTorch", "scikit-learn", "LightGBM", "XGBoost", "TensorFlow"],
        focusAreas: ["Classifier calibration", "Loss optimization", "Imbalanced class sampling", "Hyperparameter tuning"],
      },
      {
        title: "Feature Engineering & Preprocessing",
        description: "Constructing deterministic transformation pipelines for high-cardinality and temporal datasets.",
        technologies: ["Pandas", "NumPy", "Feature Encoders", "Missing Imputers", "StandardScaler"],
        focusAreas: ["Correlation thresholding", "Lag temporal features", "Outlier clipping", "Normalization"],
      },
      {
        title: "Inference & API Serving",
        description: "Packaging trained model weights into low-latency containerized REST prediction endpoints.",
        technologies: ["FastAPI", "Uvicorn", "Docker", "ONNX Runtime", "REST endpoints"],
        focusAreas: ["Sub-50ms inference", "Batch prediction queues", "Model artifact serialization", "Health checks"],
      },
      {
        title: "NLP & Semantic Intelligence",
        description: "Text feature extraction, keyword taxonomy clustering, and semantic matching routines.",
        technologies: ["Hugging Face", "Sentence Transformers", "Vector Embeddings", "NLTK"],
        focusAreas: ["Resume parsing", "Taxonomy mapping", "Cosine similarity ranking", "Semantic retrieval"],
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Software Architecture",
    subtitle: "Scalable, resilient web applications built with modern React primitives and typed backends.",
    capabilities: [
      {
        title: "Modern Frontend Engineering",
        description: "Production-grade interfaces built with React 19, Next.js 16 App Router, and strict TypeScript.",
        technologies: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
        focusAreas: ["Server Components (RSC)", "Zero Layout Shift", "Accessible ARIA patterns", "State machines"],
      },
      {
        title: "Backend & API Design",
        description: "Stateless microservices, secure authentication gates, and predictable RESTful resource contracts.",
        technologies: ["Node.js", "Express", "REST APIs", "JSON-LD", "Server Actions"],
        focusAreas: ["Role-Based Access Control (RBAC)", "Rate limiting", "Input sanitization", "JWT authentication"],
      },
      {
        title: "Data Persistence & State",
        description: "Document and relational database architectures optimized for low-latency indexing.",
        technologies: ["Cloud Firestore", "PostgreSQL", "MySQL", "SQLite", "Firebase Realtime DB"],
        focusAreas: ["Compound indexing", "ACID guarantees", "Offline cache persistence", "Optimistic mutation"],
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Automated delivery pipelines, container isolation, and resilient deployment environments.",
    capabilities: [
      {
        title: "Containerization & Orchestration",
        description: "Reproducible runtime environments isolated via Docker and managed via container services.",
        technologies: ["Docker", "Docker Compose", "Kubernetes", "Container Registries"],
        focusAreas: ["Multi-stage builds", "Minimal attack surfaces", "Process isolation", "Port binding"],
      },
      {
        title: "Cloud Platforms & Edge",
        description: "Deploying multi-region applications across tier-one cloud providers and edge caching layers.",
        technologies: ["AWS", "Google Cloud Platform", "Firebase Hosting", "Vercel", "Cloudflare"],
        focusAreas: ["Edge caching", "Serverless workers", "Object storage", "DNS & SSL configuration"],
      },
      {
        title: "CI/CD & Observability",
        description: "Automated verification pipelines ensuring zero regressions and high release confidence.",
        technologies: ["Git", "GitHub Actions", "Jenkins", "Postman", "Grafana basics"],
        focusAreas: ["Automated type checking", "Lint verification", "Production build assertions", "Audit logs"],
      },
    ],
  },
  {
    id: "healthcare-tech",
    title: "Healthcare Technology & Security",
    subtitle: "Digital health architectures prioritizing cryptographic audit trails and consent governance.",
    capabilities: [
      {
        title: "Clinical Workflow Systems",
        description: "Practitioner interfaces designed for rapid record exploration, medication review, and diagnostic logging.",
        technologies: ["Healthcare Dashboards", "Unique Patient IDs", "EMR Schemas", "Audit Trails"],
        focusAreas: ["Longitudinal patient lookup", "Sub-200ms record retrieval", "Practitioner UI ergonomics"],
      },
      {
        title: "Consent & Verification Protocols",
        description: "Multi-factor verification gates enforcing patient identity validation before clinical decryption.",
        technologies: ["OTP Verification", "Stateless Token Buffers", "Cryptographic Checksums", "SHA-256"],
        focusAreas: ["Tamper-evident logs", "Patient-controlled session grants", "Privacy compartmentalization"],
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
    name: "Client Interfaces",
    layer: "User & Client",
    summary: "Responsive React 19 / Next.js 16 portals for clinicians, candidates, and diners.",
    relatedProjectSlug: "healthchain",
    connectedTo: ["gateway-layer"],
  },
  {
    id: "gateway-layer",
    name: "API & Access Gateway",
    layer: "Gateway & API",
    summary: "Stateless authentication, OTP verification tokens, and role-based privilege checks.",
    relatedProjectSlug: "healthchain",
    connectedTo: ["app-service", "ml-engine"],
  },
  {
    id: "app-service",
    name: "Core Application Logic",
    layer: "Core Application",
    summary: "Business domain orchestration, order state reducers, and job taxonomy pipelines.",
    relatedProjectSlug: "feasto",
    connectedTo: ["persistence-layer", "cloud-infra"],
  },
  {
    id: "ml-engine",
    name: "ML & Inference Engine",
    layer: "ML & Inference",
    summary: "Scoring models, predictive feature extractors, and semantic similarity clusters.",
    relatedProjectSlug: "credit-risk-ml",
    connectedTo: ["persistence-layer"],
  },
  {
    id: "persistence-layer",
    name: "Encrypted Storage & Ledger",
    layer: "Persistence & Ledger",
    summary: "Cloud Firestore collections, relational schemas, and SHA-256 verification hash chains.",
    relatedProjectSlug: "healthchain",
    connectedTo: ["cloud-infra"],
  },
  {
    id: "cloud-infra",
    name: "Cloud & Global Edge",
    layer: "Cloud & Edge",
    summary: "Multi-region CDN edge caching, containerized microservices, and automated CI/CD.",
    relatedProjectSlug: "far-find-a-role",
    connectedTo: [],
  },
];
