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
    console.log(name,phone,email,position,message,resume)

    const buffer = Buffer.from(await resume.arrayBuffer());

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Career Portal",
          email: "no-reply@elmasgroup.com",
        },
        to: [{ email: "hr@elmasgroup.com" }],
        subject: `New Job Application — ${position}`,
        htmlContent: `
          <h3>New Career Application</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
        `,
        attachment: [
          {
            content: buffer.toString("base64"),
            name: resume.name,
          },
        ],
      }),
    });
    console.log(req)

    if (!res.ok) throw new Error("Brevo email failed");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
