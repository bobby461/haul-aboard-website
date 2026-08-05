# SECURITY.md — Haul Aboard Junk Removal

Security posture, protections in place, and incident response steps for `haulaboardjunk.com`.

**Report security issues to**: info@haulaboardjunk.com

---

## TL;DR

This is a static marketing site on Vercel with one form endpoint. The attack surface is intentionally minimal:

- **No database** — content is TypeScript files and markdown checked into git
- **No admin panel, no login system, no user accounts, no session cookies**
- **No file uploads** that persist (the contact form's file-upload plumbing exists but is currently disabled — re-enabling requires explicit re-deploy)
- **One form endpoint** at `/api/contact`, the only place that accepts user input

The thing that's most exposed is the contact form. Everything below describes how it's locked down.

---

## What's in place

### Form security

1. **Server-side validation** of every field (name length 2–120, US phone format, email regex, description 5–2000 chars). Client-side validation is treated as advisory only.
2. **Input sanitization** — strips HTML tags, `javascript:` protocol prefixes, control characters before any field is logged or emailed.
3. **Honeypot field** (`name="website"`, off-screen, `tabIndex="-1"`) — bots fill it; the API silently returns success without forwarding the lead. Real users don't see it.
4. **Rate limiting** — 5 submissions per IP per hour, in-memory bucket with hourly reset. Returns 429 with friendly retry message.
5. **No file uploads currently** — the brief mentions photo upload as optional. The form UI doesn't include the input, and the API doesn't accept multipart bodies.

### HTTP security headers (set in `next.config.mjs`)

| Header | Value | Why |
|---|---|---|
| `Content-Security-Policy` | strict allowlist of script/style/img/connect/frame sources | Defense against XSS, data exfiltration, frame injection |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Forces HTTPS, prevents downgrade attacks |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME sniffing |
| `X-Frame-Options` | `SAMEORIGIN` | Prevents clickjacking via iframes |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits Referer leakage |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Locks down sensitive browser APIs |

CSP allowlist (production):

- **`script-src`**: self, Elfsight (reviews), Google Tag Manager (GA4), Cloudflare Turnstile (when enabled). Inline scripts allowed for hydration; **`unsafe-eval` is added only in development** for React's debug runtime — production stays strict.
- **`style-src`**: self, Google Fonts, Elfsight.
- **`img-src`**: self, data:, blob:, all https — broad to allow review profile photos from googleusercontent.com without enumerating subdomains.
- **`connect-src`**: self, Elfsight, Resend API, Google Analytics, Google APIs.
- **`frame-src`**: self, Elfsight (for review iframes), Google Maps, Cloudflare Turnstile.

### XSS prevention

- React's default JSX escaping handles output by default
- `dangerouslySetInnerHTML` is used in exactly two places: the JSON-LD schema scripts (programmatically generated, deeply quoted) and the blog post body (markdown is author-controlled — only the site owner writes markdown, no user-submitted content reaches the renderer). The markdown renderer is `marked` with HTML disabled.
- The contact form sanitizes inputs server-side before any field is used.
- Test: submit `<script>alert(1)</script>` as the form's name field — the server strips the tags before logging or emailing.

### Secret management

- All API keys in `.env.local` (gitignored) for local dev, in Vercel **Environment Variables** for production.
- `.env.local.example` lists every required var with inline comments.
- Required env vars:
  - `RESEND_API_KEY` (server-only)
  - `SHEETS_WEBHOOK_URL` (server-only, optional)
  - `NEXT_PUBLIC_GA_ID` (public, fine to expose)
  - `NEXT_PUBLIC_GSC_VERIFICATION` (public, fine to expose)
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (public if added)
  - `TURNSTILE_SECRET_KEY` (server-only if added)
- API keys are **never logged**, never returned in API responses, never exposed to client-side code.
- Production builds are scanned for `RESEND_API_KEY` / `re_...` strings before deployment as part of the audit process.

### Dependency security

- `npm run audit` (which is `npm audit --audit-level=high`) gates the build.
- Dependencies are **pinned to exact versions** for security-sensitive packages (next, react, postcss).
- Run monthly: `npm audit` to check, `npm audit fix` to remediate.
- Vercel preview deployments noindex preview URLs (via `robots.ts`) so leaked builds aren't indexed.

### SQL injection

**N/A** — this site has no database, no SQL, no ORM, no DB driver. All content is TypeScript modules + markdown files. If a database is ever added (e.g., for a customer login or admin panel), the team adding it must:

- Use a parameterized-query ORM (Prisma, Drizzle) — never string concatenation
- Add the database connection string to `.env.local` and Vercel as a server-only env var
- Re-run the security audit and update this document

### Vercel / deployment security

- HTTPS forced (Vercel handles automatically)
- Preview deployments are `noindex` (see `src/app/robots.ts`)
- Production deployment uses the custom domain only — `*.vercel.app` URLs aren't promoted
- Environment variables scoped: production secrets only available in production, not preview, not development

### Third-party scripts

- **Elfsight** (reviews widget): plain `<script async>` in `<head>`. Documented in HOW-TO-EDIT.md → "Disable the Elfsight reviews widget" if it's ever compromised.
- **Google Analytics 4**: loaded via official `@next/third-parties/google` package, only when `NEXT_PUBLIC_GA_ID` is set.
- No other third-party scripts.

---

## Incident response

### "I think the Resend API key was leaked"

1. Resend dashboard → API Keys → **revoke the leaked key** immediately
2. Generate a new key
3. Update `RESEND_API_KEY` in Vercel → **Environment Variables** with the new value
4. **Redeploy** (Vercel → latest deployment → Redeploy menu)
5. Audit Resend logs for unexpected sends, contact Resend support if any

The form continues to validate and accept submissions throughout — it gracefully no-ops the email send when the key is invalid.

### "I'm getting form spam"

1. Confirm rate limit is working: try submitting 6 times rapidly from one IP — 6th should 429
2. Confirm honeypot is working: submit with browser dev tools after filling the hidden `website` field — should silently "succeed" but no email arrives
3. Enable Cloudflare Turnstile (HOW-TO-EDIT.md → "Enable Cloudflare Turnstile") — invisible CAPTCHA
4. If still being abused, narrow the rate limit (edit `RATE_LIMIT` in `src/app/api/contact/route.ts`) and redeploy

### "Elfsight reviews widget is showing fake / spam reviews"

This shouldn't be possible — the widget pulls reviews from your verified Google Business Profile. But if the Elfsight account itself is compromised:

1. In your Elfsight dashboard, change password + enable 2FA
2. Disable the script: edit `src/app/layout.tsx`, comment out the `<script src="https://elfsightcdn.com/platform.js" async />` line, push. The fallback ("See every review on Google →") takes over.
3. Investigate Elfsight account activity, contact their support if compromise confirmed

### "A high-severity npm vulnerability dropped"

1. `npm audit` to see what's affected
2. `npm audit fix` for non-breaking fixes
3. `npm audit fix --force` for breaking changes (test locally with `npm run dev` and `npm run build` before pushing)
4. Push, Vercel redeploys
5. If a critical vuln has no patch yet and the affected package is essential, document the risk in this file and revisit weekly until patched

---

## Dependency update schedule

- **Monthly**: run `npm audit`. Patch high + critical findings same day. Defer moderate findings unless they're trivially fixable.
- **Quarterly**: run `npm outdated` and consider minor + patch upgrades. Major upgrades only when there's a reason (security or feature).
- **On every breaking advisory**: see incident response above.

---

## Audit results

The 10-point post-build security audit results are in [SECURITY-AUDIT.md](./SECURITY-AUDIT.md).

---

## Reporting a vulnerability

Email **info@haulaboardjunk.com** with subject "Security:" and a description. Please don't open public GitHub issues for security-sensitive findings.

We'll acknowledge within 3 business days.
