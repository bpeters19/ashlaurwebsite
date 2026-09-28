"use client";

import { useEffect, useRef } from "react";

type TurnstileRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
};

export default function TurnstileWidget({ onTokenChange }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;

    const tryRender = () => {
      if (!containerRef.current) {
        return;
      }

      if (!window.turnstile || widgetIdRef.current) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onTokenChange(token),
        "expired-callback": () => onTokenChange(""),
        "error-callback": () => onTokenChange(""),
        theme: "light",
      });
    };

    const interval = window.setInterval(() => {
      attempts += 1;
      tryRender();

      if (widgetIdRef.current || attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, 250);

    tryRender();

    return () => {
      window.clearInterval(interval);

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onTokenChange, siteKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-md p-3">
        Turnstile is not configured.
        {/* TODO(env): Set NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable Cloudflare Turnstile in production. */}
      </p>
    );
  }

  return <div ref={containerRef} className="min-h-[65px]" />;
}
