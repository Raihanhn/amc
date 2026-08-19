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
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

    // 1) Notify AMC admin — full intake details
    const adminMail = transporter.sendMail({
      from: `"AMC Dubai Website" <${process.env.SMTP_USER}>`,
      to: adminEmail,
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

    // 2) Auto-reply confirmation — sent to the applicant
    const userMail = transporter.sendMail({
      from: `"AMC Dubai" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your inquiry — AMC Dubai",
      text: `
Dear ${fullName},

Thank you for reaching out to Asdaq Management Consultancy (AMC Dubai).

We have received your diagnostic intake for: ${inquiryType}.
Our senior legal strategists will review your file and contact you shortly
via the phone or email you provided.

If your matter is urgent, you can reach us directly:
Phone / WhatsApp: +971 56 460 3123
Email: info@amc-dubai.com

Regards,
AMC Dubai — Asdaq Management Consultancy
Powered by Amigos Global
      `.trim(),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #1b1f27; line-height:1.6;">
          <h2 style="color:#0a1830;">Thank you, ${fullName}.</h2>
          <p>We have received your diagnostic intake for
             <strong>${inquiryType}</strong> at Asdaq Management Consultancy
             (AMC Dubai).</p>
          <p>Our senior legal strategists will review your file and contact
             you shortly via the phone or email you provided.</p>
          <p>If your matter is urgent, reach us directly:</p>
          <p>
            Phone / WhatsApp: <a href="tel:+971564603123">+971 56 460 3123</a><br/>
            Email: <a href="mailto:info@amc-dubai.com">info@amc-dubai.com</a>
          </p>
          <p style="margin-top:24px; color:#5b6472; font-size:12px;">
            AMC Dubai — Asdaq Management Consultancy · Powered by Amigos Global
          </p>
        </div>
      `,
    });

    await Promise.all([adminMail, userMail]);

    return res.status(200).json({ message: "Submission received" });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}