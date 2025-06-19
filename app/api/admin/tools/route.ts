import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await requireAdmin();

    const tools = await prisma.tool.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(tools);
  } catch (error) {
    console.error("Get tools error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user } = await requireAdmin();
    const data = await request.json();

    const tool = await prisma.tool.create({
      data: {
        ...data,
        authorId: user.id,
      },
    });

    return NextResponse.json(tool);
  } catch (error) {
    console.error("Create tool error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
