// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const ADMIN_COOKIE_NAME = "amc_admin_session";

async function isValidSession(token) {
  if (!token || !process.env.JWT_SECRET) return false;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload?.role === "admin";
  } catch {
    return false;
  }
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const valid = await isValidSession(token);

  const isLoginPage = pathname === "/admin/login";
  const isLoginApi = pathname === "/api/admin/login";

  // Admin pages: redirect to /admin/login if not authenticated.
  if (pathname.startsWith("/admin") && !isLoginPage) {
    if (!valid) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Admin API routes: return 401 JSON instead of redirecting.
  if (pathname.startsWith("/api/admin") && !isLoginApi) {
    if (!valid) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  // Already logged in and visiting the login page -> go straight to dashboard.
  if (isLoginPage && valid) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};