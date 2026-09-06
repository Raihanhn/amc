// pages/api/admin/login.js
import bcrypt from "bcryptjs";
import { signAdminToken, ADMIN_COOKIE_NAME } from "@/lib/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

   // TEMP DEBUG — remove after we find the bug
  // console.log("=== LOGIN DEBUG ===");
  // console.log("Received username:", JSON.stringify(username), "length:", username.length);
  // console.log("Received password:", JSON.stringify(password), "length:", password.length);
  // console.log("Env ADMIN_USERNAME:", JSON.stringify(ADMIN_USERNAME), "length:", ADMIN_USERNAME?.length);
  // console.log("Env ADMIN_PASSWORD_HASH:", JSON.stringify(ADMIN_PASSWORD_HASH));
  // console.log("===================");

  if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
    console.error("ADMIN_USERNAME / ADMIN_PASSWORD_HASH not configured");
    return res.status(500).json({ message: "Admin login is not configured" });
  }

  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = signAdminToken(username);
  const isProd = process.env.NODE_ENV === "production";

  const cookieParts = [
    `${ADMIN_COOKIE_NAME}=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${7 * 24 * 60 * 60}`, // 7 days
  ];
  if (isProd) cookieParts.push("Secure");

  res.setHeader("Set-Cookie", cookieParts.join("; "));
  return res.status(200).json({ message: "Logged in" });
}