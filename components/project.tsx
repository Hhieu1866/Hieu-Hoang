"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Project() {
  const [isDark, setIsDark] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce SaaS",
      description:
        "A full-stack e-commerce platform with admin dashboard, payment integration, and inventory management.",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      github: "#",
      live: "#",
      status: "Production",
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management with drag-and-drop, team workspaces, and notifications.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      status: "Beta",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and detailed analytics.",
      tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
      github: "#",
      live: "#",
      status: "Completed",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="project"
      className="py-20 px-4 transition-colors duration-300 relative"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-green-400/5" : "bg-green-600/5"
          } bg-grid-pattern animate-grid-move`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? "text-white" : "text-black"} font-mono ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <span className={isDark ? "text-green-400" : "text-green-600"}>Project</span>
            <span className={isDark ? "text-green-400" : "text-green-600"}>.</span>
          </h2>
          <p
            className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            // Here are some projects I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`${
                isDark
                  ? "bg-gray-900 border-gray-700 hover:border-green-400"
                  : "bg-white border-gray-300 hover:border-green-600"
              } transition-all duration-500 transform hover:scale-105 hover:rotate-1 group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle
                    className={`${
                      isDark ? "text-white" : "text-black"
                    } font-mono text-lg group-hover:text-green-400 transition-colors`}
                  >
                    {project.title}
                  </CardTitle>
                  <span
                    className={`px-2 py-1 text-xs font-mono rounded transition-all duration-300 group-hover:scale-110 ${
                      project.status === "Production"
                        ? isDark
                          ? "bg-green-900 text-green-400"
                          : "bg-green-100 text-green-700"
                        : project.status === "Beta"
                          ? isDark
                            ? "bg-yellow-900 text-yellow-400"
                            : "bg-yellow-100 text-yellow-700"
                          : isDark
                            ? "bg-blue-900 text-blue-400"
                            : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p
                  className={`${
                    isDark ? "text-white/70" : "text-black/70"
                  } font-mono text-sm mb-4 leading-relaxed group-hover:text-white/90 transition-colors`}
                >
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className={`${isDark ? "text-green-400" : "text-green-600"} font-mono text-sm mb-2`}>
                    // Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 ${
                          isDark ? "bg-gray-800 text-white/80" : "bg-gray-200 text-black/80"
                        } font-mono text-xs rounded transform transition-all duration-300 hover:scale-110 hover:rotate-3`}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      isDark
                        ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                        : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    } font-mono transform transition-all duration-300 hover:scale-105`}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      isDark
                        ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    } font-mono transform transition-all duration-300 hover:scale-105`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
