// pages/api/admin/submissions/index.js
import connectDB from "@/lib/mongodb";
import Submission from "@/models/Submission";

// NOTE: /admin/* and /api/admin/* routes are already protected by middleware.js,
// which checks the admin session cookie before this handler ever runs.

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();
    // Newest first — serial numbers are assigned on the client from this order.
    const submissions = await Submission.find({}).sort({ createdAt: -1 }).lean();
    return res.status(200).json({ submissions });
  } catch (err) {
    console.error("Failed to fetch submissions:", err);
    return res.status(500).json({ message: "Failed to fetch submissions" });
  }
}