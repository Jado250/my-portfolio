import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const toAddress = process.env.CONTACT_EMAIL || "kjado250@gmail.com";

    // If SMTP not configured, return a helpful error (or simulate success in dev)
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      // In development, optionally simulate success so the UI still works.
      if (process.env.NODE_ENV !== "production") {
        console.warn("SMTP not configured, simulating contact send (dev mode).");
        return NextResponse.json({ ok: true });
      }

      return NextResponse.json(
        { ok: false, error: "SMTP configuration is missing on the server." },
        { status: 500 }
      );
    }

    // Try to dynamically import nodemailer so the app can still compile when
    // the package isn't installed (avoids build-time static resolution).
    let nodemailer: any;
    try {
      const mod = await import("nodemailer");
      nodemailer = mod.default ?? mod;
    } catch (e) {
      console.error("nodemailer dynamic import failed:", e);
      return NextResponse.json({ ok: false, error: "Server mailer not available." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const html = `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <div>${message.replace(/\n/g, "<br />")}</div>
    `;

    await transporter.sendMail({
      from: toAddress,
      replyTo: `${name} <${email}>`,
      to: toAddress,
      subject: `Contact form: ${subject || "No subject"}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html,
    });

    const confirmationHtml = `
      <h2>Thanks for reaching out!</h2>
      <p>Hi ${name},</p>
      <p>Thanks for your message. I&apos;ve received your contact request and will reply as soon as possible.</p>
      <p><strong>Your submission details:</strong></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <div>${message.replace(/\n/g, "<br />")}</div>
      <p>Jean de Dieu KWIZERA</p>
    `;

    await transporter.sendMail({
      from: toAddress,
      to: email,
      subject: `Copy of your message to ${toAddress}`,
      text: `Hi ${name},\n\nThanks for your message. I have received your contact request and will reply as soon as possible.\n\nYour submission details:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}\n\nJean de Dieu KWIZERA`,
      html: confirmationHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}
