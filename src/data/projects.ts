export interface Project {
  id: string;
  title: string;
  category: "Web" | "Software" | "Systems";
  description: string;
  problem: string;
  stack: string[];
  year: string;
  href?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "smartlink",
    title: "Smartlink Business Solutions",
    category: "Web",
    year: "2025",
    description:
      "Corporate website for an IT services company, built to present their offerings clearly and generate client inquiries.",
    problem:
      "Smartlink needed a professional web presence that reflected the credibility of their consulting and technical work.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    featured: true,
  },
  {
    id: "student-management",
    title: "Student Management System",
    category: "Software",
    year: "2025",
    description:
      "A role-based platform for managing student records, enrollment, and academic data with secure authentication.",
    problem:
      "Institutions tracking students on paper or spreadsheets needed a single system with proper access control per role.",
    stack: ["Node.js", "Express.js", "MySQL", "EJS", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "restaurant-qr-menu",
    title: "Restaurant QR Code Menu System",
    category: "Systems",
    year: "2025",
    description:
      "A QR-based digital menu that lets diners browse and order from their table, cutting print costs and wait times.",
    problem:
      "Restaurants reprinting menus for every price change needed a live, scannable menu with backend order handling.",
    stack: ["React", "Node.js", "Express.js", "MySQL"],
    featured: true,
  },
];

export const projectCategories: Array<Project["category"] | "All"> = [
  "All",
  "Web",
  "Software",
  "Systems",
];
