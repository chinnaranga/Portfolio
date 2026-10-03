export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
    email: string;
    portfolio: string;
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
    cgpa: string;
    description: string;
    coursework: string[];
  };
  certifications: {
    title: string;
    issuer: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Ravipati Chinna Rangaswamy Reddy",
  shortName: "Ranga",
  tagline: "Machine Learning Engineer · Full-Stack Developer · Healthcare Tech Builder",
  headline: "Building responsive, intelligent web applications and scalable software systems.",
  subheadline:
    "Computer Science undergraduate at Woxsen University with hands-on experience building responsive and scalable web applications using JavaScript, React.js, Node.js, Firebase, REST APIs, and machine learning pipelines.",
  location: "Hyderabad, India",
  email: "ravipatichinnarangaswamyreddy@gmail.com",
  phone: "(+91) 7702484883",
  socials: {
    github: "https://github.com/chinnaranga",
    githubHandle: "chinnaranga",
    linkedin: "https://www.linkedin.com/in/r-chinna-ranga-swamy-reddy-b371272b9/",
    linkedinHandle: "r-chinna-ranga-swamy-reddy",
    email: "mailto:ravipatichinnarangaswamyreddy@gmail.com",
    portfolio: "https://ravipatichinna.com",
  },
  status: {
    indicator: "active",
    label: "CURRENT STATUS",
    currentFocus: "Engineering role-based healthcare workflows & AI career platforms",
    stack: ["REACT.JS", "NODE.JS", "PYTHON", "FIREBASE", "POSTGRESQL", "REST APIS"],
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
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Woxsen University",
    location: "Hyderabad, India",
    period: "Aug 2023 – Apr 2027",
    cgpa: "7.8/10",
    description:
      "Rigorous computer science curriculum with deep foundations in data structures, algorithms, object-oriented programming, database management systems, operating systems, and computer networks.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  certifications: [
    { title: "Prompt Engineering", issuer: "OpenAI" },
    { title: "Python for Data Science", issuer: "IBM" },
    { title: "Python Essentials 1", issuer: "Cisco Networking Academy" },
    { title: "Network Security & Database Vulnerabilities", issuer: "Coursera" },
  ],
};
