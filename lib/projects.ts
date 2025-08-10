export type ProjectItem = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  status: "Production" | "Beta" | "Completed" | "Development";
  date: string;
  team: string;
};

export const projectList: ProjectItem[] = [
  {
    title: "Eduverse",
    description:
      "An online learning platform built as my graduation project. It allows users to follow learning roadmaps, track progress, and interact with expert-created content. Includes admin dashboard and role-based access.",
    longDescription:
      "This project showcases a full-stack learning platform with role-based access control, course roadmaps, progress tracking, and an admin dashboard. Emphasis on UX and performance, with mobile-first design.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Roadmap-based learning",
      "Role-based access control",
      "Admin dashboard",
      "Progress tracking",
      "Responsive UI",
    ],
    github: "#",
    live: "https://eduverso-tau.vercel.app/",
    status: "Production",
    date: "2024",
    team: "Solo Project",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task management with drag-and-drop, team workspaces, and notifications.",
    longDescription:
      "A collaborative task management tool supporting real-time updates, boards with drag-and-drop, workspace permissions, and activity notifications.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    features: [
      "Real-time collaboration",
      "Drag & drop boards",
      "Team workspaces",
      "Notifications",
      "Reporting",
    ],
    github: "#",
    live: "#",
    status: "Beta",
    date: "2023",
    team: "2 Developers",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather app with location-based forecasts, interactive maps, and detailed analytics.",
    longDescription:
      "An advanced weather application providing forecasts, historical data visualizations, and interactive maps with a clean, accessible UI.",
    tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
    features: [
      "Interactive weather maps",
      "Historical data analysis",
      "Location-based forecasts",
      "Charts & visualizations",
      "Mobile friendly",
    ],
    github: "#",
    live: "#",
    status: "Completed",
    date: "2023",
    team: "Solo Project",
  },
];
