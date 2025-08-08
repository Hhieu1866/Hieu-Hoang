"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import TypewriterText from "./TypewriterText";

export function Project() {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Eduverse",
      description:
        "An online learning platform built as my graduation project. It allows users to follow learning roadmaps, track progress, and interact with expert-created content. Includes admin dashboard and role-based access.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB"],
      github: "#",
      live: "https://eduverso-tau.vercel.app/",
      status: "Production",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management with drag-and-drop, team workspaces, and notifications.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      status: "Beta",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with location-based forecasts, interactive maps, and detailed analytics.",
      tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
      github: "#",
      live: "#",
      status: "Completed",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Animated Background Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-green-400/5" : "bg-green-600/5"
          } bg-grid-pattern`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12">
          <TypewriterText
            typedText="Projects."
            isDark={isDark}
            isVisible={isVisible}
          />

          <p
            className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            // Here are some projects I've built
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`${
                isDark
                  ? "border-gray-700 bg-gray-900 hover:border-green-400"
                  : "border-gray-300 bg-white hover:border-green-600"
              } group transform transition-all duration-500 hover:rotate-1 hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <CardTitle
                    className={`${
                      isDark ? "text-white" : "text-black"
                    } font-mono text-lg transition-colors group-hover:text-green-400`}
                  >
                    {project.title}
                  </CardTitle>
                  <span
                    className={`rounded px-2 py-1 font-mono text-xs transition-all duration-300 group-hover:scale-110 ${
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
                  } mb-4 font-mono text-sm leading-relaxed transition-colors group-hover:text-white/90`}
                >
                  {project.description}
                </p>

                <div className="mb-4">
                  <div
                    className={`${isDark ? "text-green-400" : "text-green-600"} mb-2 font-mono text-sm`}
                  >
                    // Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 ${
                          isDark
                            ? "bg-gray-800 text-white/80"
                            : "bg-gray-200 text-black/80"
                        } transform rounded font-mono text-xs transition-all duration-300 hover:rotate-3 hover:scale-110`}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={`${
                      isDark
                        ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                        : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    } transform font-mono transition-all duration-300 hover:scale-105`}
                    disabled={project.github === "#"}
                  >
                    <a
                      href={project.github !== "#" ? project.github : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={project.github === "#" ? -1 : 0}
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={`${
                      isDark
                        ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    } transform font-mono transition-all duration-300 hover:scale-105`}
                    disabled={project.live === "#"}
                  >
                    <a
                      href={project.live !== "#" ? project.live : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={project.live === "#" ? -1 : 0}
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
