export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  socials: {
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
    email: string;
  };
  status: {
    indicator: "active" | "building" | "learning";
    label: string;
    currentFocus: string;
    stack: string[];
    availability: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description: string;
    coursework: { name: string; focus: string }[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Ravipati Chinna Rangaswamy Reddy",
  shortName: "Ranga",
  tagline: "Machine Learning Engineer · Full-Stack Developer · Healthcare Tech Builder",
  headline: "Building intelligent software systems & production platforms at scale.",
  subheadline:
    "I build intelligent software systems and production-ready digital products across AI, full-stack engineering, and healthcare technology.",
  location: "Hyderabad, India",
  email: "ravipatichinnarangaswamyreddy@gmail.com",
  socials: {
    github: "https://github.com/chinnaranga",
    githubHandle: "chinnaranga",
    linkedin: "https://www.linkedin.com/in/r-chinna-ranga-swamy-reddy-b371272b9/",
    linkedinHandle: "r-chinna-ranga-swamy-reddy",
    email: "mailto:ravipatichinnarangaswamyreddy@gmail.com",
  },
  status: {
    indicator: "active",
    label: "CURRENT STATUS",
    currentFocus: "Architecting decentralized healthcare workflows & clinical intelligence",
    stack: ["NEXT.JS 16", "PYTHON", "FASTAPI", "PYTORCH", "FIRESTORE", "DOCKER"],
    availability: "Open to software engineering / ML opportunities",
  },
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Systems", href: "#systems" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  education: {
    degree: "B.E. in Computer Science and Engineering",
    institution: "Woxsen University",
    location: "Hyderabad, India",
    period: "2023 – 2027",
    description:
      "Core focus on machine learning systems, algorithmic optimization, distributed architecture, and data engineering foundations.",
    coursework: [
      {
        name: "Machine Learning",
        focus: "Supervised & unsupervised models, gradient optimization, loss landscapes, evaluation matrices",
      },
      {
        name: "Data Structures & Algorithms",
        focus: "Graph algorithms, dynamic programming, asymptotic complexity analysis, memory cache locality",
      },
      {
        name: "Computer Vision",
        focus: "CNN feature extractors, spatial convolutions, image transformations, detection pipelines",
      },
      {
        name: "Distributed & Big Data Systems",
        focus: "MapReduce paradigms, partition schemes, scale-out storage, stateless microservices",
      },
      {
        name: "Database Management Systems",
        focus: "Relational indexing (B-Trees), ACID guarantees, NoSQL document modeling, concurrency controls",
      },
    ],
  },
};
