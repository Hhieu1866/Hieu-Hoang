"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Eye, Heart, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - trong thực tế sẽ lấy từ database
const posts = [
  {
    title: "The Future of Web Development in 2025",
    excerpt:
      "Exploring upcoming trends in web development including AI integration, WebAssembly, edge computing, and the evolution of JavaScript frameworks.",
    content: `
      <h2>Introduction</h2>
      <p>As we move through 2024, the web development landscape continues to evolve at a rapid pace. From AI-powered development tools to new runtime environments, developers are facing both exciting opportunities and new challenges.</p>
      
      <h2>AI Integration in Development</h2>
      <p>Artificial Intelligence is revolutionizing how we write and maintain code. Tools like GitHub Copilot and similar AI assistants are becoming standard in many development workflows. These tools not only help with code completion but also assist in debugging, testing, and documentation.</p>
      
      <h2>WebAssembly Growth</h2>
      <p>WebAssembly (WASM) is gaining significant traction as developers look for ways to run high-performance code in the browser. We're seeing more frameworks and tools built around WASM, enabling complex applications to run smoothly in web environments.</p>
      
      <h2>Edge Computing</h2>
      <p>The shift towards edge computing is changing how we think about web applications. With CDNs and edge functions becoming more sophisticated, we can now run complex logic closer to users, reducing latency and improving performance.</p>
      
      <h2>JavaScript Framework Evolution</h2>
      <p>React, Vue, and Angular continue to evolve with new features and performance improvements. We're also seeing the rise of newer frameworks like Svelte and Solid.js that offer different approaches to building user interfaces.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright, with new technologies enabling us to build better, faster, and more accessible applications. Staying current with these trends is crucial for any developer looking to remain competitive in the field.</p>
    `,
    date: "2025-01-10",
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
    title: "A Little Story About My Family",
    excerpt:
      "In this first post, I want to share a bit about my family — where I come from, what shaped me, and why they mean everything to me.",
    content: `
      <h2>Growing Up</h2>
      <p>I grew up in Hanoi, a vibrant city full of energy and tradition. My family wasn’t wealthy, but we were rich in love and support. My parents worked hard to give me and my sister the best opportunities they could.</p>
      
      <h2>My Parents' Influence</h2>
      <p>My father, a dedicated driver, taught me the value of responsibility and perseverance. My mother, a skilled tailor, showed me the importance of patience, attention to detail, and taking pride in your work.</p>
      
      <h2>Learning from My Sister</h2>
      <p>My younger sister is currently in her final year of high school, preparing for university. Watching her study hard and pursue her dreams inspires me to keep pushing forward in my own journey.</p>
      
      <h2>Family Traditions</h2>
      <p>Our family finds joy in simple moments—sharing meals, talking about our days, and supporting one another’s goals. These traditions have kept us close and grounded over the years.</p>
      
      <h2>Why Family Matters</h2>
      <p>My family has always been my foundation. Even if they don’t fully understand the tech world I work in, they celebrate every milestone and encourage me to keep growing.</p>
      
      <h2>Looking Forward</h2>
      <p>As I continue my career in web development, I carry with me the lessons of hard work, patience, and mutual support that my family has instilled in me.</p>
    `,

    date: "2024-01-10",
    readTime: "5 min read",
    tags: ["Personal", "Life", "Family"],
    slug: "about-my-family",
    category: "Personal",
    featured: true,
    thumbnail: "/images/family1.jpg",
    images: ["/images/family.png", "/images/family2.jpg"],
    views: 1200,
    likes: 45,
  },
  {
    title: "Mastering CSS Grid and Flexbox: Modern Layout Techniques",
    excerpt:
      "A comprehensive guide to modern CSS layout techniques with practical examples, real-world use cases, and responsive design patterns.",
    content: `
      <h2>Understanding CSS Grid</h2>
      <p>CSS Grid is a powerful layout system that allows us to create complex two-dimensional layouts with ease. Unlike Flexbox, which is primarily for one-dimensional layouts, Grid excels at creating both rows and columns simultaneously.</p>
      
      <h2>Flexbox Fundamentals</h2>
      <p>Flexbox is perfect for one-dimensional layouts, whether that's a row or a column. It's particularly useful for navigation menus, card layouts, and form designs.</p>
      
      <h2>When to Use Each</h2>
      <p>Understanding when to use Grid vs Flexbox is crucial for creating efficient layouts. Grid is ideal for overall page layouts, while Flexbox works best for components within those layouts.</p>
      
      <h2>Responsive Design</h2>
      <p>Both Grid and Flexbox work beautifully with responsive design principles. We can create layouts that adapt seamlessly across different screen sizes.</p>
      
      <h2>Best Practices</h2>
      <p>Following best practices ensures maintainable and performant layouts. This includes using semantic HTML, planning layouts before coding, and testing across different browsers.</p>
    `,
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
    content: `
      <h2>Type Safety Benefits</h2>
      <p>TypeScript provides compile-time type checking that helps catch errors early in development. This leads to more reliable code and better developer experience.</p>
      
      <h2>Utility Types</h2>
      <p>TypeScript's utility types like Partial, Pick, and Omit can significantly reduce boilerplate code and make types more flexible and reusable.</p>
      
      <h2>Advanced Patterns</h2>
      <p>Understanding advanced patterns like conditional types, mapped types, and template literal types can help create more sophisticated type systems.</p>
      
      <h2>Best Practices</h2>
      <p>Following TypeScript best practices ensures maintainable codebases. This includes proper type annotations, avoiding any types, and using strict mode.</p>
      
      <h2>Integration with Frameworks</h2>
      <p>TypeScript integrates well with modern frameworks like React, Vue, and Angular, providing enhanced developer experience and better tooling support.</p>
    `,
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
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
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

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <Navigation />

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="outline"
              size="sm"
              className={`${
                isDark
                  ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                  : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              } font-mono`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="mb-8">
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("vi-VN")}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {post.views.toLocaleString()} views
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {post.likes} likes
              </div>
            </div>

            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } mb-4 font-mono text-4xl font-bold leading-tight`}
            >
              {post.title}
            </h1>

            <p
              className={`${
                isDark ? "text-white/70" : "text-black/70"
              } mb-6 font-mono text-lg leading-relaxed`}
            >
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`flex items-center gap-1 px-3 py-1 ${
                    isDark
                      ? "bg-gray-800 text-white/80"
                      : "bg-gray-200 text-black/80"
                  } rounded-full font-mono text-sm`}
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          {/* Additional Images */}
          {post.images && post.images.length > 0 && (
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              {post.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${post.title} - Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Article Content */}
          <div
            className={`prose prose-lg max-w-none ${
              isDark
                ? "prose-invert prose-headings:text-white prose-p:text-white/80"
                : "prose-headings:text-black prose-p:text-black/80"
            } font-mono`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h2
            className={`${
              isDark ? "text-white" : "text-black"
            } mb-6 font-mono text-2xl font-bold`}
          >
            Related Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Card
                  key={relatedPost.slug}
                  className={`${
                    isDark
                      ? "border-gray-700 bg-gray-800 hover:border-green-400"
                      : "border-gray-300 bg-white hover:border-green-600"
                  } group cursor-pointer transition-all duration-300 hover:scale-105`}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <CardHeader>
                      <h3
                        className={`${
                          isDark
                            ? "text-white group-hover:text-green-400"
                            : "text-black group-hover:text-green-600"
                        } font-mono text-lg font-bold transition-colors duration-300`}
                      >
                        {relatedPost.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p
                        className={`${
                          isDark ? "text-white/70" : "text-black/70"
                        } mb-4 font-mono text-sm leading-relaxed`}
                      >
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        {new Date(relatedPost.date).toLocaleDateString("vi-VN")}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
