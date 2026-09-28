"use client";

import Script from "next/script";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const plausibleScriptSrc =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC ?? "https://plausible.io/js/script.js";

export default function PrivacyAnalytics() {
  if (!plausibleDomain) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={plausibleDomain}
      src={plausibleScriptSrc}
      strategy="afterInteractive"
    />
  );
}
