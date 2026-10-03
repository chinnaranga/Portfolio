export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  contributions: string[];
  technologies: string[];
  outcomes?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Frontend & Full-Stack Developer",
    organization: "Product Builds & Client Contracts",
    location: "Hyderabad, India / Remote",
    period: "Jun 2025 – Present",
    startDate: "Jun 2025",
    endDate: "Present",
    contributions: [
      "Architected reactive single-page applications with Next.js 16 and TypeScript, structuring modular component systems to eliminate code duplication.",
      "Integrated stateless authentication handshakes with Cloud Firestore security rules, establishing granular role-based access for clinical and career dashboards.",
      "Engineered optimistic UI mutation patterns and local state caching, keeping cumulative layout shift (CLS) at 0.0 across mobile touch screens.",
      "Designed responsive navigation drawers, keyboard-accessible dialogs, and color token systems meeting WCAG AA contrast standards.",
    ],
    technologies: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "REST APIs"],
    outcomes: [
      "Delivered production deployments for HealthChain, FarFindARole, and Feasto.",
      "Achieved sub-200ms client state transitions across tested desktop and mobile viewports.",
    ],
  },
  {
    role: "Machine Learning & Data Science Engineer",
    organization: "Applied Predictive ML Projects",
    location: "Hyderabad, India",
    period: "Aug 2025 – Nov 2025",
    startDate: "Aug 2025",
    endDate: "Nov 2025",
    contributions: [
      "Engineered and evaluated supervised ensemble pipelines (Random Forest, LightGBM, XGBoost) to model multidimensional credit risk probabilities.",
      "Developed automated preprocessing routines utilizing missing-value median imputation, outlier clipping, and categorical One-Hot transformation.",
      "Calibrated classification probability thresholds to minimize False Negative default risk, reaching 82% validation accuracy with an 0.86 ROC-AUC score.",
      "Structured reproducible training scripts with cross-validation splits and feature importance ranking to evaluate model generalization.",
    ],
    technologies: ["Python", "scikit-learn", "LightGBM", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
    outcomes: [
      "Engineered reusable scikit-learn preprocessing classes deployed in multiple tabular experiment benchmarks.",
      "Eliminated multicollinear features, reducing training iteration cycles by 35%.",
    ],
  },
];
