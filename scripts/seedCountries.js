// scripts/seedCountries.js
//
// One-time script to migrate the original hardcoded country lists into MongoDB.
// Run it once after setting MONGODB_URI in .env.local:
//
//   node scripts/seedCountries.js
//
// Safe to re-run: it skips any type that already has countries in the DB.

require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    note: { type: String, trim: true, default: "Tourist Visa" },
    type: { type: String, enum: ["tourist", "work"], required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);
const Country = mongoose.models.Country || mongoose.model("Country", CountrySchema);

const TOURIST_COUNTRIES = [
  { name: "Canada", note: "Tourist Visa" },
  { name: "Schengen Region", note: "Tourist Visa" },
  { name: "Dubai, UAE", note: "Tourist Visa" },
  { name: "Armenia", note: "Tourist Visa" },
  { name: "Russia", note: "Tourist Visa" },
  { name: "Turkey", note: "Tourist Visa" },
  { name: "Belarus", note: "Tourist Visa" },
  { name: "Uzbekistan", note: "Tourist Visa" },
  { name: "Kazakhstan", note: "Tourist Visa" },
  { name: "Saudi Arabia", note: "Tourist Visa" },
  { name: "African Region", note: "Select Countries" },
];

const WORK_COUNTRIES = [
  "Serbia",
  "North Macedonia",
  "Moldova",
  "Belarus",
  "Portugal",
  "Malta",
  "Poland",
  "Greece",
  "Estonia",
  "Slovakia",
].map((name) => ({ name }));

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI is not set. Add it to .env.local first.");
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB.");

  const touristCount = await Country.countDocuments({ type: "tourist" });
  if (touristCount === 0) {
    await Country.insertMany(
      TOURIST_COUNTRIES.map((c, i) => ({ ...c, type: "tourist", order: i }))
    );
    console.log(`Seeded ${TOURIST_COUNTRIES.length} tourist visa countries.`);
  } else {
    console.log("Tourist visa countries already exist — skipping.");
  }

  const workCount = await Country.countDocuments({ type: "work" });
  if (workCount === 0) {
    await Country.insertMany(
      WORK_COUNTRIES.map((c, i) => ({ ...c, type: "work", order: i }))
    );
    console.log(`Seeded ${WORK_COUNTRIES.length} work visa countries.`);
  } else {
    console.log("Work visa countries already exist — skipping.");
  }

  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});