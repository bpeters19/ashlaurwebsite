import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const ALLOWED_UPLOAD_TYPES = new Set(["application/pdf", "application/zip", "application/x-zip-compressed"]);

function hasAllowedUploadExtension(filename: string): boolean {
  const extension = filename.toLowerCase().split(".").pop() || "";
  return extension === "pdf" || extension === "zip";
}

async function verifyTurnstile(token: string | null, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    // TODO(env): Set TURNSTILE_SECRET_KEY in production to enforce bot protection.
    return true;
  }

  if (!token) {
    return false;
  }

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) {
    body.append("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

function getClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? null;
  }

  return request.headers.get("x-real-ip")?.trim() ?? null;
}

function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const company = String(formData.get("company") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectName = String(formData.get("projectName") || "").trim();
    const bidDate = String(formData.get("bidDate") || "").trim();
    const scope = String(formData.get("scope") || "").trim();
    const plansLink = String(formData.get("plansLink") || "").trim();
    const turnstileToken = String(formData.get("turnstileToken") || "").trim();
    const honeypot = String(formData.get("companyWebsite") || "").trim();
    const plansUpload = formData.get("plansUpload");

    if (honeypot) {
      return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
    }

    if (!company || !contact || !email || !projectName || !bidDate || !scope) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (!plansLink) {
      return NextResponse.json({ message: "Plans link is required." }, { status: 400 });
    }

    if (plansUpload instanceof File && plansUpload.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        { message: "Upload must be 4 MB or less." },
        { status: 400 }
      );
    }

    if (
      plansUpload instanceof File &&
      plansUpload.size > 0 &&
      !hasAllowedUploadExtension(plansUpload.name) &&
      !ALLOWED_UPLOAD_TYPES.has(plansUpload.type)
    ) {
      return NextResponse.json(
        { message: "Upload must be a PDF or ZIP file." },
        { status: 400 }
      );
    }

    const turnstileOk = await verifyTurnstile(turnstileToken || null, getClientIp(request));
    if (!turnstileOk) {
      return NextResponse.json({ message: "Security verification failed. Please try again." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.office365.com";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER || "renae@ashlaurconstruction.com";
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const destinationEmail = process.env.COMPANY_EMAIL || "renae@ashlaurconstruction.com";

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return NextResponse.json(
        { message: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [];

    if (plansUpload instanceof File && plansUpload.size > 0) {
      attachments.push({
        filename: sanitizeFilename(plansUpload.name),
        content: Buffer.from(await plansUpload.arrayBuffer()),
        contentType: plansUpload.type || "application/octet-stream",
      });
    }

    await transporter.sendMail({
      from: smtpFrom,
      to: destinationEmail,
      replyTo: email,
      subject: `Invite to Bid: ${company} - ${projectName}`,
      text: [
        "New Invite Us to Bid submission.",
        "",
        `Company: ${company}`,
        `Contact: ${contact}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Project Name: ${projectName}`,
        `Bid Date: ${bidDate}`,
        `Scope: ${scope}`,
        `Plans Link: ${plansLink || "Not provided"}`,
      ].join("\n"),
      attachments,
    });

    return NextResponse.json({ message: "Bid invite submitted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Invite to bid submission failed", error);
    return NextResponse.json(
      { message: "We could not submit your bid request. Please try again." },
      { status: 500 }
    );
  }
}
