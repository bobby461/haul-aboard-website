"use client";

import Script from "next/script";

// Housecall Pro lead capture embed.
// The iframe is the form; the script (loaded from HCP's domain) listens
// for postMessage from the iframe and resizes its height to match the
// content. The id `hcp-lead-iframe` is what the script targets — keep it.
//
// Submissions land directly in the HCP "API Leads" / Job Inbox channel.
// The local /api/contact route is no longer wired up.

export function ContactForm() {
  return (
    <div className="hcp-embed">
      <iframe
        id="hcp-lead-iframe"
        title="Request a free junk removal estimate"
        src="https://book.housecallpro.com/lead-form/Junk-Away/cddff35091614a19a13a8f223838a136"
        style={{ border: "none", width: "100%", minHeight: 720, display: "block" }}
      />
      <Script
        src="https://online-booking.housecallpro.com/script.js?token=cddff35091614a19a13a8f223838a136&orgName=Junk-Away"
        strategy="afterInteractive"
      />
    </div>
  );
}
