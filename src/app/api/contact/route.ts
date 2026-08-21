import { NextRequest, NextResponse } from "next/server";
import { business } from "@/lib/content";

// ============================================================
// CONTACT FORM API ROUTE
// ============================================================
// Submissions POST here from the /contact form. We:
//   1. Validate every field server-side (length, format, type)
//   2. Sanitize HTML/script tags out of free-text fields
//   3. Reject if the honeypot field is filled (silent bot defeat)
//   4. Rate-limit to 5 submissions per IP per hour
//   5. Email the lead to CONTACT_TO (default: business.email) via Resend
//   6. POST to a Google Sheets webhook if SHEETS_WEBHOOK_URL is set
//   7. Always log to server console as a final fallback
//
// DELIVERY IS NOT OPTIONAL. If Resend isn't configured, or the send
// fails, this route returns an ERROR so the form tells the customer to
// phone instead. It used to return success in that case, which meant a
// real lead could vanish while the customer was told "we got it" —
// the worst possible outcome for a business that runs on inbound calls.
//
// Env vars:
//   RESEND_API_KEY  required for delivery
//   RESEND_FROM     optional; defaults to Resend's shared onboarding
//                   sender so this works before the domain is verified.
//                   Set to "Haul Aboard <forms@haulaboardjunk.com>"
//                   once haulaboardjunk.com is verified in Resend.
//   CONTACT_TO      optional; defaults to business.email

export const runtime = "nodejs";

// --- Tiny in-memory rate limiter (per server instance).
// For production with multiple Vercel regions, swap to
// @upstash/ratelimit — see HOW-TO-EDIT.md.
const RATE_BUCKET = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // submissions
const RATE_WINDOW_MS = 60 * 60 * 1000; // per hour

function checkRate(ip: string): { ok: boolean; retryInSec: number } {
  const now = Date.now();
  const entry = RATE_BUCKET.get(ip);
  if (!entry || entry.resetAt < now) {
    RATE_BUCKET.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true, retryInSec: 0 };
  }
  if (entry.count >= RATE_LIMIT) {
    return { ok: false, retryInSec: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count++;
  return { ok: true, retryInSec: 0 };
}

// Strip HTML/script tags and dangerous chars from free-text fields.
function sanitize(input: unknown, max = 1000): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "") // strip tags
    .replace(/javascript:/gi, "") // strip protocol shenanigans
    .replace(/[\x00-\x1F\x7F]/g, "") // strip control chars
    .trim()
    .slice(0, max);
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}
function isValidUSPhone(s: string): boolean {
  const digits = s.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rate = checkRate(ip);
    if (!rate.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Too many submissions. Try again in ${Math.ceil(rate.retryInSec / 60)} min, or call ${business.phone}.`,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: real users won't fill the `website` field.
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      // Pretend it succeeded — bots get no signal that we caught them.
      return NextResponse.json({ ok: true });
    }

    const name = sanitize(body.name, 120);
    const phone = sanitize(body.phone, 30);
    const email = sanitize(body.email, 200);
    const address = sanitize(body.address, 200);
    const service = sanitize(body.service, 80);
    const description = sanitize(body.description, 2000);

    if (name.length < 2)
      return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
    if (!isValidUSPhone(phone))
      return NextResponse.json({ ok: false, error: "Please enter a valid US phone number." }, { status: 400 });
    if (!isValidEmail(email))
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    if (description.length < 5)
      return NextResponse.json({ ok: false, error: "Please describe what needs to go." }, { status: 400 });

    const submittedAt = new Date().toISOString();
    const lead = { name, phone, email, address, service, description, submittedAt, ip };

    // ---------- Email via Resend ----------
    const resendKey = process.env.RESEND_API_KEY;
    // Resend's shared sender works with no DNS setup, so the form is
    // functional the moment a key exists. Swap via RESEND_FROM once the
    // domain is verified.
    const from = process.env.RESEND_FROM || "Haul Aboard <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO || business.email;
    let delivered = false;
    // Why a send failed, as a short non-secret code returned to the caller.
    // Never contains the key or any customer data — just enough to tell
    // "no key configured" apart from "Resend rejected us, here's the status".
    let failCode = "no_api_key";
    if (resendKey) {
      try {
        const subject = `New estimate request: ${service || "Junk Removal"} — ${name}`;
        const html = `
          <div style="font-family:Arial,sans-serif;line-height:1.5;max-width:560px;">
            <h2 style="color:#ff6a1a;margin:0 0 16px;">New Haul Aboard Lead</h2>
            <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 8px;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
            <p style="margin:0 0 8px;"><strong>Address / Zip:</strong> ${address || "(not provided)"}</p>
            <p style="margin:0 0 8px;"><strong>Service:</strong> ${service || "(not specified)"}</p>
            <p style="margin:16px 0 8px;"><strong>Description:</strong></p>
            <p style="margin:0 0 16px;white-space:pre-wrap;">${description}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
            <p style="margin:0;color:#666;font-size:12px;">Submitted ${submittedAt}</p>
          </div>
        `;
        const r = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to,
            reply_to: email,
            subject,
            html,
          }),
        });
        if (r.ok) {
          delivered = true;
        } else {
          const errText = await r.text();
          failCode = `resend_${r.status}`;
          console.error("[contact] Resend error:", r.status, errText);
        }
      } catch (e) {
        failCode = "resend_exception";
        console.error("[contact] Resend exception:", e);
      }
    } else {
      console.error("[contact] RESEND_API_KEY not set — cannot deliver lead.");
    }

    // ---------- Backup log to Google Sheets webhook (optional) ----------
    const sheetsUrl = process.env.SHEETS_WEBHOOK_URL;
    let sheetsOk = false;
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
        sheetsOk = true;
      } catch (e) {
        console.error("[contact] Sheets webhook error:", e);
      }
    }

    // ---------- Final fallback: server log so leads never vanish ----------
    console.log("[contact] LEAD:", JSON.stringify(lead));

    // Delivered nowhere we can trust? Say so, and push them to the phone.
    // A lead the owner never sees is worse than a visible failure.
    if (!delivered && !sheetsOk) {
      return NextResponse.json(
        {
          ok: false,
          error: `We couldn't send that just now — please call us at ${business.phone} and we'll take care of you.`,
          code: failCode,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Unexpected error:", e);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or call us." },
      { status: 500 }
    );
  }
}
