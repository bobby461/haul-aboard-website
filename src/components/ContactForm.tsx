"use client";

import { useState } from "react";
import { business, contactPage, services } from "@/lib/content";

// Haul Aboard's own lead form. Posts to /api/contact, which validates
// server-side and emails the lead to business.email.
//
// This REPLACED a Housecall Pro iframe embed that pointed at
// book.housecallpro.com/lead-form/Junk-Away/... — i.e. every estimate
// request submitted here landed in Junk Away Delaware's CRM, not Haul
// Aboard's. Haul Aboard has no CRM yet; until it does, leads go to
// info@haulaboardjunk.com by email. Do not re-add a booking embed here
// without checking whose account the token belongs to.

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const f = contactPage.form;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(json.error || contactPage.errorBody);
      }
    } catch {
      setStatus("error");
      setError(contactPage.errorBody);
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <h2>{contactPage.successHeading}</h2>
        <p>{contactPage.successBody}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label className="form-field">
          <span>{f.nameLabel}</span>
          <input name="name" type="text" autoComplete="name" required maxLength={120} />
        </label>
        <label className="form-field">
          <span>{f.phoneLabel}</span>
          <input name="phone" type="tel" autoComplete="tel" required maxLength={30} />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>{f.emailLabel}</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
        <label className="form-field">
          <span>{f.addressLabel}</span>
          <input name="address" type="text" autoComplete="street-address" maxLength={200} />
        </label>
      </div>

      <label className="form-field">
        <span>{f.serviceLabel}</span>
        <select name="service" defaultValue="">
          <option value="" disabled>
            {f.servicePlaceholder}
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>

      <label className="form-field">
        <span>{f.descriptionLabel}</span>
        <textarea
          name="description"
          rows={5}
          required
          maxLength={2000}
          placeholder={f.descriptionPlaceholder}
        />
      </label>

      {/* Honeypot — hidden from people, irresistible to bots. The API
          silently accepts and discards anything that fills this in. */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          opacity: 0,
        }}
      />

      {status === "error" && (
        <p className="form-error" role="alert">
          {error}{" "}
          <a href={`tel:${business.phoneRaw}`}>{business.phone}</a>
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? f.submittingLabel : f.submitLabel}
      </button>
    </form>
  );
}
