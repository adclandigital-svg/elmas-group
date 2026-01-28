import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing fields" }),
        { status: 400 }
      );
    }

    const senderEmail = process.env.BREVO_SENDER_EMAIL || "youraccount@brevo.com";
    const salesEmail = process.env.BREVO_RECEIVER_EMAIL || "sales@adclan.in";
    const host = req.headers.get("host"); // e.g., localhost:3000 or yourdomain.com
    const protocol = host.includes("localhost") ? "http" : "https";
    const websiteURL = `${protocol}://${host}`;

    // -------------------------
    // 1️⃣ Send email to Sales Team
    // -------------------------
    const salesRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Website Lead", email: senderEmail },
        to: [{ email: salesEmail, name: "Sales Team" }],
        subject: "New Website Enquiry",
        htmlContent: `
          <div style="font-family: 'Cormorant', serif; max-width:600px; margin:0 auto; border-radius:10px; overflow:hidden; border:1px solid #f0e6d2;">
            <div style="background-color:#b27f38; color:white; padding:25px; text-align:center;">
              <h2 style="margin:0;">New Contact Lead</h2>
            </div>
            <div style="padding:25px; background-color:#fff; color:#333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
            <div style="background-color:#f0e6d2; color:#333; padding:20px; text-align:center; font-size:12px;">
              <p style="margin:0;">${websiteURL} &copy; 2026. All rights reserved.</p>
              <p style="margin:0;">Automated message. Please do not reply.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!salesRes.ok) {
      const errText = await salesRes.text();
      throw new Error("Failed to send to Sales: " + errText);
    }

    // -------------------------
    // 2️⃣ Send Thank You email to the user
    // -------------------------
    const userRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Website Team", email: senderEmail },
        to: [{ email, name }],
        subject: "Thank You for Contacting Us",
        htmlContent: `
          <div style="font-family: 'Cormorant', serif; max-width:600px; margin:0 auto; border-radius:10px; overflow:hidden; border:1px solid #f0e6d2;">
            <div style="background-color:#b27f38; color:white; padding:30px; text-align:center;">
              <h1 style="margin:0; font-size:28px;">Thank You, ${name}!</h1>
              <p style="margin:5px 0 0 0; font-size:16px;">We have received your message</p>
            </div>
            <div style="padding:30px; background-color:#fff; color:#333;">
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to us. Our team will review your message and get back to you shortly.</p>

              <div style="background-color:#f9f7f1; padding:20px; border-radius:8px; margin:20px 0;">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
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

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
