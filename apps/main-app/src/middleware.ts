import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host")
  const externalHost =
    hostname !== null && hostname !== process.env["APP_DOMAIN"]

  console.log("middleware", { hostname, externalHost })

  if (externalHost) {
    return NextResponse.rewrite(
      `https://${process.env["APP_DOMAIN"]}/cname/${hostname}`,
    )
  }

  return NextResponse.next()
}
