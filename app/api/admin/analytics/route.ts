import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await requireAdmin();

    const [
      totalProjects,
      totalSnippets,
      totalBlogPosts,
      totalViews,
      recentProjects,
      recentSnippets,
      recentBlogPosts,
    ] = await Promise.all([
      prisma.project.count(),
      prisma.snippet.count(),
      prisma.blogPost.count(),
      prisma.analytics.aggregate({
        _sum: {
          pageViews: true,
          visitors: true,
        },
      }),
      prisma.project.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          status: true,
          views: true,
          likes: true,
          createdAt: true,
        },
      }),
      prisma.snippet.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          language: true,
          views: true,
          likes: true,
          createdAt: true,
        },
      }),
      prisma.blogPost.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          published: true,
          views: true,
          likes: true,
          createdAt: true,
        },
      }),
    ]);

    const analytics = {
      overview: {
        totalProjects,
        totalSnippets,
        totalBlogPosts,
        totalViews: totalViews._sum.pageViews || 0,
        totalVisitors: totalViews._sum.visitors || 0,
      },
      recent: {
        projects: recentProjects,
        snippets: recentSnippets,
        blogPosts: recentBlogPosts,
      },
    };

    return NextResponse.json(analytics);
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
