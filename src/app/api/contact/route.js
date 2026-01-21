export async function POST(req) {
  try {

    const { name, phone, email, message } = await req.json();
    console.log( name, phone, email, message )

    if (!name || !phone || !email || !message) {
      return Response.json({ success: false }, { status: 400 });
    }

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Website Lead", email: "noreply@yourdomain.com" },
        to: [{ email: "sales@yourdomain.com", name: "Sales Team" }],
        subject: "New Website Enquiry",
        htmlContent: `
          <h3>New Contact Lead</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      }),
    });
    console.log(brevoRes)

    if (!brevoRes.ok) throw new Error("Brevo mail failed");

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
