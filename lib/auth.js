// lib/auth.js
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
export const ADMIN_COOKIE_NAME = "amc_admin_session";

export function signAdminToken(username) {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing. Set it in your .env.local.");
  }
  return jwt.sign({ role: "admin", username }, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyAdminToken(token) {
  if (!token || !JWT_SECRET) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload?.role === "admin" ? payload : null;
  } catch {
    return null;
  }
}

// Reads + verifies the session cookie from a Next.js API/page request.
export function getAdminFromRequest(req) {
  const token = req.cookies?.[ADMIN_COOKIE_NAME];
  return verifyAdminToken(token);
}