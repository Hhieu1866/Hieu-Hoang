"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Blog() {
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

  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for structuring large React applications with proper state management and component architecture.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Best Practices"],
      slug: "building-scalable-react-applications",
      thumbnail: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt:
        "Exploring upcoming trends in web development including AI integration, WebAssembly, and the evolution of JavaScript frameworks.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Web Development", "Trends", "JavaScript"],
      slug: "future-of-web-development-2024",
      thumbnail: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      title: "Mastering CSS Grid and Flexbox",
      excerpt:
        "A comprehensive guide to modern CSS layout techniques with practical examples and real-world use cases.",
      date: "2024-01-05",
      readTime: "15 min read",
      tags: ["CSS", "Layout", "Frontend"],
      slug: "mastering-css-grid-flexbox",
      thumbnail: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      excerpt:
        "Advanced TypeScript techniques to write more maintainable and type-safe code in your projects.",
      date: "2023-12-28",
      readTime: "10 min read",
      tags: ["TypeScript", "Code Quality", "Development"],
      slug: "typescript-tips-better-code-quality",
      thumbnail: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute right-20 top-20 h-32 w-32 ${
            isDark
              ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
              : "bg-gradient-to-r from-purple-500/5 to-pink-500/5"
          } animate-pulse rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-20 left-20 h-40 w-40 ${
            isDark
              ? "bg-gradient-to-r from-blue-500/10 to-green-500/10"
              : "bg-gradient-to-r from-blue-500/5 to-green-500/5"
          } animate-pulse rounded-full blur-3xl`}
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12">
          <h2
            className={`mb-8 text-3xl font-bold md:text-4xl ${isDark ? "text-white" : "text-black"} font-mono ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <span className={isDark ? "text-green-400" : "text-green-600"}>
              Blog
            </span>
            <span className={isDark ? "text-green-400" : "text-green-600"}>
              .
            </span>
          </h2>
          <p
            className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            // Thoughts on web development, tutorials, and tech insights
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <Card
              key={post.slug}
              className={`${
                isDark
                  ? "border-gray-700 bg-gray-900 hover:border-green-400"
                  : "border-gray-300 bg-white hover:border-green-600"
              } group transform cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Image
                  src={post.thumbnail || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute left-4 top-4">
                    <span
                      className={`px-3 py-1 ${
                        isDark
                          ? "bg-yellow-900/90 text-yellow-400"
                          : "bg-yellow-100/90 text-yellow-700"
                      } rounded-full font-mono text-xs backdrop-blur-sm`}
                    >
                      Featured
                    </span>
                  </div>
                )}

                {/* Read Time Badge */}
                <div className="absolute right-4 top-4">
                  <span
                    className={`px-3 py-1 ${
                      isDark
                        ? "bg-black/70 text-white"
                        : "bg-white/70 text-black"
                    } rounded-full font-mono text-xs backdrop-blur-sm`}
                  >
                    {post.readTime}
                  </span>
                </div>
              </div>

              <CardHeader>
                <div
                  className={`flex items-center gap-4 text-sm ${
                    isDark ? "text-white/60" : "text-black/60"
                  } mb-3 font-mono`}
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("vi-VN")}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle
                  className={`${
                    isDark
                      ? "text-white group-hover:text-green-400"
                      : "text-black group-hover:text-green-600"
                  } font-mono text-xl transition-colors duration-300`}
                >
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`${
                    isDark ? "text-white/70" : "text-black/70"
                  } mb-6 font-mono text-sm leading-relaxed transition-colors group-hover:text-white/90`}
                >
                  {post.excerpt}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 ${
                        isDark
                          ? "bg-gray-800 text-white/80"
                          : "bg-gray-200 text-black/80"
                      } transform rounded font-mono text-xs transition-all duration-300 hover:rotate-2 hover:scale-110`}
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      #{tag.toLowerCase().replace(" ", "")}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className={`${
                    isDark
                      ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                      : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  } group/btn w-full transform font-mono transition-all duration-300 hover:scale-105`}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "1.5s" }}
        >
          <Button
            variant="outline"
            size="lg"
            className={`${
              isDark
                ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            } transform px-8 font-mono transition-all duration-300 hover:scale-105`}
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
