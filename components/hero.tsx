"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute h-96 w-96 ${
            isDark ? "bg-purple-500/20" : "bg-purple-500/10"
          } animate-pulse rounded-full blur-3xl`}
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        />
        <div
          className={`absolute right-1/4 top-1/4 h-72 w-72 ${
            isDark ? "bg-pink-500/20" : "bg-pink-500/10"
          } animate-bounce rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-1/4 left-1/4 h-80 w-80 ${
            isDark ? "bg-blue-500/20" : "bg-blue-500/10"
          } animate-pulse rounded-full blur-3xl`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-left">
        <div className="mb-8">
          <div
            className={`${
              isDark ? "text-green-400" : "text-green-600"
            } mb-2 font-mono`}
          >
            $ Hello
          </div>
          <h1
            className={`mb-6 text-4xl font-bold md:text-6xl ${
              isDark ? "text-white" : "text-black"
            } font-mono`}
          >
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>
              const
            </span>{" "}
            user = {"{"}
          </h1>
          <div
            className={`ml-8 text-xl md:text-2xl ${
              isDark ? "text-white/80" : "text-black/80"
            } mb-4 font-mono`}
          >
            <div>
              <span className={isDark ? "text-purple-400" : "text-purple-600"}>
                name:
              </span>{" "}
              <span className={isDark ? "text-yellow-400" : "text-yellow-600"}>
                "Hieu Hoang"
              </span>
              ,
            </div>
            <div>
              <span className={isDark ? "text-purple-400" : "text-purple-600"}>
                role:
              </span>{" "}
              <span className={isDark ? "text-yellow-400" : "text-yellow-600"}>
                "Frontend Developer"
              </span>
              ,
            </div>
            <div>
              <span className={isDark ? "text-purple-400" : "text-purple-600"}>
                passion:
              </span>{" "}
              <span className={isDark ? "text-yellow-400" : "text-yellow-600"}>
                "Building amazing web experiences"
              </span>
            </div>
          </div>
          <h1
            className={`mb-6 text-4xl font-bold md:text-6xl ${
              isDark ? "text-white" : "text-black"
            } font-mono`}
          >
            {"}"}
          </h1>
        </div>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          {/* <Button
            size="lg"
            className={`${
              isDark
                ? "bg-green-600 hover:bg-green-700 text-black"
                : "bg-green-700 hover:bg-green-800 text-white"
            } font-mono font-bold border-0 px-8 py-3`}
          >
            ./view-projects.sh
          </Button> */}
          <Button
            variant="outline"
            size="lg"
            className={`${
              isDark
                ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            } flex items-center px-8 py-3 font-mono`}
          >
            Facebook
            <FiFacebook />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`${
              isDark
                ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            } flex items-center px-8 py-3 font-mono`}
          >
            Linkedin
            <SlSocialLinkedin className="mb-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`${
              isDark
                ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            } px-8 py-3 font-mono`}
          >
            Github
            <FiGithub />
          </Button>
        </div>
      </div>
    </section>
  );
}
