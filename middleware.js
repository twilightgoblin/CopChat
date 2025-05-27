import { NextResponse } from "next/server"

export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/admin/login"

  // Check if the user is authenticated using cookies
  const isAuthenticated = request.cookies.has("adminAuthenticated")

  // If trying to access admin routes without authentication
  if (!isPublicPath && !isAuthenticated) {
    // Redirect to login page
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // If authenticated user tries to access login page
  if (isPublicPath && isAuthenticated) {
    // Redirect to admin dashboard
    return NextResponse.redirect(new URL("/admin/updates", request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    "/admin/:path*",
    "/admin/login"
  ]
} 