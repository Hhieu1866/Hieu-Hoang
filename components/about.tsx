"use client";

import { useState, useEffect, useRef } from "react";

export function About() {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  const fullText = "About me.";

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
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Floating Code Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-10 top-20 ${
            isDark ? "text-green-400/20" : "text-green-600/20"
          } animate-float font-mono text-sm`}
        >
          {"{ }"}
        </div>
        <div
          className={`absolute right-20 top-40 ${
            isDark ? "text-blue-400/20" : "text-blue-600/20"
          } animate-float-delay font-mono text-sm`}
        >
          {"</div>"}
        </div>
        <div
          className={`absolute bottom-40 left-20 ${
            isDark ? "text-purple-400/20" : "text-purple-600/20"
          } animate-float-delay-2 font-mono text-sm`}
        >
          {"const"}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12">
          <h2
            className={`mb-8 text-3xl font-bold md:text-4xl ${isDark ? "text-white" : "text-black"} font-mono ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <span className={isDark ? "text-green-400" : "text-green-600"}>
              {typedText}
            </span>
            <span
              className={`${isDark ? "text-green-400" : "text-green-600"} ${isVisible ? "animate-blink" : ""}`}
            >
              |
            </span>
          </h2>

          <div
            className={`space-y-6 ${isDark ? "text-white/80" : "text-black/80"} font-mono leading-relaxed ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <p className="transform text-lg transition-all duration-700 hover:translate-x-2">
              I have been coding for over 5 years, beginning my journey in 2020.
              Initially, I learned HTML, CSS, and JavaScript to build websites.
            </p>

            <p className="transform text-lg transition-all duration-700 hover:translate-x-2">
              My first project was a simple website built with HTML, CSS, and
              JavaScript (~mid-2020).
            </p>

            <p className="transform text-lg transition-all duration-700 hover:translate-x-2">
              As I progressed, I focused heavily on React.js and Next.js. Now, I
              specialize in building SaaS applications with modern web
              technologies.
            </p>
          </div>

          <div
            className={`mt-12 grid gap-8 md:grid-cols-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "1s" }}
          >
            <div
              className={`${
                isDark
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-300 bg-white"
              } group transform rounded-lg border p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-green-400" : "text-green-600"
                } mb-4 font-mono group-hover:animate-pulse`}
              >
                // Frontend
              </h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className={isDark ? "text-blue-400" : "text-blue-600"}>
                    const
                  </span>{" "}
                  <span className={isDark ? "text-white" : "text-black"}>
                    frameworks
                  </span>{" "}
                  = [
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "React"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Next.js"
                  </span>
                  {/* ,{" "} */}
                  {/* <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Vue"
                  </span> */}
                  ]
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className={isDark ? "text-blue-400" : "text-blue-600"}>
                    const
                  </span>{" "}
                  <span className={isDark ? "text-white" : "text-black"}>
                    styling
                  </span>{" "}
                  = [
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Tailwind"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "CSS3"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Sass"
                  </span>
                  ]
                </div>
              </div>
            </div>

            <div
              className={`${
                isDark
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-300 bg-white"
              } group transform rounded-lg border p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-green-400" : "text-green-600"
                } mb-4 font-mono group-hover:animate-pulse`}
              >
                // Backend
              </h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className={isDark ? "text-blue-400" : "text-blue-600"}>
                    const
                  </span>{" "}
                  <span className={isDark ? "text-white" : "text-black"}>
                    runtime
                  </span>{" "}
                  = [
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Node.js"
                  </span>
                  {/* ,{" "} */}
                  {/* <span className={isDark ? "text-yellow-400" : "text-yellow-600"}>"Deno"</span> */}
                  ]
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className={isDark ? "text-blue-400" : "text-blue-600"}>
                    const
                  </span>{" "}
                  <span className={isDark ? "text-white" : "text-black"}>
                    databases
                  </span>{" "}
                  = [
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "MongoDB"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "PostgreSQL"
                  </span>
                  ]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
