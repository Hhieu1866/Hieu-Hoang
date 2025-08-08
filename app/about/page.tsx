"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

export default function AboutPage() {
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
        <div className="mx-auto max-w-4xl py-20">
          <div className="mb-12">
            <h1
              className={`mb-8 text-4xl font-bold md:text-6xl ${isDark ? "text-white" : "text-black"} font-mono`}
            >
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                About
              </span>{" "}
              me
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                .
              </span>
            </h1>
          </div>

          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2
                className={`mb-6 text-2xl font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
              >
                <span className={isDark ? "text-blue-400" : "text-blue-600"}>
                  const
                </span>{" "}
                introduction = {"{"}
              </h2>
              <div
                className={`ml-8 space-y-6 ${isDark ? "text-white/80" : "text-black/80"} font-mono leading-relaxed`}
              >
                <p className="text-lg">
                  <span
                    className={isDark ? "text-purple-400" : "text-purple-600"}
                  >
                    name:
                  </span>{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Frontend Developer & UI/UX Enthusiast"
                  </span>
                  ,
                </p>
                {/* <p className="text-lg">
                  <span
                    className={isDark ? "text-purple-400" : "text-purple-600"}
                  >
                    experience:
                  </span>{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "5+ years in web development"
                  </span>
                  ,
                </p> */}
                <p className="text-lg">
                  <span
                    className={isDark ? "text-purple-400" : "text-purple-600"}
                  >
                    passion:
                  </span>{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Creating beautiful, functional web experiences"
                  </span>
                  ,
                </p>
                <p className="text-lg">
                  <span
                    className={isDark ? "text-purple-400" : "text-purple-600"}
                  >
                    location:
                  </span>{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-yellow-600"}
                  >
                    "Vietnam"
                  </span>
                </p>
              </div>
              <h2
                className={`mt-6 text-2xl font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
              >
                {"}"}
              </h2>
            </section>

            {/* Personal Interests */}
            <section>
              <h2
                className={`mb-6 text-2xl font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
              >
                <span className={isDark ? "text-green-400" : "text-green-600"}>
                  // Personal Interests
                </span>
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-4 font-mono`}
                  >
                    Hobbies & Interests
                  </h3>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="transform transition-all duration-300 hover:translate-x-2">
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        sports
                      </span>{" "}
                      = [
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Football/Soccer"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Team Player"
                      </span>
                      ]
                    </div>
                    <div className="transform transition-all duration-300 hover:translate-x-2">
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        collecting
                      </span>{" "}
                      = [
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Transformers Models"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Action Figures"
                      </span>
                      ]
                    </div>
                    <div className="transform transition-all duration-300 hover:translate-x-2">
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        entertainment
                      </span>{" "}
                      = [
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Transformers Movies🤖"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Harry Potter🧙🏻"
                      </span>
                      ]
                    </div>
                    <div className="transform transition-all duration-300 hover:translate-x-2">
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        favoriteCharacter
                      </span>{" "}
                      =
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Soundwave"
                      </span>
                    </div>

                    <div className="mt-6 border-t border-gray-600 pt-4">
                      <p
                        className={`${isDark ? "text-purple-400" : "text-purple-600"} text-xs italic`}
                      >
                        // "Soundwave superior. Autobots inferior."
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"} relative overflow-hidden`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-4 font-mono`}
                  >
                    Favorite Character
                  </h3>

                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src="/images/soundwave.webp"
                        alt="Soundwave - Transformers"
                        width={100}
                        height={100}
                        className="transform object-contain transition-all duration-300 hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 ${isDark ? "bg-blue-500/20" : "bg-blue-500/10"} animate-pulse rounded-lg`}
                      />
                    </div>
                    <div>
                      <h4
                        className={`text-lg font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
                      >
                        Soundwave
                      </h4>
                      <p
                        className={`${isDark ? "text-blue-400" : "text-blue-600"} font-mono text-sm`}
                      >
                        Decepticon Communications Officer
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    {/* <div
                      className={`${isDark ? "text-white/80" : "text-black/80"}`}
                    >
                      <span
                        className={isDark ? "text-green-400" : "text-green-600"}
                      >
                        // Characteristics:
                      </span>
                    </div>
                    <ul
                      className={`space-y-1 ${isDark ? "text-white/70" : "text-black/70"} text-xs`}
                    >
                      <li>• Loyal and logical</li>
                      <li>• Master of surveillance</li>
                      <li>• Transforms into cassette player</li>
                      <li>• Commands cassette minions</li>
                    </ul> */}

                    <div className="mt-4 rounded border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3">
                      <p
                        className={`${isDark ? "text-blue-300" : "text-blue-700"} font-mono text-xs italic`}
                      >
                        "Why I love Soundwave: I'm fascinated by his iconic
                        design and especially his distinctive voice. His
                        monotone, robotic speech pattern and the way he
                        processes and relays information perfectly embodies the
                        essence of a communications specialist - precise, clear,
                        and unforgettable."
                      </p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div
                    className={`absolute right-2 top-2 ${isDark ? "text-blue-400/20" : "text-blue-600/20"} font-mono text-xs`}
                  >
                    {"{ }"}
                  </div>
                  <div
                    className={`absolute bottom-2 left-2 ${isDark ? "text-purple-400/20" : "text-purple-600/20"} font-mono text-xs`}
                  >
                    {"</div>"}
                  </div>
                </div>
              </div>
            </section>

            {/* Journey */}
            <section>
              <h2
                className={`mb-6 text-2xl font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
              >
                <span className={isDark ? "text-green-400" : "text-green-600"}>
                  // My Journey
                </span>
              </h2>
              <div
                className={`space-y-6 ${isDark ? "text-white/80" : "text-black/80"} font-mono leading-relaxed`}
              >
                <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-3`}
                  >
                    2021 & 2022 - A New Beginning
                  </h3>
                  <p>
                    Started studying IT at Dai Nam University and began
                    exploring web development. I learned the basics of HTML,
                    CSS, and JavaScript, and gradually became more interested in
                    how websites are built and designed.
                  </p>
                </div>

                <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-3`}
                  >
                    2023 & 2024 Building Foundations and Leveling Up
                  </h3>
                  <p>
                    Learned some frameworks like React... with support and
                    guidance from someone more experienced, I also explored
                    backend development using Node.js and databases, and learned
                    how to build full-stack applications.
                  </p>
                </div>

                <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-3`}
                  >
                    Present – Still Learning
                  </h3>
                  <p>
                    Currently focusing on improving problem-solving skills,
                    learning about software testing, and gaining more real-world
                    experience through personal projects and internships.
                  </p>
                </div>

                {/* <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-3`}
                  >
                    2023-2024 - Specialization
                  </h3>
                  <p>
                    Focused on Next.js, TypeScript, and modern web technologies.
                    Now specializing in building scalable SaaS applications and
                    beautiful user interfaces.
                  </p>
                </div> */}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2
                className={`mb-6 text-2xl font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
              >
                <span className={isDark ? "text-green-400" : "text-green-600"}>
                  // Technical Skills
                </span>
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-4 font-mono`}
                  >
                    Frontend
                  </h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div>
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        frameworks
                      </span>{" "}
                      = [
                    </div>
                    <div className="ml-4">
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "React.js"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Next.js"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Vue.js"
                      </span>
                    </div>
                    <div>]</div>

                    <div className="mt-4">
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        styling
                      </span>{" "}
                      = [
                    </div>
                    <div className="ml-4">
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Tailwind CSS"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Styled Components"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Sass"
                      </span>
                    </div>
                    <div>]</div>
                  </div>
                </div>

                <div
                  className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold ${isDark ? "text-green-400" : "text-green-600"} mb-4 font-mono`}
                  >
                    Backend & Tools
                  </h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div>
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        backend
                      </span>{" "}
                      = [
                    </div>
                    <div className="ml-4">
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Node.js"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Express.js"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "MongoDB"
                      </span>
                    </div>
                    <div>]</div>

                    <div className="mt-4">
                      <span
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      >
                        const
                      </span>{" "}
                      <span className={isDark ? "text-white" : "text-black"}>
                        tools
                      </span>{" "}
                      = [
                    </div>
                    <div className="ml-4">
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Git"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Docker"
                      </span>
                      ,{" "}
                      <span
                        className={
                          isDark ? "text-yellow-400" : "text-yellow-600"
                        }
                      >
                        "Figma"
                      </span>
                    </div>
                    <div>]</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2
                className={`mb-6 text-2xl font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
              >
                <span className={isDark ? "text-green-400" : "text-green-600"}>
                  // Get In Touch
                </span>
              </h2>
              <div
                className={`rounded-lg border p-6 ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}
              >
                <p
                  className={`${isDark ? "text-white/80" : "text-black/80"} mb-4 font-mono leading-relaxed`}
                >
                  I’m happy to talk about new chances, creative projects, or
                  technology and development.
                </p>
                <div className="space-y-2 font-mono text-sm">
                  <div>
                    <span
                      className={isDark ? "text-purple-400" : "text-purple-600"}
                    >
                      email:
                    </span>{" "}
                    <span
                      className={isDark ? "text-yellow-400" : "text-yellow-600"}
                    >
                      "hieuuhtwork@gmail.com"
                    </span>
                  </div>
                  <div>
                    <span
                      className={isDark ? "text-purple-400" : "text-purple-600"}
                    >
                      linkedin:
                    </span>{" "}
                    <span
                      className={isDark ? "text-yellow-400" : "text-yellow-600"}
                    >
                      "www.linkedin.com/in/hieu-hoang-3101b8378/"
                    </span>
                  </div>
                  {/* <div>
                    <span
                      className={isDark ? "text-purple-400" : "text-purple-600"}
                    >
                      github:
                    </span>{" "}
                    <span
                      className={isDark ? "text-yellow-400" : "text-yellow-600"}
                    >
                      "github.com/yourname"
                    </span>
                  </div> */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
