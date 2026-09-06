// models/Country.js
import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    // Small subtitle shown under the name on the Tourist Visa cards,
    // e.g. "Tourist Visa" or "Select Countries". Not used on Work Visa page.
    note: { type: String, trim: true, default: "Tourist Visa" },
    // Which page this country card belongs to.
    type: { type: String, enum: ["tourist", "work"], required: true },
    // Controls display order (ascending). New items go to the end.
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

CountrySchema.index({ type: 1, order: 1 });

export default mongoose.models.Country ||
  mongoose.model("Country", CountrySchema);