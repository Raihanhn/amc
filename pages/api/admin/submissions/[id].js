// pages/api/admin/submissions/[id].js
import connectDB from "@/lib/mongodb";
import Submission from "@/models/Submission";

const VALID_STATUSES = ["new", "read", "contacted", "closed"];

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connectDB();

    if (req.method === "PATCH") {
      const { status } = req.body || {};
      if (!VALID_STATUSES.includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
      }
      const updated = await Submission.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      ).lean();
      if (!updated) return res.status(404).json({ message: "Submission not found" });
      return res.status(200).json({ submission: updated });
    }

    if (req.method === "DELETE") {
      const deleted = await Submission.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: "Submission not found" });
      return res.status(200).json({ message: "Deleted" });
    }

    res.setHeader("Allow", ["PATCH", "DELETE"]);
    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    console.error("Submission update failed:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}