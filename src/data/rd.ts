export interface RDItem {
  id: string;
  title: string;
  codename: string;
  description: string;
  status: "Concept" | "Prototype" | "In Development" | "Live";
  statusColor: string;
  progressPercent: number;
  researchAreas: string[];
  technologies: string[];
  currentMilestone: string;
  architectureHighlight: string;
}

export const rdInitiatives: RDItem[] = [
  {
    id: "clinical-intelligence",
    title: "Clinical Workflow & Diagnostic Intelligence",
    codename: "MED-CORE / R&D",
    description:
      "Automating structured medical record extraction, longitudinal timeline aggregation, and consent-gated clinical verification protocols for healthcare networks.",
    status: "In Development",
    statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    progressPercent: 65,
    researchAreas: [
      "Consent-first medical record exchange",
      "Sub-200ms clinician query lookup",
      "Tamper-evident verification hash trees",
      "Doctor-patient session authorization matrices",
    ],
    technologies: ["Next.js 16", "Python", "FastAPI", "Cloud Firestore", "Web Crypto", "Docker"],
    currentMilestone: "Implementing automated OTP verification handshake with structured audit log dispatcher.",
    architectureHighlight: "Encrypted EMR schemas with client-side hash integrity verification before disk persistence.",
  },
  {
    id: "ai-agent-infra",
    title: "Autonomous Pipeline & Code Reasoning Agent",
    codename: "AUTO-PIPELINE / R&D",
    description:
      "Constructing resilient autonomous workers to inspect git diffs, evaluate security rules against CWE databases, and synthesize localized architectural documentation.",
    status: "Prototype",
    statusColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    progressPercent: 40,
    researchAreas: [
      "LLM code-path tree inspection",
      "Deterministic tool validation gates",
      "Multi-agent task decomposition",
      "Automated documentation generation",
    ],
    technologies: ["Python", "FastAPI", "OpenAI / Claude API", "Docker", "Git CLI hooks"],
    currentMilestone: "Validating AST parser token extraction for automated commit diff summarization.",
    architectureHighlight: "Multi-step tool runner executing sandboxed lint scripts and diff assertions.",
  },
  {
    id: "spatiotemporal-transit",
    title: "Spatiotemporal Urban Traffic Modeling",
    codename: "TRANSIT-ML / R&D",
    description:
      "Investigating predictive bottleneck propagation across Hyderabad arterial transit nodes using lag-engineered gradient boosted trees.",
    status: "Prototype",
    statusColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    progressPercent: 50,
    researchAreas: [
      "Spatial lag matrices",
      "Sensor dropout recovery heuristics",
      "Time-window rolling aggregation",
    ],
    technologies: ["Python", "LightGBM", "PyTorch", "GeoPandas", "Leaflet"],
    currentMilestone: "Refining rolling-window temporal convolutions to capture transit holiday anomaly shifts.",
    architectureHighlight: "Hybrid feature pipeline transforming spatial adjacency coordinates into dense regression inputs.",
  },
];
