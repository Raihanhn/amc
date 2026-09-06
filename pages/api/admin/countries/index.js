// pages/api/admin/countries/index.js
import connectDB from "@/lib/mongodb";
import Country from "@/models/Country";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === "GET") {
      const { type } = req.query; // "tourist" | "work"
      const filter = type ? { type } : {};
      const countries = await Country.find(filter).sort({ order: 1, createdAt: 1 }).lean();
      return res.status(200).json({ countries });
    }

    if (req.method === "POST") {
      const { name, note, type } = req.body || {};
      if (!name || !type || !["tourist", "work"].includes(type)) {
        return res.status(400).json({ message: "name and a valid type are required" });
      }
      const last = await Country.findOne({ type }).sort({ order: -1 }).lean();
      const nextOrder = last ? last.order + 1 : 0;

      const country = await Country.create({
        name: name.trim(),
        note: type === "tourist" ? (note || "Tourist Visa").trim() : undefined,
        type,
        order: nextOrder,
      });
      return res.status(201).json({ country });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    console.error("Countries API error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}