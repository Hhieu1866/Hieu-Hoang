"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ImageIcon,
  Palette,
  FileImage,
  Youtube,
  Music,
  Video,
  Zap,
  ArrowRight,
  Search,
  Star,
  Clock,
  Users,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ToolsPage() {
  const [isDark, setIsDark] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const tools = [
    {
      title: "Image Format Converter",
      description:
        "Convert images between PNG, JPG, WebP, AVIF, and more formats with quality control and batch processing.",
      longDescription:
        "A powerful image conversion tool that supports multiple formats including PNG, JPG, WebP, AVIF, BMP, and TIFF. Features include quality adjustment, batch processing, and format optimization.",
      icon: FileImage,
      color: "from-blue-500 to-cyan-500",
      features: ["Multiple formats", "Batch conversion", "Quality control", "Format optimization"],
      category: "Image Processing",
      rating: 4.8,
      users: "12.5K",
      lastUpdated: "2 days ago",
      status: "Popular",
      thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Color Palette Extractor",
      description:
        "Extract beautiful color palettes from images and get color codes in hex, RGB, HSL, and more formats.",
      longDescription:
        "Advanced color extraction tool that analyzes images to generate harmonious color palettes. Perfect for designers and developers who need consistent color schemes.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      features: ["Palette extraction", "Multiple color formats", "Color harmony analysis", "Export options"],
      category: "Design Tools",
      rating: 4.9,
      users: "8.2K",
      lastUpdated: "1 week ago",
      status: "Featured",
      thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "YouTube Media Downloader",
      description:
        "Download YouTube videos in various qualities or convert them to MP3 audio format quickly and easily.",
      longDescription:
        "Comprehensive YouTube downloader supporting multiple video qualities and audio extraction. Fast, reliable, and supports playlist downloads.",
      icon: Youtube,
      color: "from-red-500 to-orange-500",
      features: ["HD/4K quality", "MP3/MP4 formats", "Playlist support", "Fast processing"],
      category: "Media Tools",
      rating: 4.7,
      users: "25.1K",
      lastUpdated: "3 days ago",
      status: "Popular",
      thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Image Optimizer Pro",
      description: "Compress and optimize images without losing quality using advanced algorithms for web performance.",
      longDescription:
        "Professional image optimization tool that reduces file sizes while maintaining visual quality. Perfect for web developers and content creators.",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      features: ["Lossless compression", "Bulk optimization", "Web optimization", "Size comparison"],
      category: "Optimization",
      rating: 4.6,
      users: "6.8K",
      lastUpdated: "5 days ago",
      status: "New",
      thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Audio Format Converter",
      description: "Convert audio files between MP3, WAV, FLAC, AAC, and other formats with bitrate control.",
      longDescription:
        "Professional audio converter supporting all major audio formats with advanced options for bitrate, sample rate, and quality control.",
      icon: Music,
      color: "from-indigo-500 to-purple-500",
      features: ["Multiple formats", "Bitrate control", "Batch processing", "Metadata preservation"],
      category: "Media Tools",
      rating: 4.5,
      users: "4.3K",
      lastUpdated: "1 week ago",
      status: "Updated",
      thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Video Compressor",
      description: "Reduce video file sizes while maintaining quality for faster uploads and storage optimization.",
      longDescription:
        "Advanced video compression tool that uses modern codecs to significantly reduce file sizes without compromising visual quality.",
      icon: Video,
      color: "from-teal-500 to-blue-500",
      features: ["Smart compression", "Quality presets", "Format conversion", "Preview comparison"],
      category: "Media Tools",
      rating: 4.4,
      users: "3.7K",
      lastUpdated: "4 days ago",
      status: "Beta",
      thumbnail: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = ["All", "Image Processing", "Design Tools", "Media Tools", "Optimization"]

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Popular":
        return isDark ? "bg-orange-900 text-orange-400" : "bg-orange-100 text-orange-700"
      case "Featured":
        return isDark ? "bg-purple-900 text-purple-400" : "bg-purple-100 text-purple-700"
      case "New":
        return isDark ? "bg-green-900 text-green-400" : "bg-green-100 text-green-700"
      case "Updated":
        return isDark ? "bg-blue-900 text-blue-400" : "bg-blue-100 text-blue-700"
      case "Beta":
        return isDark ? "bg-yellow-900 text-yellow-400" : "bg-yellow-100 text-yellow-700"
      default:
        return isDark ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-700"
    }
  }

  return (
    <main
      className="min-h-screen font-mono transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f8f9fa" }}
    >
      <Navigation />

      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto py-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${isDark ? "text-white" : "text-black"} font-mono`}>
              <span className={isDark ? "text-green-400" : "text-green-600"}>Tools</span>
              <span className={isDark ? "text-green-400" : "text-green-600"}>.</span>
            </h1>
            <p className={`${isDark ? "text-white/80" : "text-black/80"} font-mono text-lg mb-8`}>
              // A collection of useful web tools and utilities for developers, designers, and content creators
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                />
                <Input
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-black"} font-mono`}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`font-mono ${
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
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <Card
                key={tool.title}
                className={`${
                  isDark
                    ? "bg-gray-900 border-gray-700 hover:border-green-400"
                    : "bg-white border-gray-300 hover:border-green-600"
                } transition-all duration-500 group cursor-pointer overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <ImageIcon
                    src={tool.thumbnail || "/placeholder.svg"}
                    alt={tool.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 ${getStatusColor(tool.status)} font-mono text-xs rounded-full backdrop-blur-sm`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  {/* Tool Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${tool.color} backdrop-blur-sm`}>
                      <tool.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle
                        className={`${
                          isDark ? "text-white group-hover:text-green-400" : "text-black group-hover:text-green-600"
                        } font-mono text-lg transition-colors duration-300 mb-2`}
                      >
                        {tool.title}
                      </CardTitle>

                      {/* Stats */}
                      <div
                        className={`flex items-center gap-4 text-sm ${isDark ? "text-white/60" : "text-black/60"} font-mono mb-3`}
                      >
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          {tool.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {tool.users}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {tool.lastUpdated}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p
                    className={`${
                      isDark ? "text-white/70" : "text-black/70"
                    } font-mono text-sm mb-4 leading-relaxed line-clamp-3`}
                  >
                    {tool.description}
                  </p>

                  <div className="mb-4">
                    <div className={`${isDark ? "text-green-400" : "text-green-600"} font-mono text-sm mb-2`}>
                      // Features
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.slice(0, 3).map((feature) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className={`${
                            isDark ? "bg-gray-800 text-white/80" : "bg-gray-200 text-black/80"
                          } font-mono text-xs`}
                        >
                          {feature}
                        </Badge>
                      ))}
                      {tool.features.length > 3 && (
                        <Badge
                          variant="secondary"
                          className={`${
                            isDark ? "bg-gray-800 text-white/80" : "bg-gray-200 text-black/80"
                          } font-mono text-xs`}
                        >
                          +{tool.features.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    className={`w-full ${
                      isDark
                        ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                        : "bg-gradient-to-r from-green-700 to-blue-700 hover:from-green-800 hover:to-blue-800 text-white"
                    } font-mono group/btn`}
                  >
                    Use Tool
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <div className={`${isDark ? "text-gray-400" : "text-gray-600"} font-mono`}>
                <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl mb-2">No tools found</p>
                <p className="text-sm">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
