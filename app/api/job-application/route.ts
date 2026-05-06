import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RETRY_AFTER_SECONDS = Math.ceil(RATE_LIMIT_WINDOW_MS / 1000);
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const rateLimitStore = new Map<string, number[]>();

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    if (!allowRequestForIp(clientIp)) {
      const response = NextResponse.json(
        { message: "Too many submissions. Please wait a minute and try again." },
        { status: 429 }
      );
      response.headers.set("Retry-After", String(RETRY_AFTER_SECONDS));
      return response;
    }

    const formData = await request.formData();

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honeypot = String(formData.get("companyWebsite") || "").trim();
    const resume = formData.get("resume");

    if (honeypot) {
      return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
    }

    if (!fullName || !email || !message) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ message: "Resume file is required." }, { status: 400 });
    }

    if (resume.size > MAX_RESUME_SIZE_BYTES) {
      return NextResponse.json({ message: "Resume file is too large (max 5MB)." }, { status: 400 });
    }

    if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
      return NextResponse.json({ message: "Unsupported resume file type." }, { status: 400 });
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

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const mainMailInfo = await transporter.sendMail({
      from: smtpFrom,
      to: destinationEmail,
      replyTo: email,
      subject: `New Job Application: ${fullName} - ${position}`,
      text: [
        "A new job application has been submitted.",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Position: ${position}`,
        "",
        "Applicant Message:",
        message,
      ].join("\n"),
      html: buildAdminEmailHtml({
        fullName,
        email,
        phone,
        position,
        message,
      }),
      attachments: [
        {
          filename: sanitizeFilename(resume.name) || "resume",
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    });

    const applicantReplyInfo = await transporter.sendMail({
      from: smtpFrom,
      to: email,
      subject: "We received your application",
      text: [
        `Hi ${fullName},`,
        "",
        "Thank you for applying to Ashlaur Construction.",
        "Our team will review your application and follow up soon.",
        "",
        "Best regards,",
        "Ashlaur Construction",
      ].join("\n"),
      html: buildApplicantEmailHtml(fullName),
    });

    console.log("Job application email sent", {
      to: destinationEmail,
      applicant: email,
      messageId: mainMailInfo.messageId,
      autoReplyMessageId: applicantReplyInfo.messageId,
      clientIp,
    });

    return NextResponse.json({ message: "Application submitted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Job application submission failed:", error);
    return NextResponse.json(
      { message: "We could not submit your application. Please try again shortly." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9._-]/g, "_");
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function allowRequestForIp(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const recentRequests = (rateLimitStore.get(ip) || []).filter((timestamp) => timestamp > cutoff);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    if (recentRequests.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      rateLimitStore.set(ip, recentRequests);
    }
    return false;
  }

  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);

  // Lightweight cleanup to avoid long-lived stale IP entries in memory.
  if (rateLimitStore.size > 5000) {
    for (const [storedIp, timestamps] of rateLimitStore.entries()) {
      const active = timestamps.filter((timestamp) => timestamp > cutoff);
      if (active.length === 0) {
        rateLimitStore.delete(storedIp);
      } else {
        rateLimitStore.set(storedIp, active);
      }
    }
  }

  return true;
}

function isValidEmail(value: string): boolean {
  if (value.length > 254) {
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  return emailPattern.test(value);
}

function buildAdminEmailHtml(input: {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}): string {
  const safeName = escapeHtml(input.fullName);
  const safeEmail = escapeHtml(input.email);
  const safePhone = escapeHtml(input.phone || "Not provided");
  const safePosition = escapeHtml(input.position || "Not provided");
  const safeMessage = escapeHtml(input.message).replace(/\n/g, "<br />");

  return `
    <div style="font-family: Arial, sans-serif; background: #f5f7fb; padding: 24px; color: #0f172a;">
      <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
        <div style="background: #0b3b78; color: #ffffff; padding: 20px 24px;">
          <h2 style="margin: 0; font-size: 22px;">New Job Application</h2>
          <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.95;">A new careers submission was received.</p>
        </div>
        <div style="padding: 22px 24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 170px; font-weight: 700;">Name</td>
              <td style="padding: 8px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; width: 170px; font-weight: 700;">Email</td>
              <td style="padding: 8px 0;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; width: 170px; font-weight: 700;">Phone</td>
              <td style="padding: 8px 0;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; width: 170px; font-weight: 700;">Position</td>
              <td style="padding: 8px 0;">${safePosition}</td>
            </tr>
          </table>
          <div style="margin-top: 18px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px; font-weight: 700;">Applicant Message</p>
            <p style="margin: 0; line-height: 1.6; color: #334155;">${safeMessage}</p>
          </div>
          <p style="margin: 16px 0 0; font-size: 12px; color: #64748b;">Resume is attached to this email.</p>
        </div>
      </div>
    </div>
  `;
}

function buildApplicantEmailHtml(fullName: string): string {
  const safeName = escapeHtml(fullName);

  return `
    <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 24px; color: #0f172a;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 22px 24px;">
        <h2 style="margin: 0 0 12px; color: #0b3b78;">We received your application</h2>
        <p style="margin: 0 0 12px;">Hi ${safeName},</p>
        <p style="margin: 0 0 12px; line-height: 1.6; color: #334155;">
          Thank you for applying to Ashlaur Construction. Our team will review your application and follow up with you soon.
        </p>
        <p style="margin: 0;">Best regards,<br />Ashlaur Construction</p>
      </div>
    </div>
  `;
}
