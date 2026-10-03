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
  category: ("AI / ML" | "Full Stack" | "Healthcare" | "Experiments")[];
  featured: boolean;
  status: "Live Product" | "Active R&D" | "Validated Model" | "Research Prototype" | "In Development";
  tagline: string;
  summary: string;
  overview: string[];
  problem: string;
  solution: string;
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
    title: "HealthChain — Healthcare Infrastructure Platform",
    shortTitle: "HealthChain",
    subtitle: "Decentralized Clinical Access & Tamper-Evident Patient Records",
    category: ["Healthcare", "Full Stack"],
    featured: true,
    status: "Live Product",
    tagline: "Bridging clinical workflows with tamper-evident record verification and patient identity governance.",
    summary:
      "A full-stack healthcare ecosystem engineered for real-time clinician dashboards, decentralized patient record lookup, and secure OTP-verified access control.",
    overview: [
      "HealthChain addresses the vulnerability of fragmented electronic medical records (EMR) across clinics and hospitals. The system implements a unified Patient Identifier protocol paired with cryptographic hash integrity to prevent record tampering.",
      "Clinicians gain authorized read/write access to longitudinal patient histories with sub-second retrieval times, while patients retain granular consent controls through OTP-validated session grants.",
      "Built with a reactive Next.js 16 frontend, stateless token authorization, and Firestore multi-region clusters to ensure high availability and resilient audit logging.",
    ],
    problem:
      "Healthcare practitioners frequently encounter fragmented medical data silos where critical historical diagnostics, allergy matrices, and prescriptions are inaccessible during emergencies. Traditional centralized portals are vulnerable to silent data modifications and lack explicit patient verification protocols.",
    solution:
      "Engineered a zero-trust clinical architecture with a cryptographic record log, multi-factor OTP verification for patient records, and isolated practitioner portals. Clinical actions generate immutable audit signatures, ensuring compliance and diagnosis transparency.",
    architectureNodes: [
      { name: "Clinician / Patient Client", type: "client", description: "Next.js 16 SPA with role-based viewports" },
      { name: "Access Gateway", type: "gateway", description: "Stateless JWT token buffer & OTP validation" },
      { name: "Clinical Service", type: "service", description: "Structured EMR pipeline & audit dispatcher" },
      { name: "Verification Ledger", type: "ml", description: "SHA-256 record integrity checksum generator" },
      { name: "Cloud Firestore", type: "storage", description: "Encrypted patient collection with security rules" },
    ],
    architectureSummary:
      "Client requests transit through a stateless verification buffer that confirms practitioner role privileges and valid OTP consent tokens. Medical records are serialized with SHA-256 hash checks before persistent storage, creating an audit chain for longitudinal review.",
    technologies: ["React 19", "Next.js 16", "TypeScript", "Firebase Auth", "Cloud Firestore", "Tailwind CSS", "Web Crypto API"],
    engineeringDecisions: [
      {
        decision: "Stateless Session Tokens over Sticky Server Sessions",
        rationale: "Guarantees zero-downtime scaling when multiple clinical staff simultaneously query patient logs during peak hospital hours.",
        tradeoff: "Requires short-lived tokens and rapid re-verification against revocation lists.",
      },
      {
        decision: "Granular Field-Level Firestore Security Rules",
        rationale: "Prevents clinical staff from reading unauthorized personal identifying information (PII) beyond diagnostic history.",
        tradeoff: "More complex query patterns requiring compound indexes.",
      },
    ],
    securityConsiderations: [
      "Strict separation of Patient PII from clinical diagnostic logs.",
      "Multi-factor OTP challenge required before decrypting historical consultation records.",
      "Client-side verification of document checksums to detect data corruption or unauthorized mutation.",
      "Strict Content Security Policy (CSP) and zero third-party telemetry on medical views.",
    ],
    challenges: [
      "Optimizing complex multi-record join queries within NoSQL document constraints while maintaining sub-300ms UI render times.",
      "Designing an intuitive clinical emergency override flow without compromising privacy guarantees.",
    ],
    outcomes: [
      "Successfully deployed and operating live on Firebase infrastructure.",
      "Achieved sub-200ms record retrieval latency across standard broadband connections.",
      "Established verified OTP handshake flow tested across clinical consultation scenarios.",
    ],
    liveUrl: "https://healthcare-edb75.web.app/",
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Architecture", value: "Role-Based EMR" },
      { label: "Verification", value: "OTP + Cryptographic" },
      { label: "Deployment", value: "Firebase Cloud" },
    ],
    nextSlug: "far-find-a-role",
  },
  {
    slug: "far-find-a-role",
    title: "FAR — Find a Role (AI Career Platform)",
    shortTitle: "Find a Role",
    subtitle: "AI-Powered Talent Matching & Automated Career Intelligence",
    category: ["AI / ML", "Full Stack"],
    featured: true,
    status: "Live Product",
    tagline: "High-performance career discovery platform connecting engineers with verified opportunities through intelligent filtering.",
    summary:
      "An automated career discovery and application hub featuring semantic skill parsing, multi-attribute role indexing, and modern interactive dashboards.",
    overview: [
      "FAR eliminates traditional recruitment friction by categorizing job opportunities by technical domain, stack depth, and real eligibility criteria rather than opaque keyword tags.",
      "Constructed using Next.js and high-efficiency indexing, enabling candidates to filter through hundreds of verified roles with near-instantaneous feedback.",
      "Engineered with clean responsive cards, deep mobile compatibility, and state synchronization across search parameters.",
    ],
    problem:
      "Early-career software engineers and students waste hundreds of hours navigating bloated recruitment portals plagued with stale job listings, irrelevant keyword matching, and unresponsive mobile experiences.",
    solution:
      "Created a lean, high-velocity talent matching platform with categorized engineering verticals, verified application pathways, and low-latency client-side search indexing.",
    architectureNodes: [
      { name: "Candidate UI", type: "client", description: "Mobile-first responsive search & filter matrix" },
      { name: "Search & Filter Engine", type: "service", description: "Multi-dimensional attribute filter pipeline" },
      { name: "Semantic Parser", type: "ml", description: "Skill clustering and role taxonomy analyzer" },
      { name: "Real-time Database", type: "storage", description: "Indexed job documents and user bookmark store" },
      { name: "Cloud Edge CDN", type: "infra", description: "Global edge caching for instantaneous asset delivery" },
    ],
    architectureSummary:
      "Candidate search inputs trigger cached index evaluation at the edge. The role taxonomy maps raw requirements to standard competency vectors, delivering instant filtered views with zero unnecessary database queries.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Algorithmic Filtering", "Edge Caching"],
    engineeringDecisions: [
      {
        decision: "Client-Side In-Memory Search Indexing for Active Results",
        rationale: "Delivers sub-15ms interactive filtering experience without network hops on every keystroke.",
        tradeoff: "Requires efficient index serialization to keep initial payload under 50KB.",
      },
      {
        decision: "Optimistic Bookmarking UI State",
        rationale: "Ensures immediate tactile response when users save or track application deadlines.",
        tradeoff: "Needs rollback logic if remote sync fails.",
      },
    ],
    securityConsiderations: [
      "Sanitized candidate input to prevent XSS in query parameters.",
      "Rate-limited application link dispatchers to prevent scraping bots from abusing job source APIs.",
    ],
    challenges: [
      "Designing responsive filter drawers that remain effortless to manipulate on narrow 360px mobile viewports.",
      "Structuring job schema models to support diverse engineering disciplines without sparse attribute explosion.",
    ],
    outcomes: [
      "Live production deployment serving active candidate searches at farfindarole.com.",
      "Sub-50ms search query response times across multi-tag combinations.",
      "Mobile-friendly navigation resulting in high return-visitor engagement.",
    ],
    liveUrl: "https://farfindarole.com/",
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Platform", value: "Career Discovery" },
      { label: "Latency", value: "< 50ms Edge Filter" },
      { label: "Status", value: "Production Active" },
    ],
    nextSlug: "feasto",
  },
  {
    slug: "feasto",
    title: "Feasto — Full-Stack Commerce & Dining System",
    shortTitle: "Feasto",
    subtitle: "High-Performance Hospitality Tech & Real-Time Menu Orchestration",
    category: ["Full Stack"],
    featured: true,
    status: "Live Product",
    tagline: "Modern dining and restaurant exploration platform optimized for zero-latency mobile menus and ordering flows.",
    summary:
      "A full-stack dining platform providing digital storefronts, synchronized cart states, and rich culinary media optimization for modern restaurants.",
    overview: [
      "Feasto was designed to address sluggish digital menus and clunky checkout pipelines in hospitality tech. By leveraging modern React primitives and SSR caching, pages load in under 1 second.",
      "Features dynamic category switching, live order calculations, responsive layout transitions, and high-fidelity product imagery.",
      "Built with scalable component architecture and modular design tokens, making it straightforward to re-skin for distinct culinary brands.",
    ],
    problem:
      "Restaurant digital menus often fail during peak dining hours due to heavy unoptimized images, slow JavaScript bundles, and state loss when users switch between dietary categories.",
    solution:
      "Engineered an ultra-lean digital menu system with progressive image hydration, local state preservation, and zero-runtime CSS layouts that perform smoothly even on spotty mobile data connections.",
    architectureNodes: [
      { name: "Customer Client", type: "client", description: "Progressive mobile web application with instant cart" },
      { name: "Catalog SSR Server", type: "service", description: "Next.js edge renderer with stale-while-revalidate" },
      { name: "Order State Machine", type: "service", description: "Deterministic cart and discount calculator" },
      { name: "Menu Store", type: "storage", description: "Document store for items, variants, and addons" },
      { name: "Global CDN", type: "infra", description: "Image optimization pipeline for high-DPI retina screens" },
    ],
    architectureSummary:
      "Menu catalogs are statically pre-rendered and updated using on-demand revalidation. Cart actions operate through a deterministic client state reducer, allowing seamless offline-to-online transitions.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "State Reducers", "Web Vitals Optimization"],
    engineeringDecisions: [
      {
        decision: "Zero-Layout-Shift Image Sizing Containers",
        rationale: "Eliminates frustrating content jumps when scrolling through high-resolution dish photos on mobile.",
        tradeoff: "Requires fixed aspect ratio specifications in data models.",
      },
      {
        decision: "Local Storage Cart Hydration",
        rationale: "Prevents accidental order loss when a patron switches apps or answers a call.",
        tradeoff: "Requires schema versioning to handle price or menu updates.",
      },
    ],
    securityConsiderations: [
      "Validation of cart line-items and totals against authoritative server price lists.",
      "Sanitized order payloads preventing prototype pollution during checkout payload dispatch.",
    ],
    challenges: [
      "Balancing rich photography with strict Core Web Vitals (LCP < 1.2s) on throttled 4G mobile networks.",
      "Handling complex item variants (spice levels, portion sizes, add-ons) with clean state representation.",
    ],
    outcomes: [
      "Live production deployment running at feasto.food.",
      "Achieved 95+ Google Lighthouse mobile performance score.",
      "Zero layout shift (CLS = 0) during fast catalog scrolling.",
    ],
    liveUrl: "https://feasto.food/",
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Core Web Vitals", value: "95+ Lighthouse" },
      { label: "Layout Shift", value: "0.0 CLS" },
      { label: "Architecture", value: "SSR + SWR" },
    ],
    nextSlug: "healthchain",
  },
  {
    slug: "credit-risk-ml",
    title: "Credit Risk & Financial Default Prediction Pipeline",
    shortTitle: "Credit Risk ML",
    subtitle: "Automated Supervised Learning Pipeline for Credit Risk Scoring",
    category: ["AI / ML"],
    featured: false,
    status: "Validated Model",
    tagline: "Feature-engineered machine learning classifier evaluating multi-variable loan default probabilities.",
    summary:
      "An end-to-end data science pipeline built with Python, scikit-learn, and ensemble trees to forecast borrower default likelihood with high precision.",
    overview: [
      "Developed as part of extensive industrial fintech research to explore model interpretability in credit scoring.",
      "Implements rigorous exploratory data analysis (EDA), missing value imputation using median/mode strategies, outlier clipping, and correlation matrix pruning.",
      "Trained Random Forest and Gradient Boosted models, fine-tuning hyperparameter grids to minimize False Negative rates.",
    ],
    problem:
      "Conventional credit approval heuristics either reject viable borrowers or fail to capture nonlinear correlations across debt-to-income and employment duration factors.",
    solution:
      "Built an ensemble model pipeline incorporating automated scaling, categorical encoding, and cross-validated threshold calibration for financial risk assessment.",
    architectureNodes: [
      { name: "Raw Data Ingestion", type: "storage", description: "Multi-variable financial applicant dataset" },
      { name: "Pre-processing Pipeline", type: "service", description: "Imputation, robust scaling, One-Hot encoding" },
      { name: "Feature Selection", type: "ml", description: "Correlation thresholding & recursive feature elimination" },
      { name: "Ensemble Classifier", type: "ml", description: "Random Forest & XGBoost with grid search tuning" },
      { name: "Evaluation & Metric Export", type: "client", description: "Confusion matrix, ROC-AUC curve & SHAP values" },
    ],
    architectureSummary:
      "Data passes through scikit-learn pipeline transformers before feeding into tuned tree ensembles. Predictions output continuous risk probability scores alongside classification labels.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Seaborn"],
    engineeringDecisions: [
      {
        decision: "Prioritizing Recall on Default Class over Raw Accuracy",
        rationale: "In credit scoring, False Negatives (approving a defaulting loan) carry dramatically higher financial loss than False Positives.",
        tradeoff: "Slight reduction in overall precision for conservative risk safety.",
      },
    ],
    securityConsiderations: [
      "De-identification of personal applicant records before model training.",
      "Fairness auditing to prevent proxy bias across demographic attributes.",
    ],
    challenges: [
      "Handling severe class imbalance between successful repayments and defaults without causing model overfitting.",
    ],
    outcomes: [
      "Achieved 82% validation accuracy with an ROC-AUC score of 0.86.",
      "Created modular scikit-learn preprocessing classes reusable across tabular prediction tasks.",
    ],
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Accuracy", value: "82% Test Split" },
      { label: "ROC-AUC", value: "0.86 Score" },
      { label: "Core Model", value: "Random Forest" },
    ],
    nextSlug: "traffic-flow-prediction",
  },
  {
    slug: "traffic-flow-prediction",
    title: "Hyderabad Urban Traffic Density Predictor",
    shortTitle: "Traffic Predictor",
    subtitle: "Spatiotemporal Congestion Modeling for Urban Corridors",
    category: ["AI / ML", "Experiments"],
    featured: false,
    status: "Research Prototype",
    tagline: "Time-series forecasting prototype exploring congestion bottlenecks across Hyderabad arterial transit nodes.",
    summary:
      "An exploratory intelligence system designed to model vehicle density fluctuations and forecast peak congestion intervals across key urban intersections.",
    overview: [
      "Explores spatiotemporal traffic telemetry to understand how peak hours and intersection bottlenecks propagate across adjacent arterial corridors.",
      "Applies moving average convolutions, lag feature engineering, and recurrent architectures to model transit flow.",
    ],
    problem:
      "Urban traffic management centers rely on reactive camera inspection rather than predictive warning signals, leading to gridlock during unexpected transit spikes.",
    solution:
      "Developed a predictive pipeline that analyzes historical traffic speed patterns to forecast intersection load 30 to 60 minutes in advance.",
    architectureNodes: [
      { name: "Traffic Log Importer", type: "storage", description: "Sensor telemetry and timestamped speed records" },
      { name: "Time-Series Transformer", type: "service", description: "Rolling-window feature creation and seasonal lag" },
      { name: "Forecasting Model", type: "ml", description: "LightGBM regressor with spatial adjacency weights" },
      { name: "Congestion Heatmap UI", type: "client", description: "Leaflet geo-coordinate density visualizer" },
    ],
    architectureSummary:
      "Sensor readings are resampled into 15-minute time windows, enriched with cyclical temporal features, and passed to a gradient-boosted regressor that outputs congestion probability vectors.",
    technologies: ["Python", "PyTorch", "Pandas", "LightGBM", "Leaflet", "GeoJSON"],
    engineeringDecisions: [
      {
        decision: "Gradient Boosted Trees over Heavy Deep LSTMs for Tabular Sensor Inputs",
        rationale: "LightGBM delivered faster training iteration cycles and superior handling of missing sensor telemetry points.",
        tradeoff: "Required manual spatial coordinate lag feature creation.",
      },
    ],
    securityConsiderations: [
      "Aggregation of sensor data to eliminate vehicle identification tracking.",
    ],
    challenges: [
      "Handling erratic sensor dropouts during extreme weather and irregular holiday transit variations.",
    ],
    outcomes: [
      "Successfully modeled predictive delay indicators on simulated arterial corridor datasets.",
      "Published reproducible Jupyter analysis workflows for urban density evaluation.",
    ],
    githubUrl: "https://github.com/chinnaranga",
    metrics: [
      { label: "Forecast Window", value: "30-60 Mins" },
      { label: "Model", value: "LightGBM Regressor" },
      { label: "Domain", value: "Smart City" },
    ],
    nextSlug: "healthchain",
  },
];
