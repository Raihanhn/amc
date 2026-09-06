// pages/api/admin/countries/[id].js
import connectDB from "@/lib/mongodb";
import Country from "@/models/Country";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connectDB();

    if (req.method === "PUT") {
      const { name, note, order } = req.body || {};
      const update = {};
      if (typeof name === "string" && name.trim()) update.name = name.trim();
      if (typeof note === "string") update.note = note.trim();
      if (typeof order === "number") update.order = order;

      const updated = await Country.findByIdAndUpdate(id, update, { new: true }).lean();
      if (!updated) return res.status(404).json({ message: "Country not found" });
      return res.status(200).json({ country: updated });
    }

    if (req.method === "DELETE") {
      const deleted = await Country.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: "Country not found" });
      return res.status(200).json({ message: "Deleted" });
    }

    res.setHeader("Allow", ["PUT", "DELETE"]);
    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    console.error("Country update failed:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}