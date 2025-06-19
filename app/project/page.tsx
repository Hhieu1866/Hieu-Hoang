"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react"

export default function ProjectPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce SaaS Platform",
      description:
        "A comprehensive e-commerce solution with admin dashboard, payment integration, inventory management, and analytics. Built with modern web technologies for scalability and performance.",
      longDescription:
        "This project showcases a full-stack e-commerce platform that handles everything from product management to order processing. Features include real-time inventory tracking, multiple payment gateways, advanced analytics dashboard, and mobile-responsive design.",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      live: "#",
      status: "Production",
      date: "2024",
      team: "Solo Project",
      features: [
        "Admin Dashboard with Analytics",
        "Payment Gateway Integration",
        "Real-time Inventory Management",
        "Mobile-responsive Design",
        "SEO Optimized",
      ],
    },
    {
      title: "Task Management Application",
      description:
        "Real-time collaborative task management with drag-and-drop functionality, team workspaces, notifications, and project tracking capabilities.",
      longDescription:
        "A comprehensive project management tool that enables teams to collaborate effectively. Features include real-time updates, customizable workflows, time tracking, and detailed reporting.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
      github: "#",
      live: "#",
      status: "Beta",
      date: "2023",
      team: "2 Developers",
      features: [
        "Real-time Collaboration",
        "Drag & Drop Interface",
        "Team Workspaces",
        "Time Tracking",
        "Custom Workflows",
      ],
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, detailed analytics, and historical weather data visualization.",
      longDescription:
        "An advanced weather application that provides comprehensive weather information with beautiful data visualizations. Includes weather maps, historical data analysis, and predictive analytics.",
      tech: ["Vue.js", "Express", "Weather API", "Chart.js", "Mapbox", "Node.js"],
      github: "#",
      live: "#",
      status: "Completed",
      date: "2023",
      team: "Solo Project",
      features: [
        "Interactive Weather Maps",
        "Historical Data Analysis",
        "Location-based Forecasts",
        "Data Visualization",
        "Mobile App",
      ],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Comprehensive social media management platform with analytics, post scheduling, content management, and multi-platform integration.",
      longDescription:
        "A powerful tool for managing multiple social media accounts from one dashboard. Features include content scheduling, engagement analytics, and automated posting.",
      tech: ["React", "Node.js", "MongoDB", "Redis", "Social APIs", "Chart.js"],
      github: "#",
      live: "#",
      status: "Development",
      date: "2024",
      team: "3 Developers",
      features: [
        "Multi-platform Integration",
        "Content Scheduling",
        "Analytics Dashboard",
        "Team Collaboration",
        "Automated Posting",
      ],
    },
  ]

  return (
    <main
      className="min-h-screen font-mono transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      <Navigation />

      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto py-20">
          <div className="mb-12">
            <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${isDark ? "text-white" : "text-black"} font-mono`}>
              <span className={isDark ? "text-green-400" : "text-green-600"}>Project</span>
              <span className={isDark ? "text-green-400" : "text-green-600"}>.</span>
            </h1>
            <p className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg`}>
              // A collection of projects I've built, from concept to deployment
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`${
                  isDark
                    ? "bg-gray-900 border-gray-700 hover:border-green-400"
                    : "bg-white border-gray-300 hover:border-green-600"
                } transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <CardTitle className={`${isDark ? "text-white" : "text-black"} font-mono text-2xl`}>
                          {project.title}
                        </CardTitle>
                        <span
                          className={`px-3 py-1 text-sm font-mono rounded ${
                            project.status === "Production"
                              ? isDark
                                ? "bg-green-900 text-green-400"
                                : "bg-green-100 text-green-700"
                              : project.status === "Beta"
                                ? isDark
                                  ? "bg-yellow-900 text-yellow-400"
                                  : "bg-yellow-100 text-yellow-700"
                                : project.status === "Development"
                                  ? isDark
                                    ? "bg-orange-900 text-orange-400"
                                    : "bg-orange-100 text-orange-700"
                                  : isDark
                                    ? "bg-blue-900 text-blue-400"
                                    : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div
                        className={`flex items-center gap-6 text-sm ${isDark ? "text-white/60" : "text-black/60"} font-mono mb-4`}
                      >
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {project.team}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${
                          isDark
                            ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                            : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        } font-mono`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${
                          isDark
                            ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                            : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        } font-mono`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p
                    className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-base mb-6 leading-relaxed`}
                  >
                    {project.longDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className={`${isDark ? "text-green-400" : "text-green-600"} font-mono text-sm mb-3`}>
                        // Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 ${
                              isDark ? "bg-gray-800 text-white/80" : "bg-gray-200 text-black/80"
                            } font-mono text-sm rounded`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className={`${isDark ? "text-green-400" : "text-green-600"} font-mono text-sm mb-3`}>
                        // Key Features
                      </h4>
                      <ul className={`${isDark ? "text-white/70" : "text-black/70"} font-mono text-sm space-y-1`}>
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Code className="h-3 w-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
