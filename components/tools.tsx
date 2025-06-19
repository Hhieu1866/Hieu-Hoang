"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ImageIcon,
  Palette,
  FileImage,
  Youtube,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import TypewriterText from "./TypewriterText";

export function Tools() {
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

  const tools = [
    {
      title: "Image Converter",
      description:
        "Convert images between different formats (PNG, JPG, WebP, AVIF)",
      icon: FileImage,
      color: "from-blue-500 to-cyan-500",
      features: ["Multiple formats", "Batch conversion", "Quality control"],
      category: "Image Processing",
    },
    {
      title: "Color Picker",
      description:
        "Extract color palettes from images and get hex, RGB, HSL values",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      features: ["Palette extraction", "Multiple formats", "Color harmony"],
      category: "Design Tools",
    },
    {
      title: "YouTube Downloader",
      description:
        "Download YouTube videos in MP4 or convert to MP3 audio format",
      icon: Youtube,
      color: "from-red-500 to-orange-500",
      features: ["HD quality", "MP3/MP4 formats", "Fast processing"],
      category: "Media Tools",
    },
    {
      title: "Image Optimizer",
      description: "Compress and optimize images without losing quality",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      features: ["Lossless compression", "Bulk optimization", "Size reduction"],
      category: "Optimization",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="relative overflow-hidden px-4 py-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute right-20 top-10 h-32 w-32 ${
            isDark
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              : "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
          } animate-pulse rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-20 left-10 h-40 w-40 ${
            isDark
              ? "bg-gradient-to-r from-green-500/10 to-cyan-500/10"
              : "bg-gradient-to-r from-green-500/5 to-cyan-500/5"
          } animate-pulse rounded-full blur-3xl`}
          style={{ animationDelay: "1s" }}
        />

        {/* Floating Tool Icons */}
        <div
          className={`absolute left-16 top-32 ${isDark ? "text-blue-400/20" : "text-blue-600/20"} animate-float`}
        >
          <ImageIcon className="h-8 w-8" />
        </div>
        <div
          className={`absolute right-32 top-48 ${
            isDark ? "text-purple-400/20" : "text-purple-600/20"
          } animate-float-delay`}
        >
          <Palette className="h-6 w-6" />
        </div>
        <div
          className={`absolute bottom-32 right-16 ${
            isDark ? "text-green-400/20" : "text-green-600/20"
          } animate-float-delay-2`}
        >
          <Zap className="h-7 w-7" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12">
          <TypewriterText
            typedText="Tools."
            isDark={isDark}
            isVisible={isVisible}
          />
          <p
            className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            // Useful web tools and utilities I've built for developers and
            creators
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {tools.map((tool, index) => (
            <Card
              key={tool.title}
              className={`${
                isDark
                  ? "border-gray-700 bg-gray-900 hover:border-green-400"
                  : "border-gray-300 bg-white hover:border-green-600"
              } group transform cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-xl bg-gradient-to-r p-3 ${tool.color} transform transition-all duration-300 group-hover:rotate-3 group-hover:scale-110`}
                    >
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle
                        className={`${
                          isDark
                            ? "text-white group-hover:text-green-400"
                            : "text-black group-hover:text-green-600"
                        } font-mono text-xl transition-colors duration-300`}
                      >
                        {tool.title}
                      </CardTitle>
                      <span
                        className={`px-2 py-1 ${
                          isDark
                            ? "bg-gray-800 text-white/80"
                            : "bg-gray-200 text-black/80"
                        } mt-2 inline-block rounded font-mono text-xs`}
                      >
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <Sparkles
                    className={`h-5 w-5 ${
                      isDark ? "text-yellow-400" : "text-yellow-600"
                    } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                </div>
              </CardHeader>

              <CardContent>
                <p
                  className={`${
                    isDark ? "text-white/70" : "text-black/70"
                  } mb-6 font-mono text-sm leading-relaxed transition-colors group-hover:text-white/90`}
                >
                  {tool.description}
                </p>

                <div className="mb-6">
                  <div
                    className={`${isDark ? "text-green-400" : "text-green-600"} mb-3 font-mono text-sm`}
                  >
                    // Features
                  </div>
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-2 ${
                          isDark ? "text-white/80" : "text-black/80"
                        } transform font-mono text-sm transition-all duration-300 hover:translate-x-2`}
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div
                          className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${tool.color} animate-pulse`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full ${
                    isDark
                      ? "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700"
                      : "bg-gradient-to-r from-green-700 to-blue-700 text-white hover:from-green-800 hover:to-blue-800"
                  } group/btn transform font-mono transition-all duration-300 hover:scale-105`}
                >
                  Try Tool
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
                ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            } transform px-8 font-mono transition-all duration-300 hover:scale-105`}
          >
            View All Tools
          </Button>
        </div>
      </div>
    </section>
  );
}
