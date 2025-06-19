import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAdmin } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    await requireAdmin()

    const snippets = await prisma.snippet.findMany({
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

    return NextResponse.json(snippets)
  } catch (error) {
    console.error("Get snippets error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user } = await requireAdmin()
    const data = await request.json()

    const snippet = await prisma.snippet.create({
      data: {
        ...data,
        authorId: user.id,
      },
    })

    return NextResponse.json(snippet)
  } catch (error) {
    console.error("Create snippet error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
