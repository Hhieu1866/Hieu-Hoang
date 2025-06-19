"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageIcon, Palette, FileImage, Youtube, Zap, ArrowRight, Sparkles } from "lucide-react"

export function Tools() {
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

  const tools = [
    {
      title: "Image Converter",
      description: "Convert images between different formats (PNG, JPG, WebP, AVIF)",
      icon: FileImage,
      color: "from-blue-500 to-cyan-500",
      features: ["Multiple formats", "Batch conversion", "Quality control"],
      category: "Image Processing",
    },
    {
      title: "Color Picker",
      description: "Extract color palettes from images and get hex, RGB, HSL values",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      features: ["Palette extraction", "Multiple formats", "Color harmony"],
      category: "Design Tools",
    },
    {
      title: "YouTube Downloader",
      description: "Download YouTube videos in MP4 or convert to MP3 audio format",
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
  ]

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="py-20 px-4 transition-colors duration-300 relative overflow-hidden"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 right-20 w-32 h-32 ${
            isDark
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              : "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
          } rounded-full blur-3xl animate-pulse`}
        />
        <div
          className={`absolute bottom-20 left-10 w-40 h-40 ${
            isDark
              ? "bg-gradient-to-r from-green-500/10 to-cyan-500/10"
              : "bg-gradient-to-r from-green-500/5 to-cyan-500/5"
          } rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "1s" }}
        />

        {/* Floating Tool Icons */}
        <div className={`absolute top-32 left-16 ${isDark ? "text-blue-400/20" : "text-blue-600/20"} animate-float`}>
          <ImageIcon className="h-8 w-8" />
        </div>
        <div
          className={`absolute top-48 right-32 ${
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? "text-white" : "text-black"} font-mono ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <span className={isDark ? "text-green-400" : "text-green-600"}>Tools</span>
            <span className={isDark ? "text-green-400" : "text-green-600"}>.</span>
          </h2>
          <p
            className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            // Useful web tools and utilities I've built for developers and creators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Card
              key={tool.title}
              className={`${
                isDark
                  ? "bg-gray-900 border-gray-700 hover:border-green-400"
                  : "bg-white border-gray-300 hover:border-green-600"
              } transition-all duration-500 group cursor-pointer overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${tool.color} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle
                        className={`${
                          isDark ? "text-white group-hover:text-green-400" : "text-black group-hover:text-green-600"
                        } font-mono text-xl transition-colors duration-300`}
                      >
                        {tool.title}
                      </CardTitle>
                      <span
                        className={`px-2 py-1 ${
                          isDark ? "bg-gray-800 text-white/80" : "bg-gray-200 text-black/80"
                        } font-mono text-xs rounded mt-2 inline-block`}
                      >
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <Sparkles
                    className={`h-5 w-5 ${
                      isDark ? "text-yellow-400" : "text-yellow-600"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </CardHeader>

              <CardContent>
                <p
                  className={`${
                    isDark ? "text-white/70" : "text-black/70"
                  } font-mono text-sm mb-6 leading-relaxed group-hover:text-white/90 transition-colors`}
                >
                  {tool.description}
                </p>

                <div className="mb-6">
                  <div className={`${isDark ? "text-green-400" : "text-green-600"} font-mono text-sm mb-3`}>
                    // Features
                  </div>
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-2 ${
                          isDark ? "text-white/80" : "text-black/80"
                        } font-mono text-sm transform transition-all duration-300 hover:translate-x-2`}
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.color} animate-pulse`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full ${
                    isDark
                      ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                      : "bg-gradient-to-r from-green-700 to-blue-700 hover:from-green-800 hover:to-blue-800 text-white"
                  } font-mono group/btn transform transition-all duration-300 hover:scale-105`}
                >
                  Try Tool
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "1.5s" }}
        >
          <Button
            variant="outline"
            size="lg"
            className={`${
              isDark
                ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            } font-mono px-8 transform transition-all duration-300 hover:scale-105`}
          >
            View All Tools
          </Button>
        </div>
      </div>
    </section>
  )
}
