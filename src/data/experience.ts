export interface ExperienceEntry {
  id: string;
  period: string;
  title: string;
  org: string;
  type: "education" | "work";
  description: string;
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "iprc",
    period: "2023 — Present",
    title: "Information Technology Student, A1",
    org: "IPRC",
    type: "education",
    description:
      "Studying Information Technology with focus on software engineering, networking, and database systems.",
    tags: ["Networking", "Databases", "Software Engineering"],
  },
  {
    id: "restaurant-qr",
    period: "2025",
    title: "Restaurant QR Code Menu System",
    org: "Independent Project",
    type: "work",
    description:
      "Designed and built a full ordering flow — customer menu, kitchen queue, and admin dashboard — on React, Node.js, Express.js, and MySQL.",
    tags: ["Full-Stack Development", "REST API Development", "UI/UX Design"],
  },
  {
    id: "student-mgmt",
    title: "Student Management System",
    period: "2025",
    org: "Independent Project",
    type: "work",
    description:
      "Built a role-based academic records system with authentication, protected routes, and a relational MySQL schema.",
    tags: ["Software Development", "Database Design", "Authentication"],
  },
  {
    id: "smartlink-site",
    period: "2025",
    title: "Smartlink Business Solutions Website",
    org: "Client Project",
    type: "work",
    description:
      "Delivered a corporate website in React for Smartlink Business Solutions Ltd, aligned to their brand and service offering.",
    tags: ["Web Development", "IT Consulting"],
  },
];
