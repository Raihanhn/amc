// pages/api/admin/logout.js
import { ADMIN_COOKIE_NAME } from "@/lib/auth";

export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    `${ADMIN_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
  );
  return res.status(200).json({ message: "Logged out" });
}