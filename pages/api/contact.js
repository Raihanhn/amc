import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    fullName,
    email,
    phone,
    country,
    inquiryType,
    nationality,
    timeline,
    notes,
  } = req.body || {};

  if (!fullName || !email || !phone || !country || !inquiryType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== "false", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"AMC Dubai Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Diagnostic Intake — ${fullName} (${inquiryType})`,
      text: `
Full Legal Name: ${fullName}
Email: ${email}
Phone / WhatsApp: ${phone}
Country of Residence: ${country}
Inquiry Vertical Type: ${inquiryType}
Passport Nationality: ${nationality || "—"}
Projected Deployment Timeline: ${timeline || "—"}

Project Scope / Core Need:
${notes || "—"}
      `.trim(),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #1b1f27;">
          <h2 style="color:#0a1830;">New AMC Dubai Diagnostic Intake</h2>
          <table cellpadding="6" style="border-collapse: collapse;">
            <tr><td><strong>Full Legal Name</strong></td><td>${fullName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone / WhatsApp</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Country of Residence</strong></td><td>${country}</td></tr>
            <tr><td><strong>Inquiry Vertical Type</strong></td><td>${inquiryType}</td></tr>
            <tr><td><strong>Passport Nationality</strong></td><td>${nationality || "—"}</td></tr>
            <tr><td><strong>Projected Timeline</strong></td><td>${timeline || "—"}</td></tr>
          </table>
          <p><strong>Project Scope / Core Need:</strong></p>
          <p style="white-space: pre-wrap;">${notes || "—"}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: "Submission received" });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
