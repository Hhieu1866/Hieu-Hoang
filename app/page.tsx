"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Project } from "@/components/project";
import { Snippets } from "@/components/snippets";
import { Blog } from "@/components/blog";
// import { Tools } from "@/components/tools" // Tạm ẩn Tools trên trang chủ
import { Navigation } from "@/components/navigation";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="min-h-screen overflow-x-hidden font-mono transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Snippets />
      <Blog />
      {/* <Tools /> */}
    </main>
  );
}
