"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react";
import { projectList } from "@/lib/projects";

export default function ProjectPage() {
  const [isDark, setIsDark] = useState(true);

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

  return (
    <main
      className="min-h-screen font-mono transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      <Navigation />

      <div className="px-4 pt-20">
        <div className="mx-auto max-w-6xl py-20">
          <div className="mb-12">
            <h1
              className={`mb-8 text-4xl font-bold md:text-6xl ${isDark ? "text-white" : "text-black"} font-mono`}
            >
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                Project
              </span>
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                .
              </span>
            </h1>
            <p
              className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg`}
            >
              // A collection of projects I've built, from concept to deployment
            </p>
          </div>

          <div className="space-y-8">
            {projectList.map((project) => (
              <Card
                key={project.title}
                className={`${
                  isDark
                    ? "border-gray-700 bg-gray-900 hover:border-green-400"
                    : "border-gray-300 bg-white hover:border-green-600"
                } transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-4">
                        <CardTitle
                          className={`${isDark ? "text-white" : "text-black"} font-mono text-2xl`}
                        >
                          {project.title}
                        </CardTitle>
                        <span
                          className={`rounded px-3 py-1 font-mono text-sm ${
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
                        className={`flex items-center gap-6 text-sm ${isDark ? "text-white/60" : "text-black/60"} mb-4 font-mono`}
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
                        disabled={project.github === "#"}
                      >
                        <Github className="mr-2 h-4 w-4" />
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
                        disabled={project.live === "#"}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p
                    className={`${isDark ? "text-white/80" : "text-black/80"} mb-6 font-mono text-base leading-relaxed`}
                  >
                    {project.longDescription}
                  </p>

                  <div className="mb-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4
                        className={`${isDark ? "text-green-400" : "text-green-600"} mb-3 font-mono text-sm`}
                      >
                        // Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 ${
                              isDark
                                ? "bg-gray-800 text-white/80"
                                : "bg-gray-200 text-black/80"
                            } rounded font-mono text-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4
                        className={`${isDark ? "text-green-400" : "text-green-600"} mb-3 font-mono text-sm`}
                      >
                        // Key Features
                      </h4>
                      <ul
                        className={`${isDark ? "text-white/70" : "text-black/70"} space-y-1 font-mono text-sm`}
                      >
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
  );
}
