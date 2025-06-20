import { Lucia } from "lucia"
import { PrismaAdapter } from "@lucia-auth/adapter-prisma"
import { prisma } from "./prisma"
import { cookies } from "next/headers"
import { cache } from "react"
import type { User, Session } from "@prisma/client"

const adapter = new PrismaAdapter(prisma.session, prisma.user)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      email: attributes.email,
      username: attributes.username,
      role: attributes.role,
    }
  },
})

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: {
      email: string
      username: string
      role: string
    }
  }
}

export const validateRequest = cache(
  async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
    if (!sessionId) {
      return {
        user: null,
        session: null,
      }
    }

    const result = await lucia.validateSession(sessionId)
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id)
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie()
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
      }
    } catch {}
    return result
  },
)

export const requireAuth = async () => {
  const { user, session } = await validateRequest()
  if (!user || !session) {
    throw new Error("Unauthorized")
  }
  return { user, session }
}

export const requireAdmin = async () => {
  const { user, session } = await requireAuth()
  if (user.role !== "ADMIN") {
    throw new Error("Admin access required")
  }
  return { user, session }
}
