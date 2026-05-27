import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getRequiredEnv(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "kailas.bidve@indovatetechnologies.com";

    const fromName = process.env.CONTACT_FROM_NAME || "Indovate Website";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "";
    const safePhone = phone ? escapeHtml(phone) : "";
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `"${fromName}" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission by ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ""}
          ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}

          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${phone ? `Phone: ${phone}` : ""}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully.",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("[Contact API] Failed to send contact email:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          process.env.NODE_ENV === "development"
            ? error?.message || "Failed to send email."
            : "Failed to send email.",
      },
      { status: 500 },
    );
  }
}
