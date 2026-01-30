export async function POST(req) {
  try {
    const { name, email, phone, type, project } = await req.json();
    const senderEmail =
      process.env.BREVO_SENDER_EMAIL || "youraccount@brevo.com";
    const salesEmail =
      process.env.BREVO_RECEIVER_EMAIL || "sales@adclan.in";

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Website Lead", email: senderEmail },
        to: [{ email: salesEmail, name: "Sales Team" }],
        subject: `New ${type} Lead - ${project}`,
        htmlContent: `
          <div style="font-family:'Cormorant',serif; max-width:600px; margin:0 auto; border-radius:10px; overflow:hidden; border:1px solid #f0e6d2;">
            <div style="background:#b27f38; color:white; padding:25px; text-align:center;">
              <h2 style="margin:0;">New ${type} Lead</h2>
              <p style="margin:6px 0 0 0;">Project: <strong>${project}</strong></p>
            </div>
            <div style="padding:25px; background:#fff; color:#333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Request:</strong> ${type}</p>
            </div>
          </div>
        `,
      }),
    });

    const result = await res.text();
    console.log("Brevo Mail Response:", result);

    return new Response(null, { status: 200 });
  } catch (err) {
    console.error("Mail API Error:", err);
    return new Response(null, { status: 500 });
  }
}
