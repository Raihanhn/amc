//pages/api/contact.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, email, phone, country, inquiryType, nationality, timeline, notes } = req.body || {};

  if (!fullName || !email || !phone || !country || !inquiryType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // TODO: Wire this up to a real email/CRM service, e.g. Nodemailer or Resend.
  // For now we just log the submission server-side so it shows up in your
  // hosting provider's function logs.
  console.log("New AMC Dubai contact submission:", {
    fullName,
    email,
    phone,
    country,
    inquiryType,
    nationality,
    timeline,
    notes,
    receivedAt: new Date().toISOString(),
  });

  return res.status(200).json({ message: "Submission received" });
}