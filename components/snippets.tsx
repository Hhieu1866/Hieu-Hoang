"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink } from "lucide-react"

export function Snippets() {
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

  const snippets = [
    {
      title: "Custom React Hook - useLocalStorage",
      description: "A reusable hook for managing localStorage with TypeScript support",
      language: "TypeScript",
      code: `const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue] as const;
};`,
      tags: ["React", "TypeScript", "Hooks"],
    },
    {
      title: "Debounce Function",
      description: "Utility function to debounce API calls and improve performance",
      language: "JavaScript",
      code: `const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Usage
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);`,
      tags: ["JavaScript", "Performance", "Utility"],
    },
    {
      title: "CSS Grid Auto-Fit Layout",
      description: "Responsive grid layout that automatically adjusts columns",
      language: "CSS",
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.grid-item {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
      tags: ["CSS", "Grid", "Responsive"],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="snippets"
      className="py-20 px-4 transition-colors duration-300 relative"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 right-10 ${
            isDark ? "text-purple-400/10" : "text-purple-600/10"
          } font-mono text-6xl animate-spin-slow`}
        >
          {"</>"}
        </div>
        <div
          className={`absolute bottom-20 left-10 ${
            isDark ? "text-blue-400/10" : "text-blue-600/10"
          } font-mono text-4xl animate-bounce-slow`}
        >
          {"{}"}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? "text-white" : "text-black"} font-mono ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <span className={isDark ? "text-green-400" : "text-green-600"}>Snippets</span>
            <span className={isDark ? "text-green-400" : "text-green-600"}>.</span>
          </h2>
          <p
            className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            // Useful code snippets and utilities I've created
          </p>
        </div>

        <div className="space-y-6">
          {snippets.map((snippet, index) => (
            <Card
              key={snippet.title}
              className={`${
                isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
              } transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl group ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.3}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle
                      className={`${
                        isDark ? "text-white" : "text-black"
                      } font-mono text-xl mb-2 group-hover:text-green-400 transition-colors`}
                    >
                      {snippet.title}
                    </CardTitle>
                    <p className={`${isDark ? "text-white/70" : "text-black/70"} font-mono text-sm`}>
                      {snippet.description}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 ${
                      isDark ? "bg-blue-900 text-blue-400" : "bg-blue-100 text-blue-700"
                    } font-mono text-sm rounded transform transition-all duration-300 group-hover:scale-110`}
                  >
                    {snippet.language}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  className={`${
                    isDark ? "bg-black border-gray-700" : "bg-gray-100 border-gray-300"
                  } p-4 rounded-lg border mb-4 overflow-x-auto group-hover:shadow-inner transition-all duration-300`}
                >
                  <pre
                    className={`${
                      isDark ? "text-green-400" : "text-green-700"
                    } font-mono text-sm overflow-x-auto group-hover:text-green-300 transition-colors`}
                  >
                    <code>{snippet.code}</code>
                  </pre>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {snippet.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 ${
                          isDark ? "bg-gray-800 text-white/80" : "bg-gray-200 text-black/80"
                        } font-mono text-xs rounded transform transition-all duration-300 hover:scale-110 hover:-rotate-2`}
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
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
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
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
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
