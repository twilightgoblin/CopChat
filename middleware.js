import { NextResponse } from "next/server"

export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/admin/login"

  // Check if the user is authenticated using cookies
  const isAuthenticated = request.cookies.has("adminAuthenticated")

  // If trying to access any admin route without authentication
  if (path.startsWith('/admin') && !isPublicPath && !isAuthenticated) {
    // Redirect to login page
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // If authenticated user tries to access login page
  if (isPublicPath && isAuthenticated) {
    // Redirect to admin dashboard
    return NextResponse.redirect(new URL("/admin/updates", request.url))
  }

  // Allow access to login page if not authenticated
  if (isPublicPath && !isAuthenticated) {
    return NextResponse.next()
  }

  // Allow access to other admin routes if authenticated
  if (path.startsWith('/admin') && isAuthenticated) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Match all admin routes
    "/admin/:path*",
    // Match the login page specifically
    "/admin/login"
  ]
} 