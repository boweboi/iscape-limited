import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL ?? "hello@iscape.co.nz";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry was received, but email delivery is not configured. Please set SMTP environment variables.",
      },
      { status: 200 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailText = `New contact enquiry from ${body.name} <${body.email}>\n\nPhone: ${body.phone ?? "N/A"}\n\nMessage:\n${body.message}`;

  try {
    await transporter.sendMail({
      from: `${body.name} <${body.email}>`,
      to: recipientEmail,
      subject: `iScape enquiry from ${body.name}`,
      text: mailText,
      html: `<p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> ${body.email}</p><p><strong>Phone:</strong> ${body.phone ?? "N/A"}</p><p><strong>Message:</strong></p><p>${body.message.replace(/\n/g, "<br />")}</p>`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Unable to send email at this time. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Your enquiry has been received. We will respond shortly.",
    },
    { status: 200 }
  );
}
