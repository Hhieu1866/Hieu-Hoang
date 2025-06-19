"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import TypewriterText from "./TypewriterText";

export function Snippets() {
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

  const snippets = [
    {
      title: "Custom React Hook - useLocalStorage",
      description:
        "A reusable hook for managing localStorage with TypeScript support",
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
      description:
        "Utility function to debounce API calls and improve performance",
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
  ];

  return (
    <section
      ref={sectionRef}
      id="snippets"
      className="relative px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Floating Code Symbols */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute right-10 top-10 ${
            isDark ? "text-purple-400/10" : "text-purple-600/10"
          } animate-spin-slow font-mono text-6xl`}
        >
          {"</>"}
        </div>
        <div
          className={`absolute bottom-20 left-10 ${
            isDark ? "text-blue-400/10" : "text-blue-600/10"
          } animate-bounce-slow font-mono text-4xl`}
        >
          {"{}"}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12">
          <TypewriterText
            typedText="Snippets."
            isDark={isDark}
            isVisible={isVisible}
          />

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
                isDark
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-300 bg-white"
              } group transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.3}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle
                      className={`${
                        isDark ? "text-white" : "text-black"
                      } mb-2 font-mono text-xl transition-colors group-hover:text-green-400`}
                    >
                      {snippet.title}
                    </CardTitle>
                    <p
                      className={`${isDark ? "text-white/70" : "text-black/70"} font-mono text-sm`}
                    >
                      {snippet.description}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 ${
                      isDark
                        ? "bg-blue-900 text-blue-400"
                        : "bg-blue-100 text-blue-700"
                    } transform rounded font-mono text-sm transition-all duration-300 group-hover:scale-110`}
                  >
                    {snippet.language}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  className={`${
                    isDark
                      ? "border-gray-700 bg-black"
                      : "border-gray-300 bg-gray-100"
                  } mb-4 overflow-x-auto rounded-lg border p-4 transition-all duration-300 group-hover:shadow-inner`}
                >
                  <pre
                    className={`${
                      isDark ? "text-green-400" : "text-green-700"
                    } overflow-x-auto font-mono text-sm transition-colors group-hover:text-green-300`}
                  >
                    <code>{snippet.code}</code>
                  </pre>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {snippet.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 ${
                          isDark
                            ? "bg-gray-800 text-white/80"
                            : "bg-gray-200 text-black/80"
                        } transform rounded font-mono text-xs transition-all duration-300 hover:-rotate-2 hover:scale-110`}
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
                      } transform font-mono transition-all duration-300 hover:scale-105`}
                    >
                      <Copy className="mr-1 h-4 w-4" />
                      Copy
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${
                        isDark
                          ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                          : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      } transform font-mono transition-all duration-300 hover:scale-105`}
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
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
  );
}
