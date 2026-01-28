import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const position = formData.get("position");
    const message = formData.get("message");
    const resume = formData.get("resume");

    if (!name || !phone || !email || !position || !resume) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    const senderEmail = process.env.BREVO_SENDER_EMAIL || "no-reply@adclan.in";
    const hrEmail = process.env.BREVO_RECEIVER_EMAIL || "hr@adclan.in";
    const host = req.headers.get("host"); // e.g., localhost:3000 or yourdomain.com
    const protocol = host.includes("localhost") ? "http" : "https";
    const websiteURL = `${protocol}://${host}`;

    // -------------------------
    // 1️⃣ Send email to HR Team
    // -------------------------
    const hrRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Career Portal", email: senderEmail },
        to: [{ email: hrEmail, name: "HR Team" }],
        subject: `New Job Application — ${position}`,
        htmlContent: `
          <div style="font-family: 'Cormorant', serif; max-width:600px; margin:0 auto; border-radius:10px; overflow:hidden; border:1px solid #f0e6d2;">
            <div style="background-color:#b27f38; color:white; padding:25px; text-align:center;">
              <h2 style="margin:0;">New Job Application</h2>
              <p style="margin:5px 0 0 0;">Position: <strong>${position}</strong></p>
            </div>
            <div style="padding:25px; background-color:#fff; color:#333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong> ${message || "N/A"}</p>
            </div>
            <div style="background-color:#f0e6d2; color:#333; padding:20px; text-align:center; font-size:12px;">
              <p style="margin:0;">Adclan Media &copy; 2026. All rights reserved.</p>
              <p style="margin:0;">This is an automated message. Please do not reply.</p>
            </div>
          </div>
        `,
        attachment: [{ content: buffer.toString("base64"), name: resume.name }],
      }),
    });

    if (!hrRes.ok) {
      const errText = await hrRes.text();
      throw new Error("Failed to send to HR: " + errText);
    }

    // -------------------------
    // 2️⃣ Send Thank You Email to Applicant
    // -------------------------
    const userRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Career Portal", email: senderEmail },
        to: [{ email, name }],
        subject: `Thank You for Applying — ${position}`,
        htmlContent: `
          <div style="font-family: 'Cormorant', serif; max-width:600px; margin:0 auto; border-radius:10px; overflow:hidden; border:1px solid #f0e6d2;">
            <div style="background-color:#b27f38; color:white; padding:30px; text-align:center;">
              <h1 style="margin:0; font-size:28px;">Thank You, ${name}!</h1>
              <p style="margin:5px 0 0 0; font-size:16px;">We’ve received your application</p>
            </div>
            <div style="padding:30px; background-color:#fff; color:#333;">
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for applying for the position of <strong>${position}</strong> at <strong>Adclan Media</strong>. Our HR team will review your application and get back to you shortly.</p>

              <div style="background-color:#f9f7f1; padding:20px; border-radius:8px; margin:20px 0;">
                <p style="margin:5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin:5px 0;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin:5px 0;"><strong>Message:</strong> ${message || "N/A"}</p>
              </div>

              <p style="text-align:center; margin:25px 0;">
                <a href="${websiteURL}" style="background-color:#b27f38; color:white; text-decoration:none; padding:12px 25px; border-radius:6px; font-weight:bold; display:inline-block;">
                  Visit Our Website
                </a>
              </p>
            </div>
            <div style="background-color:#f0e6d2; color:#333; padding:20px; text-align:center; font-size:12px;">
              <p style="margin:0;">Adclan Media &copy; 2026. All rights reserved.</p>
              <p style="margin:0;">This is an automated message. Please do not reply.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!userRes.ok) {
      const errText = await userRes.text();
      console.warn("Failed to send Thank You email: " + errText);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
