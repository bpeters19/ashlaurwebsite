import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

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

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      projectType?: string;
      message?: string;
      turnstileToken?: string;
      companyWebsite?: string;
    };

    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const phone = String(payload.phone || "").trim();
    const projectType = String(payload.projectType || "").trim();
    const message = String(payload.message || "").trim();
    const honeypot = String(payload.companyWebsite || "").trim();

    if (honeypot) {
      return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
    }

    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const turnstileOk = await verifyTurnstile(payload.turnstileToken ?? null, getClientIp(request));
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

    await transporter.sendMail({
      from: smtpFrom,
      to: destinationEmail,
      replyTo: email,
      subject: `New Contact Form Submission: ${name}`,
      text: [
        "A new contact request was submitted.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Project Type: ${projectType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Thanks! Your message has been sent." }, { status: 200 });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      { message: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
