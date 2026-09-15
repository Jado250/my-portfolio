export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    description:
      "Reliable remote support for email and calendar management, research, lead generation, data entry, documents, customer communication, and administrative workflows.",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Responsive, fast-loading websites and web apps built with modern frameworks, from marketing sites to full client portals.",
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Custom internal tools and business software that automate manual processes and replace spreadsheets with real systems.",
  },
  {
    id: "it-support",
    title: "IT Support",
    description:
      "Hands-on troubleshooting, setup, and maintenance for networks, workstations, and small-business IT environments.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Campaign setup, content direction, and online growth support to help businesses reach the right customers with measurable impact.",
  },
];
