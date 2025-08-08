"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
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

  const posts = [
    // {
    //   title: "Building Scalable React Applications: A Complete Guide",
    //   excerpt:
    //     "Learn the best practices for structuring large React applications with proper state management, component architecture, and performance optimization techniques.",
    //   content:
    //     "In this comprehensive guide, we'll explore the essential patterns and practices for building React applications that can scale from small projects to enterprise-level systems...",
    //   date: "2024-01-15",
    //   readTime: "12 min read",
    //   tags: ["React", "Architecture", "Best Practices", "Performance"],
    //   slug: "building-scalable-react-applications",
    //   category: "Frontend Development",
    //   featured: true,
    //   thumbnail: "/placeholder.svg?height=300&width=600",
    //   views: 2400,
    //   likes: 89,
    // },
    {
      title: "The Future of Web Development in 2024",
      excerpt:
        "Exploring upcoming trends in web development including AI integration, WebAssembly, edge computing, and the evolution of JavaScript frameworks.",
      content:
        "As we move through 2024, the web development landscape continues to evolve at a rapid pace. From AI-powered development tools to new runtime environments...",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Web Development", "Trends", "JavaScript", "AI"],
      slug: "future-of-web-development-2024",
      category: "Industry Insights",
      featured: true,
      thumbnail: "/placeholder.svg?height=300&width=600",
      views: 1850,
      likes: 67,
    },
    {
      title: "Mastering CSS Grid and Flexbox: Modern Layout Techniques",
      excerpt:
        "A comprehensive guide to modern CSS layout techniques with practical examples, real-world use cases, and responsive design patterns.",
      content:
        "CSS Grid and Flexbox have revolutionized how we approach web layouts. In this detailed tutorial, we'll cover everything from basic concepts to advanced techniques...",
      date: "2024-01-05",
      readTime: "15 min read",
      tags: ["CSS", "Layout", "Frontend", "Responsive Design"],
      slug: "mastering-css-grid-flexbox",
      category: "CSS & Styling",
      featured: false,
      thumbnail: "/placeholder.svg?height=300&width=600",
      views: 3200,
      likes: 124,
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      excerpt:
        "Advanced TypeScript techniques to write more maintainable and type-safe code in your projects, including utility types and advanced patterns.",
      content:
        "TypeScript has become an essential tool for modern JavaScript development. Here are some advanced tips and techniques to level up your TypeScript skills...",
      date: "2023-12-28",
      readTime: "10 min read",
      tags: ["TypeScript", "Code Quality", "Development", "Best Practices"],
      slug: "typescript-tips-better-code-quality",
      category: "Programming Languages",
      featured: false,
      thumbnail: "/placeholder.svg?height=300&width=600",
      views: 1650,
      likes: 78,
    },
    // {
    //   title: "Building a Design System from Scratch",
    //   excerpt:
    //     "Step-by-step guide to creating a comprehensive design system that scales across teams and products, including component libraries and documentation.",
    //   content:
    //     "Design systems are crucial for maintaining consistency across large applications. In this guide, we'll build a complete design system from the ground up...",
    //   date: "2023-12-20",
    //   readTime: "18 min read",
    //   tags: ["Design System", "UI/UX", "Components", "Documentation"],
    //   slug: "building-design-system-from-scratch",
    //   category: "Design & UX",
    //   featured: false,
    //   thumbnail: "/placeholder.svg?height=300&width=600",
    //   views: 2100,
    //   likes: 95,
    // },
    // {
    //   title: "Optimizing Web Performance: Core Web Vitals Guide",
    //   excerpt:
    //     "Complete guide to improving your website's performance metrics, focusing on Core Web Vitals, loading optimization, and user experience improvements.",
    //   content:
    //     "Web performance directly impacts user experience and SEO rankings. Let's dive deep into optimizing Core Web Vitals and overall site performance...",
    //   date: "2023-12-15",
    //   readTime: "14 min read",
    //   tags: ["Performance", "Web Vitals", "Optimization", "SEO"],
    //   slug: "optimizing-web-performance-core-web-vitals",
    //   category: "Performance",
    //   featured: false,
    //   thumbnail: "/placeholder.svg?height=300&width=600",
    //   views: 1900,
    //   likes: 82,
    // },
  ];

  const categories = [
    "All",
    "Frontend Development",
    "Industry Insights",
    "CSS & Styling",
    "Programming Languages",
    "Design & UX",
    "Performance",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);
  const featuredPosts = posts.filter((post) => post.featured);

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
                Blog
              </span>
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                .
              </span>
            </h1>
            <p
              className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg`}
            >
              // Thoughts on web development, tutorials, tech insights, and my
              life
            </p>
          </div>

          {/* Hero Featured Post */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <div className="relative">
                <Card
                  className={`${
                    isDark
                      ? "border-gray-700 bg-gray-900 hover:border-green-400"
                      : "border-gray-300 bg-white hover:border-green-600"
                  } group cursor-pointer overflow-hidden transition-all duration-500`}
                >
                  <div className="md:flex">
                    <div className="relative md:w-1/2">
                      <Image
                        src={featuredPosts[0].thumbnail || "/placeholder.svg"}
                        alt={featuredPosts[0].title}
                        width={600}
                        height={400}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                      {/* Featured Badge */}
                      <div className="absolute left-6 top-6">
                        <span
                          className={`px-4 py-2 ${
                            isDark
                              ? "bg-yellow-900/90 text-yellow-400"
                              : "bg-yellow-100/90 text-yellow-700"
                          } rounded-full font-mono text-sm font-bold backdrop-blur-sm`}
                        >
                          ⭐ Featured Post
                        </span>
                      </div>
                    </div>

                    <div className="p-8 md:w-1/2">
                      <div
                        className={`flex items-center gap-4 text-sm ${
                          isDark ? "text-white/60" : "text-black/60"
                        } mb-4 font-mono`}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(featuredPosts[0].date).toLocaleDateString(
                            "vi-VN",
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPosts[0].readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {featuredPosts[0].views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {featuredPosts[0].likes}
                        </div>
                      </div>

                      <h2
                        className={`${
                          isDark
                            ? "text-white group-hover:text-green-400"
                            : "text-black group-hover:text-green-600"
                        } mb-4 font-mono text-2xl font-bold transition-colors duration-300`}
                      >
                        {featuredPosts[0].title}
                      </h2>

                      <p
                        className={`${
                          isDark ? "text-white/70" : "text-black/70"
                        } mb-6 font-mono text-sm leading-relaxed`}
                      >
                        {featuredPosts[0].excerpt}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {featuredPosts[0].tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 ${
                              isDark
                                ? "bg-gray-800 text-white/80"
                                : "bg-gray-200 text-black/80"
                            } rounded-full font-mono text-xs`}
                          >
                            #{tag.toLowerCase().replace(" ", "")}
                          </span>
                        ))}
                      </div>

                      <Button
                        className={`${
                          isDark
                            ? "bg-green-600 text-black hover:bg-green-700"
                            : "bg-green-700 text-white hover:bg-green-800"
                        } group/btn font-mono`}
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {/* Category Filter */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`font-mono transition-all duration-300 ${
                    selectedCategory === category
                      ? isDark
                        ? "bg-green-600 text-black hover:bg-green-700"
                        : "bg-green-700 text-white hover:bg-green-800"
                      : isDark
                        ? "border-gray-600 text-white/80 hover:bg-gray-800"
                        : "border-gray-400 text-black/80 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Blog Grid */}
          <section>
            <h2
              className={`mb-8 text-2xl font-bold ${isDark ? "text-white" : "text-black"} font-mono`}
            >
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                // Recent Posts
              </span>
              {selectedCategory !== "All" && (
                <span
                  className={`ml-2 text-lg ${isDark ? "text-white/60" : "text-black/60"}`}
                >
                  - {selectedCategory}
                </span>
              )}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.slice(1).map((post, index) => (
                <Card
                  key={post.slug}
                  className={`${
                    isDark
                      ? "border-gray-700 bg-gray-900 hover:border-green-400"
                      : "border-gray-300 bg-white hover:border-green-600"
                  } group transform cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
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

                    {/* Category Badge */}
                    <div className="absolute left-4 top-4">
                      <span
                        className={`px-2 py-1 ${
                          isDark
                            ? "bg-black/70 text-white"
                            : "bg-white/70 text-black"
                        } rounded font-mono text-xs backdrop-blur-sm`}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <span
                        className={`px-2 py-1 ${
                          isDark
                            ? "bg-black/70 text-white"
                            : "bg-white/70 text-black"
                        } flex items-center gap-1 rounded font-mono text-xs backdrop-blur-sm`}
                      >
                        <Eye className="h-3 w-3" />
                        {post.views.toLocaleString()}
                      </span>
                      <span
                        className={`px-2 py-1 ${
                          isDark
                            ? "bg-black/70 text-white"
                            : "bg-white/70 text-black"
                        } flex items-center gap-1 rounded font-mono text-xs backdrop-blur-sm`}
                      >
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
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

                    <h3
                      className={`${
                        isDark
                          ? "text-white group-hover:text-green-400"
                          : "text-black group-hover:text-green-600"
                      } mb-3 line-clamp-2 font-mono text-lg font-bold transition-colors duration-300`}
                    >
                      {post.title}
                    </h3>

                    <p
                      className={`${
                        isDark ? "text-white/70" : "text-black/70"
                      } mb-4 line-clamp-3 font-mono text-sm leading-relaxed`}
                    >
                      {post.excerpt}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 ${
                            isDark
                              ? "bg-gray-800 text-white/80"
                              : "bg-gray-200 text-black/80"
                          } rounded font-mono text-xs`}
                        >
                          #{tag.toLowerCase().replace(" ", "")}
                        </span>
                      ))}
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${
                          isDark
                            ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                            : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        } group/btn w-full font-mono`}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
