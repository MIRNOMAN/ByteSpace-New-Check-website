import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js 16 Proxy Convention (replaces deprecated middleware.ts)
 * Runs on the edge/server before a request is completed.
 *
 * Responsibilities:
 * 1. Security Headers (CSP, FrameGuard, NoSniff, ReferrerPolicy)
 * 2. Request Tracing (x-request-id)
 * 3. Route Protection & Auth Session Guard
 * 4. Path Rewrites / Redirects
 */

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestId = request.headers.get("x-request-id") || crypto.randomUUID();

  // 1. Prepare request headers to pass downstream to Route Handlers & Server Components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-request-id", requestId);
  requestHeaders.set("x-pathname", pathname);

  // 2. Auth Guard example for protected routes (e.g., /admin, /dashboard, etc.)
  const isProtectedPath = pathname.startsWith("/dashboard") || pathname.startsWith("/admin");
  const authSessionToken = request.cookies.get("session-token")?.value;

  if (isProtectedPath && !authSessionToken) {
    // If accessing protected routes without session, redirect to login or show notice
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("auth_required", "true");
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 3. Forward request with enhanced headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // 4. Inject Enterprise Security Headers on Outgoing Response
  response.headers.set("x-request-id", requestId);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

/**
 * Matcher configuration
 * Optimized negative lookahead to exclude static assets, images, and favicon.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - public asset files (.*\\..*)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
