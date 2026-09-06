// models/Submission.js
import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    inquiryType: { type: String, required: true, trim: true },
    nationality: { type: String, trim: true, default: "" },
    timeline: { type: String, trim: true, default: "" },
    notes: { type: String, trim: true, default: "" },
    status: {
      type: String,
      enum: ["new", "read", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

export default mongoose.models.Submission ||
  mongoose.model("Submission", SubmissionSchema);