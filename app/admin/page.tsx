"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Code, Folder, Eye, Heart, Users } from "lucide-react"
import { AdminLayout } from "@/components/admin/admin-layout"
import api from "@/lib/api"

interface Analytics {
  overview: {
    totalProjects: number
    totalSnippets: number
    totalBlogPosts: number
    totalViews: number
    totalVisitors: number
  }
  recent: {
    projects: any[]
    snippets: any[]
    blogPosts: any[]
  }
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const response = await api.get("/admin/analytics")
      setAnalytics(response.data)
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-green-400 font-mono">Loading dashboard...</div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white font-mono mb-2">
            <span className="text-green-400">Dashboard</span>
            <span className="text-green-400">.</span>
          </h1>
          <p className="text-white/70 font-mono">// Portfolio management and analytics overview</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 font-mono text-sm">Projects</p>
                  <p className="text-2xl font-bold text-white font-mono">{analytics?.overview.totalProjects || 0}</p>
                </div>
                <Folder className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 font-mono text-sm">Snippets</p>
                  <p className="text-2xl font-bold text-white font-mono">{analytics?.overview.totalSnippets || 0}</p>
                </div>
                <Code className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 font-mono text-sm">Blog Posts</p>
                  <p className="text-2xl font-bold text-white font-mono">{analytics?.overview.totalBlogPosts || 0}</p>
                </div>
                <FileText className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 font-mono text-sm">Total Views</p>
                  <p className="text-2xl font-bold text-white font-mono">
                    {analytics?.overview.totalViews.toLocaleString() || 0}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 font-mono text-sm">Visitors</p>
                  <p className="text-2xl font-bold text-white font-mono">
                    {analytics?.overview.totalVisitors.toLocaleString() || 0}
                  </p>
                </div>
                <Users className="h-8 w-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Projects */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <Folder className="h-5 w-5 text-blue-400" />
                Recent Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics?.recent.projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <div>
                      <p className="text-white font-mono text-sm font-medium">{project.title}</p>
                      <p className="text-gray-400 font-mono text-xs">{project.status}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-gray-400 flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {project.views}
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {project.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Snippets */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-400" />
                Recent Snippets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics?.recent.snippets.map((snippet) => (
                  <div key={snippet.id} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <div>
                      <p className="text-white font-mono text-sm font-medium">{snippet.title}</p>
                      <p className="text-gray-400 font-mono text-xs">{snippet.language}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-gray-400 flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {snippet.views}
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {snippet.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Blog Posts */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-400" />
                Recent Blog Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics?.recent.blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <div>
                      <p className="text-white font-mono text-sm font-medium line-clamp-1">{post.title}</p>
                      <p className="text-gray-400 font-mono text-xs">{post.published ? "Published" : "Draft"}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-gray-400 flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white font-mono">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-mono">
                <Folder className="h-4 w-4 mr-2" />
                New Project
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-mono">
                <Code className="h-4 w-4 mr-2" />
                New Snippet
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white font-mono">
                <FileText className="h-4 w-4 mr-2" />
                New Blog Post
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
