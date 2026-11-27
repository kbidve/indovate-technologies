import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { lookup } from "node:dns/promises";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 48 * 1024;
const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS = 12;
const MAX_CONCURRENT = 2;

const projectOptions = [
  "SaaS / Product Development",
  "ERP / Business System",
  "AI Integration",
  "RAG / Knowledge Assistant",
  "LLM App / Copilot",
  "Agentic Workflow",
  "Cloud / DevOps / Integration",
  "Other",
];

let recentRequests: number[] = [];
let activeRequests = 0;

class RequestError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
  }
}

/* HTML escaping */

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* Environment configuration */

function getRequiredEnv(key: string): string {
  const value = process.env[key];

  if (!value?.trim()) {
    throw new Error(`Missing configuration: ${key}`);
  }

  return value;
}

/* Input validation */

function isValidEmail(email: string): boolean {
  return (
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    !/[,;<>:"\\()[\]]/.test(email)
  );
}

function containsControlCharacters(
  value: string,
  multiline = false
): boolean {
  return Array.from(value).some(character => {
    const code = character.charCodeAt(0);

    if (multiline && [9, 10, 13].includes(code)) {
      return false;
    }

    return code < 32 || code === 127;
  });
}

function readField(
  body: Record<string, unknown>,
  key: string,
  min: number,
  max: number,
  multiline = false
): string {
  const raw = body[key];

  if (raw === undefined && min === 0) {
    return "";
  }

  if (typeof raw !== "string") {
    throw new RequestError(
      400,
      `Invalid ${key} field.`
    );
  }

  const value = raw.trim();

  if (value.length < min || value.length > max) {
    throw new RequestError(
      400,
      `Invalid ${key} length.`
    );
  }

  if (containsControlCharacters(value, multiline)) {
    throw new RequestError(
      400,
      `Invalid characters in ${key}.`
    );
  }

  return value;
}

/* Bounded JSON request parsing */

async function readRequestBody(
  req: NextRequest
): Promise<Record<string, unknown>> {
  const contentType = req.headers
    .get("content-type")
    ?.split(";")[0]
    .trim()
    .toLowerCase();

  if (contentType !== "application/json") {
    throw new RequestError(
      415,
      "Content type must be application/json."
    );
  }

  const contentLength = req.headers.get("content-length");

  if (
    contentLength !== null &&
    Number(contentLength) > MAX_BODY_BYTES
  ) {
    throw new RequestError(
      413,
      "Request is too large."
    );
  }

  if (!req.body) {
    throw new RequestError(
      400,
      "Request body is required."
    );
  }

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalBytes += value.byteLength;

      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel().catch(() => undefined);

        throw new RequestError(
          413,
          "Request is too large."
        );
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  let parsed: unknown;

  try {
    const text = new TextDecoder(
      "utf-8",
      { fatal: true }
    ).decode(Buffer.concat(chunks));

    parsed = JSON.parse(text);

  } catch {
    throw new RequestError(
      400,
      "Invalid JSON request."
    );
  }

  if (
    !parsed ||
    typeof parsed !== "object" ||
    Array.isArray(parsed)
  ) {
    throw new RequestError(
      400,
      "Invalid request body."
    );
  }

  return parsed as Record<string, unknown>;
}

/* Basic request throttling */

function reserveSubmission(): void {
  const now = Date.now();

  recentRequests = recentRequests.filter(
    timestamp => now - timestamp < RATE_WINDOW_MS
  );

  if (
    recentRequests.length >= MAX_REQUESTS ||
    activeRequests >= MAX_CONCURRENT
  ) {
    throw new RequestError(
      429,
      "Too many requests. Please try again later."
    );
  }

  recentRequests.push(now);
  activeRequests += 1;
}

/* Contact endpoint */

export async function POST(req: NextRequest) {
  let reserved = false;

  try {
    if (req.headers.get("sec-fetch-site") === "cross-site") {
      throw new RequestError(
        403,
        "Cross-site submission rejected."
      );
    }

    const body = await readRequestBody(req);

    const name = readField(body, "name", 2, 120);
    const email = readField(body, "email", 1, 254);
    const company = readField(body, "company", 0, 160);
    const phone = readField(body, "phone", 0, 40);
    const projectType = readField(body, "projectType", 0, 100);
    const message = readField(body, "message", 10, 5000, true);

    if (!isValidEmail(email)) {
      throw new RequestError(
        400,
        "Please enter a valid email address."
      );
    }

    if (
      projectType &&
      !projectOptions.includes(projectType)
    ) {
      throw new RequestError(
        400,
        "Invalid project type."
      );
    }

    reserveSubmission();
    reserved = true;

    /* SMTP configuration */

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");

    if (
      !Number.isInteger(smtpPort) ||
      smtpPort < 1 ||
      smtpPort > 65535
    ) {
      throw new Error("Invalid SMTP port.");
    }

    const secureSetting = process.env.SMTP_SECURE;

    if (
      secureSetting !== undefined &&
      secureSetting !== "true" &&
      secureSetting !== "false"
    ) {
      throw new Error("Invalid SMTP_SECURE configuration.");
    }

    const smtpSecure = secureSetting === undefined
      ? smtpPort === 465
      : secureSetting === "true";

    const toEmail =
      process.env.CONTACT_TO_EMAIL ||
      "kailas.bidve@indovatetechnologies.com";

    const fromName =
      process.env.CONTACT_FROM_NAME ||
      "Indovate Website";

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      smtpUser;

    if (
      !isValidEmail(fromEmail) ||
      containsControlCharacters(fromEmail) ||
      containsControlCharacters(fromName)
    ) {
      throw new Error("Invalid sender configuration.");
    }

    // Resolve the SMTP hostname through the system DNS resolver.
    const resolvedSmtp = await lookup(smtpHost, {
      family: 4,
    });

    const transporter = nodemailer.createTransport({
      host: resolvedSmtp.address,
      port: smtpPort,
      secure: smtpSecure,
      requireTLS: !smtpSecure,

      auth: {
        user: smtpUser,
        pass: smtpPass,
      },

      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 30_000,

      tls: {
        servername: smtpHost,
        rejectUnauthorized: true,
      },
    });

    /* Safe email content */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safePhone = escapeHtml(phone);
    const safeProjectType = escapeHtml(projectType);

    const safeMessage = escapeHtml(message)
      .replace(/\r\n|\r|\n/g, "<br />");

    const info = await transporter.sendMail({
      from: {
        name: fromName,
        address: fromEmail,
      },

      to: toEmail,

      replyTo: {
        name,
        address: email,
      },

      subject: "New Website Project Inquiry",

      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
          <h2>New Project Inquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>

          ${safeCompany
            ? `<p><strong>Company:</strong> ${safeCompany}</p>`
            : ""}

          ${safePhone
            ? `<p><strong>Phone:</strong> ${safePhone}</p>`
            : ""}

          ${safeProjectType
            ? `<p><strong>Project type:</strong> ${safeProjectType}</p>`
            : ""}

          <p><strong>Project details:</strong></p>

          <p>${safeMessage}</p>
        </div>
      `,

      text: [
        "New Project Inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        phone ? `Phone: ${phone}` : "",
        projectType ? `Project type: ${projectType}` : "",
        "",
        "Project details:",
        message,
      ].filter(Boolean).join("\n"),
    });

    if (!info.accepted?.length) {
      throw new Error("SMTP did not accept the recipient.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
      },
      {
        status: 200,
      }
    );

  } catch (error: unknown) {
    if (error instanceof RequestError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: error.status,

          headers: error.status === 429
            ? { "Retry-After": "60" }
            : {},
        }
      );
    }

    console.error(
      "[Contact API] Inquiry submission failed."
    );

    return NextResponse.json(
      {
        success: false,
        error: "Unable to submit inquiry. Please contact us directly.",
      },
      {
        status: 500,
      }
    );

  } finally {
    if (reserved) {
      activeRequests -= 1;
    }
  }
}
