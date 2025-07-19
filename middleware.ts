// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboards(.*)"]);

const middleware = clerkMiddleware(async (auth, req: NextRequest) => {
  if (!isProtectedRoute(req)) return NextResponse.next();

const { userId } = await auth(); // ✅ Correcto
  if (!userId) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const userRes = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY!}`,
    },
  });

  if (!userRes.ok) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const user = await userRes.json();
  const email = user.email_addresses?.[0]?.email_address;

  if (email !== "aldersonelliot803@gmail.com") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export default middleware;

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // incluye todas las rutas sin archivos estáticos
    "/(api|trpc)(.*)",        // incluye API y trpc
  ],
};
