import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAdmin } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    await requireAdmin()

    const blogPosts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(blogPosts)
  } catch (error) {
    console.error("Get blog posts error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user } = await requireAdmin()
    const data = await request.json()

    const blogPost = await prisma.blogPost.create({
      data: {
        ...data,
        authorId: user.id,
        slug: data.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""),
      },
    })

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error("Create blog post error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
